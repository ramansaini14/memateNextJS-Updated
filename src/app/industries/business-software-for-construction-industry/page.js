// 'use client';

import AppWrapper from '../../../components/AppWrapper';
import ConstructionPage from '../../../page-components/construction';

export const metadata = {
  title: 'Business Software for Construction Industry | MeMate',
  description: 'Discover the best business software for construction industry. Streamline your construction business with MeMate.',
}

export default function Construction() {
  return (
    <AppWrapper>
      <ConstructionPage />
    </AppWrapper>
  );
}