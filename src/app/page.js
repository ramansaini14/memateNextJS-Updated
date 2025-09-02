// 'use client';

import AppWrapper from '../components/AppWrapper';
import LandingPage from '../page-components/landing-page';

export const metadata = {
  title: 'Business Management Software, ERP system, CRM & Project Management in One',
  description: 'Cloud-based business management and ERP software for Australian SMEs, with built-in CRM and project management tools.',
  openGraph: {
    title: 'Business Management Software, ERP system, CRM & Project Management in One',
    description: 'Cloud-based business management and ERP software for Australian SMEs, with built-in CRM and project management tools.',
  },
}

{/* <Helmet>
<title>Business Management Software, ERP system, CRM & Project Management in One</title>
<meta name="description" content="Cloud-based business management and ERP software for Australian SMEs, with built-in CRM and project management tools." />
<meta property="og:title" content="Business Management Software, ERP system, CRM & Project Management in One" />
<meta property="og:description" content="Cloud-based business management and ERP software for Australian SMEs, with built-in CRM and project management tools." />
</Helmet> */}

export default function Home() {
  return (
    <AppWrapper>
      <LandingPage />
    </AppWrapper>
  );
}
 