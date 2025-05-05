'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { ArrowRight } from 'lucide-react'

export default function RegisterPage() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    Name: '', Email: '', Phone: '', DOB: '', Address: '', City: '', State: '', PINCode: '', Aadhar_PAN: '', AccountType: '', PreferredBranch: '', TermsAccepted: false
  })
  const router = useRouter()

  const updateField = (key, value) => setForm(f => ({ ...f, [key]: value }))

  async function handleSubmit() {
    if (!form.TermsAccepted) return alert('Accept terms to proceed')
    const res = await fetch('/api/accounts/customer', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
    if (res.ok) router.push('/services/accounts')
    else alert('Registration failed')
  }

  return (
    <div className="container max-w-md py-12">
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-2xl bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Create Your Account</CardTitle>
          <CardDescription className="text-gray-400">Join BankPlus for secure and efficient banking</CardDescription>
        </CardHeader>
        <CardContent>
          {step === 1 && (
            <div className="space-y-4">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="Name" value={form.Name} onChange={e => updateField('Name', e.target.value)} placeholder="John Doe" required className="bg-gray-800" />
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="Email" type="email" value={form.Email} onChange={e => updateField('Email', e.target.value)} required className="bg-gray-800" />
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="Phone" type="tel" value={form.Phone} onChange={e => updateField('Phone', e.target.value)} required className="bg-gray-800" />
              <Label htmlFor="dob">Date of Birth</Label>
              <Input id="dob" name="DOB" type="date" value={form.DOB} onChange={e => updateField('DOB', e.target.value)} required className="bg-gray-800" />
              <Button onClick={() => setStep(2)} className="w-full">Next Step <ArrowRight /></Button>
            </div>
          )}
          {step === 2 && (
            <div className="space-y-4">
              <Label htmlFor="address">Address</Label>
              <Input id="address" name="Address" value={form.Address} onChange={e => updateField('Address', e.target.value)} required className="bg-gray-800" />
              <Input id="city" name="City" placeholder="City" value={form.City} onChange={e => updateField('City', e.target.value)} required className="bg-gray-800" />
              <Input id="state" name="State" placeholder="State" value={form.State} onChange={e => updateField('State', e.target.value)} required className="bg-gray-800" />
              <Input id="pin" name="PINCode" placeholder="PIN Code" value={form.PINCode} onChange={e => updateField('PINCode', e.target.value)} required className="bg-gray-800" />
              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setStep(1)}>Back</Button>
                <Button onClick={() => setStep(3)}>Next Step <ArrowRight /></Button>
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="space-y-4">
              <Label htmlFor="aadhar">Aadhar/PAN</Label>
              <Input id="aadhar" name="Aadhar_PAN" value={form.Aadhar_PAN} onChange={e => updateField('Aadhar_PAN', e.target.value)} required className="bg-gray-800" />
              <Label>Account Type</Label>
              <Select onValueChange={val => updateField('AccountType', val)}>
                <SelectTrigger className="bg-gray-800"><SelectValue placeholder="Type" /></SelectTrigger>
                <SelectContent className="bg-gray-800"><SelectItem value="savings">Savings</SelectItem><SelectItem value="current">Current</SelectItem><SelectItem value="fixed">Fixed Deposit</SelectItem></SelectContent>
              </Select>
              <Label>Preferred Branch</Label>
              <Select onValueChange={val => updateField('PreferredBranch', val)}>
                <SelectTrigger className="bg-gray-800"><SelectValue placeholder="Branch" /></SelectTrigger>
                <SelectContent className="bg-gray-800">
                  <SelectItem value="1">Delhi Main</SelectItem>
                  <SelectItem value="2">Mumbai</SelectItem>
                  <SelectItem value="3">Kolkata</SelectItem>
                  <SelectItem value="4">Chennai</SelectItem>
                  <SelectItem value="5">Bangalore</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex items-center space-x-2">
                <Checkbox checked={form.TermsAccepted} onCheckedChange={val => updateField('TermsAccepted', !!val)} />
                <label htmlFor="terms" className="text-gray-300">I agree to <Link href="/terms" className="text-blue-400 underline">terms</Link></label>
              </div>
              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setStep(2)}>Back</Button>
                <Button onClick={handleSubmit}>Create Account</Button>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="border-t border-gray-800">
          <div className="text-sm text-gray-400 text-center">
            Already have an account? <Link href="/login" className="text-blue-400 underline">Login here</Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}