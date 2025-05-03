import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function AccountsPage() {
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
        {/* Savings Account */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle>Savings Account</CardTitle>
            <CardDescription className="text-gray-400">
              Perfect for individuals looking to save and grow their money
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                4.5%
              </span>
              <p className="text-sm text-gray-400">Interest Rate</p>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">Minimum balance: ₹1,000</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">Free online and mobile banking</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">Free debit card with wide ATM network</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">Monthly interest payouts</span>
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

        {/* Current Account */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle>Current Account</CardTitle>
            <CardDescription className="text-gray-400">
              Ideal for businesses and self-employed professionals
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                Business
              </span>
              <p className="text-sm text-gray-400">Focused Solutions</p>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">Minimum balance: ₹10,000</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">Free NEFT/RTGS/IMPS transactions</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">Cheque book facility</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">Overdraft facility available</span>
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

        {/* Fixed Deposit */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle>Fixed Deposit</CardTitle>
            <CardDescription className="text-gray-400">Secure investment with guaranteed returns</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                7.5%
              </span>
              <p className="text-sm text-gray-400">Interest Rate (up to)</p>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">Minimum deposit: ₹5,000</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">Flexible tenure options (7 days to 10 years)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">Loan facility against FD</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">Auto-renewal option</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              asChild
            >
              <Link href="/register">
                Open Deposit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
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
                <TableHead>Savings Account</TableHead>
                <TableHead>Current Account</TableHead>
                <TableHead>Fixed Deposit</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Minimum Balance</TableCell>
                <TableCell>₹1,000</TableCell>
                <TableCell>₹10,000</TableCell>
                <TableCell>₹5,000 (deposit)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Interest Rate</TableCell>
                <TableCell>4.5% p.a.</TableCell>
                <TableCell>No interest</TableCell>
                <TableCell>Up to 7.5% p.a.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Debit Card</TableCell>
                <TableCell>Free</TableCell>
                <TableCell>Free (Business)</TableCell>
                <TableCell>Not applicable</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Cheque Book</TableCell>
                <TableCell>First 20 leaves free</TableCell>
                <TableCell>First 50 leaves free</TableCell>
                <TableCell>Not applicable</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Online Banking</TableCell>
                <TableCell>Free</TableCell>
                <TableCell>Free</TableCell>
                <TableCell>View only</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Ideal For</TableCell>
                <TableCell>Individuals, Families</TableCell>
                <TableCell>Businesses, Professionals</TableCell>
                <TableCell>Investment, Savings</TableCell>
              </TableRow>
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
              Open an Account Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
