// 'use client';

// import AppWrapper from '../../../components/AppWrapper';
import SupplierManagementPage from '../../../page-components/supplier-management';

export const metadata = {
  title: 'Manage Suppliers & Contractors Easily | MeMate Software',
  description: 'Track and manage suppliers, contractors, and contacts in one place. MeMate helps Aussie businesses streamline communication and control.',
  openGraph: {
    title: 'Manage Suppliers & Contractors Easily | MeMate Software',
    description: 'Track and manage suppliers, contractors, and contacts in one place. MeMate helps Aussie businesses streamline communication and control.',
  },
}

{/* <Helmet>
<title>Manage Suppliers & Contractors Easily | MeMate Software</title>
<meta name="description" content="Track and manage suppliers, contractors, and contacts in one place. MeMate helps Aussie businesses streamline communication and control." />
<meta property="og:title" content="Manage Suppliers & Contractors Easily | MeMate Software" />
  <meta property="og:description" content="Track and manage suppliers, contractors, and contacts in one place. MeMate helps Aussie businesses streamline communication and control." />
</Helmet> */}

export default function SupplierManagement() {
  return (
    // <AppWrapper>
      <SupplierManagementPage />
    // </AppWrapper>
  );
}