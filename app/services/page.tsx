import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, PiggyBank, Landmark, CreditCard, Lock, Wallet, BarChart } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Our Banking Services
          </h1>
          <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Comprehensive financial solutions tailored to meet your personal and business needs.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Accounts */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
              <PiggyBank className="h-6 w-6 text-purple-600 dark:text-purple-300" />
            </div>
            <CardTitle className="mt-4">Account Services</CardTitle>
            <CardDescription className="text-gray-400">
              Various account options to suit your financial needs
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm text-gray-300">
              Choose from our range of savings, current, and fixed deposit accounts with competitive interest rates.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
              <li>Savings Accounts</li>
              <li>Current Accounts</li>
              <li>Fixed Deposits</li>
              <li>Recurring Deposits</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              asChild
            >
              <Link href="/services/accounts">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Loans */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
              <Landmark className="h-6 w-6 text-blue-600 dark:text-blue-300" />
            </div>
            <CardTitle className="mt-4">Loan Services</CardTitle>
            <CardDescription className="text-gray-400">
              Flexible loan options with competitive interest rates
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm text-gray-300">
              Get financial assistance for your personal and business needs with our range of loan products.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
              <li>Home Loans</li>
              <li>Personal Loans</li>
              <li>Car Loans</li>
              <li>Education Loans</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              asChild
            >
              <Link href="/services/loans">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Cards */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
              <CreditCard className="h-6 w-6 text-purple-600 dark:text-purple-300" />
            </div>
            <CardTitle className="mt-4">Card Services</CardTitle>
            <CardDescription className="text-gray-400">Secure and convenient payment solutions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm text-gray-300">
              Our range of debit and credit cards offer convenience, security, and rewards for your transactions.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
              <li>Debit Cards</li>
              <li>Credit Cards</li>
              <li>Prepaid Cards</li>
              <li>Rewards Program</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              asChild
            >
              <Link href="/services/cards">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Locker Services */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
              <Lock className="h-6 w-6 text-blue-600 dark:text-blue-300" />
            </div>
            <CardTitle className="mt-4">Locker Services</CardTitle>
            <CardDescription className="text-gray-400">Secure storage for your valuables</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm text-gray-300">
              Keep your valuables safe with our secure locker services available at all our branches.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
              <li>Small Lockers</li>
              <li>Medium Lockers</li>
              <li>Large Lockers</li>
              <li>24/7 Security</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              asChild
            >
              <Link href="/services/lockers">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Digital Banking */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
              <Wallet className="h-6 w-6 text-purple-600 dark:text-purple-300" />
            </div>
            <CardTitle className="mt-4">Digital Banking</CardTitle>
            <CardDescription className="text-gray-400">Banking at your fingertips</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm text-gray-300">
              Access your accounts, make transactions, and manage your finances anytime, anywhere.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
              <li>Online Banking</li>
              <li>Mobile Banking</li>
              <li>UPI Payments</li>
              <li>Digital Wallets</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              asChild
            >
              <Link href="/services/digital-banking">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Investment Services */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
              <BarChart className="h-6 w-6 text-blue-600 dark:text-blue-300" />
            </div>
            <CardTitle className="mt-4">Investment Services</CardTitle>
            <CardDescription className="text-gray-400">Grow your wealth with our investment options</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm text-gray-300">
              Explore our range of investment products to help you achieve your financial goals.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
              <li>Mutual Funds</li>
              <li>Fixed Deposits</li>
              <li>Recurring Deposits</li>
              <li>Tax-Saving Investments</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              asChild
            >
              <Link href="/services/investments">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
