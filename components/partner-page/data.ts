import { Users, Settings, CircleDollarSign, Check, Star, Clock } from "lucide-react"
import type { Benefit, Testimonial, FAQ, Stat } from "./types"

export const benefits: Benefit[] = [
  {
    title: "100% Free",
    description: "No fees. Just exclusive deals with us.",
    icon: CircleDollarSign
  },
  {
    title: "Fill Empty Slots",
    description: "Turn downtime into profit by attracting customers during off-peak times.",
    icon: Clock
  },
  {
    title: "More Control",
    description: "Set when deals apply, how many customers to serve, and pause or adjust anytime.",
    icon: Settings
  },
  {
    title: "No Hassle",
    description: "No extra equipment or staff training required.",
    icon: Check
  },
  {
    title: "Verified Reviews",
    description: "Get only authentic reviews to boost your reputation.",
    icon: Star
  },
  {
    title: "Reach Millions",
    description: "Promote your venue to a massive audience ready to book.",
    icon: Users
  }
]

export const testimonials: Testimonial[] = [
  {
    quote: "961 Deals has been great for bringing in new customers, especially during slower hours.",
    author: "Sarah K.",
    role: "Restaurant Owner",
    image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    quote: "The platform is so easy to use and the team is always helpful. Highly recommend!",
    author: "Michel R.",
    role: "Café Manager",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=100&h=100"
  }
]

export const stats: Stat[] = [
  { label: "Active Users", value: "50,000+" }
]

