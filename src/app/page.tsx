import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/siteConfig";
import QASection from "@/components/QASection";
import LiveProductPriceCard from "@/components/LiveProductPriceCard";
import CapitalRequirementsCard from "@/components/CapitalRequirementsCard";
import { homeQA } from "@/data/qa-content";
import { fetchProductSpot, formatUSD } from "@/lib/monexSpot";

export const metadata: Metadata = {
  title: "Monex Silver Eagle Rounds | 1 oz .999 Fine Silver Investment Guide",
  description:
    "Your guide to Monex Silver Eagle Rounds — 1 oz .999 fine silver rounds with lower premiums than government coins. Learn about liquidity, stackability, storage, and IRA eligibility.",
  alternates: {
    canonical: SITE_CONFIG.canonicalDomain,
  },
  openGraph: {
    title: "Monex Silver Eagle Rounds | 1 oz .999 Fine Silver Investment Guide",
    description:
      "1 oz .999 fine silver rounds with lower premiums than government coins. Learn about liquidity, storage, and IRA eligibility.",
    url: SITE_CONFIG.domain,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monex Silver Eagle Rounds | 1 oz .999 Fine Silver Investment Guide",
    description:
      "1 oz .999 fine silver rounds with lower premiums. Liquidity, stackability, storage, IRA eligibility.",
  },
};

