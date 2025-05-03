import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react"

export default function BranchesPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Our Branches
          </h1>
          <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Find a Bank+ branch near you for all your banking needs.
          </p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
        {/* Delhi Branch */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle>Main Branch - Delhi</CardTitle>
            <CardDescription className="text-gray-400">Head Office</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start">
              <MapPin className="mr-2 h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
              <span className="text-sm text-gray-300">123, Delhi, India</span>
            </div>
            <div className="flex items-start">
              <Phone className="mr-2 h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
              <span className="text-sm text-gray-300">0111234567</span>
            </div>
            <div className="flex items-start">
              <Clock className="mr-2 h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
              <span className="text-sm text-gray-300">Mon-Fri: 9:00 AM - 5:00 PM</span>
            </div>
            <div className="pt-2">
              <p className="text-sm font-semibold">IFSC Code:</p>
              <p className="text-sm text-gray-300">DL12345678</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              asChild
            >
              <Link href="/contact?branch=delhi">
                Contact Branch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Mumbai Branch */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle>Mumbai Branch</CardTitle>
            <CardDescription className="text-gray-400">Regional Office</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start">
              <MapPin className="mr-2 h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
              <span className="text-sm text-gray-300">456, Mumbai, India</span>
            </div>
            <div className="flex items-start">
              <Phone className="mr-2 h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
              <span className="text-sm text-gray-300">0222345678</span>
            </div>
            <div className="flex items-start">
              <Clock className="mr-2 h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
              <span className="text-sm text-gray-300">Mon-Fri: 9:00 AM - 5:00 PM</span>
            </div>
            <div className="pt-2">
              <p className="text-sm font-semibold">IFSC Code:</p>
              <p className="text-sm text-gray-300">MU87654321</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              asChild
            >
              <Link href="/contact?branch=mumbai">
                Contact Branch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Kolkata Branch */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle>Kolkata Branch</CardTitle>
            <CardDescription className="text-gray-400">Regional Office</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start">
              <MapPin className="mr-2 h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
              <span className="text-sm text-gray-300">789, Kolkata, India</span>
            </div>
            <div className="flex items-start">
              <Phone className="mr-2 h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
              <span className="text-sm text-gray-300">0333456789</span>
            </div>
            <div className="flex items-start">
              <Clock className="mr-2 h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
              <span className="text-sm text-gray-300">Mon-Fri: 9:00 AM - 5:00 PM</span>
            </div>
            <div className="pt-2">
              <p className="text-sm font-semibold">IFSC Code:</p>
              <p className="text-sm text-gray-300">KO34567890</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              asChild
            >
              <Link href="/contact?branch=kolkata">
                Contact Branch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Chennai Branch */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle>Chennai Branch</CardTitle>
            <CardDescription className="text-gray-400">Local Office</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start">
              <MapPin className="mr-2 h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
              <span className="text-sm text-gray-300">159, Chennai, India</span>
            </div>
            <div className="flex items-start">
              <Phone className="mr-2 h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
              <span className="text-sm text-gray-300">0444567890</span>
            </div>
            <div className="flex items-start">
              <Clock className="mr-2 h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
              <span className="text-sm text-gray-300">Mon-Fri: 9:00 AM - 5:00 PM</span>
            </div>
            <div className="pt-2">
              <p className="text-sm font-semibold">IFSC Code:</p>
              <p className="text-sm text-gray-300">CH56789012</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              asChild
            >
              <Link href="/contact?branch=chennai">
                Contact Branch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Bangalore Branch */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle>Bangalore Branch</CardTitle>
            <CardDescription className="text-gray-400">Local Office</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start">
              <MapPin className="mr-2 h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
              <span className="text-sm text-gray-300">753, Bangalore, India</span>
            </div>
            <div className="flex items-start">
              <Phone className="mr-2 h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
              <span className="text-sm text-gray-300">0805678901</span>
            </div>
            <div className="flex items-start">
              <Clock className="mr-2 h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
              <span className="text-sm text-gray-300">Mon-Fri: 9:00 AM - 5:00 PM</span>
            </div>
            <div className="pt-2">
              <p className="text-sm font-semibold">IFSC Code:</p>
              <p className="text-sm text-gray-300">BA90123456</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              asChild
            >
              <Link href="/contact?branch=bangalore">
                Contact Branch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Branch Details</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive information about our branches across India.</p>
        </div>

        <div className="overflow-x-auto">
          <Table className="border border-gray-800">
            <TableHeader>
              <TableRow className="bg-gray-900">
                <TableHead>Branch Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>IFSC Code</TableHead>
                <TableHead>Established</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Main Branch</TableCell>
                <TableCell>Head Office</TableCell>
                <TableCell>123, Delhi, India</TableCell>
                <TableCell>0111234567</TableCell>
                <TableCell>DL12345678</TableCell>
                <TableCell>Jan 1, 2000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Mumbai Branch</TableCell>
                <TableCell>Regional Office</TableCell>
                <TableCell>456, Mumbai, India</TableCell>
                <TableCell>0222345678</TableCell>
                <TableCell>MU87654321</TableCell>
                <TableCell>May 15, 2005</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Kolkata Branch</TableCell>
                <TableCell>Regional Office</TableCell>
                <TableCell>789, Kolkata, India</TableCell>
                <TableCell>0333456789</TableCell>
                <TableCell>KO34567890</TableCell>
                <TableCell>Oct 20, 2010</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Chennai Branch</TableCell>
                <TableCell>Local Office</TableCell>
                <TableCell>159, Chennai, India</TableCell>
                <TableCell>0444567890</TableCell>
                <TableCell>CH56789012</TableCell>
                <TableCell>Dec 25, 2015</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Bangalore Branch</TableCell>
                <TableCell>Local Office</TableCell>
                <TableCell>753, Bangalore, India</TableCell>
                <TableCell>0805678901</TableCell>
                <TableCell>BA90123456</TableCell>
                <TableCell>Jul 30, 2020</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
