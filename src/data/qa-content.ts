import { QAItem } from "@/components/QASection";

/**
 * FAQ Content with Dynamic Price Tokens
 * 
 * Supported tokens (replaced at render time with live prices):
 * - {{CAPITAL_REQUIREMENT}}       -> "~$35" (ask price rounded)
 * - {{CAPITAL_REQUIREMENT_RANGE}} -> "~$32-$38" (ask ± range)
 * - {{CAPITAL_REQUIREMENT_PLUS}}  -> "~$35+" (ask rounded with plus)
 * - {{LIQUIDITY_THRESHOLD}}       -> "~$35+" (same as plus, for liquidity context)
 */

export const homeQA: QAItem[] = [
  {
    question: "What are Monex Silver Eagle Rounds?",
    answer: "Monex Silver Eagle Rounds are privately-minted 1 oz .999 fine silver rounds available through Monex. Each round contains exactly one troy ounce of pure silver. They feature classic eagle imagery and are valued for their silver content, competitive premiums, and IRA eligibility.",
  },
  {
    question: "Why choose Monex Silver Eagle Rounds over government coins?",
    answer: "Rounds typically offer lower premiums than government coins (2-4% vs 4-6%), meaning you get more silver for your investment dollar. Both contain .999 fine silver and can be IRA-eligible. Rounds are ideal for investors focused on maximizing silver accumulation rather than paying for government mint overhead.",
  },
  {
    question: "How much does a Monex Silver Eagle Round cost?",
    answer: "At current silver prices, a Monex Silver Eagle Round costs approximately {{CAPITAL_REQUIREMENT_RANGE}} depending on spot price and dealer premiums. The price consists of the silver spot value plus a premium typically lower than government coins.",
  },
  {
    question: "Are Monex Silver Eagle Rounds easy to sell?",
    answer: "Yes, Monex Silver Eagle Rounds have good liquidity through dealer networks. Their .999 purity and standardized 1 oz weight make them readily marketable. Rounds can be sold back to Monex or other dealers at competitive prices.",
  },
  {
    question: "Can I hold Monex Silver Eagle Rounds in my IRA?",
    answer: "Yes, Monex Silver Eagle Rounds meeting the .999 purity requirement can qualify for Precious Metals IRAs. Rounds must be held by an approved custodian at an approved depository. Consult your IRA custodian for specific eligibility requirements.",
  },
];

export const pricesQA: QAItem[] = [
  {
    question: "What determines the price of Monex Silver Eagle Rounds?",
    answer: "The round price equals the silver spot price (per troy ounce) plus a premium. Monex Silver Eagle Rounds typically have lower premiums than government coins, with the total cost approximately {{CAPITAL_REQUIREMENT}}. The premium covers private mint production and dealer margins.",
  },
  {
    question: "Why do round premiums vary between dealers?",
    answer: "Premium variations reflect different dealer business models, inventory positions, and overhead costs. Monex Silver Eagle Rounds purchased directly from Monex often offer competitive pricing since Monex is the source. Shopping multiple dealers helps identify the best pricing.",
  },
  {
    question: "How does the bid-ask spread affect my round investment?",
    answer: "The bid-ask spread on silver rounds is typically competitive with other silver products. With a {{CAPITAL_REQUIREMENT}} round, this represents a few dollars. Your silver must appreciate by the spread percentage before you break even on a round-trip transaction.",
  },
  {
    question: "Do Monex Silver Eagle Rounds have lower premiums than government coins?",
    answer: "Yes, rounds typically have premiums of 2-4% compared to 4-6% for government coins. This is because rounds don't carry the overhead of sovereign mint production and currency certification. For investors focused on silver content, rounds offer better value per dollar.",
  },
  {
    question: "When is the best time to buy silver rounds based on pricing?",
    answer: "The best time is during calm market conditions when premiums are at normal levels (2-4%). Avoid buying during crisis-driven demand spikes when premiums can temporarily expand. Patient buying during normal markets secures better pricing on rounds.",
  },
];

