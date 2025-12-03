import { NavItem, Plan, FaqItem, TestCase } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Features', href: '#features' },
  { label: 'Results', href: '#results' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Resources', href: '#faq' },
];

export const PLANS: Plan[] = [
  {
    name: 'Starter',
    price: 99,
    description: 'Perfect for local businesses and startups starting their SEO journey.',
    articlesPerMonth: '~30 articles',
    features: [
      'Daily publishing',
      'Market & competitor scan',
      'Automated content plan',
      'Basic reporting',
      'Email support'
    ]
  },
  {
    name: 'Growth',
    price: 179,
    description: 'For growing brands that need to dominate their niche quickly.',
    articlesPerMonth: '~60 articles',
    highlight: true,
    features: [
      'Double daily publishing',
      'Advanced keyword clustering',
      'Conversion path mapping',
      'Technical SEO audits',
      'Priority live chat support'
    ]
  },
  {
    name: 'Agency',
    price: 799,
    description: 'Custom volume and white-label options for multiple sites.',
    articlesPerMonth: 'Custom volume',
    features: [
      'Multiple site management',
      'White-label reports',
      'API access',
      'Dedicated success manager',
      'Custom integrations'
    ]
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "What exactly does Fonzy do for my site?",
    answer: "Fonzy connects to your CMS, scans your market and competitors to build a strategy, and then automatically writes, optimizes, and publishes long-form SEO articles daily."
  },
  {
    question: "How soon can I expect to see results?",
    answer: "Most users see initial ranking improvements within 3-4 weeks due to the velocity of content, with significant traffic growth typically occurring between months 3 and 6."
  },
  {
    question: "Is the content unique? How do you avoid 'AI slop'?",
    answer: "We don't just prompt generic models. Fonzy uses a multi-stage agentic workflow that researches unique data points, follows buyer journeys, and adheres to strict quality guidelines to produce helpful, non-generic content."
  },
  {
    question: "Do I need a developer to set this up?",
    answer: "No. Setup takes about 3 minutes. If you use WordPress, Webflow, Shopify, or other major platforms, it connects with a few clicks."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, all plans are month-to-month with no long-term contracts. You can cancel directly from your dashboard."
  }
];

export const TEST_CASES: TestCase[] = [
  {
    clientType: "B2B SaaS",
    metric: "+120% organic traffic",
    quote: "Fonzy runs on autopilot. We stopped hiring writers and started growing."
  },
  {
    clientType: "Local Service",
    metric: "3x Leads in 4 months",
    quote: "Finally, we show up for every neighborhood keyword in our city."
  },
  {
    clientType: "Ecommerce",
    metric: "450 new ranking keywords",
    quote: "The product descriptions and blog posts are actually readable and convert."
  },
  {
    clientType: "Marketing Agency",
    metric: "Saved 40h/month",
    quote: "We use Fonzy for our clients' baseline content. It's a no-brainer."
  }
];
