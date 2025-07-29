// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import CustomerStoriesPage from '../../page-components/customer-stories-page';

export const metadata = {
  title: 'How Aussie Businesses Use MeMate | Customer Stories & Results',
  description: 'Real stories from Aussie businesses using MeMate to run smoother. See how SMEs in trades, services, and more use MeMate to get results.',
  openGraph: {
    title: 'How Aussie Businesses Use MeMate | Customer Stories & Results',
    description: 'Real stories from Aussie businesses using MeMate to run smoother. See how SMEs in trades, services, and more use MeMate to get results.',
  },
}

{/* <Helmet>
    <title>How Aussie Businesses Use MeMate | Customer Stories & Results</title>
    <meta name="description" content="Real stories from Aussie businesses using MeMate to run smoother. See how SMEs in trades, services, and more use MeMate to get results." />
    <meta property="og:title" content="How Aussie Businesses Use MeMate | Customer Stories & Results" />
      <meta property="og:description" content="Real stories from Aussie businesses using MeMate to run smoother. See how SMEs in trades, services, and more use MeMate to get results.
    " />
</Helmet> */}

export default function CustomerStories() {
  return (
    // <AppWrapper>
      <CustomerStoriesPage />
    // </AppWrapper>
  );
}