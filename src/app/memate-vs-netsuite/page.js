// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import ServicesNetsuitePage from '../../page-components/memate-vs-netsuite';

export const metadata = {
  title: 'Client Management Software | CRM Tools for Small Businesses in Australia',
  description: 'Streamline managing clients and prospective clients with MeMate’s cloud-based CRM software. Designed for small businesses in Australia, our tools help organise your client database and improve relationships.',
  openGraph: {
    title: 'Client Management Software | CRM Tools for Small Businesses in Australia',
    description: 'Streamline managing clients and prospective clients with MeMate’s cloud-based CRM software. Designed for small businesses in Australia, our tools help organise your client database and improve relationships.',
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