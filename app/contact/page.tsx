"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle form submission here
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 5000)
  }

  return (
    <div className="container py-12 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We&apos;re here to help. Reach out to us with any questions or concerns.
          </p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription className="text-gray-400">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="John Doe" required className="bg-gray-800 border-gray-700" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="bg-gray-800 border-gray-700"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 9876543210"
                    required
                    className="bg-gray-800 border-gray-700"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="branch">Branch</Label>
                  <Select>
                    <SelectTrigger className="bg-gray-800 border-gray-700">
                      <SelectValue placeholder="Select branch" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700">
                      <SelectItem value="delhi">Delhi Main Branch</SelectItem>
                      <SelectItem value="mumbai">Mumbai Branch</SelectItem>
                      <SelectItem value="kolkata">Kolkata Branch</SelectItem>
                      <SelectItem value="chennai">Chennai Branch</SelectItem>
                      <SelectItem value="bangalore">Bangalore Branch</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select>
                    <SelectTrigger className="bg-gray-800 border-gray-700">
                      <SelectValue placeholder="Select subject" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700">
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="account">Account Related</SelectItem>
                      <SelectItem value="loan">Loan Related</SelectItem>
                      <SelectItem value="card">Card Related</SelectItem>
                      <SelectItem value="complaint">Complaint</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message here..."
                    required
                    className="min-h-[120px] bg-gray-800 border-gray-700"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  Send Message
                </Button>
                {formSubmitted && (
                  <p className="text-center text-green-500">
                    Thank you for your message! We&apos;ll get back to you soon.
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription className="text-gray-400">
                Reach out to us through any of the following channels.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Head Office</p>
                  <p className="text-sm text-gray-300">123, Delhi, India</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="mr-2 h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-sm text-gray-300">+91 1234567890</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="mr-2 h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm text-gray-300">info@bank+.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="mr-2 h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Business Hours</p>
                  <p className="text-sm text-gray-300">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p className="text-sm text-gray-300">Saturday: 10:00 AM - 2:00 PM</p>
                  <p className="text-sm text-gray-300">Sunday: Closed</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle>Customer Support</CardTitle>
              <CardDescription className="text-gray-400">
                We&apos;re here to help you with any issues or questions.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="font-semibold">24/7 Customer Support</p>
                <p className="text-sm text-gray-300">
                  Our customer support team is available 24/7 to assist you with any urgent issues.
                </p>
                <p className="text-sm text-gray-300">Toll-Free: 1800-123-4567</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold">Technical Support</p>
                <p className="text-sm text-gray-300">
                  For technical issues related to online banking, mobile app, or website.
                </p>
                <p className="text-sm text-gray-300">Email: tech.support@bankplus.com</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold">Complaints</p>
                <p className="text-sm text-gray-300">
                  If you have a complaint or feedback, please let us know so we can improve our services.
                </p>
                <p className="text-sm text-gray-300">Email: complaints@bankplus.com</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
