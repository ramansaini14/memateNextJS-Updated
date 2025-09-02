// 'use client';

// import AppWrapper from '../../../components/AppWrapper';
import EmployeeManagementPage from '../../../page-components/employee-management';

export const metadata = {
  title: 'Employee Management Software for Aussie Teams | MeMate',
  description: 'Roster, schedule and manage your team in one place. MeMate’s employee management software is built for Aussie businesses that want less admin, more control.',
  openGraph: {
    title: 'Employee Management Software for Aussie Teams | MeMate',
    description: 'Roster, schedule and manage your team in one place. MeMate’s employee management software is built for Aussie businesses that want less admin, more control.',
  },
}

{/* <Helmet>
<title>Employee Management Software for Aussie Teams | MeMate</title>
<meta name="description" content="Roster, schedule and manage your team in one place. MeMate’s employee management software is built for Aussie businesses that want less admin, more control." />
<meta property="og:title" content="Employee Management Software for Aussie Teams | MeMate" />
  <meta property="og:description" content="Roster, schedule and manage your team in one place. MeMate’s employee management software is built for Aussie businesses that want less admin, more control.
" />
</Helmet> */}

export default function EmployeeManagement() {
  return (
    // <AppWrapper>
      <EmployeeManagementPage />
    // </AppWrapper>
  );
}