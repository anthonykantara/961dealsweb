import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Users, Heart, BadgePercent, Smile } from "lucide-react"

const benefits = [
  {
    name: "Employee Satisfaction",
    description: "Boost employee morale with exclusive discounts and perks",
    icon: Heart,
  },
  {
    name: "Bulk Savings",
    description: "Get special rates on bulk membership purchases",
    icon: BadgePercent,
  },
  {
    name: "Easy Management",
    description: "Simple dashboard to manage and distribute memberships",
    icon: Users,
  },
  {
    name: "Happy Teams",
    description: "Give your employees more reasons to smile with great deals",
    icon: Smile,
  },
]

const tiers = [
  {
    name: "Small Team",
    id: "small",
    price: { monthly: "$29" },
    description: "Perfect for startups and small teams",
    features: ["Up to 10 memberships", "Basic analytics", "Email support"],
  },
  {
    name: "Medium Business",
    id: "medium",
    price: { monthly: "$99" },
    description: "Great for growing companies",
    features: ["Up to 50 memberships", "Advanced analytics", "Priority support", "Custom deals"],
  },
  {
    name: "Enterprise",
    id: "enterprise",
    price: { monthly: "Custom" },
    description: "For large organizations",
    features: [
      "Unlimited memberships",
      "Enterprise analytics",
      "24/7 support",
      "Custom deals",
      "API access",
    ],
  },
]

export default function CompaniesPage() {
  return (
    <div className="relative isolate pt-24">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Corporate Membership Solutions
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Enhance your employee benefits package with 961 Deals corporate memberships.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg">Contact Sales</Button>
            <Button variant="outline" size="lg">View Pricing</Button>
          </div>
        </div>

        {/* Benefits */}
        <div className="mx-auto mt-32 max-w-7xl">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">Benefits</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Corporate Memberships?
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {benefits.map((benefit) => {
                const Icon = benefit.icon
                return (
                  <Card key={benefit.name} className="flex flex-col p-8">
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                      <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
                      {benefit.name}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                      <p className="flex-auto">{benefit.description}</p>
                    </dd>
                  </Card>
                )
              })}
            </dl>
          </div>
        </div>

        {/* Pricing */}
        <div className="mx-auto mt-32 max-w-7xl">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">Pricing</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Plans for teams of all sizes
            </p>
          </div>

          <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {tiers.map((tier) => (
              <Card key={tier.id} className="flex flex-col justify-between p-8">
                <div>
                  <h3 className="text-xl font-semibold leading-7 text-gray-900">{tier.name}</h3>
                  <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.price.monthly}</span>
                    <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
                  </p>
                  <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-primary" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="mt-8" variant={tier.id === 'enterprise' ? 'default' : 'outline'}>
                  {tier.id === 'enterprise' ? 'Contact sales' : 'Get started'}
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to enhance your employee benefits?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Join leading companies in Lebanon who trust 961 Deals to provide their employees with exclusive benefits and savings.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg">Contact Our Sales Team</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}