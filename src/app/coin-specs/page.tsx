import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Monex Silver Eagle Round Specifications | 1 oz .999 Fine Silver",
  description:
    "Complete specifications for Monex Silver Eagle Rounds: .999 fine purity, 1 troy ounce weight, IRA eligibility, and premium factors. Privately-minted rounds for silver investors.",
  alternates: {
    canonical: `${SITE_CONFIG.canonicalDomain}/coin-specs`,
  },
  openGraph: {
    title: "Monex Silver Eagle Round Specifications | 1 oz .999 Fine Silver",
    description:
      "Complete specifications for Monex Silver Eagle Rounds: .999 purity, 1 troy oz weight, IRA eligibility for privately-minted silver rounds.",
    url: `${SITE_CONFIG.domain}/coin-specs`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Monex Silver Eagle Round Specifications",
    description:
      "Complete specifications for Monex Silver Eagle Rounds: .999 purity, 1 troy oz weight, IRA eligibility.",
  },
};

const specsData = [
  { label: "Purity", value: ".999 fine silver", highlight: true },
  { label: "Silver Content", value: "1.0000 troy ounce (31.1035 grams)" },
  { label: "Gross Weight", value: "Approximately 31.1 grams" },
  { label: "Diameter", value: "Approximately 39mm" },
  { label: "Thickness", value: "Approximately 2.8mm" },
  { label: "Minted By", value: "Private Mint" },
  { label: "Legal Tender", value: "No (privately minted round)" },
  { label: "Face Value", value: "None" },
  { label: "Edge", value: "Reeded" },
  { label: "IRA Eligible", value: "Yes (meets .999 purity requirement)", highlight: true },
];

const faqData = [
  {
    question: "What is the purity of Monex Silver Eagle Rounds?",
    answer:
      "Monex Silver Eagle Rounds are .999 fine silver, meaning they contain 99.9% pure silver. This high purity ensures maximum silver content and meets IRA eligibility requirements.",
  },
  {
    question: "How much silver is in each round?",
    answer:
      "Each Monex Silver Eagle Round contains exactly 1.0000 troy ounce (31.1035 grams) of pure silver. Since the round is .999 fine, the gross weight equals the silver content.",
  },
  {
    question: "Are these rounds legal tender?",
    answer:
      "No. Monex Silver Eagle Rounds are privately minted and have no legal tender status or face value. They are distinct from government-minted coins like American Silver Eagles. Rounds are valued purely for their silver content.",
  },
  {
    question: "Can I hold these rounds in an IRA?",
    answer:
      "Yes. Monex Silver Eagle Rounds meeting .999 purity can qualify for Precious Metals IRAs. You will need a qualified custodian and approved depository. Consult your custodian for specific eligibility.",
  },
  {
    question: "Why do rounds have premiums over spot price?",
    answer:
      "Premiums cover minting costs and dealer margins. Privately-minted rounds typically have lower premiums than government coins because they lack legal tender status and government mint overhead.",
  },
  {
    question: "How do rounds compare to government coins?",
    answer:
      "Both contain .999 fine silver and 1 troy ounce. The key difference: rounds are privately minted without legal tender status, while government coins have face value and government backing. Rounds typically offer lower premiums.",
  },
  {
    question: "What affects round premiums?",
    answer:
      "Premium drivers include: mint production costs, dealer margins, supply/demand dynamics, and market conditions. During high demand periods, premiums typically rise for all silver products.",
  },
];

