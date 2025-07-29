// 'use client';

import { Helmet } from 'react-helmet-async';
// import AppWrapper from '../../components/AppWrapper';
// import AboutMematePage from '../../page-components/about-memate';

export default function MetaGenerator() {
  return (
    <>
    {/* <AppWrapper> */}
        <Helmet>
            <title>About MeMate | Simplifying Business Management for Australian SMEs</title>
            <meta titlename="description" content="Discover MeMate’s mission to empower Australian small and medium businesses with integrated CRM, ERP, and project management tools in one platform." />
            <meta property="og:title" content="About MeMate | Simplifying Business Management for Australian SMEs" />
            <meta property="og:description" content="Discover MeMate’s mission to empower Australian small and medium businesses with integrated CRM, ERP, and project management tools in one platform." />
        </Helmet>
      
    {/* </AppWrapper> */}
    </>
  );
}

// export default MetaGenerator;