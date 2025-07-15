import { NextResponse } from 'next/server';
import { validateSession, getAuthTokenFromRequest } from '@/lib/auth';
import { getCharacterByUserId } from '@/lib/db';

export async function GET(request) {
  try {
    const token = getAuthTokenFromRequest(request);
    
    if (!token) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const user = await validateSession(token);
    
    if (!user) {
      return NextResponse.json(
        { error: 'Invalid or expired session' },
        { status: 401 }
      );
    }

    // Get character data
    const character = await getCharacterByUserId(user.userId);

    return NextResponse.json({
      user: {
        id: user.userId,
        username: user.username,
        email: user.email,
        role: user.role
      },
      character: character ? {
        id: character.id,
        characterName: character.character_name,
        level: character.level,
        job: character.job,
        bankBalance: character.bank_balance,
        playtimeHours: character.playtime_hours,
        licenses: character.licenses,
        skills: character.skills
      } : null
    });

  } catch (error) {
    console.error('Get user error:', error);
    return NextResponse.json(
      { error: 'Failed to get user data' },
      { status: 500 }
    );
  }
} 