export default async function HomePage() {
  // Fetch price data once for the entire page
  const priceData = await fetchProductSpot();
  
  // Helper to format price as approximate (rounded to nearest $1)
  const formatApproxPrice = (price: number): string => {
    const rounded = Math.round(price);
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(rounded);
  };
  
  // Get approximate round price for display
  const approxRoundPrice = priceData ? formatApproxPrice(priceData.ask) : "~$35";
  
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${SITE_CONFIG.brandName} - Your Guide to Monex Silver Eagle Rounds`,
    description:
      "Comprehensive educational resource about Monex Silver Eagle Rounds, privately-minted .999 fine silver rounds with competitive premiums.",
    url: SITE_CONFIG.domain,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.brandName,
      url: SITE_CONFIG.domain,
    },
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Monex Silver Eagle Round",
    description:
      "One troy ounce silver round, .999 fine purity, privately-minted and recognized for quality.",
    brand: {
      "@type": "Brand",
      name: "Monex",
    },
    category: "Silver Rounds",
    material: "Silver",
    weight: {
      "@type": "QuantitativeValue",
      value: 1,
      unitCode: "ONT",
      unitText: "troy ounce",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Full-Bleed Hero Section */}
      <section className="hero-fullbleed relative min-h-[100vh] flex items-center overflow-hidden -mt-20">
        {/* Background Image Layer */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/monex-silver-eagle-rounds-hero.png')",
              backgroundPosition: "center center",
            }}
          />
          {/* Light overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/60" />
          {/* Top gradient for nav readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-transparent" style={{ height: '200px' }} />
          {/* Bottom gradient fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
        </div>

        {/* Subtle coin motif accent */}
        <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-slate-300/30 opacity-30 hidden lg:block" />
        <div className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-slate-300/20 opacity-20 hidden lg:block" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-52 pb-24">
          <div className="max-w-2xl">
            {/* Certificate line - typographic treatment */}
            <p className="text-[13px] text-slate-500 tracking-[0.2em] uppercase mb-6">
              .999 Fine Silver&ensp;·&ensp;Private Mint&ensp;·&ensp;Competitive Premiums
            </p>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] mb-8 tracking-tight">
              <span className="accent-text">Monex Silver</span>
              <br />
              <span className="accent-text">Eagle Rounds</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-10 max-w-xl">
              1 oz .999 fine silver rounds with competitive premiums. 
              Stack efficiently, store easily, sell with confidence through established dealer networks.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/live-silver-prices" className="btn-primary text-base">
                View Current Prices
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <Link href="/resources" className="btn-secondary text-base">
                Explore Resources
              </Link>
            </div>

            {/* Scroll indicator */}
            <div className="hidden md:flex items-center mt-20 text-slate-400">
              <div className="w-px h-12 bg-gradient-to-b from-slate-400/50 to-transparent mr-4" />
              <span className="text-sm tracking-widest uppercase">Scroll to explore</span>
            </div>
          </div>
        </div>
      </section>

      {/* Live Silver Price Section */}
      <section className="py-16 md:py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              <span className="accent-text">Live Silver Round Pricing</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Current market data for Monex Silver Eagle Rounds.
            </p>
          </div>
          <LiveProductPriceCard />
        </div>
      </section>

      {/* Why Monex Silver Eagle Rounds Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Why <span className="accent-text">Monex Silver Eagle Rounds</span>?
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              Privately-minted silver rounds offering .999 fine purity with competitive premiums and strong liquidity through the Monex network.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card group">
              <div className="w-16 h-16 rounded-xl accent-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 text-slate-900">
                .999 Fine Purity
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Each round contains 1 troy oz of .999 fine silver — maximum silver content with no base metal alloys.
              </p>
            </div>

            <div className="card group">
              <div className="w-16 h-16 rounded-xl accent-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 text-slate-900">
                Lower Premiums
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Privately-minted rounds cost less per ounce than government coins — more silver for your dollar.
              </p>
            </div>

            <div className="card group">
              <div className="w-16 h-16 rounded-xl accent-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 text-slate-900">
                Easy Stackability
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Uniform 1 oz sizing makes rounds easy to stack, count, store, and transport efficiently.
              </p>
            </div>

            <div className="card group">
              <div className="w-16 h-16 rounded-xl accent-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 text-slate-900">
                Strong Liquidity
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Recognized .999 rounds sell readily through dealer networks at competitive prices.
              </p>
            </div>
          </div>

          {/* IRA Eligible Note */}
          <div className="mt-8 text-center">
            <p className="text-slate-500 text-sm">
              <strong className="text-slate-700">IRA Eligible:</strong> Monex Silver Eagle Rounds meet the .999 fineness requirement for Precious Metals IRAs.
            </p>
          </div>
        </div>
      </section>

      {/* Who Buys Silver Rounds Section */}
      <section className="py-16 md:py-24 relative overflow-hidden section-dark">
        <div className="absolute inset-0 accent-bar-pattern opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                Who Buys <span className="accent-text">Silver Rounds</span>?
              </h2>
              <p className="text-lg md:text-xl text-slate-600 mb-8">
                Silver rounds appeal to investors focused on maximizing silver content 
                per dollar without paying for legal tender status or numismatic premiums.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-slate-200 flex items-center justify-center flex-shrink-0">
                    <span className="text-slate-700 font-bold">01</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      Value-Focused Stackers
                    </h3>
                    <p className="text-slate-600">
                      Investors accumulating silver by weight choose rounds for their 
                      lower premiums. Each round contains exactly 1 troy oz of .999 fine 
                      silver — more ounces per investment dollar.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-slate-200 flex items-center justify-center flex-shrink-0">
                    <span className="text-slate-700 font-bold">02</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      IRA Investors
                    </h3>
                    <p className="text-slate-600">
                      Retirement savers building Precious Metals IRAs value rounds that 
                      meet .999 purity at competitive premiums, stretching IRA dollars 
                      further than higher-premium government coins.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-slate-200 flex items-center justify-center flex-shrink-0">
                    <span className="text-slate-700 font-bold">03</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      Practical Storage Seekers
                    </h3>
                    <p className="text-slate-600">
                      Investors who want efficient storage appreciate uniform round sizing. 
                      Stack in tubes, store in safes, transport easily — rounds are practical 
                      for both home storage and professional vaults.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">
              <CapitalRequirementsCard priceData={priceData} />
            </div>
          </div>
        </div>
      </section>

      {/* Rounds vs Coins Comparison Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              <span className="accent-text">Rounds vs Coins</span>: Key Differences
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              Understanding the distinction between privately-minted rounds 
              and government-minted coins helps you make informed decisions.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-300">
                  <th className="text-left py-4 px-6 text-slate-700 font-display">
                    Feature
                  </th>
                  <th className="text-center py-4 px-6 text-slate-800 font-display font-semibold">
                    Silver Rounds
                  </th>
                  <th className="text-center py-4 px-6 text-slate-500 font-display">
                    Government Coins
                  </th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr className="border-b border-slate-200">
                  <td className="py-4 px-6 font-medium">Silver Purity</td>
                  <td className="py-4 px-6 text-center text-emerald-600 font-medium">
                    .999 fine
                  </td>
                  <td className="py-4 px-6 text-center">.999 fine</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-4 px-6 font-medium">Minted By</td>
                  <td className="py-4 px-6 text-center text-slate-800 font-medium">
                    Private Mints
                  </td>
                  <td className="py-4 px-6 text-center">Government Mints</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-4 px-6 font-medium">Legal Tender</td>
                  <td className="py-4 px-6 text-center text-slate-800 font-medium">No</td>
                  <td className="py-4 px-6 text-center text-emerald-600">Yes</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-4 px-6 font-medium">IRA Eligible</td>
                  <td className="py-4 px-6 text-center text-emerald-600 font-medium">Yes*</td>
                  <td className="py-4 px-6 text-center text-emerald-600">Yes</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-4 px-6 font-medium">Typical Premium</td>
                  <td className="py-4 px-6 text-center text-emerald-600 font-medium">Lower</td>
                  <td className="py-4 px-6 text-center">Higher</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Best For</td>
                  <td className="py-4 px-6 text-center text-slate-800 font-medium">
                    Maximum Silver/Dollar
                  </td>
                  <td className="py-4 px-6 text-center">Recognition/Liquidity</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-500 text-sm mt-4 text-center">
            *Rounds meeting .999 purity from approved sources may qualify for Precious Metals IRAs. Consult your custodian.
          </p>
        </div>
      </section>

      {/* Design Section */}
      <section className="py-16 md:py-24 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              <span className="accent-text">Distinctive Design</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              Monex Silver Eagle Rounds feature classic eagle imagery 
              with quality craftsmanship and precise specifications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <div className="flex justify-center mb-6">
                <div className="relative w-48 h-48">
                  <Image
                    src="/monex-silver-eagle-rounds-obverse.png"
                    alt="Monex Silver Eagle Round Obverse"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl font-display font-semibold text-slate-900 mb-4">
                Obverse: Eagle Design
              </h3>
              <p className="text-slate-600 mb-4">
                The obverse features a striking eagle design, symbolizing 
                strength and American heritage. The clean, detailed 
                engraving showcases quality private mint craftsmanship.
              </p>
              <p className="text-slate-500 text-sm">
                <strong className="text-slate-700">Note:</strong> While featuring 
                eagle imagery, these are privately-minted rounds, not official 
                U.S. Mint Silver Eagles.
              </p>
            </div>

            <div className="card">
              <div className="flex justify-center mb-6">
                <div className="relative w-48 h-48">
                  <Image
                    src="/monex-silver-eagle-rounds-reverse.png"
                    alt="Monex Silver Eagle Round Reverse"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl font-display font-semibold text-slate-900 mb-4">
                Reverse: Specifications
              </h3>
              <p className="text-slate-600 mb-4">
                The reverse displays weight and purity specifications, 
                clearly marking each round as containing one troy ounce 
                of .999 fine silver.
              </p>
              <p className="text-slate-500 text-sm">
                <strong className="text-slate-700">Verification:</strong> Clear 
                markings allow for easy verification of silver content 
                and authenticity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Q&A Section */}
      <QASection items={homeQA} priceData={priceData} />

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-white">
        <div className="absolute inset-0 accent-gradient opacity-5" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Further Reading
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            View{" "}
            <Link href="/live-silver-prices" className="text-slate-700 hover:underline font-medium">
              current pricing
            </Link>
            {" "}or browse the{" "}
            <Link href="/resources" className="text-slate-700 hover:underline font-medium">
              resource library
            </Link>
            {" "}for detailed guides on premiums, storage, and IRA eligibility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/live-silver-prices" className="btn-primary">
              View Current Silver Prices
            </Link>
            <Link href="/resources" className="btn-secondary">
              Explore Educational Library
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
