// 'use client';

import React from 'react';
// import AppWrapper from '../../components/AppWrapper';
import AddYourCompanyPage from '../../page-components/add-your-company';
export const metadata = {
    title: 'Add Your Company | List Your Business in MeMate’s Supplier Directory',
    description: 'Register your company in MeMate’s supplier directory to connect with businesses looking for trusted suppliers. Join the leading Australian business directory today.',
    openGraph: {
        title: 'Add Your Company | List Your Business in MeMate’s Supplier Directory',
        description: 'Register your company in MeMate’s supplier directory to connect with businesses looking for trusted suppliers. Join the leading Australian business directory today.',
    },
}

{/* <Helmet>
<title>Add Your Company | List Your Business in MeMate’s Supplier Directory</title>
<meta name="description" content="Register your company in MeMate’s supplier directory to connect with businesses looking for trusted suppliers. 
Join the leading Australian business directory today." />
<meta property="og:title" content="Add Your Company | List Your Business in MeMate’s Supplier Directory" />
<meta property="og:description" content="Register your company in MeMate’s supplier directory to connect with businesses looking for trusted suppliers. 
Join the leading Australian business directory today." />
</Helmet> */}

export default function AddYourCompany() {
    return (
        // <AppWrapper>
            <AddYourCompanyPage />
        // </AppWrapper>
    );
}