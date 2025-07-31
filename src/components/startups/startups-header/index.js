import React from 'react'
import './style.css'
import Link from 'next/link';
import TronRequestADemo from "@/layout/hover-button/TronRequestADemo";
import WhiteButtonBammer from "@/layout/hover-button/WhiteButtonBammer";
const StartupsHeader = () => {
  return (
    // <div className='startup-header-wrapper' data-aos="fade-up"
    // data-aos-offset="50"
    // data-aos-delay="50"
    // data-aos-duration="500"
    // data-aos-mirror="true"
    // data-aos-once="false"
    // data-aos-anchor-placement="top-bottom">
    //   <br/>
    //   <br/>
    //   <br/>
    //   <br/>
    //   <img
    //         className="starTups"
    //         srcSet={`${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/startupsAndNewBusinesses1x.png'} 600w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/startupsAndNewBusinesses2x.png'} 1200w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/startupsAndNewBusinesses1x.png'} 1800w`}
    //         sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
    //         src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/startupsAndNewBusinesses3x.png'}
    //         alt="contact us main image"
    //         // width={400} height={400}
    //       />
    //   <h1 className='startup-top-heading'>Business Management Software for Startups</h1>
    //   <p className='startup-middle-heading'>Startups and<br/> New Businesses</p>
    //   <p className='startup-heading-content'>meMate is designed to help you kickstart your business with the right workflow from day one. It’s the ideal tool to set up your operations smoothly and efficiently as you grow.</p>
    //   <Link href="https://app.memate.com.au/requestdemo" target="_blank"><button className='startup-heading-button'>Book a Demo</button></Link>
    // </div>
    <>
     <div className='NextHeaderWrap'>
      <h1>Business Management</h1>
      <h2>startups and new companies</h2>
      <p>All-in-one business management software designed to help startups and new companies<br/> stay organized and grow with confidence.</p>
    </div>
      <div className='NextHeaderWrapper'>
    <div className='industryNewHead'>
    <div className='LeftSide'>
      <span>Management Software for</span>
       <h4>Startups and New Businesses</h4>
       <p>meMate is designed to help you kickstart your business with the right workflow from day one. It’s the ideal tool to set up your operations smoothly and efficiently as you grow.</p>
       <div className="dubleButtonLeft">
                <div className="request-btn">
                  <Link
                    href="https://app.memate.com.au/requestdemo"
                    target="_blank"
                    className="nav-btn--get-started  navbar-link">
                      <TronRequestADemo text="Book a Demo" />
                  </Link>
                </div>
                <div className="request-btn">
                  <Link
                    href="https://app.memate.com.au/onboarding"
                    target="_blank"
                    className="nav-btn--get-started  navbar-link">
                      <WhiteButtonBammer text="Start Free Trial"/>
                  </Link>
                </div>
          </div>
    </div>
    <div className='RightSide'>
     <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/industry-new-img.png" width="100%" alt="industry-specific software solutions"/>
    </div>
    </div>
   </div>
    </>
  )
}

export default StartupsHeader
