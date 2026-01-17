import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/siteConfig";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.canonicalDomain),
  title: {
    default: `${SITE_CONFIG.brandName} | 1 oz .999 Fine Silver Round Guide`,
    template: `%s | ${SITE_CONFIG.brandName}`,
  },
  description:
    "Your guide to Monex Silver Eagle Rounds — privately-minted 1 oz .999 fine silver rounds. Learn about premiums, liquidity, stackability, storage, and IRA eligibility. Not government coins.",
  keywords: [
    "Monex Silver Eagle Rounds",
    "silver rounds",
    "1 oz silver round",
    ".999 fine silver",
    "silver bullion rounds",
    "buy silver rounds",
    "silver round prices",
    "silver round investment",
    "IRA eligible silver rounds",
    "Monex silver",
    "private mint silver rounds",
    "silver stacking",
    "silver storage",
  ],
  authors: [{ name: SITE_CONFIG.brandName }],
  creator: SITE_CONFIG.brandName,
  publisher: SITE_CONFIG.brandName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.domain,
    siteName: SITE_CONFIG.brandName,
    title: `${SITE_CONFIG.brandName} | 1 oz .999 Fine Silver Round Guide`,
    description:
      "Privately-minted 1 oz .999 fine silver rounds. Learn about premiums, liquidity, storage, and IRA eligibility. Not government coins.",
    images: [
      {
        url: `${SITE_CONFIG.domain}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Monex Silver Eagle Rounds - 1 oz .999 Fine Silver",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.brandName} | 1 oz .999 Fine Silver Round Guide`,
    description:
      "Privately-minted 1 oz .999 fine silver rounds. Learn about premiums, liquidity, storage, and IRA eligibility.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_CONFIG.canonicalDomain,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased" suppressHydrationWarning>
        <Header />
        <main className="flex-grow pt-[108px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
