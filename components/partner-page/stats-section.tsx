'use client'

import { motion } from "framer-motion"
import { Users, HandCoins } from "lucide-react"

const stats = [
  {
    value: "70 Million",
    description: "Number of times used 961 to find a spot",
    icon: Users,
  },
  {
    value: "1 in 3",
    description: "Visit places they discover on 961",
    icon: HandCoins,
  }
]

export function StatsSection() {
  return (
    <div className="flex items-center gap-12">
      {stats.map((stat, i) => {
        const Icon = stat.icon
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-3 mb-2">
              <Icon className="h-6 w-6 text-primary" />
              <p className="text-3xl font-extrabold tracking-tight text-gray-900">
                {stat.value}
              </p>
            </div>
            <p className="text-base text-gray-600">{stat.description}</p>
          </motion.div>
        )
      })}
    </div>
  )
}