export const resourcesQA: QAItem[] = [
  {
    question: "What topics do your Monex Silver Eagle Round resources cover?",
    answer: "Our educational library covers all aspects of silver round investing: understanding premiums, rounds vs government coins, storage options, the .999 purity standard, IRA eligibility, market dynamics, bid-ask spreads, authentication, and portfolio allocation strategies.",
  },
  {
    question: "How do Monex Silver Eagle Rounds compare to government coins?",
    answer: "Both share .999 fine purity and 1 troy ounce silver content. The key difference is that rounds are privately minted, resulting in lower premiums (2-4% vs 4-6%). Government coins have broader retail recognition but cost more per ounce of silver.",
  },
  {
    question: "Are Monex Silver Eagle Rounds good for investment?",
    answer: "Rounds are excellent for investors focused on maximizing silver content per dollar. Lower premiums mean more ounces for your investment. They meet IRA purity requirements and have good liquidity through the Monex network and other dealers.",
  },
  {
    question: "What should I look for when buying Monex Silver Eagle Rounds?",
    answer: "Verify .999 purity markings, purchase from Monex or reputable dealers, compare premiums across sources, ensure clear weight specifications (1 troy oz), and plan storage. Monex Silver Eagle Rounds feature consistent quality and clear markings for easy verification.",
  },
];

