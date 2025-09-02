// 'use client';

import AppWrapper from '../../../components/AppWrapper';
import IndustryPage from '../../../page-components/industry-page';

export const metadata = {
  title: 'Agency Management Software for Creative Teams | MeMate',
  description: 'MeMate helps creative agencies manage projects, quotes, time tracking and team tasks — all in one platform. Aussie-built agency management software.',
  openGraph: {
    title: 'Agency Management Software for Creative Teams | MeMate',
    description: 'MeMate helps creative agencies manage projects, quotes, time tracking and team tasks — all in one platform. Aussie-built agency management software.',
  },
}

{/* <Helmet>
<title>Agency Management Software for Creative Teams | MeMate</title>
<meta name="description" content="MeMate helps creative agencies manage projects, quotes, time tracking and team tasks — all in one platform. Aussie-built agency management software." />
<meta property="og:title" content="Agency Management Software for Creative Teams | MeMate" />
  <meta property="og:description" content="MeMate helps creative agencies manage projects, quotes, time tracking and team tasks — all in one platform. Aussie-built agency management software.
" />
</Helmet> */}

export default function Industry() {
  return (
    <AppWrapper>
      <IndustryPage />
    </AppWrapper>
  );
}