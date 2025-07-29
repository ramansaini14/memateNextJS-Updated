// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import FeaturesPage from '../../page-components/features';

export const metadata = {
  title: 'All-In-One Business Tools | MeMate Features for SMEs',
  description: 'Discover all the powerful tools MeMate offers to help you run your business — invoicing, quoting, CRM, scheduling, team management & more.',
  openGraph: {
    title: 'All-In-One Business Tools | MeMate Features for SMEs',
    description: 'Discover all the powerful tools MeMate offers to help you run your business — invoicing, quoting, CRM, scheduling, team management & more.',
  },
}

{/* <Helmet>
<title>All-In-One Business Tools | MeMate Features for SMEs</title>
<meta name="description" content="Discover all the powerful tools MeMate offers to help you run your business — invoicing, quoting, CRM, scheduling, team management & more." />
<meta property="og:title" content="All-In-One Business Tools | MeMate Features for SMEs" />
  <meta property="og:description" content="Discover all the powerful tools MeMate offers to help you run your business — invoicing, quoting, CRM, scheduling, team management & more." />
</Helmet> */}

export default function Features() {
  return (
    // <AppWrapper>
      <FeaturesPage />
    // </AppWrapper>
  );
}