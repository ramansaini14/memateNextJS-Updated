// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import SoftwareUpdatePage from '../../page-components/software-update-page';

export const metadata = {
  title: 'MeMate Software Updates | Latest Features & Improvements',
  description: 'See the latest MeMate software updates — new features, improvements, and fixes designed to help Aussie businesses run better every day.',
  openGraph: {
    title: 'MeMate Software Updates | Latest Features & Improvements',
    description: 'See the latest MeMate software updates — new features, improvements, and fixes designed to help Aussie businesses run better every day.',
  },
}

{/* <Helmet>
<title>MeMate Software Updates | Latest Features & Improvements</title>
<meta
  name="description"
  content="See the latest MeMate software updates — new features, improvements, and fixes designed to help Aussie businesses run better every day."
/>
<meta
  property="og:title"
  content="MeMate Software Updates | Latest Features & Improvements"
/>
<meta
  property="og:description"
  content="See the latest MeMate software updates — new features, improvements, and fixes designed to help Aussie businesses run better every day."
/>
</Helmet> */}

export default function SoftwareUpdate() {
  return (
    // <AppWrapper>
      <SoftwareUpdatePage />
    // </AppWrapper>
  );
}