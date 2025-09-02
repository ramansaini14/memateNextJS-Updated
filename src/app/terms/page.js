// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import TermsAndConditionsPage from '../../page-components/terms-and-conditions';
export const metadata = {
  title: 'Terms of Use | MeMate Business Software Australia',
  description: 'View the terms of use for MeMate — Australia’s business management software platform. Review your rights, responsibilities and platform access terms.',
  openGraph: {
    title: 'Terms of Use | MeMate Business Software Australia',
    description: 'View the terms of use for MeMate — Australia’s business management software platform. Review your rights, responsibilities and platform access terms.',
  },
}

{/* <Helmet>
<title>Terms of Use | MeMate Business Software Australia</title>
<meta
  name="description"
  content="View the terms of use for MeMate — Australia’s business management software platform. Review your rights, responsibilities and platform access terms."
/>
<meta
  property="og:title"
  content="Terms of Use | MeMate Business Software Australia"
/>
<meta
  property="og:description"
  content="View the terms of use for MeMate — Australia’s business management software platform. Review your rights, responsibilities and platform access terms."
/>
 </Helmet> */}

export default function TermsAndConditions() {
  return (
    // <AppWrapper>
      <TermsAndConditionsPage />
    // </AppWrapper>
  );
}