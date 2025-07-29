// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import IndustriesPage from '../../page-components/industries';

export const metadata = {
  title: 'Built for Every Industry | MeMate Business Tools by Sector',
  description: 'From tradies to agencies, MeMate supports industries across Australia with all-in-one business management software — tailored to how you work.',
  openGraph: {
    title: 'Built for Every Industry | MeMate Business Tools by Sector',
    description: 'From tradies to agencies, MeMate supports industries across Australia with all-in-one business management software — tailored to how you work.',
  },
}

{/* <Helmet>
    <title>Built for Every Industry | MeMate Business Tools by Sector</title>
    <meta name="description" content="From tradies to agencies, MeMate supports industries across Australia with all-in-one business management software — tailored to how you work." />
    <meta property="og:title" content="Built for Every Industry | MeMate Business Tools by Sector" />
      <meta property="og:description" content="From tradies to agencies, MeMate supports industries across Australia with all-in-one business management software — tailored to how you work.
    " />
</Helmet> */}

export default function Industries() {
  return (
    // <AppWrapper>
      <IndustriesPage />
    // </AppWrapper>
  );
}