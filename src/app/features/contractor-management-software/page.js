// 'use client';

// import AppWrapper from '../../../components/AppWrapper';
import ContractorPage from '../../../page-components/contractor';

export const metadata = {
  title: 'Contractor Management Software for Aussie Businesses | MeMate',
  description: 'Assign jobs, track progress and manage contractors all in one place. MeMate’s contractor management software is built for Aussie service businesses.',
  openGraph: {
    title: 'Contractor Management Software for Aussie Businesses | MeMate',
    description: 'Assign jobs, track progress and manage contractors all in one place. MeMate’s contractor management software is built for Aussie service businesses.',
  },
}

{/* <Helmet>
<title>Contractor Management Software for Aussie Businesses | MeMate</title>
<meta name="description" content="Assign jobs, track progress and manage contractors all in one place. MeMate’s contractor management software is built for Aussie service businesses." />
<meta property="og:title" content="Contractor Management Software for Aussie Businesses | MeMate" />
  <meta property="og:description" content="Assign jobs, track progress and manage contractors all in one place. MeMate’s contractor management software is built for Aussie service businesses." />
</Helmet> */}

export default function Contractor() {
  return (
    // <AppWrapper>
      <ContractorPage />
    // </AppWrapper>
  );
}