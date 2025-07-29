'use client'
import React from 'react'
import Layout from '../../layout'
import IndustryPageContent from '../../components/industry'
// import { Helmet } from 'react-helmet-async'
import AppWrapper from '../../components/AppWrapper'

const IndustryPage = ({postsLatest}) => {

 
  return (
    <>
    <AppWrapper>
    <Layout>
      <div className="bgshadowwrapper">
      <IndustryPageContent postsLatestMainIndustry={postsLatest}/>
      </div>
    </Layout>
    </AppWrapper>
    </>
  )
}

export default IndustryPage
