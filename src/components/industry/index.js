'use client'
import React from 'react'
import './style.css';
import IndustryHeader from './industry-header';
import IndustryBussinessManagement from './industry-bussiness-managment';
import IndustryCrousel from './industry-crousel';
// import IndustryMoreSpecific from './industry-more-specific';
import IndustyQuesitonAndAns from './industry-question-ans';
// import ReadMoreData from './industry-read-more';
import AppWrapper from '../../components/AppWrapper';
import Layout from '../../layout';
import NewsAndUpdate from "../../components/news-and-updates";


const IndustryPageContent = ({postsLatest}) => {
 
  return (
    <>
    <div className='industry-page-wrapper'>
      <div className='industry-page-parent'>
        <IndustryHeader/>
        <IndustryBussinessManagement/>
        <IndustryCrousel/>
        <NewsAndUpdate postsLatest={postsLatest} />
        <IndustyQuesitonAndAns/>
      </div>
    </div>
    </>
  )
}

export default IndustryPageContent
