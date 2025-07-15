import { NextResponse } from 'next/server';
import { createTables } from '@/lib/db';

export async function POST(request) {
  try {
    // Allow initialization without authentication for now
    // In production, you should set INIT_DB_SECRET and use proper auth
    await createTables();

    return NextResponse.json({ 
      message: 'Database tables created successfully' 
    });

  } catch (error) {
    console.error('Database initialization error:', error);
    return NextResponse.json(
      { error: 'Failed to initialize database' },
      { status: 500 }
    );
  }
} 