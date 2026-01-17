export interface Resource {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  monexLink: string;
}

export const resources: Resource[] = [
  {
    slug: "premiums-explained",
    title: "Understanding Monex Silver Eagle Round Premiums",
    description:
      "Learn what premiums are, why Monex Silver Eagle Rounds carry premiums over spot, and how rounds compare to government coins in cost efficiency.",
    excerpt:
      "Discover why 1 oz .999 silver rounds carry lower premiums than government coins and how to maximize your silver buying power.",
    category: "Pricing",
    monexLink: "https://www.monex.com/monex-silver-rounds-price-charts/",
  },
  {
    slug: "coin-comparison",
    title: "Monex Silver Eagle Rounds vs Government Coins",
    description:
      "Compare Monex Silver Eagle Rounds with government-minted coins. Understand premium differences, liquidity, and which product fits your investment goals.",
    excerpt:
      "Compare privately-minted 1 oz rounds with government coins across purity, premiums, and liquidity factors.",
    category: "Investment",
    monexLink: "https://www.monex.com/1-oz-monex-silver-eagle-rounds/",
  },
  {
    slug: "storage-options",
    title: "Storing Your Monex Silver Eagle Rounds",
    description:
      "Compare storage solutions for 1 oz silver rounds: home safes, bank safe deposit boxes, and professional vault storage for IRA holdings.",
    excerpt:
      "A comprehensive guide to securing your Monex Silver Eagle Rounds with appropriate storage solutions.",
    category: "Security",
    monexLink: "https://www.monex.com/investing-in-silver/",
  },
  {
    slug: "purity-advantages",
    title: "The .999 Purity Standard for Silver Rounds",
    description:
      "Understanding the significance of .999 fine purity in Monex Silver Eagle Rounds and why purity matters for investors and IRA eligibility.",
    excerpt:
      "Learn why the .999 purity standard matters for silver round investors and IRA qualification.",
    category: "Products",
    monexLink: "https://www.monex.com/1-oz-monex-silver-eagle-rounds/",
  },
  {
    slug: "liquidity-considerations",
    title: "Liquidity of Monex Silver Eagle Rounds",
    description:
      "Understanding the liquidity of 1 oz .999 silver rounds and how to buy and sell efficiently through dealer networks.",
    excerpt:
      "Explore liquidity dynamics for Monex Silver Eagle Rounds and strategies for efficient transactions.",
    category: "Investment",
    monexLink: "https://www.monex.com/silver-prices/",
  },
  {
    slug: "market-dynamics",
    title: "What Moves Silver Round Prices",
    description:
      "Understanding economic factors, industrial demand, and market forces that influence silver prices and Monex Silver Eagle Round values.",
    excerpt:
      "Explore the key drivers behind silver price movements and what they mean for round investors.",
    category: "Market",
    monexLink: "https://www.monex.com/silver-prices/",
  },
  {
    slug: "spreads-explained",
    title: "Understanding Bid-Ask Spreads on Silver Rounds",
    description:
      "Learn how dealer spreads work on Monex Silver Eagle Rounds and strategies to minimize costs when buying and selling.",
    excerpt:
      "Master bid-ask spreads and learn how to get the best prices on your silver round transactions.",
    category: "Pricing",
    monexLink: "https://www.monex.com/monex-silver-rounds-price-charts/",
  },
  {
    slug: "authentication-guide",
    title: "Verifying Monex Silver Eagle Round Authenticity",
    description:
      "Best practices for verifying authenticity and understanding quality markers on 1 oz .999 fine silver rounds.",
    excerpt:
      "Protect your investment with proper authentication knowledge and verification techniques for silver rounds.",
    category: "Security",
    monexLink: "https://www.monex.com/1-oz-monex-silver-eagle-rounds/",
  },
  {
    slug: "ira-eligibility",
    title: "Monex Silver Eagle Rounds IRA Eligibility",
    description:
      "Understanding how Monex Silver Eagle Rounds qualify for Precious Metals IRAs and the requirements for IRA ownership.",
    excerpt:
      "Learn how 1 oz .999 silver rounds meet IRS requirements for tax-advantaged retirement accounts.",
    category: "Investment",
    monexLink: "https://www.monex.com/investing-in-silver/",
  },
  {
    slug: "portfolio-allocation",
    title: "Adding Monex Silver Eagle Rounds to Your Portfolio",
    description:
      "Strategic considerations for incorporating 1 oz .999 silver rounds into a diversified investment portfolio.",
    excerpt:
      "Discover how Monex Silver Eagle Rounds fit into portfolio diversification strategies.",
    category: "Investment",
    monexLink: "https://www.monex.com/investing-in-silver/",
  },
  {
    slug: "first-time-buyers-guide",
    title: "First-Time Buyer's Guide to Monex Silver Eagle Rounds",
    description:
      "A comprehensive guide for first-time buyers covering the practical process of purchasing 1 oz .999 fine silver rounds.",
    excerpt:
      "Learn what to expect when purchasing your first Monex Silver Eagle Round, from choosing a dealer to taking delivery.",
    category: "Buying Guide",
    monexLink: "https://www.monex.com/1-oz-monex-silver-eagle-rounds/",
  },
  {
    slug: "tax-considerations",
    title: "Tax Considerations for Silver Round Investors",
    description:
      "A high-level overview of tax considerations related to physical silver round ownership, including capital gains and IRA ownership.",
    excerpt:
      "Understand the tax landscape for Monex Silver Eagle Rounds before making your purchase decision.",
    category: "Tax & Legal",
    monexLink: "https://www.monex.com/investing-in-silver/",
  },
  {
    slug: "industrial-demand-investment-outlook",
    title: "Silver's Industrial Demand: What Round Investors Should Know",
    description:
      "Analysis of silver's growing industrial applications in solar energy, electronics, and medical devices, and how industrial demand dynamics affect silver round investment considerations.",
    excerpt:
      "Understand how industrial consumption patterns influence silver markets and what this means for physical silver round investors.",
    category: "Market",
    monexLink: "https://www.monex.com/silver-prices/",
  },
  {
    slug: "systematic-accumulation-strategies",
    title: "Building a Silver Position: Systematic Accumulation Approaches",
    description:
      "Practical strategies for accumulating silver rounds over time, including dollar-cost averaging, premium timing, and position-building considerations for long-term investors.",
    excerpt:
      "Learn disciplined approaches to building your silver round holdings through systematic accumulation strategies.",
    category: "Investment",
    monexLink: "https://www.monex.com/investing-in-silver/",
  },
];

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}

export function getResourceCategories(): string[] {
  return [...new Set(resources.map((r) => r.category))];
}
