// 'use client';

// import AppWrapper from '../../../components/AppWrapper';
import ScheduleJobsPage from '../../../page-components/schedule-jobs';

export const metadata = {
  title: 'Schedule, Assign & Track Jobs | Job Management with MeMate',
  description: 'Assign, schedule and track jobs with ease. MeMate’s job management software helps Aussie businesses stay on top of every task, team and deadline.',
  openGraph: {
    title: 'Schedule, Assign & Track Jobs | Job Management with MeMate',
    description: 'Assign, schedule and track jobs with ease. MeMate’s job management software helps Aussie businesses stay on top of every task, team and deadline.',
  },
}

{/* <Helmet>
<title>Schedule, Assign & Track Jobs | Job Management with MeMate</title>
<meta name="description" content="Assign, schedule and track jobs with ease. MeMate’s job management software helps Aussie businesses stay on top of every task, team and deadline." />
<meta property="og:title" content="Schedule, Assign & Track Jobs | Job Management with MeMate" />
  <meta property="og:description" content="Assign, schedule and track jobs with ease. MeMate’s job management software helps Aussie businesses stay on top of every task, team and deadline.
" />
</Helmet> */}

export default function ScheduleJobs() {
  return (
    // <AppWrapper>
      <ScheduleJobsPage />
    // </AppWrapper>
  );
}