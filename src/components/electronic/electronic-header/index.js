import React from 'react'
import './style.css'
import TronRequestADemo from "../../../layout/hover-button/TronRequestADemo";
import WhiteButtonBammer from "../../../layout/hover-button/WhiteButtonBammer";
import Link from "next/link";
const ElectronicHeader = () => {
  return (
    <>
    {/* <div className='electronic-header-wrapper' data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <img
            className="electronicImage"
            srcSet={`${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/ElectronicRepair3x.png'} 600w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/ElectronicRepair2x.png'} 1200w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/ElectronicRepair1x.png'} 1800w`}
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
            src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/ElectronicRepair3x.png'}
            alt="contact us main image"
            // width={400} height={400}
          />
      <h1 className='electronic-top-heading'>Repair Shop Management Software for Electronics Businesses<br/>
      operate efficiently</h1>
      <p className='electronic-middle-heading'>Electronic <br></br>Repair <br></br>Specialists</p>
      <p className='electronic-heading-content'>With MeMate, you can effortlessly communicate with clients and effortlessly submit jobs, all from a centralised and streamlined interface. Say goodbye to scattered systems and embrace the convenience of MeMate for unparalleled business management in the  electronics repair industry.</p>
      <Link href="https://app.memate.com.au/requestdemo" target="_blank"><button className='electronic-heading-button'>Book a Demo</button></Link>
    </div> */}
    <div className='NextHeaderWrap'>
      <h1>Business Management </h1>
      <h2>software for repair shops</h2>
      <p>Meet MeMate, a complete solution built with repair shops in mind. Whether you’re fixing cameras, phones, computers, or any other electronics, our software is tailored to make your business run smoother and more efficiently.</p>
    </div>
      <div className='NextHeaderWrapper'>
    <div className='industryNewHead'>
    <div className='LeftSide'>
      <span>Software that helps Australian repair shops
operate efficiently</span>
       <h4>Electronic Repair Specialists</h4>
       <p>With MeMate, you can effortlessly communicate with clients and effortlessly submit jobs, all from a centralised and streamlined interface. Say goodbye to scattered systems and embrace the convenience of MeMate for unparalleled business management in the  electronics repair industry.</p>
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
     <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/electronic-head-photo.png" width="100%" alt="small repair business software"/>
    </div>
    </div>
   </div>
    </>
  )
}

export default ElectronicHeader