export default function CoinSpecsPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Monex Silver Eagle Round Specifications",
    description:
      "Complete technical specifications and investor facts for Monex Silver Eagle Rounds.",
    url: `${SITE_CONFIG.domain}/coin-specs`,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.brandName,
      url: SITE_CONFIG.domain,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="accent-text">Round</span> Specifications
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Technical specifications for Monex Silver Eagle Rounds — privately-minted 
              1 oz .999 fine silver rounds.
            </p>
          </div>

          {/* Important Distinction Banner */}
          <section className="card p-6 md:p-8 mb-10 border-amber-200 bg-amber-50">
            <h2 className="text-xl font-display font-semibold text-slate-900 mb-3">
              Important: These Are Rounds, Not Government Coins
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Monex Silver Eagle Rounds are <strong className="text-slate-900">privately-minted silver rounds</strong>, 
              distinct from official government coins like American Silver Eagles. They have no legal tender 
              status and no face value. Rounds are valued purely for their silver content.
            </p>
          </section>

          {/* Specifications Table */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-slate-900 mb-6">
              Technical Specifications
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody className="divide-y divide-slate-200">
                  {specsData.map((spec, index) => (
                    <tr key={index} className={spec.highlight ? "bg-slate-50" : ""}>
                      <td className="py-4 pr-4 text-slate-500 font-medium w-1/3">
                        {spec.label}
                      </td>
                      <td className={`py-4 ${spec.highlight ? "text-slate-800 font-semibold" : "text-slate-700"}`}>
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Purity Standard */}
          <section className="card p-6 md:p-8 mb-10 bg-slate-50 border-slate-200">
            <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">
              The .999 Purity Standard
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              At .999 fineness, Monex Silver Eagle Rounds contain 99.9% pure silver with minimal trace elements.
            </p>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="text-slate-500 mt-1">•</span>
                <span><strong className="text-slate-900">Maximum silver content</strong>: Virtually all weight is pure silver</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-500 mt-1">•</span>
                <span><strong className="text-slate-900">IRS compliance</strong>: Meets the .999 minimum fineness for Precious Metals IRAs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-500 mt-1">•</span>
                <span><strong className="text-slate-900">Industry standard</strong>: Same purity as major government silver bullion</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-500 mt-1">•</span>
                <span><strong className="text-slate-900">Simple valuation</strong>: 1 oz round = 1 oz of silver, straightforward spot calculations</span>
              </li>
            </ul>
            <p className="text-slate-500 text-sm mt-4">
              Learn more at{" "}
              <a
                href="https://www.monex.com/1-oz-monex-silver-eagle-rounds/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-slate-700 hover:underline font-medium"
              >
                Monex Silver Eagle Rounds
              </a>
            </p>
          </section>

          {/* Investor Benefits */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">
              Why Investors Choose Rounds
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Silver rounds offer practical advantages for investors focused on silver accumulation:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="text-slate-800 font-semibold mb-2">Lower Premiums</h3>
                <p className="text-slate-500 text-sm">
                  Privately-minted rounds typically cost less per ounce than government coins, 
                  meaning more silver for your investment dollar.
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="text-slate-800 font-semibold mb-2">Stackability</h3>
                <p className="text-slate-500 text-sm">
                  Uniform 1 oz sizing makes rounds easy to stack, count, and store efficiently. 
                  Build positions over time at lower cost.
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="text-slate-800 font-semibold mb-2">Liquidity</h3>
                <p className="text-slate-500 text-sm">
                  Quality .999 rounds are readily accepted by dealers. Monex Silver Eagle Rounds 
                  have good liquidity through the Monex network.
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="text-slate-800 font-semibold mb-2">IRA Eligible</h3>
                <p className="text-slate-500 text-sm">
                  Rounds meeting .999 purity can qualify for tax-advantaged Precious Metals IRAs, 
                  same as government coins.
                </p>
              </div>
            </div>
          </section>

          {/* Rounds vs Coins Comparison */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">
              Rounds vs. Government Coins
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Understanding the key differences between privately-minted rounds and government-issued coins:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-300">
                    <th className="text-left py-3 px-4 text-slate-700 font-display">Feature</th>
                    <th className="text-center py-3 px-4 text-slate-800 font-display font-semibold">Silver Rounds</th>
                    <th className="text-center py-3 px-4 text-slate-500 font-display">Government Coins</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr className="border-b border-slate-200">
                    <td className="py-3 px-4 font-medium">Purity</td>
                    <td className="py-3 px-4 text-center">.999 fine</td>
                    <td className="py-3 px-4 text-center">.999 fine</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-3 px-4 font-medium">Silver Content</td>
                    <td className="py-3 px-4 text-center">1 troy oz</td>
                    <td className="py-3 px-4 text-center">1 troy oz</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-3 px-4 font-medium">Minted By</td>
                    <td className="py-3 px-4 text-center">Private Mints</td>
                    <td className="py-3 px-4 text-center">Government Mints</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-3 px-4 font-medium">Legal Tender</td>
                    <td className="py-3 px-4 text-center text-slate-500">No</td>
                    <td className="py-3 px-4 text-center text-emerald-600">Yes</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-3 px-4 font-medium">Face Value</td>
                    <td className="py-3 px-4 text-center text-slate-500">None</td>
                    <td className="py-3 px-4 text-center">$1 (ASE)</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-3 px-4 font-medium">Typical Premium</td>
                    <td className="py-3 px-4 text-center text-emerald-600 font-medium">Lower</td>
                    <td className="py-3 px-4 text-center">Higher</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">IRA Eligible</td>
                    <td className="py-3 px-4 text-center text-emerald-600">Yes*</td>
                    <td className="py-3 px-4 text-center text-emerald-600">Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-slate-500 text-xs mt-4">
              *Rounds meeting .999 purity from approved sources may qualify for Precious Metals IRAs. Consult your custodian.
            </p>
          </section>

          {/* Storage Considerations */}
          <section className="card p-6 md:p-8 mb-10 bg-slate-50 border-slate-200">
            <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">
              Storage Considerations
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Silver rounds are practical for multiple storage options:
            </p>
            <div className="space-y-4">
              <div className="border-l-2 border-slate-300 pl-4">
                <h3 className="text-slate-900 font-semibold">Home Storage</h3>
                <p className="text-slate-500 text-sm">
                  Quality fireproof safe for personal holdings. Rounds stack efficiently. 
                  Consider insurance for larger collections.
                </p>
              </div>
              <div className="border-l-2 border-slate-300 pl-4">
                <h3 className="text-slate-900 font-semibold">Bank Safe Deposit</h3>
                <p className="text-slate-500 text-sm">
                  Institutional security for modest holdings. Check box size for round tube storage.
                </p>
              </div>
              <div className="border-l-2 border-slate-300 pl-4">
                <h3 className="text-slate-900 font-semibold">Professional Vault Storage</h3>
                <p className="text-slate-500 text-sm">
                  Allocated storage at approved depositories. Required for IRA holdings. 
                  Fully insured with audit trails.
                </p>
              </div>
            </div>
          </section>

          {/* Premium Drivers */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">
              Understanding Premium Drivers
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Silver rounds trade at a premium above spot price. Factors that influence premiums:
            </p>
            <div className="space-y-4">
              <div className="border-l-2 border-slate-300 pl-4">
                <h3 className="text-slate-900 font-semibold">Minting Costs</h3>
                <p className="text-slate-500 text-sm">
                  Private mint production, quality control, and distribution. Lower overhead than government mints.
                </p>
              </div>
              <div className="border-l-2 border-slate-300 pl-4">
                <h3 className="text-slate-900 font-semibold">Dealer Margins</h3>
                <p className="text-slate-500 text-sm">
                  Wholesale and retail markups that fund dealer operations and inventory.
                </p>
              </div>
              <div className="border-l-2 border-slate-300 pl-4">
                <h3 className="text-slate-900 font-semibold">Supply & Demand</h3>
                <p className="text-slate-500 text-sm">
                  Mint capacity vs investor demand. High demand periods push premiums up temporarily.
                </p>
              </div>
              <div className="border-l-2 border-slate-300 pl-4">
                <h3 className="text-slate-900 font-semibold">Market Conditions</h3>
                <p className="text-slate-500 text-sm">
                  Economic uncertainty increases safe-haven demand and can elevate premiums across all silver products.
                </p>
              </div>
            </div>
            <p className="text-slate-500 text-sm mt-4">
              View current pricing at{" "}
              <a
                href="https://www.monex.com/monex-silver-rounds-price-charts/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-slate-700 hover:underline font-medium"
              >
                Monex Silver Rounds Price Charts
              </a>
            </p>
          </section>

          {/* FAQ Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-display font-semibold text-slate-900 mb-6 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <div key={index} className="card p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    {item.question}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Navigation CTAs */}
          <div className="text-center pt-8 border-t border-slate-200">
            <p className="text-slate-500 mb-6">
              Related pages
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/live-silver-prices" className="btn-primary">
                View Silver Prices
              </Link>
              <Link href="/where-to-buy" className="btn-secondary">
                Where to Buy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
