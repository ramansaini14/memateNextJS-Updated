// 'use client';

// import AppWrapper from '../../../components/AppWrapper';
import MultiLocationPage from '../../../page-components/multi-location';

export const metadata = {
  title: 'Multi-Location Management Software | MeMate',
  description: 'One platform to manage all your business locations, staff and jobs. MeMate keeps your operations connected across sites.',
  openGraph: {
    title: 'Multi-Location Management Software | MeMate',
    description: 'One platform to manage all your business locations, staff and jobs. MeMate keeps your operations connected across sites.',
  },
}

{/* <Helmet>
<title>Multi-Location Management Software | MeMate</title>
<meta name="description" content="One platform to manage all your business locations, staff and jobs. MeMate keeps your operations connected across sites." />
<meta property="og:title" content="Multi-Location Management Software | MeMate" />
  <meta property="og:description" content="One platform to manage all your business locations, staff and jobs. MeMate keeps your operations connected across sites." />
</Helmet> */}

export default function MultiLocation() {
  return (
    // <AppWrapper>
      <MultiLocationPage />
    // </AppWrapper>
  );
}