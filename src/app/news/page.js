'use client';

import AppWrapper from '../../components/AppWrapper';
import BlogPage from '../../page-components/blog-page';

// export const metadata = {
//   title: 'Latest in Business Tech & Software | MeMate Newsroom',
//   description: 'Stay updated with the latest in business software, tech trends and Aussie regulations. News and insights from the team behind MeMate.',
//   openGraph: {
//     title: 'Latest in Business Tech & Software | MeMate Newsroom',
//     description: 'Stay updated with the latest in business software, tech trends and Aussie regulations. News and insights from the team behind MeMate.',
//   },
// }
     {/* <Helmet>
        <title>Latest in Business Tech & Software | MeMate Newsroom</title>
        <meta name="description" content="Stay updated with the latest in business software, tech trends and Aussie regulations. News and insights from the team behind MeMate." />
        <meta property="og:title" content="Latest in Business Tech & Software | MeMate Newsroom" />
        <meta property="og:description" content="Stay updated with the latest in business software, tech trends and Aussie regulations. News and insights from the team behind MeMate." />
      </Helmet> */}

export default function NewsPage() {
  return (
    <AppWrapper>
      <BlogPage />
    </AppWrapper>
  );
}