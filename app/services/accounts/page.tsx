'use client'

import Link from "next/link"
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { ArrowRight, CheckCircle } from 'lucide-react'

interface Account {
  AccountID: number
  CustomerID: number
  BranchID: number
  AccountType: string
  Balance: number | string
  OpenDate: string
  Status: string
}

export default function AccountsPage() {
  const [accounts, setAccounts] = useState<Account[]>([])

  useEffect(() => {
    fetch('/api/accounts')
      .then(res => res.json())
      .then(data => setAccounts(data))
      .catch(err => console.error('Fetch error:', err))
  }, [])

  return (
    <div className="container py-12 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Account Services
          </h1>
          <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Choose from our range of account options designed to meet your financial needs.
          </p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
        {accounts.map(acc => (
          <Card key={acc.AccountID} className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle>{acc.AccountType} Account</CardTitle>
              <CardDescription className="text-gray-400">
                Balance: ₹{Number(acc.Balance).toFixed(2)}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                  {acc.Status}
                </span>
                <p className="text-sm text-gray-400">Opened: {new Date(acc.OpenDate).toLocaleDateString()}</p>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">Branch ID: {acc.BranchID}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">Customer ID: {acc.CustomerID}</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                asChild
              >
                <Link href="/register">
                  Open Account
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Account Comparison</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Compare our account options to find the one that best suits your needs.
          </p>
        </div>

        <div className="overflow-x-auto">
          <Table className="border border-gray-800">
            <TableHeader>
              <TableRow className="bg-gray-900">
                <TableHead className="w-[200px]">Features</TableHead>
                <TableHead>Savings</TableHead>
                <TableHead>Current</TableHead>
                <TableHead>Fixed Deposit</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Minimum Balance</TableCell>
                <TableCell>₹1,000</TableCell>
                <TableCell>₹10,000</TableCell>
                <TableCell>₹5,000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Interest Rate</TableCell>
                <TableCell>4.5% p.a.</TableCell>
                <TableCell>0%</TableCell>
                <TableCell>7.5% p.a.</TableCell>
              </TableRow>
              {/* Add more comparison rows as needed */}
            </TableBody>
          </Table>
        </div>

        <div className="flex justify-center mt-8">
          <Button
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            size="lg"
            asChild
          >
            <Link href="/register">
              Register Customer
n              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}