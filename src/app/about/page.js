// 'use client';
// import AppWrapper from '../../components/AppWrapper';
import AboutMematePage from '../../page-components/about-memate';

export const metadata = {
  title: 'About MeMate | Simplifying Business Management for Australian SMEs',
  description: 'Discover MeMate’s mission to empower Australian small and medium businesses with integrated CRM, ERP, and project management tools in one platform.',
  openGraph: {
    title: 'About MeMate | Simplifying Business Management for Australian SMEs',
    description: 'Discover MeMate’s mission to empower Australian small and medium businesses with integrated CRM, ERP, and project management tools in one platform.',
  },
};

export default function About() {
  return (
    // <AppWrapper>
      <AboutMematePage />
    // </AppWrapper>
  );
}