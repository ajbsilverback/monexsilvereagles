import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Monex Silver Eagle Round Design | 1 oz .999 Silver Round Features",
  description:
    "Explore the design of Monex Silver Eagle Rounds — 1 oz .999 fine silver rounds with clear weight and purity markings. Privately-minted, not government coins.",
  alternates: {
    canonical: `${SITE_CONFIG.canonicalDomain}/design-history`,
  },
  openGraph: {
    title: "Monex Silver Eagle Round Design | 1 oz .999 Silver Round Features",
    description:
      "Design features of Monex Silver Eagle Rounds: clear weight and purity markings. Privately-minted, not government coins.",
    url: `${SITE_CONFIG.domain}/design-history`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Monex Silver Eagle Round Design | 1 oz .999 Fine Silver",
    description:
      "Design features of Monex Silver Eagle Rounds — privately-minted 1 oz .999 fine silver rounds.",
  },
};

export default function DesignHistoryPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Monex Silver Eagle Round Design",
    description:
      "The design and craftsmanship of Monex Silver Eagle Rounds, privately-minted silver rounds.",
    url: `${SITE_CONFIG.domain}/design-history`,
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

      <div className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Round <span className="accent-text">Design Features</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              1 oz .999 fine silver rounds with clear markings for weight and purity verification.
            </p>
          </div>

          {/* Important Note */}
          <section className="card p-6 md:p-8 mb-10 border-amber-200 bg-amber-50">
            <h2 className="text-xl font-display font-semibold text-slate-900 mb-3">
              These Are Rounds, Not Government Coins
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Monex Silver Eagle Rounds are <strong className="text-slate-900">privately-minted silver rounds</strong>, 
              distinct from official American Silver Eagle coins. They have no legal tender status or face value. 
              The eagle imagery reflects traditional design but does not indicate government minting.
            </p>
          </section>

          {/* Introduction Section */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">
              Investor-Focused Design
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Monex Silver Eagle Rounds are designed with investors in mind. Clear weight and purity markings 
              enable straightforward verification. The consistent 1 oz sizing supports easy stacking and storage.
            </p>
            <p className="text-slate-600 leading-relaxed">
              While sharing .999 fine purity with government coins, rounds offer lower premiums because they 
              lack legal tender production overhead. The design prioritizes silver content verification over 
              numismatic complexity.
            </p>
          </section>

          {/* Obverse Design */}
          <section className="card p-6 md:p-8 mb-10 bg-slate-50 border-slate-200">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              {/* Text Column */}
              <div className="md:col-span-7 order-2 md:order-1">
                <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">
                  Obverse: Eagle Imagery
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  The obverse (front) of Monex Silver Eagle Rounds features a striking eagle design that symbolizes strength and American tradition:
                </p>
                <ul className="space-y-3 text-slate-600 mb-4">
                  <li className="flex items-start gap-3">
                    <span className="text-slate-500">•</span>
                    <span><strong className="text-slate-900">Classic eagle motif</strong>: Timeless design representing American ideals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-500">•</span>
                    <span><strong className="text-slate-900">Detailed engraving</strong>: Quality private mint craftsmanship</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-500">•</span>
                    <span><strong className="text-slate-900">Clean presentation</strong>: Professional appearance suitable for investment holdings</span>
                  </li>
                </ul>
                <p className="text-slate-600 leading-relaxed">
                  While featuring eagle imagery, these are privately-minted rounds, distinct from official U.S. Silver Eagles produced by the U.S. Mint.
                </p>
              </div>
              {/* Image Column */}
              <div className="md:col-span-5 flex justify-center items-center order-1 md:order-2">
                <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-square mx-auto">
                  <Image
                    src="/monex-silver-eagle-rounds-obverse.png"
                    alt="Monex Silver Eagle Round obverse design featuring classic eagle imagery"
                    fill
                    className="object-contain drop-shadow-lg"
                    sizes="(max-width: 640px) 280px, 320px"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Reverse Design */}
          <section className="card p-6 md:p-8 mb-10">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              {/* Image Column */}
              <div className="md:col-span-5 flex justify-center items-center">
                <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-square mx-auto">
                  <Image
                    src="/monex-silver-eagle-rounds-reverse.png"
                    alt="Monex Silver Eagle Round reverse design showing weight and purity specifications"
                    fill
                    className="object-contain drop-shadow-lg"
                    sizes="(max-width: 640px) 280px, 320px"
                  />
                </div>
              </div>
              {/* Text Column */}
              <div className="md:col-span-7">
                <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">
                  Reverse: Specifications Display
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  The reverse (back) of Monex Silver Eagle Rounds clearly displays key specifications that matter to investors:
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Key information inscribed includes weight (1 troy ounce) and purity (.999 fine silver). This standardized marking allows for immediate verification and supports confidence in the silver content.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Clear markings distinguish quality rounds from generic products and support verification during transactions.
                </p>
              </div>
            </div>
          </section>

          {/* Rounds vs Coins Design */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">
              Design Distinction: Rounds vs. Government Coins
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Understanding the design differences between privately-minted rounds and government coins:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="text-slate-800 font-semibold mb-2">Monex Silver Eagle Rounds</h3>
                <p className="text-slate-500 text-sm">
                  Privately minted with classic eagle design. No face value or legal tender markings. Focused on silver content and weight specifications.
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="text-slate-800 font-semibold mb-2">American Silver Eagles</h3>
                <p className="text-slate-500 text-sm">
                  Minted by the U.S. Mint with Walking Liberty obverse and heraldic eagle reverse. Includes $1 face value and &ldquo;United States of America&rdquo; inscription.
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="text-slate-800 font-semibold mb-2">Design Purpose</h3>
                <p className="text-slate-500 text-sm">
                  Round designs focus on silver content verification. Coin designs incorporate national symbolism and legal tender requirements.
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="text-slate-800 font-semibold mb-2">Investor Considerations</h3>
                <p className="text-slate-500 text-sm">
                  Rounds offer clean designs at lower premiums. Coins offer government backing with higher collector appeal.
                </p>
              </div>
            </div>
            <p className="text-slate-500 text-sm">
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

          {/* What Design Signals to Investors */}
          <section className="card p-6 md:p-8 mb-10 bg-slate-50 border-slate-200">
            <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">
              What Design Signals to Investors
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              For investors, round design conveys important information:
            </p>
            <div className="space-y-4">
              <div className="border-l-2 border-slate-300 pl-4">
                <h3 className="text-slate-900 font-semibold">Quality Assurance</h3>
                <p className="text-slate-500 text-sm">
                  Professional design and clear markings indicate quality minting standards and accurate silver content.
                </p>
              </div>
              <div className="border-l-2 border-slate-300 pl-4">
                <h3 className="text-slate-900 font-semibold">Content Verification</h3>
                <p className="text-slate-500 text-sm">
                  Clearly inscribed weight and purity allow for easy verification and support confident transactions.
                </p>
              </div>
              <div className="border-l-2 border-slate-300 pl-4">
                <h3 className="text-slate-900 font-semibold">Market Recognition</h3>
                <p className="text-slate-500 text-sm">
                  Established round designs are recognized by dealers, supporting liquidity through the Monex network.
                </p>
              </div>
              <div className="border-l-2 border-slate-300 pl-4">
                <h3 className="text-slate-900 font-semibold">Value Focus</h3>
                <p className="text-slate-500 text-sm">
                  Clean, functional design without numismatic complexity keeps focus on silver investment value.
                </p>
              </div>
            </div>
          </section>

          {/* Important Note */}
          <section className="card p-6 md:p-8 mb-10 border-amber-200 bg-amber-50">
            <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">
              Important Distinction
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Monex Silver Eagle Rounds are <strong className="text-slate-900">privately-minted silver rounds</strong>, not official government coins:
            </p>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="text-amber-600">•</span>
                <span>Not produced by the U.S. Mint or any government mint</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600">•</span>
                <span>No legal tender status or face value</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600">•</span>
                <span>Distinct from American Silver Eagle coins</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600">•</span>
                <span>Valued for silver content, not numismatic rarity</span>
              </li>
            </ul>
            <p className="text-slate-500 text-sm mt-4">
              This distinction is important for accurate understanding of the product and its market position.
            </p>
          </section>

          {/* Navigation CTAs */}
          <div className="text-center pt-8 border-t border-slate-200">
            <p className="text-slate-500 mb-6">
              Related pages
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/resources" className="btn-primary">
                Browse Resources
              </Link>
              <Link href="/where-to-buy" className="btn-secondary">
                Where to Buy
              </Link>
              <Link href="/coin-specs" className="btn-secondary">
                Round Specifications
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
