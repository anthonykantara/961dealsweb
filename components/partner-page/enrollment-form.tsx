'use client'

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { DialogContent } from "@/components/ui/custom-dialog"

interface PartnerEnrollmentFormProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function PartnerEnrollmentForm({ open, onOpenChange }: PartnerEnrollmentFormProps) {
  const [step, setStep] = useState(1)
  
  // Handle dialog close attempts
  const handleOpenChange = useCallback((newOpen: boolean) => {
    // Only allow closing in step 1
    if (step === 1) {
      onOpenChange(newOpen)
    }
  }, [step, onOpenChange])

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessName: '',
    address: '',
    website: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 2) {
      setStep(step + 1)
    } else {
      // Handle form submission
      console.log('Form submitted:', formData)
      onOpenChange(false)
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
            <DialogTitle>Tell us about your business</DialogTitle>
            <DialogDescription>
              Fill out the form below and our team will get back to you within 24 hours.
            </DialogDescription>
          </DialogHeader>
        ) : (
          <DialogHeader>
            <DialogTitle>Just a few more details</DialogTitle>
            <DialogDescription>
              Help us understand your business better so we can provide the best partnership experience.
            </DialogDescription>
          </DialogHeader>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 ? (
            <>
              <div>
                <Label htmlFor="businessName">Business Name*</Label>
                <Input
                  id="businessName"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="mt-2"
                  required
                />
              </div>
              
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
            </>
          ) : (
            <>
              <div>
                <Label htmlFor="email">Business Email*</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-2"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="address">Business Address*</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="mt-2"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="website">Website (optional)</Label>
                <Input
                  id="website"
                  type="url"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  className="mt-2"
                  placeholder="https://"
                />
              </div>
            </>
          )}

          <div className="flex justify-end gap-4">
            {step > 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(step - 1)}
              >
                Back
              </Button>
            )}
            <Button type="submit" className="bg-primary hover:bg-primary/90">
              {step === 1 ? "Continue" : "Submit Application"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}