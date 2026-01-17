import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { MetalPriceChart } from "@/components/MonexWidgets";
import AISummary from "@/components/AISummary";
import QASection from "@/components/QASection";
import LiveProductPriceCard from "@/components/LiveProductPriceCard";
import LiveSpotIndexCard from "@/components/LiveSpotIndexCard";
import { pricesQA } from "@/data/qa-content";
import { fetchProductSpot, fetchMetalSpotIndex, formatUSD } from "@/lib/monexSpot";

export const metadata: Metadata = {
  title: "Monex Silver Eagle Round Prices | Live 1 oz Silver Pricing",
  description:
    "Live Monex Silver Eagle Round prices and silver spot charts. See how 1 oz .999 silver rounds price vs spot, compare premiums to government coins, and understand bid-ask spreads.",
  alternates: {
    canonical: `${SITE_CONFIG.canonicalDomain}/live-silver-prices`,
  },
  openGraph: {
    title: "Monex Silver Eagle Round Prices | Live 1 oz Silver Pricing",
    description:
      "Live pricing for 1 oz .999 silver rounds. Compare premiums to government coins, understand bid-ask spreads.",
    url: `${SITE_CONFIG.domain}/live-silver-prices`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monex Silver Eagle Round Prices | Live 1 oz Silver Pricing",
    description:
      "Live 1 oz .999 silver round pricing. Compare premiums, understand spreads.",
  },
};

