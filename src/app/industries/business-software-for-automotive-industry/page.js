// 'use client';

import AppWrapper from '../../../components/AppWrapper';
import AutomotivePage from '../../../page-components/automotive';

export const metadata = {
  title: 'Automotive Workshop Software for Aussie Businesses | MeMate',
  description: 'Run your auto repair shop or service business with MeMate — manage jobs, quotes, schedules, payments & more, all in one smart Aussie-built platform.',
  openGraph: {
    title: 'Automotive Workshop Software for Aussie Businesses | MeMate',
    description: 'Run your auto repair shop or service business with MeMate — manage jobs, quotes, schedules, payments & more, all in one smart Aussie-built platform.',
  },
}

{/* <Helmet>
<title>Automotive Workshop Software for Aussie Businesses | MeMate</title>
<meta name="description" content="Run your auto repair shop or service business with MeMate — manage jobs, quotes, schedules, payments & more, all in one smart Aussie-built platform." />
<meta property="og:title" content="Automotive Workshop Software for Aussie Businesses | MeMate" />
  <meta property="og:description" content="Run your auto repair shop or service business with MeMate — manage jobs, quotes, schedules, payments & more, all in one smart Aussie-built platform.
" />
</Helmet> */}

export default function Automotive() {
  return (
    <AppWrapper>
      <AutomotivePage />
    </AppWrapper>
  );
}