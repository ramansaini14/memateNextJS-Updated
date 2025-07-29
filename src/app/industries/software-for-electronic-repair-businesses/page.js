// 'use client';

// import AppWrapper from '../../../components/AppWrapper';
import ElectronicPage from '../../../page-components/electronic';

export const metadata = {
  title: 'Repair Shop Management Software for Electronics Businesses | MeMate',
  description: 'Run your electronics repair business with MeMate — quote jobs, track repairs, manage customers and stay organised with our all-in-one software.',
  openGraph: {
    title: 'Repair Shop Management Software for Electronics Businesses | MeMate',
    description: 'Run your electronics repair business with MeMate — quote jobs, track repairs, manage customers and stay organised with our all-in-one software.',
  },
}

{/* <Helmet>
<title>Repair Shop Management Software for Electronics Businesses | MeMate</title>
<meta name="description" content="Run your electronics repair business with MeMate — quote jobs, track repairs, manage customers and stay organised with our all-in-one software." />
<meta property="og:title" content="Repair Shop Management Software for Electronics Businesses | MeMate" />
  <meta property="og:description" content="Run your electronics repair business with MeMate — quote jobs, track repairs, manage customers and stay organised with our all-in-one software.
" />
</Helmet> */}

export default function Electronic() {
  return (
    // <AppWrapper>
      <ElectronicPage />
    // </AppWrapper>
  );
}