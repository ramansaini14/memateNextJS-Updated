// 'use client';

// import AppWrapper from '../../../components/AppWrapper';
import JobApprovalPage from '../../../page-components/job-approval';

export const metadata = {
  title: 'Get Jobs Signed Off Faster | MeMate Job Approval Tools',
  description: 'Track job progress, get sign-offs, and keep everyone accountable. MeMate’s job approval software helps Aussie teams close the loop — no paperwork needed.',
  openGraph: {
    title: 'Get Jobs Signed Off Faster | MeMate Job Approval Tools',
    description: 'Track job progress, get sign-offs, and keep everyone accountable. MeMate’s job approval software helps Aussie teams close the loop — no paperwork needed.',
  },
}

{/* <Helmet>
<title>Get Jobs Signed Off Faster | MeMate Job Approval Tools</title>
<meta name="description" content="Track job progress, get sign-offs, and keep everyone accountable. MeMate’s job approval software helps Aussie teams close the loop — no paperwork needed." />
<meta property="og:title" content="Get Jobs Signed Off Faster | MeMate Job Approval Tools" />
  <meta property="og:description" content="Track job progress, get sign-offs, and keep everyone accountable. MeMate’s job approval software helps Aussie teams close the loop — no paperwork needed." />
</Helmet> */}

export default function JobApproval() {
  return (
    // <AppWrapper>
      <JobApprovalPage />
    // </AppWrapper>
  );
}