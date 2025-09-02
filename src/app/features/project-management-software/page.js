// 'use client';

// import AppWrapper from '../../../components/AppWrapper';
import ProjectManagementPage from '../../../page-components/project-management';

export const metadata = {
  title: 'Project Management Software for Aussie Businesses | MeMate',
  description: 'Manage business projects, tasks and teams with ease. MeMate’s project management software is built for Australian small and medium-sized businesses.',
  openGraph: {
    title: 'Project Management Software for Aussie Businesses | MeMate',
    description: 'Manage business projects, tasks and teams with ease. MeMate’s project management software is built for Australian small and medium-sized businesses.',
  },
}

{/* <Helmet>
<title>Project Management Software for Aussie Businesses | MeMate</title>
<meta name="description" content="Manage business projects, tasks and teams with ease. MeMate’s project management software is built for Australian small and medium-sized businesses." />
<meta property="og:title" content="Project Management Software for Aussie Businesses | MeMate" />
  <meta property="og:description" content="Manage business projects, tasks and teams with ease. MeMate’s project management software is built for Australian small and medium-sized businesses." />
</Helmet> */}

export default function ProjectManagement() {
  return (
    // <AppWrapper>
      <ProjectManagementPage />
    // </AppWrapper>
  );
}