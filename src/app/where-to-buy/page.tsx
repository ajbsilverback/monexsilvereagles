import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Where to Buy 1 oz Silver Rounds | Monex Silver Eagle Buying Guide",
  description:
    "Independent guide to buying Monex Silver Eagle Rounds — 1 oz .999 fine silver rounds. Compare dealers, understand premiums, evaluate buying considerations.",
  alternates: {
    canonical: `${SITE_CONFIG.canonicalDomain}/where-to-buy`,
  },
  openGraph: {
    title: "Where to Buy 1 oz Silver Rounds | Monex Silver Eagle Buying Guide",
    description:
      "Independent buying guide for 1 oz .999 fine silver rounds. Compare dealers, understand premiums.",
    url: `${SITE_CONFIG.domain}/where-to-buy`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Where to Buy 1 oz Silver Rounds | Monex Silver Eagle Buying Guide",
    description:
      "Independent buying guide for 1 oz .999 fine silver rounds.",
  },
};

// Alternative silver round/coin dealers for comparison
const additionalDealers = [
  {
    name: "JM Bullion",
    description:
      "An established online precious metals dealer offering silver rounds, coins, and bars from various mints.",
    url: "https://www.jmbullion.com/",
  },
  {
    name: "APMEX",
    description:
      "One of the largest online bullion retailers with a wide selection of silver products including rounds and coins.",
    url: "https://www.apmex.com/",
  },
  {
    name: "SD Bullion",
    description:
      "An online dealer known for competitive pricing on silver rounds and other bullion products.",
    url: "https://sdbullion.com/",
  },
  {
    name: "Provident Metals",
    description:
      "An online bullion dealer offering competitive prices on silver rounds and government coins.",
    url: "https://www.providentmetals.com/",
  },
  {
    name: "Money Metals Exchange",
    description:
      "A precious metals dealer offering silver rounds and coins with price transparency.",
    url: "https://www.moneymetals.com/",
  },
];

