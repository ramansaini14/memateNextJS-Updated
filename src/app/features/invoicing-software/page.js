// 'use client';

// import AppWrapper from '../../../components/AppWrapper';
import InvoicingPage from '../../../page-components/invoicing';

export const metadata = {
  title: 'Invoicing Software for Your Business | MeMate',
  description: 'Create and send invoices in seconds. Aussie-made invoicing software to help you run your business — simple, automated, and all-in-one.',
  openGraph: {
    title: 'Invoicing Software for Your Business | MeMate',
    description: 'Create and send invoices in seconds. Aussie-made invoicing software to help you run your business — simple, automated, and all-in-one.',
  },
}

{/* <Helmet>
<title>Invoicing Software for Your Business | MeMate</title>
<meta name="description" content="Create and send invoices in seconds. Aussie-made invoicing software to help you run your business — simple, automated, and all-in-one." />
<meta property="og:title" content="Invoicing Software for Your Business | MeMate" />
  <meta property="og:description" content="Create and send invoices in seconds. Aussie-made invoicing software to help you run your business — simple, automated, and all-in-one.
" />
</Helmet> */}

export default function Invoicing() {
  return (
    // <AppWrapper>
      <InvoicingPage />
    // </AppWrapper>
  );
}