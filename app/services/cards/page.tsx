import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowRight, CreditCard, Shield, Gift, Percent } from "lucide-react"

export default function CardsPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Card Services
          </h1>
          <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Secure and convenient payment solutions for all your needs.
          </p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 mb-16">
        {/* Debit Card */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                <CreditCard className="h-5 w-5 text-purple-600 dark:text-purple-300" />
              </div>
              <CardTitle>Debit Card</CardTitle>
            </div>
            <CardDescription className="text-gray-400">
              Access your funds anytime, anywhere with our secure debit cards
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative h-48 w-full overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 p-6">
              <div className="absolute top-6 left-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                  <CreditCard className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-mono text-lg text-white">**** **** **** 1234</p>
                <div className="mt-2 flex justify-between">
                  <p className="text-xs text-white/70">VALID THRU: 12/28</p>
                  <p className="text-xs text-white/70">JOHN DOE</p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Features:</h3>
              <ul className="space-y-1">
                <li className="flex items-start">
                  <Shield className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">Secure chip and PIN technology</span>
                </li>
                <li className="flex items-start">
                  <Shield className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">Contactless payment option</span>
                </li>
                <li className="flex items-start">
                  <Shield className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">Wide ATM network access</span>
                </li>
                <li className="flex items-start">
                  <Shield className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">Online and international transactions</span>
                </li>
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              asChild
            >
              <Link href="/register">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Credit Card */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                <CreditCard className="h-5 w-5 text-blue-600 dark:text-blue-300" />
              </div>
              <CardTitle>Credit Card</CardTitle>
            </div>
            <CardDescription className="text-gray-400">
              Enjoy financial flexibility and exclusive rewards with our credit cards
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative h-48 w-full overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 p-6">
              <div className="absolute top-6 left-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                  <CreditCard className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-mono text-lg text-white">**** **** **** 5678</p>
                <div className="mt-2 flex justify-between">
                  <p className="text-xs text-white/70">VALID THRU: 12/28</p>
                  <p className="text-xs text-white/70">JOHN DOE</p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Features:</h3>
              <ul className="space-y-1">
                <li className="flex items-start">
                  <Gift className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">Reward points on every purchase</span>
                </li>
                <li className="flex items-start">
                  <Percent className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">Cashback offers on selected merchants</span>
                </li>
                <li className="flex items-start">
                  <Shield className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">Fraud protection and transaction alerts</span>
                </li>
                <li className="flex items-start">
                  <Gift className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">Complimentary airport lounge access</span>
                </li>
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              asChild
            >
              <Link href="/register">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Card Comparison</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Compare our card options to find the one that best suits your needs.
          </p>
        </div>

        <div className="overflow-x-auto">
          <Table className="border border-gray-800">
            <TableHeader>
              <TableRow className="bg-gray-900">
                <TableHead className="w-[200px]">Features</TableHead>
                <TableHead>Debit Card</TableHead>
                <TableHead>Credit Card</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Annual Fee</TableCell>
                <TableCell>₹0 - ₹500</TableCell>
                <TableCell>₹500 - ₹5,000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Reward Points</TableCell>
                <TableCell>Limited</TableCell>
                <TableCell>Extensive</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Cashback</TableCell>
                <TableCell>Up to 0.5%</TableCell>
                <TableCell>Up to 5%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Interest Free Period</TableCell>
                <TableCell>None</TableCell>
                <TableCell>Up to 50 days</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">ATM Withdrawal</TableCell>
                <TableCell>Free at own bank</TableCell>
                <TableCell>2.5% fee</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Ideal For</TableCell>
                <TableCell>Daily transactions</TableCell>
                <TableCell>Shopping and travel</TableCell>
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
              Apply for a Card Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
