import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { sql } from '@vercel/postgres';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

export async function hashPassword(password) {
  const saltRounds = 12;
  return await bcrypt.hash(password, saltRounds);
}

export async function comparePassword(password, hashedPassword) {
  return await bcrypt.compare(password, hashedPassword);
}

export function generateToken(userId) {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '7d' });
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
}

export async function createSession(userId, token) {
  try {
    const tokenHash = await hashPassword(token);
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

    await sql`
      INSERT INTO user_sessions (user_id, token_hash, expires_at)
      VALUES (${userId}, ${tokenHash}, ${expiresAt})
    `;
  } catch (error) {
    console.error('Error creating session:', error);
    throw error;
  }
}

export async function validateSession(token) {
  try {
    const decoded = verifyToken(token);
    if (!decoded) return null;

    const result = await sql`
      SELECT us.*, u.username, u.email, u.role
      FROM user_sessions us
      JOIN users u ON us.user_id = u.id
      WHERE us.user_id = ${decoded.userId}
      AND us.expires_at > CURRENT_TIMESTAMP
      ORDER BY us.created_at DESC
      LIMIT 1
    `;

    if (result.rows.length === 0) return null;

    const session = result.rows[0];
    const isValidToken = await comparePassword(token, session.token_hash);
    
    return isValidToken ? {
      userId: session.user_id,
      username: session.username,
      email: session.email,
      role: session.role
    } : null;
  } catch (error) {
    console.error('Error validating session:', error);
    return null;
  }
}

export async function clearSession(token) {
  try {
    const decoded = verifyToken(token);
    if (!decoded) return;

    await sql`
      DELETE FROM user_sessions 
      WHERE user_id = ${decoded.userId}
    `;
  } catch (error) {
    console.error('Error clearing session:', error);
  }
}

export function getAuthTokenFromRequest(req) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }
  return authHeader.substring(7);
} 