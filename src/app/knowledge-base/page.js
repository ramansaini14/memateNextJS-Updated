// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import KnowledgeBasePage from '../../page-components/knowledge-base';

export const metadata = {
  title: 'MeMate Knowledge Base | User Guides & Support Docs',
  description: 'Learn how to use MeMate with step-by-step tutorials, setup guides, and feature walkthroughs. Everything you need to get the most out of your system.',
  openGraph: {
    title: 'MeMate Knowledge Base | User Guides & Support Docs',
    description: 'Learn how to use MeMate with step-by-step tutorials, setup guides, and feature walkthroughs. Everything you need to get the most out of your system.',
  },
}

{/* <Helmet>
<title>MeMate Knowledge Base | User Guides & Support Docs</title>
<meta name="description" content="Learn how to use MeMate with step-by-step tutorials, setup guides, and feature walkthroughs. Everything you need to get the most out of your system." />
<meta property="og:title" content="MeMate Knowledge Base | User Guides & Support Docs" />
  <meta property="og:description" content="Learn how to use MeMate with step-by-step tutorials, setup guides, and feature walkthroughs. Everything you need to get the most out of your system." />
</Helmet> */}

export default function KnowledgeBase() {
  return (
    // <AppWrapper>
      <KnowledgeBasePage />
    // </AppWrapper>
  );
}