// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import ServicesNetsuitePage from '../../../page-components/memate-vs-netsuite';

export const metadata = {
  title: 'MeMate vs NetSuite | Best NetSuite Alternative for Australian SMEs',
  description: 'Compare MeMate and NetSuite to find the best business management software for Australian service providers. See why MeMate is a simpler, more affordable alternative with built-in quoting, invoicing, team tracking, and local support.',
  openGraph: {
    title: 'MeMate vs NetSuite | Best NetSuite Alternative for Australian SMEs',
    description: 'Compare MeMate and NetSuite to find the best business management software for Australian service providers. See why MeMate is a simpler, more affordable alternative with built-in quoting, invoicing, team tracking, and local support.',
  },
}

{/* <Helmet>
<title>Client Management Software | CRM Tools for Small Businesses in Australia</title>
<meta name="description" content="Streamline managing clients and prospective clients with MeMate’s cloud-based CRM software. 
  Designed for small businesses in Australia, our tools help organise your client database and improve relationships." />
<meta property="og:title" content="Client Management Software | CRM Tools for Small Businesses in Australia" />
  <meta property="og:description" content="Streamline managing clients and prospective clients with MeMate’s cloud-based CRM software. 
  Designed for small businesses in Australia, our tools help organise your client database and improve relationships." />
</Helmet> */}

export default function ServicesNetsuite() {
  return (
    // <AppWrapper>
      <ServicesNetsuitePage />
    // </AppWrapper>
  );
}