import { sql } from '@vercel/postgres';

export async function createTables() {
  try {
    // Create users table
    await sql`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        discord_username VARCHAR(100),
        role VARCHAR(20) DEFAULT 'player',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // Create user_sessions table for JWT tokens
    await sql`
      CREATE TABLE IF NOT EXISTS user_sessions (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        token_hash VARCHAR(255) NOT NULL,
        expires_at TIMESTAMP NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // Create characters table for GTA RP character data
    await sql`
      CREATE TABLE IF NOT EXISTS characters (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        character_name VARCHAR(50) NOT NULL,
        level INTEGER DEFAULT 1,
        job VARCHAR(50) DEFAULT 'Unemployed',
        bank_balance DECIMAL(15,2) DEFAULT 0.00,
        playtime_hours INTEGER DEFAULT 0,
        licenses JSONB DEFAULT '{}',
        skills JSONB DEFAULT '{}',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    console.log('Database tables created successfully');
  } catch (error) {
    console.error('Error creating tables:', error);
    throw error;
  }
}

export async function getUserById(id) {
  try {
    const result = await sql`
      SELECT id, username, email, discord_username, role, created_at
      FROM users WHERE id = ${id}
    `;
    return result.rows[0];
  } catch (error) {
    console.error('Error getting user by ID:', error);
    throw error;
  }
}

export async function getUserByEmail(email) {
  try {
    const result = await sql`
      SELECT * FROM users WHERE email = ${email}
    `;
    return result.rows[0];
  } catch (error) {
    console.error('Error getting user by email:', error);
    throw error;
  }
}

export async function createUser(userData) {
  try {
    const { username, email, passwordHash, discordUsername } = userData;
    const result = await sql`
      INSERT INTO users (username, email, password_hash, discord_username)
      VALUES (${username}, ${email}, ${passwordHash}, ${discordUsername})
      RETURNING id, username, email, discord_username, role, created_at
    `;
    return result.rows[0];
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}

export async function createCharacter(userId, characterData) {
  try {
    const { characterName } = characterData;
    const result = await sql`
      INSERT INTO characters (user_id, character_name)
      VALUES (${userId}, ${characterName})
      RETURNING *
    `;
    return result.rows[0];
  } catch (error) {
    console.error('Error creating character:', error);
    throw error;
  }
}

export async function getCharacterByUserId(userId) {
  try {
    const result = await sql`
      SELECT * FROM characters WHERE user_id = ${userId}
    `;
    return result.rows[0];
  } catch (error) {
    console.error('Error getting character:', error);
    throw error;
  }
}

export async function updateCharacter(userId, updates) {
  try {
    const setClause = Object.keys(updates)
      .map(key => `${key} = ${updates[key]}`)
      .join(', ');
    
    const result = await sql`
      UPDATE characters 
      SET ${sql.unsafe(setClause)}, updated_at = CURRENT_TIMESTAMP
      WHERE user_id = ${userId}
      RETURNING *
    `;
    return result.rows[0];
  } catch (error) {
    console.error('Error updating character:', error);
    throw error;
  }
} 