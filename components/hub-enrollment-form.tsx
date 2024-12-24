'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Dialog, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { DialogContent } from "@/components/ui/custom-dialog"

interface HubEnrollmentFormProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function HubEnrollmentForm({ open, onOpenChange }: HubEnrollmentFormProps) {
  const [step, setStep] = useState(1)
  
  // Handle dialog close attempts
  const handleOpenChange = (newOpen: boolean) => {
    // Only allow closing in step 1
    if (step === 1) {
      onOpenChange(newOpen)
    }
  }
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    username: '',
    venue: '',
    tenants: '',
    address: '',
    plan: 'monthly'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 2) {
      setStep(step + 1)
    } else {
      // Handle form submission
      console.log('Form submitted:', formData)
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent 
        className="sm:max-w-[500px]"
        onPointerDownOutside={(e) => step === 2 && e.preventDefault()}
        onEscapeKeyDown={(e) => step === 2 && e.preventDefault()}
        showCloseButton={step === 1}
      >
        {step === 1 ? (
          <DialogHeader>
            <DialogTitle>Enroll Your Hub</DialogTitle>
          </DialogHeader>
        ) : (
          <DialogHeader>
            <DialogTitle>Your info has been submitted</DialogTitle>
            <DialogDescription>
              There are limited spots for hubs. Secure your place by completing your application.
            </DialogDescription>
          </DialogHeader>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 ? (
            <>
              <div>
                <Label htmlFor="name">Your Full Name*</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-2"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="phone">Phone Number*</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="mt-2"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="username">Your username on 961 app if registered</Label>
                <Input
                  id="username"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="venue">Venue/Location Name*</Label>
                <Input
                  id="venue"
                  value={formData.venue}
                  onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                  className="mt-2"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="tenants">Number of Places/Tenants*</Label>
                <Input
                  id="tenants"
                  type="number"
                  min="1"
                  value={formData.tenants}
                  onChange={(e) => setFormData({ ...formData, tenants: e.target.value })}
                  className="mt-2"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="address">Location Address*</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="mt-2"
                  placeholder="Search for your location"
                  required
                />
              </div>
            </>
          ) : (
            <div className="pt-4">
              <RadioGroup
                value={formData.plan}
                onValueChange={(value) => setFormData({ ...formData, plan: value })}
                className="space-y-4"
              >
                <div className="flex items-center space-x-4 rounded-lg border p-4">
                  <RadioGroupItem value="monthly" id="monthly" />
                  <Label htmlFor="monthly" className="flex-1">
                    <div className="font-semibold">Monthly Plan</div>
                    <div className="text-sm text-gray-500">$499/month</div>
                  </Label>
                </div>
                
                <div className="flex items-center space-x-4 rounded-lg border p-4 bg-red-50">
                  <RadioGroupItem value="annual" id="annual" />
                  <Label htmlFor="annual" className="flex-1">
                    <div className="font-semibold">Annual Plan</div>
                    <div className="text-sm text-gray-500">$4,999/year (Save $989!)</div>
                  </Label>
                  <span className="text-sm font-medium text-primary">Best value</span>
                </div>
              </RadioGroup>
            </div>
          )}

          <div className="flex justify-end gap-4">
            {step > 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(step - 1)}
              >
                Pay Later
              </Button>
            )}
            <Button type="submit" className="bg-primary hover:bg-primary/90">
              {step === 1 ? "Proceed" : "Submit Application"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}