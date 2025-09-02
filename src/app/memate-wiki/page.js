// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import MemateWikiPage from '../../page-components/memate-wiki';

export const metadata = {
  title: 'MeMate Wiki | Business Tips & Insights for Aussie SMEs',
  description: 'Practical business advice, growth tips and industry insights for Australian businesses. The MeMate Wiki helps you build, run and grow smarter.',
  openGraph: {
    title: 'MeMate Wiki | Business Tips & Insights for Aussie SMEs',
    description: 'Practical business advice, growth tips and industry insights for Australian businesses. The MeMate Wiki helps you build, run and grow smarter.',
  },
}

{/* <Helmet>
<title>MeMate Wiki | Business Tips & Insights for Aussie SMEs</title>
<meta name="description" content="Practical business advice, growth tips and industry insights for Australian businesses. The MeMate Wiki helps you build, run and grow smarter." />
<meta property="og:title" content='MeMate Wiki | Business Tips & Insights for Aussie SMEs' />
<meta property="og:description" content='Practical business advice, growth tips and industry insights for Australian businesses. The MeMate Wiki helps you build, run and grow smarter.' />  
</Helmet> */}

export default function MemateWiki() {
  return (
    // <AppWrapper>
      <MemateWikiPage />
    // </AppWrapper>
  );
}