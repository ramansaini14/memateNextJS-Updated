// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import MemateFaqsPage from '../../page-components/memate-faqs';

export const metadata = {
  title: 'MeMate FAQs | Business Management Software Questions',
  description: 'Everything you want to know about MeMate — from features to onboarding. Quick answers for Aussie businesses making the switch.',
  openGraph: {
    title: 'MeMate FAQs | Business Management Software Questions',
    description: 'Everything you want to know about MeMate — from features to onboarding. Quick answers for Aussie businesses making the switch.',
  },
}

//  <Helmet>
//         <title>MeMate FAQs | Business Management Software Questions</title>
//         <meta
//           name="description"
//           content="Everything you want to know about MeMate — from features to onboarding. Quick answers for Aussie businesses making the switch."
//         />
//         <meta
//           property="og:title"
//           content="MeMate FAQs | Business Management Software Questions"
//         />
//         <meta
//           property="og:description"
//           content="Everything you want to know about MeMate — from features to onboarding. Quick answers for Aussie businesses making the switch.
//     "
//         />
//       </Helmet>

export default function MemateFaqs() {
  return (
    // <AppWrapper>
      <MemateFaqsPage />
    // </AppWrapper>
  );
}