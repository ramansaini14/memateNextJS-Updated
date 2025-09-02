// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import PricingPage from '../../page-components/pricing';

export const metadata = {
  title: 'MeMate Pricing | Affordable Business Management Software',
  description: 'Explore MeMate’s transparent pricing plans tailored for Australian small and medium businesses. Discover affordable ERP, CRM, and project management solutions with no hidden fees.',
  openGraph: {
    title: 'MeMate Pricing | Affordable Business Management Software',
    description: 'Explore MeMate’s transparent pricing plans tailored for Australian small and medium businesses. Discover affordable ERP, CRM, and project management solutions with no hidden fees.',
  },
}

{/* <Helmet>
<title>
MeMate Pricing | Affordable Business Management Software
</title>
<meta
  name="description"
  content="Explore MeMate’s transparent pricing plans tailored for Australian small and medium businesses. Discover affordable ERP, CRM, and project management solutions with no hidden fees."
/>
<meta
  property="og:title"
  content="MeMate Pricing | Affordable Business Management Software"
/>
<meta
  property="og:description"
  content="Explore MeMate’s transparent pricing plans tailored for Australian small and medium businesses. Discover affordable ERP, CRM, and project management solutions with no hidden fees.
"
/>
</Helmet> */}

export default function Pricing() {
  return (
    // <AppWrapper>
      <PricingPage />
    // </AppWrapper>
  );
}