'use client'
import React from 'react'
import Layout from '../../layout';
import ConstructionComponent from '../../components/construction';
import AppWrapper from '../../components/AppWrapper';
const ConstructionPage = () => {
  return (
    <AppWrapper>
    <Layout>
        <ConstructionComponent/>
    </Layout>
    </AppWrapper>
  )
}

export default ConstructionPage;
