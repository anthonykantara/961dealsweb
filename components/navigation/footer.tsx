import Link from "next/link"
import { MapPin } from "lucide-react"

const legalLinks = [
  { name: "Terms & Conditions", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" },
]

const navigation = {
  about: [
    { name: "FAQ", href: "/faq" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
    { name: "Places", href: "/places" },
  ],
  solutions: [
    { name: "For Users", href: "/join" },
    { name: "For Business Owners", href: "/partner" },
    { name: "For Hubs", href: "/for-hubs" },
    { name: "For Companies", href: "/companies" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-black" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-12 sm:pt-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <MapPin className="h-8 w-8 text-white" />
              <span className="font-bold text-xl text-white">961 Deals</span>
            </Link>
            <p className="text-sm leading-5 text-gray-300">
              Discover exclusive deals and experiences across Lebanon with 961 Deals membership. Available in the deals section of <Link href="https://961.co" className="text-white hover:text-gray-300 transition-colors">961</Link>&apos;s app.
            </p>
            <p className="text-sm leading-6 text-gray-400">
              A division of <Link href="https://961.co" className="hover:text-gray-300 transition-colors">961</Link>™
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-12 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-bold tracking-wider uppercase text-white/80">About</h3>
                <ul role="list" className="mt-4 space-y-2">
                  {navigation.about.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 md:mt-0">
                <h3 className="text-sm font-bold tracking-wider uppercase text-white/80">Solutions</h3>
                <ul role="list" className="mt-4 space-y-2">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex items-center justify-between">
            <p className="text-xs leading-5 text-gray-400">
              &copy; 2025 961 Deals. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {legalLinks.map((link, i) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs leading-5 text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}