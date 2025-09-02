// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import ServicesVsSagePage from '../../../page-components/memate-vs-sage';

export const metadata = {
  title: 'MeMate vs Sage | Best Sage Alternative for Australian Service Businesses',
  description: 'Compare MeMate and Sage to find the best solution for running quotes, jobs, and teams. MeMate is a simpler Sage alternative, built for Australian businesses with everything in one place.',
  openGraph: {
    title: 'MeMate vs Sage | Best Sage Alternative for Australian Service Businesses',
    description: 'Compare MeMate and Sage to find the best solution for running quotes, jobs, and teams. MeMate is a simpler Sage alternative, built for Australian businesses with everything in one place.',
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

export default function ServicesVsSage() {
  return (
    // <AppWrapper>
      <ServicesVsSagePage />
    // </AppWrapper>
  );
}