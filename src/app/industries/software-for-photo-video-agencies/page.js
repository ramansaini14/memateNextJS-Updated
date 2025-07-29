// 'use client';

// import AppWrapper from '../../../components/AppWrapper';
import PhotoPage from '../../../page-components/photo-video-agency';

export const metadata = {
  title: 'Studio Management Software for Photo & Video Teams | MeMate',
  description: 'All-in-one software for photo and video agencies. Manage shoots, quotes, schedules, clients, and invoices — no more chaos across tools.',
  openGraph: {
    title: 'Studio Management Software for Photo & Video Teams | MeMate',
    description: 'All-in-one software for photo and video agencies. Manage shoots, quotes, schedules, clients, and invoices — no more chaos across tools.',
  },
}

{/* <Helmet>
<title>Studio Management Software for Photo & Video Teams | MeMate</title>
<meta name="description" content="All-in-one software for photo and video agencies. Manage shoots, quotes, schedules, clients, and invoices — no more chaos across tools." />
<meta property="og:title" content="Studio Management Software for Photo & Video Teams | MeMate" />
  <meta property="og:description" content="All-in-one software for photo and video agencies. Manage shoots, quotes, schedules, clients, and invoices — no more chaos across tools.
" />
</Helmet> */}

export default function Photo() {
  return (
    // <AppWrapper>
      <PhotoPage />
    // </AppWrapper>
  );
}