// Resource-specific Q&A content
export const resourceQA: Record<string, QAItem[]> = {
  "premiums-explained": [
    {
      question: "What is a typical premium for Monex Silver Eagle Rounds?",
      answer: "Typical premiums for Monex Silver Eagle Rounds are 2-4% over spot under normal market conditions. This is lower than government coins like American Silver Eagles, which typically carry 4-6% premiums. During supply constraints, premiums can temporarily rise for all silver products.",
    },
    {
      question: "Why do Monex Silver Eagle Rounds have premiums?",
      answer: "Premiums cover private mint production costs and dealer margins. Rounds have lower premiums than government coins because they don't carry sovereign mint overhead or currency certification costs. This makes rounds cost-effective for silver accumulation.",
    },
    {
      question: "Do I recover the premium when I sell my rounds?",
      answer: "You typically don't recover the full premium on resale, but rounds have competitive bid-ask spreads. Their lower purchase premiums combined with competitive resale prices make rounds economically efficient for building silver positions over time.",
    },
  ],
  "coin-comparison": [
    {
      question: "What's the main difference between Monex Silver Eagle Rounds and government coins?",
      answer: "Rounds are privately minted without sovereign government backing, while coins like American Silver Eagles come from government mints. Both contain 1 oz of .999 fine silver. Rounds typically have lower premiums (2-4% vs 4-6%).",
    },
    {
      question: "Which has lower premiums — rounds or government coins?",
      answer: "Monex Silver Eagle Rounds typically have lower premiums than government coins. Privately-minted rounds don't carry the overhead of sovereign mint operations, resulting in cost savings passed to investors seeking maximum silver per dollar.",
    },
    {
      question: "Are both rounds and government coins IRA-eligible?",
      answer: "Yes, both Monex Silver Eagle Rounds and government coins meeting .999 purity can qualify for Precious Metals IRAs. The IRS requires .999 minimum purity, which both products meet. Consult your custodian for specific eligibility.",
    },
  ],
  "storage-options": [
    {
      question: "What type of storage is recommended for Monex Silver Eagle Rounds?",
      answer: "Rounds are practical for multiple storage options. A quality home safe works well for modest holdings. Bank safe deposit boxes provide institutional security. For IRA rounds or larger holdings, professional vault storage at approved depositories is available.",
    },
    {
      question: "Can I store Monex Silver Eagle Rounds at home?",
      answer: "Yes, 1 oz rounds are well-suited for home storage. A quality fireproof safe (ideally bolted down) provides reasonable security. Consider insurance coverage for larger holdings. Keep rounds in protective tubes or holders to prevent scratching.",
    },
    {
      question: "Do IRA silver rounds have special storage requirements?",
      answer: "Yes, IRA silver must be stored at an IRS-approved depository by an approved custodian. You cannot take personal possession of IRA silver while it remains in the account. The custodian handles all storage arrangements.",
    },
  ],
  "purity-advantages": [
    {
      question: "Why does .999 purity matter for silver rounds?",
      answer: "The .999 purity means each Monex Silver Eagle Round contains 99.9% pure silver with minimal trace elements. This meets IRA requirements, ensures consistent silver content, and provides straightforward valuation based on silver weight.",
    },
    {
      question: "Is .999 silver the same purity as government coins?",
      answer: "Yes, .999 is the standard purity for most government silver coins and quality rounds like Monex Silver Eagle Rounds. Some products like Canadian Maple Leafs are .9999 fine, but the practical value difference is negligible.",
    },
    {
      question: "Does purity affect resale value of silver rounds?",
      answer: "For .999 fine products, purity is standard and doesn't significantly affect resale. Both Monex Silver Eagle Rounds and government coins at .999+ trade based on silver content. The key factors are condition and dealer relationships.",
    },
  ],
  "liquidity-considerations": [
    {
      question: "How quickly can I sell Monex Silver Eagle Rounds?",
      answer: "Monex Silver Eagle Rounds can typically be sold within 1-2 business days through established dealers. Their .999 purity and standardized 1 oz weight make them readily marketable through the Monex network and other dealers.",
    },
    {
      question: "Do rounds trade as easily as government coins?",
      answer: "Rounds trade well through dealer networks. Government coins may have slightly broader retail recognition, but for dealer transactions, quality .999 rounds like Monex Silver Eagle Rounds trade efficiently at competitive prices.",
    },
    {
      question: "What documentation helps with round resale?",
      answer: "Maintain purchase receipts showing dealer, date, and price. Rounds in protective tubes or holders present better than loose rounds. Documentation speeds transactions and supports pricing verification.",
    },
  ],
  "market-dynamics": [
    {
      question: "What causes silver prices to rise or fall?",
      answer: "Silver prices respond to multiple factors: industrial demand (electronics, solar), investment flows, currency strength, inflation expectations, and supply dynamics. Silver is more volatile than gold due to its dual role as industrial metal and investment asset.",
    },
    {
      question: "How does industrial demand affect Monex Silver Eagle Round values?",
      answer: "Industrial demand influences overall silver prices, which directly affects round values. Growing sectors like solar energy and electronics increase silver consumption. Round prices track silver spot prices plus premiums.",
    },
    {
      question: "Do silver round premiums change with market conditions?",
      answer: "Yes, premiums fluctuate with demand. During market uncertainty, demand for physical silver often spikes, pushing premiums higher for all products including rounds. During calm markets, premiums settle to normal levels (2-4% for rounds).",
    },
  ],
  "spreads-explained": [
    {
      question: "What is a good bid-ask spread for Monex Silver Eagle Rounds?",
      answer: "Under normal market conditions, spreads for Monex Silver Eagle Rounds are competitive with other .999 silver products. Rounds benefit from straightforward pricing based purely on silver content without numismatic factors.",
    },
    {
      question: "How do I calculate break-even on a Monex Silver Eagle Round?",
      answer: "Add your purchase premium to the expected selling discount. With lower round premiums (2-4%), break-even comes sooner than with higher-premium government coins. On a {{CAPITAL_REQUIREMENT}} round, that's typically $1-$2 in silver price movement.",
    },
    {
      question: "Do spreads differ between rounds and government coins?",
      answer: "Spreads are comparable for quality silver products. Rounds benefit from simpler pricing based purely on silver content. Combined with lower purchase premiums, rounds often provide better overall economics for silver accumulation.",
    },
  ],
  "authentication-guide": [
    {
      question: "How do I verify a Monex Silver Eagle Round is authentic?",
      answer: "Key verification: confirm correct weight (31.1g for 1 oz), verify dimensions match specifications (~39mm diameter), check .999 purity markings. Purchasing from Monex directly provides strong authenticity assurance. For secondary purchases, consider professional verification.",
    },
    {
      question: "What markings should Monex Silver Eagle Rounds have?",
      answer: "Monex Silver Eagle Rounds clearly display weight (1 troy oz) and purity (.999 fine silver) markings. The eagle design is consistent across production. Clear markings support confidence in transactions and verification.",
    },
    {
      question: "Should I have Monex Silver Eagle Rounds professionally authenticated?",
      answer: "For purchases from Monex or reputable dealers, professional authentication is typically unnecessary. For secondary market purchases or rounds without clear provenance, professional verification provides peace of mind.",
    },
  ],
  "ira-eligibility": [
    {
      question: "Why are Monex Silver Eagle Rounds IRA-eligible?",
      answer: "Monex Silver Eagle Rounds meet IRS requirements: .999 minimum purity from an approved source. This makes them eligible for tax-advantaged Precious Metals IRAs. Rounds must be held by an approved custodian at an approved depository.",
    },
    {
      question: "Can I take physical possession of my IRA silver rounds?",
      answer: "Not while in the IRA. IRS rules require IRA precious metals to be held by an approved custodian at an approved depository. Taking possession triggers a distribution with tax consequences. You can receive rounds upon distribution.",
    },
    {
      question: "What are the costs of holding Monex Silver Eagle Rounds in an IRA?",
      answer: "IRA costs include: custodian setup fees ($50-$300), annual custodian fees ($75-$300), storage fees ($100-$300/year), and potential transaction fees. Weigh these costs against tax advantages. Rounds' lower premiums help offset IRA costs.",
    },
  ],
  "portfolio-allocation": [
    {
      question: "What percentage of a portfolio should be in silver rounds?",
      answer: "Conventional wisdom suggests 5-15% of a portfolio in precious metals as a diversifier. Monex Silver Eagle Rounds can be part of that allocation. The specific percentage depends on your risk tolerance, investment horizon, and financial goals.",
    },
    {
      question: "Should I buy Monex Silver Eagle Rounds all at once or over time?",
      answer: "Both approaches have merit. Purchasing multiple rounds at once may secure better per-round pricing. Dollar-cost averaging reduces timing risk but incurs multiple transaction costs. Consider premium economics in your strategy.",
    },
    {
      question: "How do Monex Silver Eagle Rounds fit with other investments?",
      answer: "Rounds provide direct physical silver ownership with no counterparty risk, unlike ETFs. Physical silver offers portfolio diversification. Rounds' lower premiums make them efficient for building silver positions over time.",
    },
  ],
  "first-time-buyers-guide": [
    {
      question: "What is the process for buying Monex Silver Eagle Rounds?",
      answer: "Research dealers (Monex is the direct source), compare premiums, place an order with locked price, complete payment, and receive insured delivery. The process typically takes 3-7 business days from order to delivery.",
    },
    {
      question: "What payment methods are accepted for silver round purchases?",
      answer: "Wire transfer is common for larger transactions. Many dealers accept credit cards (often with fees), personal checks (with clearing periods), and ACH transfers. Monex offers various payment options for their silver rounds.",
    },
    {
      question: "Why do silver round prices vary between dealers?",
      answer: "Price variations reflect different business models, sourcing relationships, and overhead costs. Monex Silver Eagle Rounds from Monex offer competitive pricing since they're the direct source. Compare multiple dealers to ensure fair pricing.",
    },
  ],
  "tax-considerations": [
    {
      question: "How are silver rounds taxed when sold?",
      answer: "Physical silver is generally classified as a collectible for federal tax purposes. When sold for a gain, capital gains tax applies. The collectible classification applies to both rounds and government coins. Consult a tax professional for your specific situation.",
    },
    {
      question: "Do I pay sales tax when buying Monex Silver Eagle Rounds?",
      answer: "Sales tax treatment varies by state. Many states exempt precious metals purchases entirely, others tax them, and some have exemptions based on transaction size. Understanding your state's rules affects total acquisition cost.",
    },
    {
      question: "What are the tax advantages of holding silver rounds in an IRA?",
      answer: "IRA ownership provides tax-advantaged treatment: Traditional IRA contributions may be tax-deductible with taxes deferred until distribution; Roth IRA growth and qualified distributions are tax-free. Rounds' lower premiums help maximize IRA silver holdings.",
    },
  ],
  "industrial-demand-investment-outlook": [
    {
      question: "How much of silver production goes to industrial uses?",
      answer: "Industrial fabrication accounts for approximately 50% of annual silver consumption globally, according to the Silver Institute. Key sectors include electronics, solar photovoltaics, medical devices, and automotive applications. This industrial demand creates a consumption floor distinct from purely monetary metals.",
    },
    {
      question: "Why is solar energy important for silver demand?",
      answer: "Solar photovoltaic manufacturing is silver's fastest-growing industrial application. Silver paste is essential for solar cell conductivity, with each panel containing approximately 20 grams. As global solar capacity expands for decarbonization goals, this creates sustained incremental silver demand.",
    },
    {
      question: "How does industrial demand affect silver round investors?",
      answer: "Industrial demand provides a consumption floor for silver prices, creates growth drivers independent of investment sentiment, and contributes to silver's higher volatility compared to gold. Round holders benefit from exposure to both industrial and monetary demand dynamics.",
    },
  ],
  "systematic-accumulation-strategies": [
    {
      question: "What is dollar-cost averaging for silver rounds?",
      answer: "Dollar-cost averaging involves investing a fixed dollar amount at regular intervals regardless of price. When prices are lower, your budget buys more rounds; when higher, fewer rounds. This mechanical approach tends to produce an average cost below the simple average of prices during accumulation.",
    },
    {
      question: "How often should I buy silver rounds when accumulating?",
      answer: "Monthly purchasing represents a practical frequency for most investors, balancing timing diversification against transaction costs. However, if your dealer offers volume discounts, quarterly larger purchases may be more cost-effective. Calculate total costs under both scenarios.",
    },
    {
      question: "Is dollar-cost averaging better than buying all at once?",
      answer: "Research generally shows lump-sum investing outperforms DCA in rising markets. However, DCA reduces timing risk, provides psychological comfort, and is the only option when you don't have a lump sum available. The behavioral benefits of maintaining discipline often justify the approach.",
    },
  ],
};
