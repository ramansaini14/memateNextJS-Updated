// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import SupplierDatabasePage from '../../page-components/supplier-database';

export const metadata = {
  title: 'List Your Business in the MeMate Supplier Directory | Get Seen by Aussie SMEs',
  description: 'Submit your business to the MeMate Supplier Directory and get discovered by thousands of Aussie businesses. Free listings for trusted local vendors.',
  openGraph: {
    title: 'List Your Business in the MeMate Supplier Directory | Get Seen by Aussie SMEs',
    description: 'Submit your business to the MeMate Supplier Directory and get discovered by thousands of Aussie businesses. Free listings for trusted local vendors.',
  },
}

{/* <Helmet>
<title>
  List Your Business in the MeMate Supplier Directory | Get Seen by Aussie SMEs
</title>
<meta
  name="description"
  content="Submit your business to the MeMate Supplier Directory and get discovered by thousands of Aussie businesses. Free listings for trusted local vendors."
/>
<meta
  property="og:title"
  content="List Your Business in the MeMate Supplier Directory | Get Seen by Aussie SMEs"
/>
<meta
  property="og:description"
  content="Submit your business to the MeMate Supplier Directory and get discovered by thousands of Aussie businesses. Free listings for trusted local vendors."
/>
</Helmet> */}

export default function SupplierDatabase() {
  return (
    // <AppWrapper>
      <SupplierDatabasePage />
    // </AppWrapper>
  );
}