import { NextResponse } from 'next/server';
import { clearSession, getAuthTokenFromRequest } from '@/lib/auth';

export async function POST(request) {
  try {
    const token = getAuthTokenFromRequest(request);
    
    if (token) {
      await clearSession(token);
    }

    return NextResponse.json({ message: 'Logged out successfully' });

  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { error: 'Logout failed. Please try again.' },
      { status: 500 }
    );
  }
} 