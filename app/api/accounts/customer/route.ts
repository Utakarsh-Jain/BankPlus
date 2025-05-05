import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(request: Request) {
  const data = await request.json()
  const { Name, Email, Phone, DOB, Address, City, State, PINCode, Aadhar_PAN, AccountType, PreferredBranch } = data
  try {
    const sql = `INSERT INTO Customers (Name, DOB, Address, Phone, Email, Aadhar_PAN) VALUES (?, ?, ?, ?, ?, ?)`
    await db.query(sql, [Name, DOB, Address, Phone, Email, Aadhar_PAN])
    // Then create Account entry
    const accountSql = `INSERT INTO Accounts (CustomerID, BranchID, AccountType, Balance, OpenDate, Status) VALUES (LAST_INSERT_ID(), ?, ?, 0.00, CURDATE(), 'Active')`
    await db.query(accountSql, [PreferredBranch, AccountType])
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Registration failed' }, { status: 500 })
  }
}