import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowRight, CheckCircle, Home, Car, GraduationCap, User } from "lucide-react"

export default function LoansPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Loan Services
          </h1>
          <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Flexible loan options with competitive interest rates to meet your financial needs.
          </p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 mb-16">
        {/* Home Loan */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                <Home className="h-5 w-5 text-purple-600 dark:text-purple-300" />
              </div>
              <CardTitle>Home Loan</CardTitle>
            </div>
            <CardDescription className="text-gray-400">
              Make your dream home a reality with our affordable home loans
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center border-b border-gray-800 pb-2">
              <span className="text-sm text-gray-400">Interest Rate</span>
              <span className="font-semibold text-white">8.5% p.a.</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-800 pb-2">
              <span className="text-sm text-gray-400">Loan Amount</span>
              <span className="font-semibold text-white">Up to ₹5 Crore</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-800 pb-2">
              <span className="text-sm text-gray-400">Tenure</span>
              <span className="font-semibold text-white">Up to 30 years</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-800 pb-2">
              <span className="text-sm text-gray-400">Processing Fee</span>
              <span className="font-semibold text-white">0.5% of loan amount</span>
            </div>
            <ul className="space-y-2 pt-2">
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">Quick approval process</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">Flexible repayment options</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">No prepayment penalties</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              asChild
            >
              <Link href="/services/loans/apply">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Personal Loan */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                <User className="h-5 w-5 text-blue-600 dark:text-blue-300" />
              </div>
              <CardTitle>Personal Loan</CardTitle>
            </div>
            <CardDescription className="text-gray-400">
              Quick funds for your personal needs with minimal documentation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center border-b border-gray-800 pb-2">
              <span className="text-sm text-gray-400">Interest Rate</span>
              <span className="font-semibold text-white">12.0% p.a.</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-800 pb-2">
              <span className="text-sm text-gray-400">Loan Amount</span>
              <span className="font-semibold text-white">Up to ₹25 Lakh</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-800 pb-2">
              <span className="text-sm text-gray-400">Tenure</span>
              <span className="font-semibold text-white">Up to 5 years</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-800 pb-2">
              <span className="text-sm text-gray-400">Processing Fee</span>
              <span className="font-semibold text-white">1% of loan amount</span>
            </div>
            <ul className="space-y-2 pt-2">
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">Instant approval</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">Minimal documentation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">No collateral required</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              asChild
            >
              <Link href="/services/loans/apply">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Car Loan */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                <Car className="h-5 w-5 text-purple-600 dark:text-purple-300" />
              </div>
              <CardTitle>Car Loan</CardTitle>
            </div>
            <CardDescription className="text-gray-400">
              Drive your dream car with our affordable car loans
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center border-b border-gray-800 pb-2">
              <span className="text-sm text-gray-400">Interest Rate</span>
              <span className="font-semibold text-white">9.0% p.a.</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-800 pb-2">
              <span className="text-sm text-gray-400">Loan Amount</span>
              <span className="font-semibold text-white">Up to ₹1 Crore</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-800 pb-2">
              <span className="text-sm text-gray-400">Tenure</span>
              <span className="font-semibold text-white">Up to 7 years</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-800 pb-2">
              <span className="text-sm text-gray-400">Processing Fee</span>
              <span className="font-semibold text-white">0.5% of loan amount</span>
            </div>
            <ul className="space-y-2 pt-2">
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">Quick approval process</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">Competitive interest rates</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">Flexible repayment options</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              asChild
            >
              <Link href="/services/loans/apply">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Education Loan */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                <GraduationCap className="h-5 w-5 text-blue-600 dark:text-blue-300" />
              </div>
              <CardTitle>Education Loan</CardTitle>
            </div>
            <CardDescription className="text-gray-400">Invest in your future with our education loans</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center border-b border-gray-800 pb-2">
              <span className="text-sm text-gray-400">Interest Rate</span>
              <span className="font-semibold text-white">10.5% p.a.</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-800 pb-2">
              <span className="text-sm text-gray-400">Loan Amount</span>
              <span className="font-semibold text-white">Up to ₹50 Lakh</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-800 pb-2">
              <span className="text-sm text-gray-400">Tenure</span>
              <span className="font-semibold text-white">Up to 15 years</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-800 pb-2">
              <span className="text-sm text-gray-400">Processing Fee</span>
              <span className="font-semibold text-white">0.5% of loan amount</span>
            </div>
            <ul className="space-y-2 pt-2">
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">Moratorium period during study</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">Tax benefits under Section 80E</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">Covers tuition fees and living expenses</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              asChild
            >
              <Link href="/services/loans/apply">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Loan Comparison</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Compare our loan options to find the one that best suits your needs.
          </p>
        </div>

        <div className="overflow-x-auto">
          <Table className="border border-gray-800">
            <TableHeader>
              <TableRow className="bg-gray-900">
                <TableHead className="w-[200px]">Features</TableHead>
                <TableHead>Home Loan</TableHead>
                <TableHead>Personal Loan</TableHead>
                <TableHead>Car Loan</TableHead>
                <TableHead>Education Loan</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Interest Rate</TableCell>
                <TableCell>8.5% p.a.</TableCell>
                <TableCell>12.0% p.a.</TableCell>
                <TableCell>9.0% p.a.</TableCell>
                <TableCell>10.5% p.a.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Maximum Amount</TableCell>
                <TableCell>₹5 Crore</TableCell>
                <TableCell>₹25 Lakh</TableCell>
                <TableCell>₹1 Crore</TableCell>
                <TableCell>₹50 Lakh</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Maximum Tenure</TableCell>
                <TableCell>30 years</TableCell>
                <TableCell>5 years</TableCell>
                <TableCell>7 years</TableCell>
                <TableCell>15 years</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Processing Fee</TableCell>
                <TableCell>0.5%</TableCell>
                <TableCell>1%</TableCell>
                <TableCell>0.5%</TableCell>
                <TableCell>0.5%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Collateral Required</TableCell>
                <TableCell>Yes</TableCell>
                <TableCell>No</TableCell>
                <TableCell>Yes</TableCell>
                <TableCell>Varies</TableCell>
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
            <Link href="/services/loans/apply">
              Apply for a Loan Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
