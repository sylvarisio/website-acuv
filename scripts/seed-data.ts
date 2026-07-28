// Content migrated from the live WordPress site (acuvstrategy.com).
// Bodies use a simple block format converted to Lexical JSON by the seed script.

export type Block = { h2?: string; p?: string; ul?: string[]; quote?: string }

export type ThoughtSeed = {
  slug: string
  tlNumber: number
  title: string
  subtitle?: string
  excerpt: string
  publishedDate: string
  pdfFile?: string // filename inside seed-assets/
  coverFile?: string // filename inside seed-assets/covers/
  body?: Block[]
}

export const thoughts: ThoughtSeed[] = [
  {
    slug: 'global-trade-in-turbulence',
    tlNumber: 1,
    title: 'Global Trade in Turbulence',
    subtitle: 'Navigating Tariff-Driven Risk with Confidence',
    excerpt:
      'Tariffs aren’t just policy—they’re strategic inflection points. Learn how businesses can audit exposure, rebuild supply chains, and adapt financing for volatile markets.',
    publishedDate: '2024-03-05',
    body: [
      { h2: 'The Calm Is Over' },
      { p: 'In an era defined by unpredictability, trade is no longer a neutral force—it’s a battleground. With the U.S. imposing sweeping tariffs—some exceeding 50%—on core sectors from manufacturing to clean energy, global businesses are being thrust into unfamiliar terrain.' },
      { p: 'Margins are shrinking. Supply chains are splintering. And yet, decision-makers are expected to move fast, stay bold, and deliver returns in markets that now feel politically charged and economically volatile.' },
      { h2: 'But in the eye of this storm, clarity is a strategy—and confidence is the most valuable currency.' },
      { h2: 'The Trade Shake-Up: Why This Isn’t Just Policy' },
      { p: 'What makes this tariff wave different isn’t just the numbers—it’s the ripple effect:' },
      { ul: [
        'Market access is now gated by diplomacy. Countries retaliate or align depending on origin-of-trade, making distribution riskier across traditional markets.',
        'Friend-shoring is rewriting global supply chains. The shift from low-cost to politically safe suppliers is costly, complex, and often slower.',
        'Growth forecasts are broken. Businesses that relied on global scale are now facing localized ceilings—with no updated financial roadmap.',
      ] },
      { p: 'Tariffs have become more than line items on customs forms—they are strategic inflection points. And the danger isn’t just in reacting too slowly. It’s in underestimating how far they reach into valuation, credibility, and competitive advantage.' },
      { h2: 'The Strategic Toll of Inaction' },
      { p: 'Let’s break down the hidden costs of navigating this new terrain without clarity:' },
      { p: '🔻 Margin erosion: Unoptimized sourcing strategies can eat up 18–25% of gross margin depending on sector exposure.' },
      { p: '🔻 Valuation volatility: Companies facing undiagnosed trade risk often lose investor confidence due to perceived instability.' },
      { p: '🔻 Opportunity blindness: Overfocused on tariff avoidance, many miss adjacent market opportunities that could be unlocked through strategic repositioning.' },
      { p: 'The result? Even well-run businesses are finding themselves outpaced by smaller, more agile players who treat tariffs not as roadblocks—but as signposts.' },
      { h2: 'Path Forward: Strategies for Confident Growth' },
      { p: 'Here’s how forward-thinking businesses are responding—and how ACUV turns those responses into repeatable outcomes:' },
      { h2: '1. Conduct a Tariff Exposure Audit' },
      { p: '→ Understand where risk lies across SKUs, partners, and distribution.' },
      { p: 'ACUV helps clients quantify trade sensitivity and build tiered response plans using market data, financial modeling, and sourcing alternatives.' },
      { h2: '2. Reengineer Supply Chains with Precision' },
      { p: '→ Shift from reactive friend-shoring to intentional repositioning.' },
      { p: 'Our teams guide businesses through supplier strategy, risk-adjusted costing, and scenario planning—often tied to execution through our CXO Mandate.' },
      { h2: '3. Align Financial Strategy with Market Reality' },
      { p: '→ Build capital narratives that reflect post-tariff value.' },
      { p: 'ACUV’s finance division helps clean financial history, adjust revenue assumptions, and craft investor decks that withstand scrutiny and project confidence.' },
      { h2: 'Clarity When It Matters Most' },
      { p: 'Whether you’re launching in emerging markets, recalibrating a multi-country footprint, or navigating investor due diligence amid global volatility—ACUV walks the path with you. Our strategy programs and finance services are designed to meet businesses where complexity begins, and lead them where confident growth becomes real.' },
      { h2: 'The Time to Move Is Now' },
      { p: 'Trade disruption isn’t temporary—it’s becoming the new baseline. But the businesses that win won’t be those that brace—they’ll be those that build.' },
      { quote: 'Tariffs can compress profit. They can’t shrink ambition. Not when clarity leads the way.' },
      { h2: 'Let ACUV help you turn risk into readiness—and strategy into scale.' },
    ],
  },
  {
    slug: 'manufacturing-the-future',
    tlNumber: 2,
    title: 'Manufacturing the Future',
    subtitle: 'Innovations That Redefine Scale and Sustainability',
    excerpt:
      'From additive manufacturing to AI-powered robotics, this piece breaks down disruptive forces and how manufacturers can lead—not follow—industrial change.',
    publishedDate: '2024-03-05',
    body: [
      { h2: 'The Shift Has Begun' },
      { p: 'Manufacturing is no longer about mass production—it’s about precision, personalization, and purpose. As global pressures mount—from supply chain fragility to ESG mandates—manufacturers are being called to do more than produce. They must adapt, innovate, and lead.' },
      { p: 'From additive manufacturing to AI-powered robotics, the sector is undergoing a renaissance. But innovation isn’t just about technology—it’s about mindset. And the manufacturers who embrace change early will shape the next industrial era.' },
      { h2: 'The Forces Reshaping Manufacturing' },
      { p: 'Let’s unpack the five seismic shifts redefining the factory floor:' },
      { h2: '1. Additive Manufacturing (3D Printing)' },
      { p: 'No longer niche, 3D printing is enabling rapid prototyping, lightweight components, and localized production. → Aerospace and automotive leaders are using it to reduce tooling costs and accelerate design cycles. → Medical device makers are customizing prosthetics and implants with unprecedented precision.' },
      { h2: '2. AI-Augmented Robotics & Automation' },
      { p: 'Robots are evolving from task executors to intelligent collaborators. → Vision-enabled cobots adapt to high-mix environments. → AI-driven welding and assembly systems reduce downtime and improve quality.' },
      { h2: '3. Sustainable Materials & Circular Design' },
      { p: 'Eco-conscious manufacturing is now a competitive edge. → Bio-based polymers and recycled metals are replacing legacy inputs. → Circular design principles are driving product longevity and resource efficiency.' },
      { h2: '4. Digital Twins & Predictive Systems' },
      { p: 'Virtual replicas of production lines simulate outcomes before they happen. → Manufacturers can test, tweak, and optimize without disrupting operations. → Predictive maintenance reduces unplanned downtime and extends asset life.' },
      { h2: '5. Hybrid Energy & Smart Infrastructure' },
      { p: 'Energy volatility is pushing manufacturers to rethink power. → Propane-powered compressors and solar-integrated systems are gaining traction. → Smart lighting and climate control reduce operational costs and carbon footprint.' },
      { h2: 'Lead the Change, Don’t Chase It' },
      { p: 'Forward-thinking manufacturers aren’t just adopting tech—they’re reengineering their business models:' },
      { ul: [
        'Modular production lines that flex with demand',
        'Data-driven decision frameworks that reduce friction',
        'Agile org structures that empower frontline innovation',
      ] },
      { p: 'But innovation without execution is just noise. That’s where ACUV steps in.' },
      { h2: 'Strategy That Activates Innovation' },
      { p: 'Through our Business Engineering and Change the Game programs, ACUV helps manufacturers:' },
      { ul: [
        'Reposition operations for innovation-readiness',
        'Align financial structures with ESG and tech investment',
        'Design go-to-market strategies for new products and capabilities',
        'Build organizational clarity to support scale and agility',
      ] },
      { p: 'Whether you\'re a legacy manufacturer seeking reinvention or a tech-driven startup chasing scale—ACUV delivers the clarity, structure, and confidence to lead.' },
      { h2: 'The Future Is Already Here' },
      { quote: 'Manufacturing isn’t just evolving—it’s being reimagined.' },
      { p: 'The next industrial revolution won’t be led by machines alone. It will be led by leaders who know how to activate them. ACUV helps manufacturers become those leaders—through strategy, execution, and finance that moves with purpose.' },
      { h2: 'Let’s build the systems of tomorrow, today.' },
    ],
  },
  {
    slug: 'organizational-design-in-the-age-of-agility',
    tlNumber: 3,
    title: 'Organizational Design in the Age of Agility',
    subtitle: 'Structuring for Speed and Smarter Decisions',
    excerpt:
      'Fluid structures, AI frameworks, and decision speed: discover how tomorrow’s organizations are built—and how ACUV helps architect yours.',
    publishedDate: '2024-03-05',
    body: [
      { h2: 'The Architecture of Advantage' },
      { p: 'In today’s volatile business landscape, the way an organization is structured is no longer just an operational choice—it’s a strategic weapon. Traditional hierarchies, slow decision cycles, and rigid reporting lines are being replaced by fluid, adaptive architectures that prioritize speed, clarity, and collaboration.' },
      { p: 'From Haier’s microenterprise model to Buurtzorg’s self-managed teams, the world’s most innovative companies aren’t just changing what they produce—they’re reinventing how they operate. And the question facing every business today is simple: Are you structured to move—or stuck in place?' },
      { h2: 'The Forces Driving Structural Innovation' },
      { p: 'Let’s unpack the trends reshaping organizational design and decision-making:' },
      { h2: '1. Decentralized Decision-Making' },
      { p: '→ Companies like Mastercard and Bayer are flattening hierarchies to empower frontline teams. → Decision rights are being distributed, not concentrated—speed becomes a strategic KPI.' },
      { h2: '2. Microenterprise & Pod-Based Models' },
      { p: '→ Haier’s “Rendanheyi” model breaks the company into autonomous units with P&L ownership. → Agile pods and team topologies allow rapid response to market shifts.' },
      { h2: '3. AI-Augmented Decision Frameworks' },
      { p: '→ AI tools now support scenario modeling, risk analysis, and predictive insights. → Leaders are shifting from intuition-led to data-backed decisions—without losing human judgment.' },
      { h2: '4. Skill-Based Structures' },
      { p: '→ Roles are being defined by capability, not title. → T-shaped talent profiles allow cross-functional agility and deeper collaboration.' },
      { h2: '5. Hybrid Work & Digital Ecosystems' },
      { p: '→ Remote teams require new governance models, asynchronous workflows, and trust-based leadership. → Organizational design now includes digital infrastructure as a core layer.' },
      { h2: 'The Risk of Standing Still' },
      { p: 'Organizations that cling to legacy structures face:' },
      { ul: [
        'Decision drag—slow responses to fast-moving threats',
        'Talent disengagement—when empowered individuals are trapped in rigid systems',
        'Innovation bottlenecks—when ideas die in approval loops',
      ] },
      { p: 'In a world where adaptability defines survival, structure must evolve—or become the bottleneck.' },
      { h2: 'Designing for Clarity, Speed, and Confidence' },
      { p: 'Through our CXO Mandate, Business Engineering, and Organizational Design services, ACUV helps businesses:' },
      { ul: [
        'Redesign org charts for agility and accountability',
        'Implement decision frameworks that reduce friction and increase clarity',
        'Align structure with strategy—so every role, team, and process drives measurable impact',
        'Embed execution leadership to activate change, not just plan it',
      ] },
      { p: 'Whether you\'re scaling, restructuring, or launching into new markets—ACUV builds the architecture that moves with you.' },
      { h2: 'Structure Is Strategy' },
      { quote: 'The future belongs to organizations that think fast and move faster.' },
      { p: 'Organizational design isn’t a back-office exercise—it’s the blueprint for growth. ACUV helps leaders build structures that don’t just support decisions—they accelerate them.' },
      { h2: 'Let’s architect your next chapter—with clarity, confidence, and impact.' },
    ],
  },
  {
    slug: 'getting-ahead-of-the-next-stage-of-economic-disruption',
    tlNumber: 4,
    title: 'Getting Ahead of the Next Stage of Economic Disruption',
    excerpt:
      'The global economy no longer moves in predictable cycles—it pulses through disruption. A disciplined framework to decode volatility, anticipate directional drift, and anchor strategy in clarity.',
    publishedDate: '2025-11-01',
    pdfFile: 'getting-ahead-of-the-next-stage-of-economic-disruption.pdf',
    coverFile: 'covers/getting-ahead-of-the-next-stage-of-economic-disruption.png',
    body: [
      { p: 'The global economy no longer moves in predictable cycles—it pulses through disruption. What began as a health crisis, followed by a fiscal flood, has hardened into a geopolitical recalibration. The result is not episodic volatility, but structural turbulence that is reshaping currencies, commodities, and capital flows.' },
      { p: 'In our latest publication, Getting Ahead of the Next Stage of Economic Disruption, we provide senior executives and global decision makers with a disciplined framework to decode volatility, anticipate directional drift, and anchor strategy in clarity.' },
      { h2: 'Why This Matters Now' },
      { p: 'Over the past two years, markets have cycled through shock, recalibration, and fragile relief. The U.S. dollar surged on yield differentials and capital flight, while emerging market currencies weakened under pressure. Gold and silver soared to historic highs as safe haven demand intensified. Equities rotated defensively, with U.S. indices supported by infrastructure and defense spending while emerging markets lagged.' },
      { p: 'These movements are not random—they are expressions of systemic stress.' },
      { h2: 'Decoding Volatility: The Currency Volatility Index (CVI)' },
      { p: 'To decode these signals, we introduce the Currency Volatility Index (CVI), a compass that captures the pulse of trust and liquidity across FX, metals, and equities. The CVI reveals that volatility is not a passing storm but a structural drift, shaped by two entangled forces: geopolitical tension and liquidity asymmetry.' },
      { h2: 'Scenarios That Define the Horizon' },
      { p: 'Our nine-quadrant scenario grid distills these forces into strategic outcomes. The prevailing scenarios point to a world where liquidity is fragmented, geopolitical tension is entrenched, and trust remains fragile.' },
      { ul: [
        'S1: Classic Flight to Safety — traditional safe havens are crowded; capital seeks depth and immediate liquidity.',
        'S2: Fragmented Risk Rotation — defensive equity rotations dominate; sector leadership narrows.',
        'S3: Silent Stress — surface stability masks widening fragilities; emerging markets remain vulnerable.',
      ] },
      { h2: 'Introducing the Alternative: Digital Assets' },
      { p: 'Strategy requires more than diagnosis—it requires disciplined alternatives. We introduce digital assets as an institutional-grade option. Far from speculative hype, digital assets now span infrastructure, middleware, and applications—offering programmable trust, transparent cash flows, and new forms of capital efficiency.' },
      { p: 'Inside the publication, we:' },
      { ul: [
        'Map the digital asset value chain and viable business models across each layer',
        'Provide global investment and revenue snapshots with growth potential through 2030',
        'Examine ESG alignment, valuation benchmarks, and strategic signals for investors',
      ] },
      { p: 'For executives, this section serves as an investment playbook—a reference to navigate the digital frontier with clarity and conviction.' },
    ],
  },
  {
    slug: 'getting-ahead-of-the-mena-liquidity-squeeze',
    tlNumber: 5,
    title: 'Getting Ahead of the MENA Liquidity Squeeze',
    excerpt:
      'MENA’s majority economies now sit at the bull’s eye of global uncertainty. Oil suppression, corridor fragility, and rival standards are converging into pressures that extend far beyond sovereign balance sheets.',
    publishedDate: '2025-11-11',
    pdfFile: 'getting-ahead-of-the-mena-liquidity-squeeze.pdf',
    coverFile: 'covers/getting-ahead-of-the-mena-liquidity-squeeze.png',
    body: [
      { p: 'In today’s volatile business environment, MENA’s majority economies now sit at the bull’s eye of global uncertainty. Oil suppression, corridor fragility, and rival standards are converging into pressures that extend far beyond sovereign balance sheets — directly into inflation, credit, consumer demand, talent, and family office portfolios.' },
      { p: 'Our latest publication, Getting Ahead of the MENA Liquidity Squeeze, frames the facts, pressures, and scenarios (S1–S3) and translates them into boardroom discipline.' },
      { p: 'Key insights include:' },
      { ul: [
        'GDP concentration in the 5+1 economies amplifies systemic exposure.',
        'Liquidity lifelines are fragile — remittances, tourism, corridors, and FDI are under strain.',
        'Scenarios range from Flight to Safety to Silent Stress, with outcomes spanning inflation spikes, credit tightening, and talent flight.',
        'Boards must act with dual discipline: macro resilience and micro defense.',
      ] },
      { h2: 'Recommendations for Leaders' },
      { p: 'We provide condensed recommendations across six pillars — Inflation, Liquidity, Purchasing Power, Talent, Family Offices, and Scenario Playbooks — designed for immediate boardroom application.' },
      { p: 'This note is intended to help leaders anticipate disruption before it materializes, and to prepare actionable strategies that protect both sovereign resilience and household trust.' },
    ],
  },
  {
    slug: 'vc-flows-and-innovation-rails',
    tlNumber: 6,
    title: 'VC Flows & Innovation Rails',
    subtitle: 'Beyond Applications — VC Flows, PE Bets, and the GCC Innovation Rails',
    excerpt:
      'A strategic lens on the GCC+Egypt venture ecosystem: structural asymmetries that shape risk, resilience, and opportunity across inbound venture capital and outbound sovereign investment.',
    publishedDate: '2025-11-15',
    pdfFile: 'vc-flows-and-innovation-rails.pdf',
    coverFile: 'covers/vc-flows-and-innovation-rails.png',
    body: [
      { p: 'Beyond Applications – VC Flows, PE Bets, and the GCC Innovation Rails offers a strategic lens on the GCC+Egypt venture ecosystem. The publication does not critique or spotlight flaws; instead, it illuminates structural asymmetries that shape risk, resilience, and opportunity.' },
      { p: 'Inbound venture capital has surged across the region, with Saudi Arabia, the UAE, and Egypt leading deal activity. FinTech, SaaS, and Ecommerce dominate funding flows, reflecting entrepreneurial appetite for application-layer ventures that scale quickly and align with procurement demand. Yet beneath this vibrancy lies dependency: startups consume infrastructure—cloud, compute, payments, logistics—rather than build it. They remain price takers on standards, FX, and vendor policies set abroad.' },
      { p: 'Outbound capital tells the other half of the story. GCC sovereign wealth funds deploy $30–40B annually into infrastructure abroad—AI/data centers, energy transition, healthcare platforms, and global logistics. These investments shape standards and cost curves internationally, while inbound venture builds applications at home. The asymmetry is structural: outbound builds leverage abroad, inbound builds demand locally. Sovereign assets remain accretive when volatility strikes, but local ventures absorb shocks first.' },
      { h2: 'Four Risk Transmission Channels' },
      { ul: [
        'Standards risk: AI governance, data residency, and cybersecurity frameworks set externally.',
        'FX/rate channel: USD-priced infrastructure imports volatility into local opex.',
        'Exit bottlenecks: IPO/M&A cycles narrow globally, delaying liquidity for late-stage ventures.',
        'Vendor concentration: Hyperscalers and payment rails dominate, creating fragility.',
      ] },
      { h2: 'Three Strategic Scenarios' },
      { ul: [
        'Application Hub Continuity — resilience persists, but dependency remains.',
        'Infrastructure Localization — sovereign capital bridges inward, building domestic rails; autonomy increases but requires patient capital and talent depth.',
        'Hybrid Corridor — sovereigns continue global infra bets while selectively building domestic capacity, balancing leverage and resilience.',
      ] },
      { h2: 'The Collaboration Framework' },
      { ul: [
        'Capital Allocation: Sovereigns balance outbound with domestic co-investment; investors expand risk appetite into infra startups; entrepreneurs pursue blended capital structures.',
        'Procurement Posture: Corporates and governments anchor demand through transformation mandates and giga-projects; entrepreneurs align roadmaps with corridor procurement.',
        'Talent Funnels: Universities in Saudi Arabia and the UAE already produce thousands of graduates in cybersecurity, cloud, and data science. Accelerators and corporates must absorb this talent into infrastructure ventures.',
        'Policy Focus: Governments incentivize infra localization; regulators extend sandboxes to AI/data fabrics; entrepreneurs engage policy dialogues to shape standards.',
      ] },
      { p: 'The message is clear: Vision 2030 and the UAE’s AI Strategy 2031 are not just policy documents—they are strategic invitations. The educational sector has delivered; the venture market must now absorb. Autonomy will not be achieved by sovereigns alone. It requires ecosystem collaboration, patient capital, and founders willing to build the rails, not just ride them.' },
    ],
  },
  {
    slug: 'outlook-report-2026-sovereignty-at-stake',
    tlNumber: 7,
    title: 'Outlook Report 2026 — Sovereignty at Stake',
    excerpt:
      'The world enters 2026 in contested sovereignty. Energy flows are politicized, alliances are brittle, and technology supply chains are exposed. A comprehensive compass for institutions, family enterprises, investors, and individuals.',
    publishedDate: '2026-01-10',
    pdfFile: 'outlook-report-2026-sovereignty-at-stake.pdf',
    coverFile: 'covers/outlook-report-2026-sovereignty-at-stake.png',
    body: [
      { p: 'The world enters 2026 in contested sovereignty. Energy flows are politicized, alliances are brittle, and technology supply chains are exposed. Volatility is no longer episodic; it has become structural, embedding itself into every corridor of trade, finance, and households.' },
      { p: 'Our Outlook Report 2026 provides a comprehensive compass for institutions, family enterprises, investors, and individuals. It begins with the triggers unsettling the present: Washington’s unilateral acts from Venezuela’s oil flows to Greenland’s rare earths, NATO’s fiscal exhaustion, and Beijing’s hardened posture toward Taiwan.' },
      { p: 'These triggers unfold into scenarios — fragile equilibrium, fragmented opportunism, or systemic rupture — each carrying profound dents across politics, economics, and markets.' },
      { p: 'The report traces how oil swings with geopolitics, rare earths surge under Arctic and Taiwan risk, semiconductors choke under disruption, and precious metals remain elevated as capital seeks havens. Equities rotate toward defense and energy, FX fragments along fiscal strain, and inflation embeds unevenly across households and industries.' },
      { h2: 'Key Highlights' },
      { ul: [
        'U.S. Strike on Iran: systemic tremor across oil, FX, metals, and equities.',
        'Greenland Sovereignty Shock: rare earth volatility, fiscal imbalance, and industrial disruption.',
        'Taiwan Semiconductor Choke: structural volatility floor in technology markets.',
        'Fragile Equilibrium: restraint without stability, sustaining fragmentation.',
      ] },
      { p: 'Annexes such as the CVI Pulse quantify volatility premiums across energy, FX, and technology corridors, while the MENA Lens grounds continuity in Gulf logistics, food inflation, and capital flight.' },
      { p: 'The message is clear: 2026 is not about waiting for stability. It is about navigating contested terrain with clarity and intent. Institutions must fortify liquidity and industrial lifelines. Families and individuals must anchor discipline, adaptability, and awareness of opportunity hubs.' },
      { p: 'This Outlook Report is not a forecast — it is a compass. It equips decision makers to transform volatility into foresight, ensuring confidence endures even when sovereignty is at stake.' },
    ],
  },
  {
    slug: 'heavy-industry-margins-under-siege',
    tlNumber: 8,
    title: 'Heavy Industry Margins Under Siege',
    subtitle: 'Cash Conversion Cycle to Defend',
    excerpt:
      'Metals and heavy industry remain the structural foundation of global manufacturing. Our January 2026 Outlook introduces the Cash Conversion Cycle as the anchor index for resilience.',
    publishedDate: '2026-01-20',
    pdfFile: 'heavy-industry-margins-under-siege.pdf',
    coverFile: 'covers/heavy-industry-margins-under-siege.png',
    body: [
      { p: 'Metals and heavy industry remain the structural foundation of global manufacturing, shaping infrastructure, defense, energy, and advanced technology. Unlike other subsectors, exposures here are systemic: raw materials are largely imported and dollar-denominated, energy costs remain fossil-dependent, and tariff regimes shift demand corridors across continents. Volatility in this sector is not peripheral — it is the transmission belt into the wider economy.' },
      { p: 'Our January 2026 Outlook, Heavy Industry Margins Under Siege – Cash Conversion Cycle to Defend, introduces the Cash Conversion Cycle (CCC) as the anchor index for resilience. Traditional measures such as the Producer Price Index capture input inflation, but they do not reveal how firms translate operational strain into financial outcomes. The CCC does. It measures the time taken to convert inventory and receivables into cash, offset by the credit extended through payables.' },
      { h2: 'Regional Divergence Is Sharp' },
      { ul: [
        'Eurozone: CCC of 85 days, ROCE 20%, margins compressed by FX volatility and tariff exposure.',
        'USA: CCC of 60 days, ROCE 25%, inflation and policy risk dilute advantage.',
        'MENA: CCC of 110 days, ROCE 27%, energy privilege cushions returns but FX fragility persists.',
        'APAC: CCC of 35 days, ROCE 33%, domestic demand buffers volatility yet coal dependence remains a risk.',
      ] },
      { p: 'For business owners, the CCC is the lever to net off operational losses into defended financial returns. For investors, it is the buffer that determines whether ROI compression remains manageable or cascades into equity volatility. The analysis shows that cycle compression can restore ROCE across regions, even under systemic shocks, and that M&A and cross-regional consolidation remain the structural hedge for portfolios.' },
      { p: 'The implication is clear: metals and heavy industry are not simply another component of manufacturing. They are the sector where financial discipline and scenario-based positioning can most visibly transform risk into opportunity.' },
    ],
  },
  {
    slug: 'the-sovereign-engine',
    tlNumber: 9,
    title: 'The Sovereign Engine',
    excerpt:
      'In today’s private capital corridors, charisma is no longer capital — it is a terminal discount. The Sovereign Engine is our architectural framework to transform founder-led fragility into institutional-grade equity.',
    publishedDate: '2026-02-10',
    pdfFile: 'the-sovereign-engine.pdf',
    coverFile: 'covers/the-sovereign-engine.png',
    body: [
      { p: 'In today’s private capital corridors, charisma is no longer capital — it is a terminal discount. Founder-dependent businesses are flagged as liabilities, trading at 30–50% lower multiples than systematized peers. The Sovereign Engine is our architectural framework to close this gap, transforming founder-led fragility into institutional-grade equity.' },
      { p: 'The diagnostic is clear: Key Man risk erodes value, institutional fatigue stalls growth, and the Founder’s Aura imposes a permanent haircut on valuation multiples. Sophisticated capital does not buy people; it buys engines.' },
      { p: 'The Sovereign Engine introduces a mechanical transition from Managed Asset to Liquid Industrial Engine. By implementing audit-ready protocols, predictive telemetry, and meritocratic talent supply chains, businesses achieve founder redundancy and market fungibility. The result is a valuation uplift from 3–4x EBITDA to 7–8x, with documented governance improving TSR by 14%.' },
      { p: 'This framework dismantles fragility disguised as resilience. Gut feel is replaced with predictive analytics; loyalty hires give way to ROI-driven talent chains. Scenario Playbooks (S1/S2/3CD) transform shocks into Volatility Alpha, ensuring assets thrive on volatility that destroys peers.' },
      { p: 'For family businesses, the Sovereign Engine is a sovereign pathway to protect legacy and continuity. For corporate finance executives, it is a corridor to high-yield tickets that meet institutional standards.' },
      { p: 'The reflection is binary: Ego vs. Equity. Do you want to be the most important person in the room, or the sovereign architect of the most valuable asset on the desk?' },
      { p: 'The Sovereign Engine moves the needle north.' },
    ],
  },
  {
    slug: 'the-sovereign-guide-to-capital',
    tlNumber: 10,
    title: 'The Sovereign Guide to Capital',
    excerpt:
      'The S1 Era is defined by the Solvency Trap: rates elevated, liquidity contracting. For mid-market firms, refinancing is no longer a lever — it is a hazard. Stress tables, allocator matrices, and board-level roadmaps for executives.',
    publishedDate: '2026-03-10',
    pdfFile: 'the-sovereign-guide-to-capital.pdf',
    coverFile: 'covers/the-sovereign-guide-to-capital.png',
    body: [
      { p: 'The S1 Era is defined by the Solvency Trap: rates elevated, liquidity contracting. For mid-market firms, refinancing is no longer a lever — it is a hazard.' },
      { p: 'The Sovereign Guide to Capital provides executives with stress tables, allocator matrices, solvency metrics, and board-level roadmaps. It maps capital migration away from banks toward Family Offices ($195B deployed Feb 2026), Sovereign Funds ($15T AUM, +60% MENA growth since 2020), and Private Syndicates.' },
      { p: 'It outlines five prerequisites for investability: governance architecture, liquidity redundancy, operational continuity, capital transparency, and strategic mandate. Firms that harden governance and embed within institutional wrappers become investable. Those that remain personality-driven are bypassed.' },
      { p: 'Mechanical redundancy is quantified: freight surcharges $500–$800 per container, insurance premiums transforming into permanent Security Taxes, and distressed acquisitions becoming opportunities.' },
      { p: 'The Guide closes with a 90-day roadmap: governance hardening, liquidity corridors, allocator engagement, wrapper structuring, redundancy financing. Solvency is not improvised — it is engineered.' },
      { p: 'This is not metaphor. It is architecture. From diagnostic to mandate, contraction to expansion, survival to legacy.' },
    ],
  },
]

