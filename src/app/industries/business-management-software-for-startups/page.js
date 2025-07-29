// 'use client';

// import AppWrapper from '../../../components/AppWrapper';
import StartupsPage from '../../../page-components/startups';

export const metadata = {
  title: 'Startup Business Management Software | MeMate Australia',
  description: 'Run your startup smarter with MeMate — CRM, project tools, quotes, invoicing & team management in one Aussie-built platform. Less busy-work, more growth.',
  openGraph: {
    title: 'Startup Business Management Software | MeMate Australia',
    description: 'Run your startup smarter with MeMate — CRM, project tools, quotes, invoicing & team management in one Aussie-built platform. Less busy-work, more growth.',
  },
}

{/* <Helmet>
<title>Startup Business Management Software | MeMate Australia</title>
<meta name="description" content="Run your startup smarter with MeMate — CRM, project tools, quotes, invoicing & team management in one Aussie-built platform. Less busy-work, more growth." />
<meta property="og:title" content="Startup Business Management Software | MeMate Australia" />
  <meta property="og:description" content="Run your startup smarter with MeMate — CRM, project tools, quotes, invoicing & team management in one Aussie-built platform. Less busy-work, more growth.
" />
</Helmet> */}

export default function Startups() {
  return (
    // <AppWrapper>
      <StartupsPage />
    // </AppWrapper>
  );
}