export default function WhereToBuyPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Where to Buy Monex Silver Eagle Rounds | Independent Guide",
    description:
      "Learn where to buy Monex Silver Eagle Rounds and compare silver round options from various dealers.",
    url: `${SITE_CONFIG.domain}/where-to-buy`,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.brandName,
      url: SITE_CONFIG.domain,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <main className="py-16">
        <div className="max-w-5xl mx-auto px-4 space-y-16">
          {/* Hero Section */}
          <section className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              <span className="accent-text">Where to Buy</span>
              <br />
              <span className="text-slate-900">Monex Silver Eagle Rounds</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-6">
              An independent educational guide to understanding your options
              for purchasing Monex Silver Eagle Rounds and other silver products.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-slate-600 text-sm">
                <strong className="text-slate-800">Important:</strong>{" "}
                {SITE_CONFIG.brandName} is an independent educational resource.
                We do not sell precious metals and are not affiliated with 
                Monex or any of the dealers listed on this page. We encourage you to compare
                prices and services across multiple dealers before making any
                purchase.
              </p>
            </div>
          </section>

          {/* Monex - Primary Source */}
          <section>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              <span className="accent-text">Monex</span>: Primary Source
            </h2>
            <div className="card p-8 max-w-3xl mx-auto">
              <p className="text-slate-600 mb-6">
                Monex Silver Eagle Rounds are available directly from Monex, 
                a precious metals dealer that has been in business since 1967.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  About Monex Silver Eagle Rounds
                </h3>
                <p className="text-slate-600 text-sm mb-3">
                  These are privately-minted .999 fine silver rounds (not government coins) 
                  available through Monex. Each round contains 1 troy ounce of pure silver.
                </p>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-slate-500">•</span>
                    <span>.999 fine silver purity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-500">•</span>
                    <span>1 troy ounce per round</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-500">•</span>
                    <span>Competitive premiums vs government coins</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-500">•</span>
                    <span>IRA-eligible (meets .999 purity requirement)</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.monex.com/1-oz-monex-silver-eagle-rounds/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-slate-800 text-white font-medium hover:bg-slate-700 transition-colors"
                >
                  <span>View Monex Silver Eagle Rounds</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a
                  href="https://www.monex.com/monex-silver-rounds-price-charts/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 transition-colors"
                >
                  <span>View Price Charts</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </section>

          {/* How to Evaluate Dealers */}
          <section>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center">
              How to <span className="accent-text">Evaluate Dealers</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Reputation & Reviews
                </h3>
                <p className="text-slate-600 text-sm">
                  Research dealer history, customer reviews, and industry
                  accreditations. Look for established businesses with
                  transparent track records.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Pricing & Premiums
                </h3>
                <p className="text-slate-600 text-sm">
                  Compare premiums over spot price across multiple dealers.
                  Silver rounds typically carry lower premiums than government
                  coins, making them cost-effective.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                  Shipping & Insurance
                </h3>
                <p className="text-slate-600 text-sm">
                  Understand shipping costs, delivery times, and insurance
                  coverage. For silver rounds, fully insured and discreet
                  shipping is essential for protection.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Buyback Policies
                </h3>
                <p className="text-slate-600 text-sm">
                  Check whether the dealer offers buyback programs. Silver
                  rounds have good liquidity, and reputable dealers maintain
                  competitive buyback prices.
                </p>
              </div>
            </div>
          </section>

          {/* Rounds vs Coins Considerations */}
          <section>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              <span className="accent-text">Rounds vs Coins</span>: Buying Considerations
            </h2>
            <div className="card p-8 max-w-3xl mx-auto">
              <p className="text-slate-600 mb-6">
                When deciding between privately-minted rounds and government coins, 
                consider these factors:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <h3 className="text-emerald-800 font-semibold mb-2">Advantages of Rounds</h3>
                  <ul className="text-emerald-700 text-sm space-y-1">
                    <li>• Lower premiums over spot</li>
                    <li>• More silver per dollar</li>
                    <li>• Same .999 purity</li>
                    <li>• IRA-eligible</li>
                  </ul>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <h3 className="text-slate-800 font-semibold mb-2">Advantages of Government Coins</h3>
                  <ul className="text-slate-600 text-sm space-y-1">
                    <li>• Legal tender status</li>
                    <li>• Higher recognition</li>
                    <li>• Government guarantee</li>
                    <li>• Broader collector appeal</li>
                  </ul>
                </div>
              </div>
              <p className="text-slate-500 text-sm">
                For investors focused on silver content and value, rounds offer excellent 
                efficiency. For those prioritizing recognition and government backing, 
                coins may be preferable.
              </p>
            </div>
          </section>

          {/* Other Silver Round/Coin Dealers */}
          <section>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              <span className="accent-text">Other</span> Bullion Dealers
            </h2>
            <p className="text-slate-600 text-center mb-8 max-w-2xl mx-auto">
              For comparison purposes, other dealers offer silver rounds and 
              government coins. We encourage comparing prices across multiple sources.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalDealers.map((dealer) => (
                <div
                  key={dealer.name}
                  className="card p-6 flex flex-col"
                >
                  <h3 className="text-xl font-display font-semibold text-slate-900 mb-3">
                    {dealer.name}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 flex-grow">
                    {dealer.description}
                  </p>
                  <a
                    href={dealer.url}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="inline-flex items-center text-slate-700 hover:text-slate-900 transition-colors text-sm font-medium"
                  >
                    <span>Visit {dealer.name}</span>
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* IRA Considerations */}
          <section>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              <span className="accent-text">Precious Metals</span> IRA Custodians
            </h2>
            <div className="card p-8 max-w-3xl mx-auto">
              <p className="text-slate-600 mb-6">
                For IRA purchases, you&apos;ll work with a specialized custodian 
                who handles the regulatory requirements. Monex Silver Eagle Rounds 
                meeting .999 purity may qualify for Precious Metals IRAs.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  IRA Eligibility Requirements
                </h3>
                <p className="text-slate-600 text-sm">
                  Silver rounds meeting IRS requirements (.999 minimum purity from 
                  approved sources) may qualify for Precious Metals IRAs. Rounds must 
                  be held by an approved custodian in an approved depository.
                </p>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-slate-500 mt-1">•</span>
                  <span className="text-slate-600">
                    <strong className="text-slate-900">Self-directed IRA required:</strong>{" "}
                    You need a self-directed IRA that allows precious metals investments.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-500 mt-1">•</span>
                  <span className="text-slate-600">
                    <strong className="text-slate-900">Custodian handles purchases:</strong>{" "}
                    The custodian facilitates the round purchase and storage arrangement.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-500 mt-1">•</span>
                  <span className="text-slate-600">
                    <strong className="text-slate-900">Storage requirements:</strong>{" "}
                    IRA silver must be stored at an IRS-approved depository.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Pricing Sources */}
          <section>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              Using Multiple <span className="accent-text">Pricing Sources</span>
            </h2>
            <div className="card p-8 max-w-3xl mx-auto">
              <p className="text-slate-600 mb-6">
                Our{" "}
                <Link href="/live-silver-prices" className="text-slate-700 hover:underline font-medium">
                  live silver prices
                </Link>{" "}
                use data from Monex, but comparing prices across multiple
                sources helps you understand market conditions and verify
                dealer pricing.
              </p>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Additional pricing resources:
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://www.monex.com/monex-silver-rounds-price-charts/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center text-slate-700 hover:text-slate-900 transition-colors font-medium"
                  >
                    <span>Monex Silver Rounds Price Charts</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <span className="text-slate-400 text-sm ml-2">· Monex round pricing</span>
                </li>
                <li>
                  <span className="text-slate-600">Cross-check spot prices at{" "}
                    <a
                      href="https://www.kitco.com/"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="text-slate-700 hover:underline font-medium"
                    >Kitco</a>,{" "}
                    <a
                      href="https://silverprice.org/"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="text-slate-700 hover:underline font-medium"
                    >SilverPrice.org</a>, or other market data sources</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="border-t border-slate-200 pt-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-xl font-display font-semibold text-slate-500 mb-4">
                Disclaimer
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                {SITE_CONFIG.brandName} does not endorse, recommend, or rank any
                specific dealer, platform, or storage provider. The information
                on this page is for educational purposes only and should not be
                construed as financial advice or a recommendation to purchase
                from any particular source. We encourage you to compare prices
                and services across multiple dealers. Silver investments carry risks,
                and prices can fluctuate significantly. Always perform your own due
                diligence, verify dealer credentials, and consult with a
                qualified financial advisor before making investment decisions.
              </p>
            </div>
          </section>

          {/* Navigation Links */}
          <section className="text-center">
            <p className="text-slate-500 mb-6">
              Related pages:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/live-silver-prices" className="btn-primary">
                View Live Silver Prices
              </Link>
              <Link href="/resources" className="btn-secondary">
                Educational Resources
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
