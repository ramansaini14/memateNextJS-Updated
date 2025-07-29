// 'use client';

// import AppWrapper from '../../../components/AppWrapper';
import CommunicationPage from '../../../page-components/communication';

export const metadata = {
  title: 'Keep Your Team in Sync | MeMate Communication Tools',
  description: 'No more scattered messages. Keep team chats, tasks and updates in one place — MeMate makes internal communication easy for small businesses.',
  openGraph: {
    title: 'Keep Your Team in Sync | MeMate Communication Tools',
    description: 'No more scattered messages. Keep team chats, tasks and updates in one place — MeMate makes internal communication easy for small businesses.',
  },
}

{/* <Helmet>
<title>Keep Your Team in Sync | MeMate Communication Tools</title>
<meta name="description" content="No more scattered messages. Keep team chats, tasks and updates in one place — MeMate makes internal communication easy for small businesses." />
<meta property="og:title" content="Keep Your Team in Sync | MeMate Communication Tools" />
  <meta property="og:description" content="No more scattered messages. Keep team chats, tasks and updates in one place — MeMate makes internal communication easy for small businesses.
" />
</Helmet> */}

export default function Communication() {
  return (
    // <AppWrapper>
      <CommunicationPage />
    // </AppWrapper>
  );
}