export default async function PricesPage() {
  // Fetch price data once for the entire page
  const priceData = await fetchProductSpot();
  const spotData = await fetchMetalSpotIndex();
  
  // Get spot price per oz for examples (rounded to nearest dollar)
  const spotPerOz = spotData ? Math.round(spotData.last) : 30;
  const formatSpotPrice = (price: number) => formatUSD(price).replace(".00", "");
  
  // Calculate example prices based on current spot
  const roundPrice = Math.round(spotPerOz * 1.03);  // ~3% premium for rounds
  const eaglePrice = Math.round(spotPerOz * 1.05); // ~5% premium for government coins
  
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Monex Silver Eagle Round Prices & Live Silver Spot Prices",
    description:
      "Track live Monex Silver Eagle Round prices and silver spot prices. Real-time charts and market data for silver round investors.",
    url: `${SITE_CONFIG.domain}/live-silver-prices`,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.brandName,
      url: SITE_CONFIG.domain,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What determines the price of Monex Silver Eagle Rounds?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The price of a Monex Silver Eagle Round consists of the silver spot price plus a premium that covers minting, distribution, and dealer margins. Round premiums are typically lower than government coin premiums.",
        },
      },
      {
        "@type": "Question",
        name: "Why do silver rounds have a premium over spot price?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The premium covers mint production costs and dealer margins. Privately-minted rounds typically have lower premiums than government coins because they lack the overhead of legal tender status and government mint operations.",
        },
      },
      {
        "@type": "Question",
        name: "How often do silver prices change?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Silver prices change continuously during market hours as the precious metals market operates nearly 24 hours a day, five days a week. Major price movements are influenced by currency fluctuations, industrial demand, geopolitical events, and supply and demand dynamics.",
        },
      },
    ],
  };

  const aiSummaryBullets = [
    "This page displays live Monex Silver Eagle Round prices via Monex data",
    "Track silver spot prices per troy ounce for reference",
    "Understand how spot prices relate to silver round retail pricing",
    "Learn about premium structures: rounds typically have lower premiums than government coins",
    "Compare pricing between rounds and government-minted coins",
  ];

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

      {/* Hero Section */}
      <section className="py-12 md:py-16 accent-bar-pattern relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              <span className="accent-text">Silver Round Prices</span>
              <br />
              <span className="text-slate-900">& Live Silver Spot Prices</span>
            </h1>

            {/* AI Summary - placed after H1 */}
            <AISummary bullets={aiSummaryBullets} />

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mt-6 text-left">
              Track live silver prices and understand how spot pricing affects 
              the cost of Monex Silver Eagle Rounds. Use these tools to make 
              informed decisions about your silver investments. Return 
              to our{" "}
              <Link href="/" className="text-slate-700 hover:underline font-medium">
                Monex Silver Eagle Rounds overview
              </Link>{" "}
              or explore our{" "}
              <Link href="/resources" className="text-slate-700 hover:underline font-medium">
                educational resources
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Zone - Live Cards */}
      <section className="py-10 md:py-12 section-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Live Silver Round Price Card */}
          <LiveProductPriceCard showCta={false} />

          {/* Live Silver Spot Index Card */}
          <LiveSpotIndexCard />

          {/* Chart Widget */}
          <div>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-4 text-slate-900 text-center">
              Silver Price Chart
            </h2>
            <div className="max-w-4xl mx-auto">
              <MetalPriceChart />
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Silver Round Pricing */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-6 text-center">
              Understanding <span className="accent-text">Silver Round Pricing</span>
            </h2>

            <div className="prose prose-lg max-w-none space-y-6">
              <div className="card">
                <h3 className="text-2xl font-display font-semibold mb-4 text-slate-800">
                  Spot Price vs. Silver Round Price
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  When purchasing Monex Silver Eagle Rounds, you&apos;ll pay a premium 
                  above the spot price. The spot price represents the current market 
                  rate for silver traded in bulk on commodities exchanges.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Privately-minted rounds typically carry <strong className="text-slate-900">lower 
                  premiums than government coins</strong>, which means more silver 
                  content for your investment dollar.
                </p>
              </div>

              <div className="card">
                <h3 className="text-xl md:text-2xl font-display font-semibold mb-4 text-slate-800">
                  Why Rounds Have Lower Premiums
                </h3>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-3">•</span>
                    <span>
                      <strong className="text-slate-900">Simpler Production:</strong> Private mints 
                      have lower overhead than government mints with legal tender requirements.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-3">•</span>
                    <span>
                      <strong className="text-slate-900">No Legal Tender Costs:</strong> Rounds 
                      don&apos;t carry face value or require government certification processes.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-3">•</span>
                    <span>
                      <strong className="text-slate-900">Efficient Distribution:</strong> Direct 
                      relationships between mints and dealers reduce intermediary costs.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-3">•</span>
                    <span>
                      <strong className="text-slate-900">Focus on Silver Value:</strong> Rounds 
                      are priced primarily on silver content rather than numismatic factors.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-xl md:text-2xl font-display font-semibold mb-4 text-slate-800">
                  Premium Comparison: Rounds vs Coins
                </h3>
                <p className="text-slate-600 leading-relaxed mb-3">
                  Silver round and coin premiums vary by product type:
                </p>
                <div className="bg-slate-50 rounded-lg p-4">
                  <p className="text-slate-500 text-sm mb-2">
                    <strong className="text-slate-700">Example at {formatSpotPrice(spotPerOz)}/oz spot:</strong>
                  </p>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li>• <strong className="text-slate-900">Monex Silver Eagle Round (~3% premium):</strong> ~{formatSpotPrice(roundPrice)}</li>
                    <li>• <strong className="text-slate-900">American Silver Eagle (~5% premium):</strong> ~{formatSpotPrice(eaglePrice)}</li>
                    <li>• <strong className="text-slate-900">Canadian Maple (~4% premium):</strong> ~{formatSpotPrice(Math.round(spotPerOz * 1.04))}</li>
                    <li className="pt-2 border-t border-slate-200">
                      <strong className="text-slate-700">Key advantage:</strong> Rounds offer more silver per dollar at lower premiums
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Q&A Section */}
      <QASection items={pricesQA} includeSchema={false} priceData={priceData} />

      {/* Monex Research Link */}
      <section className="py-10 md:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-500 mb-6">
            For detailed market analysis and pricing information:
          </p>
          <a
            href="https://www.monex.com/monex-silver-rounds-price-charts/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center text-slate-700 hover:text-slate-900 transition-colors font-medium"
          >
            <span>View Monex Silver Rounds Price Charts</span>
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
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 section-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Silver Round Resources
          </h2>
          <p className="text-slate-600 mb-6">
            Explore our comprehensive{" "}
            <Link href="/resources" className="text-slate-700 hover:underline font-medium">
              educational resources
            </Link>{" "}
            to deepen your understanding of silver round investing, or return to our{" "}
            <Link href="/" className="text-slate-700 hover:underline font-medium">
              Monex Silver Eagle Rounds overview
            </Link>.
          </p>
          <Link href="/resources" className="btn-primary">
            Explore Resources
          </Link>
        </div>
      </section>
    </>
  );
}
