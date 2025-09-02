// 'use client';

// import AppWrapper from '../../../components/AppWrapper';
import ReportsPage from '../../../page-components/reports';

export const metadata = {
  title: 'Track Your Business Performance | Reporting Tools by MeMate',
  description: 'Get real-time business insights, track performance, and stay on top of finances. MeMate’s reporting software is built for Aussie small and medium businesses.',
  openGraph: {
    title: 'Track Your Business Performance | Reporting Tools by MeMate',
    description: 'Get real-time business insights, track performance, and stay on top of finances. MeMate’s reporting software is built for Aussie small and medium businesses.',
  },
}

{/* <Helmet>
<title>Track Your Business Performance | Reporting Tools by MeMate</title>
<meta name="description" content="Get real-time business insights, track performance, and stay on top of finances. MeMate’s reporting software is built for Aussie small and medium businesses." />
<meta property="og:title" content="Track Your Business Performance | Reporting Tools by MeMate" />
  <meta property="og:description" content="Get real-time business insights, track performance, and stay on top of finances. MeMate’s reporting software is built for Aussie small and medium businesses.
" />
</Helmet> */}

export default function Reports() {
  return (
    // <AppWrapper>
      <ReportsPage />
    // </AppWrapper>
  );
}