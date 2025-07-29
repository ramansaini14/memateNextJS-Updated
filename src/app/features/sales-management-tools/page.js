// 'use client';

// import AppWrapper from '../../../components/AppWrapper';
import FeaturePage from '../../../page-components/feature-page';

export const metadata = {
  title: 'Sales Management Software for Aussie Businesses | MeMate',
  description: 'Manage leads, quotes, and deals in one spot. MeMate’s sales management software helps Aussie businesses stay organised and close faster.',
  openGraph: {
    title: 'Sales Management Software for Aussie Businesses | MeMate',
    description: 'Manage leads, quotes, and deals in one spot. MeMate’s sales management software helps Aussie businesses stay organised and close faster.',
  },
}

{/* <Helmet>
<title>Sales Management Software for Aussie Businesses | MeMate</title>
<meta name="description" content="Manage leads, quotes, and deals in one spot. MeMate’s sales management software helps Aussie businesses stay organised and close faster." />
<meta property="og:title" content="Sales Management Software for Aussie Businesses | MeMate" />
  <meta property="og:description" content="Manage leads, quotes, and deals in one spot. MeMate’s sales management software helps Aussie businesses stay organised and close faster." />
</Helmet> */}

export default function Feature() {
  return (
    // <AppWrapper>
      <FeaturePage />
    // </AppWrapper>
  );
}