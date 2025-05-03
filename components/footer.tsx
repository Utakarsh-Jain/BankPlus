import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-800 bg-black py-8">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Bank+</h3>
          <p className="text-sm text-gray-400">Secure and efficient banking solutions for all your financial needs.</p>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Services</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link href="/accounts" className="hover:text-white">
                Accounts
              </Link>
            </li>
            <li>
              <Link href="/loans" className="hover:text-white">
                Loans
              </Link>
            </li>
            <li>
              <Link href="/cards" className="hover:text-white">
                Cards
              </Link>
            </li>
            <li>
              <Link href="/lockers" className="hover:text-white">
                Locker Services
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>123 Banking Street, Financial District</li>
            <li>Phone: +91 1234567890</li>
            <li>Email: info@bankattachment.com</li>
          </ul>
        </div>
      </div>
      <div className="container mt-8 border-t border-gray-800 pt-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Bank+. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-gray-400 hover:text-white">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
