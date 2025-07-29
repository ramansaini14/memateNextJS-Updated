// 'use client';

// import AppWrapper from '../../../components/AppWrapper';
import ProfitabilityAndBudgetingPage from '../../../page-components/profitability-and-budgeting';
export const metadata = {
  title: 'Budgeting & Profitability Software for Aussie Businesses | MeMate',
  description: 'See where you’re making money — and where you’re not. MeMate helps you budget smarter and track job profitability in real time.',
  openGraph: {
    title: 'Budgeting & Profitability Software for Aussie Businesses | MeMate',
    description: 'See where you’re making money — and where you’re not. MeMate helps you budget smarter and track job profitability in real time.',
  },
}

{/* <Helmet>
<title>Budgeting & Profitability Software for Aussie Businesses | MeMate</title>
<meta name="description" content="See where you’re making money — and where you’re not. MeMate helps you budget smarter and track job profitability in real time." />
<meta property="og:title" content="Budgeting & Profitability Software for Aussie Businesses | MeMate" />
  <meta property="og:description" content="See where you’re making money — and where you’re not. MeMate helps you budget smarter and track job profitability in real time.
" />
</Helmet> */}

export default function ProfitabilityAndBudgeting() {
  return (
    // <AppWrapper>
      <ProfitabilityAndBudgetingPage />
    // </AppWrapper>
  );
}