// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import ResourcesPage from '../../page-components/resources';

export const metadata = {
  title: 'Resources | Business Management Guides & Tools by meMate',
  description: 'Access MeMate’s library of resources, including business management guides, CRM tutorials, and workflow automation tips. Empower your Australian small business with expert tools and advice',
  openGraph: {
    title: 'Resources | Business Management Guides & Tools by meMate',
    description: 'Access MeMate’s library of resources, including business management guides, CRM tutorials, and workflow automation tips. Empower your Australian small business with expert tools and advice',
  },
}

{/* <Helmet>
<title>Resources | Business Management Guides & Tools by meMate</title>
<meta name="description" content="Access MeMate’s library of resources, including business management guides, CRM tutorials, and workflow automation tips. 
  Empower your Australian small business with expert tools and advice" />
<meta property="og:title" content="Resources | Business Management Guides & Tools by meMate" />
  <meta property="og:description" content="Access MeMate’s library of resources, including business management guides, CRM tutorials, and workflow automation tips. 
  Empower your Australian small business with expert tools and advice
" />
</Helmet> */}

export default function Resources() {
  return (
    // <AppWrapper>
      <ResourcesPage />
    // </AppWrapper>
  );
}