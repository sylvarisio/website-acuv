// Content for the six service detail pages, transcribed from the live
// WordPress site (acuvstrategy.com) during the migration.

export type Service = {
  slug: string
  group: 'strategy' | 'finance'
  marker: string
  title: string
  tagline: string
  audience: string
  intro: string[]
  approach: string[]
  impact: string[]
  why: string
}

export const services: Service[] = [
  {
    slug: 'change-the-game',
    group: 'strategy',
    marker: 'A',
    title: 'Change the Game',
    tagline: 'Vision Clarity for Multi-Generational Businesses',
    audience: 'For family businesses navigating legacy, leadership friction, and market evolution.',
    intro: [
      'Multi-generational businesses carry more than assets—they carry identity, history, and emotional weight. But when tradition starts to hold back progress, and leadership turns into conflict, growth stalls. That’s where acuv steps in.',
      'Change the Game is a strategic reset designed for second- and third-generation family businesses facing internal misalignment and external disruption. We don’t just mediate—we reengineer the strategic posture of the business.',
    ],
    approach: [
      'Decode generational tensions and leadership blind spots',
      'Surface market threats and internal resistance',
      'Build future scenarios that invite consensus and belief',
      'Align board and executive vision through fact-based transformation',
    ],
    impact: [
      'Repositioning the business with a unified growth mandate',
      'Restoring trust and clarity across leadership tiers',
      'Embedding confidence into decision-making and execution',
      'Turning emotional friction into strategic fuel',
    ],
    why: 'Because we understand the emotional architecture of family businesses. We craft strategies that do more than guide—they reignite growth and rebuild profitability.',
  },
  {
    slug: 'business-engineering',
    group: 'strategy',
    marker: 'B',
    title: 'Business Engineering',
    tagline: 'Growth Targeting for Early-Stage Ventures',
    audience: 'For founders with momentum but no internal support.',
    intro: [
      'Early stage businesses often chase growth without a foundation. Energy is high, but structure is missing. That’s where businesses lose clarity—and founders lose themselves.',
      'Business Engineering is acuv’s program for early-stage businesses ready to scale with purpose. We bring structure to ambition.',
    ],
    approach: [
      'Clarify market positioning and competitive edge',
      'Design organizational architecture that supports scale',
      'Build operational systems that reduce friction and increase velocity',
    ],
    impact: [
      'A business model that’s scalable, not just reactive',
      'Clear roles, workflows, and strategic priorities',
      'Founders who lead with clarity, not chaos',
      'Revenue growth that’s sustainable and strategic',
    ],
    why: 'Because we don’t just build systems—we build belief. We help founders become leaders of organizations that last.',
  },
  {
    slug: 'launch-with-confidence',
    group: 'strategy',
    marker: 'C',
    title: 'Launch with Confidence',
    tagline: 'GTM Success for New Ventures',
    audience: 'For businesses entering new markets, launching products, or expanding reach.',
    intro: [
      'A great idea means nothing without a great launch. Whether it’s a new product, a new market, or a new venture, execution is everything.',
      'Launch with Confidence is acuv’s go-to-market program designed to turn opportunity into impact.',
    ],
    approach: [
      'Assess market readiness and competitive landscape',
      'Craft go-to-market strategies tailored to business DNA',
      'Guide execution with precision, agility, and confidence',
    ],
    impact: [
      'Successful market penetration with minimized risk',
      'Strategic alignment across marketing, sales, and operations',
      'Real-time feedback loops and adaptive execution',
      'A launch that builds momentum—not confusion',
    ],
    why: 'Because we turn launches into legacies. We don’t just help you enter the market—we help you own your space.',
  },
  {
    slug: 'financial-engineering',
    group: 'finance',
    marker: '01',
    title: 'Financial Engineering',
    tagline: 'Visibility for Decision-Making',
    audience: 'For businesses seeking financial clarity and operational insight.',
    intro: [
      'Financials aren’t just numbers—they’re decisions waiting to be made. But when reports are unclear or misaligned, leadership flies blind.',
      'Financial Engineering is acuv’s solution for businesses that need visibility, not just accounting.',
    ],
    approach: [
      'Produce compliant, decision-ready financial reports',
      'Uncover performance gaps and operational inefficiencies',
      'Build dashboards that connect numbers to strategy',
    ],
    impact: [
      'Clear financial visibility across departments',
      'Strategic decisions backed by real data',
      'Confidence in reporting, forecasting, and planning',
      'A finance function that drives—not delays—growth',
    ],
    why: 'Because we speak the language of strategy and finance. We make numbers meaningful.',
  },
  {
    slug: 'mergers-acquisition',
    group: 'finance',
    marker: '02',
    title: 'Mergers & Acquisition',
    tagline: 'Credibility in Every Deal',
    audience: 'For businesses navigating growth through acquisition or strategic partnerships.',
    intro: [
      'M&A isn’t just about valuation—it’s about alignment, integration, and credibility. Deals fail when strategy and execution don’t speak the same language.',
      'acuv’s M&A service guides clients through every phase of the deal with clarity and confidence.',
    ],
    approach: [
      'Conduct rigorous due diligence and valuation',
      'Align deal structure with strategic goals',
      'Support post-deal integration with operational precision',
    ],
    impact: [
      'Deals that close with confidence and clarity',
      'Strategic alignment from negotiation to execution',
      'Reduced risk and increased long-term value',
      'A partner who sees beyond the transaction',
    ],
    why: 'Because we don’t just close deals—we build futures. We make M&A a strategic move, not just a financial one.',
  },
  {
    slug: 'investment-capital-funding',
    group: 'finance',
    marker: '03',
    title: 'Investment & Capital Funding',
    tagline: 'Clarity for Growth',
    audience: 'For businesses seeking capital to scale, expand, or transform.',
    intro: [
      'Capital is not just about money—it’s about readiness, credibility, and alignment. Many businesses struggle to raise funds because they’re not investor-ready.',
      'acuv’s Investment & Capital Funding service prepares businesses to attract the right capital, at the right time, with the right story.',
    ],
    approach: [
      'Perform equity valuation and financial modeling',
      'Build investor-ready presentations and pitch decks',
      'Connect businesses to aligned capital partners',
    ],
    impact: [
      'Capital raised with confidence and credibility',
      'Strategic alignment between business and investor goals',
      'Tools and insights for long-term financial planning',
      'A funding journey that builds belief—not just balance sheets',
    ],
    why: 'Because we help you deserve the capital you seek. We don’t just raise funds—we raise standards.',
  },
]

export const getService = (slug: string) => services.find((s) => s.slug === slug)
