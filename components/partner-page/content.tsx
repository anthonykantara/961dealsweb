'use client'

import { useState } from "react"
import { OptimizedImage as Image } from "@/components/optimized-image"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Users, TrendingUp, BadgeDollarSign, Sparkles, Star, Clock } from "lucide-react"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SearchBar } from "./search-bar"
import { benefits, testimonials, faqs } from "./data"
import { TrustedPartners } from "./trusted-partners"
import { StatsSection } from "./stats-section"
import { FAQSection } from "@/components/shared/faq/section"

export function PartnerPageContent() {
  return (
    <div className="relative isolate min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center pt-32 pb-48">
          <div className="text-left">
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl mb-8 leading-tight">
              Welcome new guests at your place.{" "}
              <span className="bg-[#FF0000] text-white px-2 rounded-md text-[0.8em]">For Free!</span>
            </h1>
            <p className="text-xl text-gray-500 mb-12">
              Millions of people rely on us to know where to go, we're sending them your way at <span className="decoration-primary decoration-[3px] underline underline-offset-2">no cost</span>.
            </p>
            <SearchBar />
          </div>
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1559329007-40df8dd35adfa?auto=format&fit=crop&q=80&w=1000&h=1200"
              alt="Restaurant interior"
              width={500}
              height={400}
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 via-black/0" />
          </div>
        </div>

        {/* Partner Logos */}
        <TrustedPartners />

        {/* Stats & Testimonials */}
        <div className="mx-auto max-w-7xl py-24">
          <div className="grid md:grid-cols-[1fr_1px_1fr] gap-12 items-center">
            {/* Stats */}
            <StatsSection />
            
            {/* Divider */}
            <div className="hidden md:block w-px h-full bg-gray-200" />
            
            {/* Testimonials */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                "961 Deals has been incredible for bringing in new customers. The platform is so easy to use and the team is always helpful. Highly recommend!"
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&q=80&w=100&h=100"
                  alt="Sarah K."
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold">Maya</p>
                  <p className="text-sm text-gray-500">Owner of Beit Kanz</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="relative w-screen left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] bg-red-50/80 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Reach Millions and Boost Your Business
            </h2>
            <div className="text-lg text-gray-600 max-w-3xl mx-auto space-y-4">
              <p>
                Helping you fill empty slots, attract more customers, and grow revenue - at <span className="decoration-primary underline decoration-2 underline-offset-2">no cost</span> to you.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-16">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 overflow-hidden group hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative z-10">
                    <div className="mb-6 w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-extrabold mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 text-lg">{benefit.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
          </div>
        </div>

        {/* CTA */}
        <div className="relative w-screen left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] bg-black py-24">
          <div className="mx-auto max-w-7xl text-center px-6">
            <h2 className="text-5xl font-extrabold mb-12 text-white">
              Ready to grow your business? <span className="bg-[#FF0000] text-white px-2 rounded-md">It's Free!</span>
            </h2>
            <SearchBar />
          </div>
        </div>

        {/* FAQs */}
        <div className="mx-auto max-w-6xl py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-4">
              Common Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about partnering with 961 Deals
            </p>
          </div>
          <div className="mx-auto max-w-6xl">
            <FAQSection faqs={faqs} />
          </div>
        </div>
      </div>
    </div>
  )
}