import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    const [rows] = await db.query('SELECT * FROM accounts')
    return NextResponse.json(rows)
  } catch (error) {
    console.error('DB Error:', error)
    return NextResponse.json({ error: 'Failed to fetch accounts' }, { status: 500 })
  }
}