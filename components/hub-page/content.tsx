'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Building2, Users, BarChart3, ArrowRight, Sparkles, TrendingUp, BadgeDollarSign, Users2 } from "lucide-react"
import { HubEnrollmentForm } from "@/components/hub-enrollment-form"
import { motion, AnimatePresence } from "framer-motion"

const EnrollButton = ({ className }: { className?: string }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button 
        size="lg" 
        className={className}
        onClick={() => setOpen(true)}
      >
        Enroll Your Hub Now
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
      <HubEnrollmentForm open={open} onOpenChange={setOpen} />
    </>
  )
}

const benefits = [
  {
    title: "Prime Visibility",
    description: "Get featured on our Deals app homepage to maximize your hub's exposure to millions of people",
    icon: Building2
  },
  {
    title: "Increased Foot Traffic",
    description: "Drive more visitors to your hub through exclusive deals and promotions",
    icon: TrendingUp
  },
  {
    title: "Revenue Growth",
    description: "Help your tenants thrive with increased sales and customer engagement",
    icon: BadgeDollarSign
  },
  {
    title: "Customer Insights",
    description: "Access detailed analytics about visitor behavior and preferences",
    icon: Users2
  },
]

const steps = [
  {
    title: "Sign Up",
    description: "Submit your hub's details to get started",
  },
  {
    title: "Get Featured",
    description: "Your hub appears on the deals app homepage",
  },
  {
    title: "Monitor Success",
    description: "Access real-time analytics to track your growth",
  },
]

export function HubPageContent() {
  return (
    <div className="relative isolate min-h-screen">
      {/* Background gradient */}
      <div className="absolute inset-x-0 top-0 h-[800px] overflow-hidden -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-red-50 to-white" />
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-red-200 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-20 -right-40 w-80 h-80 bg-red-300 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mx-auto max-w-2xl text-center pt-32 pb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-8 shadow-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Join Lebanon's #1 Deals Platform</span>
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            Drive More Foot Traffic<br />
            to Your Hub
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Partner with Lebanon's leading deals platform to boost your hub's visibility and success.
          </p>
          <EnrollButton className="rounded-full px-8 py-6 text-lg shadow-[0_8px_30px_rgb(255,0,0,0.2)] hover:shadow-[0_8px_30px_rgb(255,0,0,0.4)] transition-all duration-300" />
        </div>

        {/* Benefits Grid */}
        <div className="mx-auto mt-24 max-w-7xl">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold text-primary mb-2">WHY PARTNER WITH US</h2>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Boost Your Tenants Revenue
            </h2>
            <p className="text-lg text-gray-600">
              Join Lebanon's leading deals platform and unlock powerful growth opportunities for your hub
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => {
                const Icon = benefit.icon
                return (
                  <AnimatePresence key={benefit.title}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="group relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 overflow-hidden"
                    > 
                      <div className="mb-6 p-3 bg-red-50 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </motion.div>
                  </AnimatePresence>
                )
              })}
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="mx-auto mt-32 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mx-auto mt-32 max-w-3xl text-center bg-gradient-to-b from-red-50 to-white p-12 rounded-3xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6">
            🚀 Ready to boost your hub's visibility?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Drive more traffic to your tenants by securing your spot on the 961 Deals app today!
          </p>
          <EnrollButton className="w-full sm:w-auto rounded-full px-8 py-6 text-lg bg-black hover:bg-black/90 shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)] transition-all duration-300" />
        </div>
      </div>
    </div>
  )
}