"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Logo from "./logo"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container flex h-16 items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-gray-200 hover:text-white">
            Home
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 text-sm font-medium text-gray-200 hover:text-white">
                Services <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 bg-gray-900">
              <DropdownMenuItem>
                <Link href="/services/accounts" className="w-full">
                  Accounts
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/services/loans" className="w-full">
                  Loans
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/services/cards" className="w-full">
                  Cards
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/services/lockers" className="w-full">
                  Locker Services
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/branches" className="text-sm font-medium text-gray-200 hover:text-white">
            Branches
          </Link>
          <Link href="/contact" className="text-sm font-medium text-gray-200 hover:text-white">
            Contact
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="outline" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              asChild
            >
              <Link href="/register">Register</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="flex md:hidden items-center justify-center p-2 rounded-md text-gray-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle Menu</span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-gray-900 border-b border-gray-800">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-sm font-medium text-gray-200 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <details className="group [&[open]>summary]:mb-2">
              <summary className="flex cursor-pointer items-center justify-between text-sm font-medium text-gray-200 hover:text-white">
                Services
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="pl-4 mt-2 space-y-2">
                <Link
                  href="/services/accounts"
                  className="block text-sm text-gray-300 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Accounts
                </Link>
                <Link
                  href="/services/loans"
                  className="block text-sm text-gray-300 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Loans
                </Link>
                <Link
                  href="/services/cards"
                  className="block text-sm text-gray-300 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Cards
                </Link>
                <Link
                  href="/services/lockers"
                  className="block text-sm text-gray-300 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Locker Services
                </Link>
              </div>
            </details>
            <Link
              href="/branches"
              className="text-sm font-medium text-gray-200 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Branches
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-200 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="outline" asChild>
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                  Login
                </Link>
              </Button>
              <Button
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                asChild
              >
                <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                  Register
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
