// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import BrandPage from '../../page-components/brand';

export const metadata = {
  title: 'MeMate Brand Assets | Logos, Guidelines & Media Kit',
  description: 'Download official MeMate logos, colours, and branding guidelines. Access our media kit for press, partners, or promotional use. Simple, approved, and up to date.',
  openGraph: {
    title: 'MeMate Brand Assets | Logos, Guidelines & Media Kit',
    description: 'Download official MeMate logos, colours, and branding guidelines. Access our media kit for press, partners, or promotional use. Simple, approved, and up to date.',
  },
}

{/* <Helmet>
<title>MeMate Brand Assets | Logos, Guidelines & Media Kit</title>
<meta name="description" content="Download official MeMate logos, colours, and branding guidelines. Access our media kit for press, partners, or promotional use. Simple, approved, and up to date." />
<meta property="og:title" content="MeMate Brand Assets | Logos, Guidelines & Media Kit" />
  <meta property="og:description" content="Download official MeMate logos, colours, and branding guidelines. Access our media kit for press, partners, or promotional use. Simple, approved, and up to date." />
</Helmet> */}

export default function Brand() {
  return (
    // <AppWrapper>
      <BrandPage />
    // </AppWrapper>
  );
}