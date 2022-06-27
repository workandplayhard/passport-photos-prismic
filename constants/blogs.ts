import blog1 from '@/images/blog/01.png'
import blog2 from '@/images/blog/02.png'
import blog3 from '@/images/blog/03.png'
import blog4 from '@/images/blog/04.png'
import blog5 from '@/images/blog/05.png'
import blog6 from '@/images/blog/06.png'
import blog7 from '@/images/blog/07.png'

export interface IBlog {
  id: string
  subject: string
  description?: string
  category: 'main-brief' | 'main' | 'related' | 'recommended'
  image: any
}

export const blogs: IBlog[] = [
  {
    id: 'the-12-best-increased-card-offers-to-sign-up-for-in-april',
    subject: 'The 12 best increased card offers to sign up for in April',
    description:
      'But don’t stress — it can be done. From all the official rules about passport photos to tips and',
    category: 'main-brief',
    image: blog1,
  },
  {
    id: 'wi-fi-on-cruise-ships-5-things-to-know-about-internet-use',
    subject: 'Wi-Fi on cruise ships: 5 things to know about internet use',
    description:
      'But don’t stress — it can be done. From all the official rules about passport photos to tips and',
    category: 'main-brief',
    image: blog2,
  },
  {
    id: 'explore-utahs-national-parks-with-tpgs-guide-to-the',
    subject: 'Explore Utah’s national parks with TPG’s guide to the',
    description: '',
    category: 'related',
    image: blog3,
  },
  {
    id: 'everything-you-need-to-know-about-the-best-seats-on',
    subject: 'Everything you need to know about the best seats on',
    description: '',
    category: 'related',
    image: blog4,
  },
  {
    id: '9-things-to-consider-when-choosing-to-book-via-a-portal',
    subject: '9 things to consider when choosing to book via a portal',
    description: '',
    category: 'related',
    image: blog4,
  },
  {
    id: 'your-guide-to-the-chase-ink-business-credit-cards',
    subject: 'Your guide to the Chase Ink Business credit cards',
    description:
      'But don’t stress — it can be done. From all the official rules about passport photos to tips and',
    category: 'recommended',
    image: blog4,
  },
  {
    id: 'everything-you-need-to-know-about-traveling-with-medication',
    subject: 'Everything you need to know about traveling with medication',
    description:
      'But don’t stress — it can be done. From all the official rules about passport photos to tips and',
    category: 'recommended',
    image: blog5,
  },
  {
    id: 'escape-crowded-national-parks-at-these-7-alternate-destinations',
    subject: 'Escape crowded national parks at these 7 alternate destinations',
    description:
      'But don’t stress — it can be done. From all the official rules about passport photos to tips and',
    category: 'recommended',
    image: blog6,
  },
  {
    id: 'from-airports-to-hotels-tips-for-skipping-long-lines-when-you',
    subject: 'From airports to hotels: Tips for skipping long lines when you',
    description:
      'But don’t stress — it can be done. From all the official rules about passport photos to tips and',
    category: 'recommended',
    image: blog6,
  },
  {
    id: 'current-shortage-of-airline-pilots-could-take-years-to-refine',
    subject: 'Current Shortage of Airline Pilots Could Take Years to Refine',
    description: '',
    category: 'related',
    image: blog3,
  },
  {
    id: 'switzerland-from-may-2-entry-restrictions-lifted',
    subject: 'Switzerland: From May 2 Entry Restrictions Lifted',
    description: '',
    category: 'related',
    image: blog4,
  },
  {
    id: 'spain-relaxes-the-requirement-for-wearing-masks-i',
    subject: 'Switzerland: From May 2 Entry Restrictions Lifted',
    description: '',
    category: 'related',
    image: blog7,
  },
  {
    id: 'earn-easy-hilton-points-by-eating-at-your-favorite-restaurants',
    subject: 'Earn easy Hilton points by eating at your favorite restaurants',
    description:
      'But don’t stress — it can be done. From all the official rules about passport photos to tips and',
    category: 'main',
    image: blog2,
  },
  {
    id: 'bonaire-new-tourism-tax-and-covid-entry-requirements',
    subject: 'Bonaire: New Tourism Tax and Covid Entry Requirements',
    description:
      'But don’t stress — it can be done. From all the official rules about passport photos to tips and',
    category: 'main-brief',
    image: blog4,
  },
  {
    id: 'study-shows-gas-prices-surpass-covid-as-major-travel',
    subject: 'Study Shows Gas Prices Surpass Covid as Major Travel',
    description:
      'But don’t stress — it can be done. From all the official rules about passport photos to tips and',
    category: 'main-brief',
    image: blog5,
  },
  {
    id: 'eu-countries-starting-to-reopen-their-embassies-in',
    subject: 'EU Countries Starting to Reopen Their Embassies in',
    description:
      'But don’t stress — it can be done. From all the official rules about passport photos to tips and',
    category: 'main-brief',
    image: blog6,
  },
]