export const documents = [
  {
    title: 'acuvStrategy Corporate Profile 2026',
    category: 'company-profile' as const,
    file: 'acuv-strategy-corporate-profile-2026.pdf',
  },
  {
    title: 'The Will to Win — 10-Year Anniversary Report',
    category: 'report' as const,
    file: 'the-will-to-win-10-year-anniversary-report.pdf',
  },
]

export type StorySeed = {
  slug: string
  order: number
  title: string
  client: string
  industry: string
  theme: string
  excerpt: string
  milestones: string[]
  body: Block[]
  quote: string
  closing?: string
}

// Success Stories recovered verbatim from the live WordPress database
// (page "Success Stories", post ID 26).
export const stories: StorySeed[] = [
  {
    slug: 'turning-friction-into-clarity',
    order: 1,
    title: 'Turning Friction into Clarity',
    client: 'Multi-generational Manufacturing Business',
    industry: '3rd Gen Family Business — Manufacturing',
    theme: 'Conflict resolution, strategic alignment, and legacy transformation',
    excerpt: 'Family manufacturer — alignment and legacy transformation.',
    milestones: [
      '“Change the Game” Program',
      'Surfaced Market Threats',
      'Decoded Emotional & Strategic Friction',
      'Board-Aligned Scenarios & Forecasts',
    ],
    body: [
      { p: 'In the heart of a legacy manufacturing firm, generational tensions had calcified into operational paralysis. The founding generation clung to practices that once built the business, while the rising leadership struggled to introduce innovation. Decisions stalled. Meetings became battlegrounds. The business, once a symbol of resilience, was drifting.' },
      { p: 'acuv stepped in—not as referees, but as architects of clarity. Through the “Change the Game” program, we didn’t just mediate; we decoded the emotional and strategic friction. We extracted market threats that had gone unspoken and surfaced internal tensions that had long been buried under politeness and protocol.' },
      { p: 'Then came the pivot: we built future scenarios that didn’t just forecast growth—they invited belief. With board-aligned forecasts and a shared vision, the leadership found common ground. In just nine months, the business repositioned itself with a renewed mandate for growth.' },
    ],
    quote: 'acuv helped us see the future clearly—and get there together.',
    closing: 'This wasn’t just a turnaround. It was a reconciliation between legacy and possibility.',
  },
  {
    slug: 'raising-capital-with-confidence',
    order: 2,
    title: 'Raising Capital with Confidence',
    client: 'FMCG Distributor',
    industry: 'FMCG Distributor — Retail',
    theme: 'Capital readiness, investor narrative, and financial modeling',
    excerpt: 'FMCG Distributor — investor readiness, valuation integrity.',
    milestones: [
      'Investor-Ready Narrative',
      'Robust Financial Model',
      'Risk & Sensitivity Scenarios',
      'Term Sheet & Raise Strategy',
    ],
    body: [
      { p: 'We reframed the value story around defensible distribution moats and operational efficiency gains, then translated it into a crisp investor deck and a bottom-up model.' },
      { p: 'Scenario analysis clarified capital needs and timing. The team entered investor meetings aligned, confident, and consistent.' },
    ],
    quote: 'What changed most was clarity—our numbers, our ask, our conviction.',
    closing: 'Outcome: compelling narrative, calibrated targets, and a cleaner path to capital.',
  },
  {
    slug: 'unlocking-structure-for-growth',
    order: 3,
    title: 'Unlocking Structure for Growth',
    client: 'Emerging Tech Services',
    industry: 'Emerging Tech Services — Startup',
    theme: 'Org design, operating cadence, and KPI instrumentation',
    excerpt: 'Emerging Tech Services — org design, cadence, KPIs.',
    milestones: [
      'Org Design & Roles Clarity',
      'Operating Cadence',
      'KPI & Dashboard Instrumentation',
      'Roadmap & Execution',
    ],
    body: [
      { p: 'We established role clarity and a rhythm of accountability. A simple live dashboard tied work to outcomes and surfaced decisions weekly.' },
      { p: 'Momentum replaced ambiguity; growth became repeatable.' },
    ],
    quote: 'Structure didn’t slow us—it unlocked us.',
    closing: 'Outcome: fewer handoffs, faster delivery, stronger margins.',
  },
]

export const announcement = {
  title:
    'Ten years. 87 engagements. $599M structured capital. One relentless will to transform ambition into legacy.',
  kicker: '10 YEARS — THE WILL TO WIN',
  blurb:
    "Our Anniversary Report is not a look back — it's a launchpad. Endurance, impact, and confident growth. Push forward.",
  buttonLabel: 'DOWNLOAD THE REPORT',
  emblemTop: '10',
  emblemBottom: 'YEARS',
  featured: true,
  pdfFile: 'the-will-to-win-10-year-anniversary-report.pdf',
}
