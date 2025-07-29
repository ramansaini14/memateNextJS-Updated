// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import ContactUsPage from '../../page-components/contact-us';

export const metadata = {
  title: 'Contact MeMate | Business Software Support & Demo Requests Australia',
  description: 'Contact MeMate for support, demo bookings, or sales enquiries. Speak with real people in Australia — we’re here to help your business get sorted, fast.',
  openGraph: {
    title: 'Contact MeMate | Business Software Support & Demo Requests Australia',
    description: 'Contact MeMate for support, demo bookings, or sales enquiries. Speak with real people in Australia — we’re here to help your business get sorted, fast.',
  },
}

{/* <Helmet>
<title>Contact MeMate | Business Software Support & Demo Requests Australia</title>
<meta name="description" content="Contact MeMate for support, demo bookings, or sales enquiries. Speak with real people in Australia — we’re here to help your business get sorted, fast." />
<meta property="og:title" content="Contact MeMate | Business Software Support & Demo Requests Australia" />
  <meta property="og:description" content="Contact MeMate for support, demo bookings, or sales enquiries. Speak with real people in Australia — we’re here to help your business get sorted, fast." />
</Helmet> */}

export default function ContactUs() {
  return (
    // <AppWrapper>
      <ContactUsPage />
    // </AppWrapper>
  );
}