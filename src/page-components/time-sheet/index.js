'use client'
import React from 'react'
import Layout from '../../layout';
import TimeSheetComponent from '../../components/time-sheet';
import AppWrapper from '../../components/AppWrapper';

const TimeSheetPage = () => {
  return (
    <AppWrapper>
    <Layout>
        <TimeSheetComponent/>
    </Layout>
    </AppWrapper>
  )
}

export default TimeSheetPage;
