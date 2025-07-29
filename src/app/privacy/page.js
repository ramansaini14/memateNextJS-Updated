// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import PrivacyPage from '../../page-components/privacy';

export const metadata = {
  title: 'Privacy Policy | MeMate Business Management Software',
  description: 'Learn how MeMate collects, stores, and protects your data. Our privacy policy explains your rights and how we keep your business information safe.',
  openGraph: {
    title: 'Privacy Policy | MeMate Business Management Software',
    description: 'Learn how MeMate collects, stores, and protects your data. Our privacy policy explains your rights and how we keep your business information safe.',
  },
}

{/* <Helmet>
<title>Privacy Policy | MeMate Business Management Software</title>
<meta name="description" content="Learn how MeMate collects, stores, and protects your data. Our privacy policy explains your rights and how we keep your business information safe." />
<meta property="og:title" content="Privacy Policy | MeMate Business Management Software" />
  <meta property="og:description" content="Learn how MeMate collects, stores, and protects your data. Our privacy policy explains your rights and how we keep your business information safe." />
</Helmet> */}

export default function Privacy() {
  return (
    // <AppWrapper>
      <PrivacyPage />
    // </AppWrapper>
  );
}