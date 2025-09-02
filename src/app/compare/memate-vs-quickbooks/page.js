// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import ServicesVsQuickBooksPage from '../../../page-components/memate-vs-quickbooks';

export const metadata = {
  title: 'Compare the Solution: MeMate vs QuickBooks',
  description: 'Compare MeMate and Microsoft Project to find the best tool for running jobs, quoting, and teams. MeMate is the all-in-one alternative built for Australian service businesses.',
  openGraph: {
    title: 'Compare the Solution: MeMate vs QuickBooks',
    description: 'Compare MeMate and Microsoft Project to find the best tool for running jobs, quoting, and teams. MeMate is the all-in-one alternative built for Australian service businesses.',
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

export default function ServicesVsQuickBooks() {
  return (
    // <AppWrapper>
      <ServicesVsQuickBooksPage />
    // </AppWrapper>
  );
}