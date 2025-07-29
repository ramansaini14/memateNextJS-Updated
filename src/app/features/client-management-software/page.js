// 'use client';

// import AppWrapper from '../../../components/AppWrapper';
import ClientPage from '../../../page-components/client-management';

export const metadata = {
  title: 'Client Management Software for Aussie Businesses | MeMate',
  description: 'Manage clients, contacts, and communications in one place. MeMate’s all-in-one client management software is built for Australian businesses.',
  openGraph: {
    title: 'Client Management Software for Aussie Businesses | MeMate',
    description: 'Manage clients, contacts, and communications in one place. MeMate’s all-in-one client management software is built for Australian businesses.',
  },
}

{/* <Helmet>
<title>Client Management Software for Aussie Businesses | MeMate</title>
<meta name="description" content="Manage clients, contacts, and communications in one place. MeMate’s all-in-one client management software is built for Australian businesses." />
<meta property="og:title" content="Client Management Software for Aussie Businesses | MeMate" />
  <meta property="og:description" content="Manage clients, contacts, and communications in one place. MeMate’s all-in-one client management software is built for Australian businesses." />
</Helmet> */}

export default function Client() {
  return (
    // <AppWrapper>
      <ClientPage />
    // </AppWrapper>
  );
}