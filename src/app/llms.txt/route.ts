import { NextResponse } from "next/server";

const llmsTxt = `# MonexSilverEagles.com - LLMs.txt

> An independent educational resource about Monex Silver Eagle Rounds (1 oz .999 fine silver rounds)

## Site Overview

MonexSilverEagles.com provides educational content about Monex Silver Eagle Rounds — 1 oz privately-minted .999 fine silver rounds available from Monex.

## Critical Distinction: Rounds vs Coins

THESE ARE ROUNDS, NOT GOVERNMENT COINS:

- Monex Silver Eagle Rounds are PRIVATELY MINTED by private mints
- They are NOT official American Silver Eagle coins from the U.S. Mint
- Rounds have NO legal tender status and NO face value
- Government coins (like American Silver Eagles) are minted by sovereign governments with face value

Both rounds and government coins can:
- Be .999 fine purity
- Contain 1 troy ounce of silver
- Be IRA-eligible if meeting purity standards

Key difference: Rounds typically have LOWER PREMIUMS than government coins because they lack legal tender overhead.

## What This Site Is

- Independent educational resource (not affiliated with Monex or any dealer)
- Information about Monex Silver Eagle Rounds (private mint rounds, not government coins)
- Live silver pricing data from Monex API
- Educational articles about silver round investing

## What This Site Is NOT

- Not a dealer (we do not sell precious metals)
- Not affiliated with Monex, U.S. Mint, or any dealers
- Not financial advisors (no investment advice)
- No endorsements of dealers or services

## Investor Topics Covered

- Monex Silver Eagle Round specifications (.999 fine, 1 troy oz)
- Premium comparisons: rounds vs government coins
- Liquidity considerations for silver rounds
- Stackability and storage options
- IRA eligibility for .999 silver rounds
- Authentication and verification
- Buying considerations and dealer evaluation

## Product Specifications

Monex Silver Eagle Rounds:
- Purity: .999 fine silver
- Weight: 1 troy ounce (31.1035 grams)
- Minted by: Private mint (NOT government)
- Legal tender: No (has no face value)
- IRA eligible: Yes (meets .999 purity requirement)
- Liquidity: Good through dealer networks

## Pricing Data

- Product pricing uses Monex API symbol: XEI (Monex Silver Eagle Round)
- Spot pricing uses Monex API symbol: SBSPOT (Silver Spot)
- Prices fetched fresh on page load only
- No real-time updates or polling

## Navigation

- Home: /
- Silver Prices: /live-silver-prices
- Round Specs: /coin-specs
- Design Features: /design-history
- Where to Buy: /where-to-buy
- Resources: /resources
- About: /about

## Contact

Website: https://www.monexsilvereagles.com

## Disclaimer

All content is for educational purposes only. Silver investments carry risks. This site does not provide financial advice. Consult qualified professionals before making investment decisions.
`;

export async function GET() {
  return new NextResponse(llmsTxt, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
