import { FAQSection } from "@/components/shared/faq/section"
import type { FAQ } from "@/components/shared/faq/types"
import { FloatingCTA } from "@/components/floating-cta"

const faqs: FAQ[] = [
  {
    category: "General",
    questions: [
      {
        question: "What is the concept of 961 Deals?",
        answer: "961 Deals partners with Lebanon's best places to bring you exclusive offers like discounts, 2-for-1, or even free stuff. For example, with a 2-for-1 offer, you pay for one dish while the second (cheaper) one is free. Easily browse, book, and redeem deals through the 961 Deals app. Our motto: \"Discover Lebanon, Save More!\""
      },
      {
        question: "Which places are participating?",
        answer: "Many places are offering exclusive deals through 961 Deals, from restaurants to weekend getaways. Browse the app to explore all participating places and their offers."
      },
      {
        question: "Where is 961 Deals available?",
        answer: "961 Deals is currently available in Lebanon, covering a wide variety of locations. Check the app for updates on participating areas and venues! We're growing every day! We are also planning to serve the Lebanese Diaspora as well as travels from Lebanon."
      },
      {
        question: "What payment methods are available?",
        answer: "Credit Cards (Lebanese & International), Apple Pay, Google Pay, and Cash through 961 Wallet. To top up your 961 Wallet, you can visit a listed 961 agent near you or request a cash pickup and we'll send someone to you."
      },
      {
        question: "Where can I change my information?",
        answer: "In the profile and accounts settings of the main 961 app. You can find it on the app homepage."
      }
    ]
  },
  {
    category: "Membership",
    questions: [
      {
        question: "How can I become a 961 Deals member?",
        answer: "Joining is simple! Sign up through the app either during registration or by tapping the Join button on the homepage."
      },
      {
        question: "How can I cancel the trial period?",
        answer: "In the app, go to 961 Deals → Profile → Membership → Cancel."
      },
      {
        question: "What membership plans are available?",
        answer: "You can choose between a monthly or an annual membership, depending on your preference."
      },
      {
        question: "How much does a membership cost?",
        answer: "Check the pricing details directly in the app or on our website for up-to-date information."
      },
      {
        question: "Why haven't my deals renewed with my new membership?",
        answer: "At 961 Deals, offers are refreshed periodically, not based on your membership start date. This approach allows you to enjoy multiple redemptions of your favorite deals throughout the year."
      },
      {
        question: "Can I change my membership type (e.g., from monthly to annual)?",
        answer: "In the app, go to 961 Deals → Profile → Membership → Select New Plan  → Change Plan."
      },
      {
        question: "Does deleting my 961 account or uninstalling 961 app cancel my subscription?",
        answer: "No, deleting your account or uninstalling the app doesn't automatically cancel your subscription. Please cancel your membership in the app before deleting your account."
      },
      {
        question: "Can I use my membership across different cities or locations?",
        answer: "Yes! Your active membership is valid wherever 961 Deals is available, ensuring access to exclusive offers wherever you go. Check the app for an updated list of areas."
      }
    ]
  },
  {
    category: "Booking and Redeeming Deals",
    questions: [
      {
        question: "What happens if I don't use a booked deal?",
        answer: "Unused deals are automatically reactivated overnight, allowing you to book them again."
      },
      {
        question: "How do I book a deal?",
        answer: "Follow these steps:\n1. Choose a place from the map or list view\n2. Scroll down, select a deal, and click Get Deal\n3. Pick the date and time you want to use the deal\n4. Click Book Deal\nYour deal is booked – enjoy your visit!"
      },
      {
        question: "How do I redeem a deal?",
        answer: "Follow these steps:\n1. Inform the staff that you're with 961 Deals.\n2. Show your booked deal to the staff while ordering.\n3. When it's time to pay, show the deal again.\n4. Click \"Redeem\" in the app and swipe to confirm the redemption."
      },
      {
        question: "Does booking a deal reserve a table?",
        answer: "No, booking a deal doesn't include a table reservation. We recommend making a separate reservation. If a table isn't available, you can cancel the deal and book it for another time."
      },
      {
        question: "Can I cancel a booked deal?",
        answer: "Yes, you can cancel a booked deal by:\n1. Opening 961 Deals.\n2. Click Bookings.\n3. Find the deal you booked.\n4. Click Cancel.\nThe deal will then be available again for future use."
      },
      {
        question: "Can deals be used for delivery or pickup?",
        answer: "Depends on the place. Give them a call to ask."
      },
      {
        question: "How often can a deal be redeemed?",
        answer: "Deals reset periodically rather than annually, allowing you to use many deals regularly."
      },
      {
        question: "Why wasn't my booked deal accepted?",
        answer: "If a place doesn't accept your booked deal, you can report the issue by:\n1. Opening 961 Deals in the app\n2. Click the Account page (top right corner)\n3. Click Support then \"Contact Support\"\n4. If you paid full price, make sure to take a full and clear picture of the receipt and include it in the message.\n5. Click Submit & we'll get back to you as soon as possible."
      }
    ]
  },
  {
    category: "Recommend 961 Deals",
    questions: [
      {
        question: "How can I refer 961 Deals to others?",
        answer: "Go to 961 Deals → Earn → Share Link or click Share & Earn.\nYou can easily share your link via WhatsApp or any other platform.\nFor every person you invite who subscribes, you'll get 1 free month of 961 Deals."
      },
      {
        question: "Why haven't I received my free month?",
        answer: "If your friends sign up in the app, enter their payment details, and start their subscription immediately (skipping the 7-day trial period), a free month will automatically be activated and extend your membership."
      }
    ]
  },
  {
    category: "For Businesses",
    questions: [
      {
        question: "How can I list my place and get more info?",
        answer: "Head over to the \"Become a Partner\" page to enroll your place or check out the FAQ there for more information.\n\n[Click here](/partner/)"
      },
      {
        question: "Can I order memberships for my employees?",
        answer: "Yes, of course. We also offer discounted membership when bulk ordering membership for your staff. They'll love you for it! ♥️\n\n[Click here](/companies/)"
      },
      {
        question: "I operate a cluster and hub of multiple businesses, how can I help my tenants?",
        answer: "Enroll in our Hubs program to boost foot traffic toward businesses in your hub!\n\n[Click here](/for-hubs/)"
      }
    ]
  }
]

export function FAQContent() {
  return (
    <div className="relative isolate min-h-screen pt-24 pb-16">
      <FAQSection
        title="Frequently Asked Questions"
        description="Everything you need to know about 961 Deals - from booking to redeeming deals and managing your membership."
        faqs={faqs}
      />
      <FloatingCTA />
    </div>
  )
}