export const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "What is 961 Deals?",
        answer: "961 Deals is a platform that connects Lebanese businesses with customers, helping fill empty slots and generate more revenue during off-peak times."
      },
      {
        question: "Why should I partner with 961 Deals?",
        answer: "Partnering with 961 Deals gives you free access to our platform, promotion to millions of potential customers, and tools to optimize revenue without affecting your daily operations."
      },
      {
        question: "Is there any cost to join 961 Deals?",
        answer: "No, it's completely free."
      },
      {
        question: "How do I enroll?",
        answer: "Simply search for your place below, fill out the form, and we'll guide you through the process. It's super easy."
      },
      {
        question: "What is 961?",
        answer: "961 started as a leading digital media outlet serving millions of Lebanese people. 961 Deals is our newest venture aimed at helping businesses in Lebanon. All our work is nonprofit as we're a registered nonprofit organization dedicated to helping Lebanon."
      }
    ]
  },
  {
    category: "Platform",
    questions: [
      {
        question: "How does 961 Deals work for my business?",
        answer: "You create exclusive offers that go live instantly on our platform. Customers redeem these offers via the app, helping you fill empty slots during off-peak times."
      },
      {
        question: "Do I need to install any equipment?",
        answer: "No equipment or software is required. Customers show their app to your staff to redeem deals."
      },
      {
        question: "Can I control my offers?",
        answer: "Yes, you have full control. Set the time slots, number of customers, and type of offers. You can pause or adjust them anytime. However, if a deal is booked, you will need to honor it even after you changed the offer."
      },
      {
        question: "What kind of businesses can join 961 Deals?",
        answer: "961 Deals is open to restaurants, cafes, hotels & stays, salons, and other service-based businesses looking to maximize their capacity and revenue. We will be expanding this to cover more industries."
      },
      {
        question: "What's the process to redeem?",
        answer: "A user books a deal for a certain day and time. When they arrive, they show your staff the deal and \"swipe\" on the screen to redeem it. The screen will show the deal is confirmed. Then just apply the deal to their bill. Your team doesn't need to scan anything or use any equipment."
      },
      {
        question: "How can my place perform well on 961 Deals?",
        answer: "The more engaging and irresistible your offers, the more members will redeem them, boosting your visibility in the app. Frequent redemptions and positive reviews improve your ranking, encouraging more users to visit. Focus on creating deals that attract attention and ensure a great customer experience to keep the momentum going!"
      }
    ]
  },
  {
    category: "Deals",
    questions: [
      {
        question: "What kind of deals can I offer?",
        answer: "You can offer discounts, special packages, or limited-time offers tailored to fill your off-peak slots or increase foot traffic during slow periods. This can be direct discounts, 2-for-1, or free item."
      },
      {
        question: "Can I limit the number of customers for a deal?",
        answer: "Yes, you decide how many customers can redeem each deal and when it's available - down to the hour."
      },
      {
        question: "What happens if I get a rush of customers?",
        answer: "You can pause or take down your offers at any time to avoid overwhelming your staff or operations."
      },
      {
        question: "Are deals exclusive to 961 Deals?",
        answer: "Yes, the deals you post on 961 Deals must be exclusive and not available through other platforms. Our main and only requirement is that we're your only deals partner and you don't list on any other services."
      },
      {
        question: "Why do you require exclusivity?",
        answer: "Simply, no one can benefit your business as much as us. Aside from our unmatched audience in the millions that you'll be exposed to, we're set up to help your business especially drive business during off peak times. If you're offering a deal in another deals app, then introducing a deal that's time-controlled on our app, for example, it'll be counterproductive."
      }
    ]
  },
  {
    category: "Collaboration",
    questions: [
      {
        question: "How does 961 Deals promote my business?",
        answer: "We promote your offers on the 961 Deals app, our website, and social media platforms, driving visibility and traffic to your business."
      },
      {
        question: "Can I customize my offers?",
        answer: "Yes, you can tailor your offers to align with your business goals, whether it's attracting customers during quiet times or introducing new products."
      },
      {
        question: "Will I get support if I face any issues?",
        answer: "Absolutely. Our dedicated support team is here to assist you with onboarding, managing offers, or resolving any issues."
      },
      {
        question: "I'm launching a new place, how can you help?",
        answer: "961 Deals is perfect to get people through the doors of you new places and get initial reviews. You can even partner with 961, our media outlet, to drive more exposure."
      }
    ]
  },
  {
    category: "Locations",
    questions: [
      {
        question: "Is 961 Deals available across Lebanon?",
        answer: "Yes, 961 Deals is designed to support businesses in all regions of Lebanon."
      },
      {
        question: "Can I partner with 961 Deals if I have multiple locations?",
        answer: "Yes, you can create offers for individual locations or across multiple branches."
      },
      {
        question: "Can I partner with 961 Deals if I have places outside of Lebanon?",
        answer: "Yes, you can create offers, particularly within the Lebanese diaspora communities. They don't need to be Lebanese-themed businesses. We will promote these to our Lebanese diaspora and those travelling from Lebanon."
      }
    ]
  },
  {
    category: "Dynamic Pricing",
    questions: [
      {
        question: "What is dynamic pricing?",
        answer: "Dynamic pricing lets you adjust offers to attract customers during less busy times, turning off-peak slots into profit."
      },
      {
        question: "How does dynamic pricing benefit my business?",
        answer: "Dynamic pricing helps you fill empty slots during slow periods without reducing revenue during peak times. It ensures your venue operates at higher capacity, leading to increased profitability and better use of resources."
      },
      {
        question: "What kind of offers work best with dynamic pricing?",
        answer: "Discounts, 2-for-1, and time-specific offers are most effective. For example, a restaurant might offer a 20% discount on tables booked between 3 PM and 6 PM or a salon could offer 30% discounted appointments on weekday mornings. A hotel or stay   can offer 2-for-1 nights."
      },
      {
        question: "How do I know the best times to use dynamic pricing?",
        answer: "Review your business trends to identify quieter times or days. These are ideal for creating offers that attract more customers and increase foot traffic when it's typically slow."
      },
      {
        question: "Is dynamic pricing suitable for peak hours?",
        answer: "Dynamic pricing is most effective for off-peak times. However, you can use it creatively during peak hours to introduce premium pricing for exclusive experiences or limited-time offers."
      },
      {
        question: "How does dynamic pricing affect my staffing and operations?",
        answer: "Dynamic pricing helps you optimize your staff and resources by balancing demand throughout the day. It reduces stress during peak times while increasing activity during slower periods, improving overall efficiency."
      },
      {
        question: "What's the difference between static deals and dynamic pricing?",
        answer: "Static deals remain constant regardless of demand, while dynamic pricing allows you to tailor offers to specific times, days, or customer behavior, maximizing flexibility and profitability."
      },
      {
        question: "Can I offer a deal that's not limited to day or time?",
        answer: "Yes. When creating a deal, you can set it to no restrictions so the member can redeem it whenever they want."
      }
    ]
  },
  {
    category: "Reviews",
    questions: [
      {
        question: "How do reviews work on 961 Deals?",
        answer: "Only verified users can leave reviews, ensuring authentic feedback and protecting your business from fake or spam reviews. Members are required to leave a review after redeem a deal."
      },
      {
        question: "How do I get more positive reviews?",
        answer: "Simply, treat our members well. The idea is to attract new guests introducing them to your place and build loyalty so they keep coming back."
      }
    ]
  }
]