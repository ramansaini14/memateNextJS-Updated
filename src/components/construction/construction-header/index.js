import React from "react";
import "./style.css";
import Link from "next/link";
import TronRequestADemo from "@/layout/hover-button/TronRequestADemo";
import WhiteButtonBammer from "@/layout/hover-button/WhiteButtonBammer";
const ConstructionHeader = () => {
  return (
    // <div className='automotive-header-wrapper' data-aos="fade-up"
    // data-aos-offset="50"
    // data-aos-delay="50"
    // data-aos-duration="500"
    // data-aos-mirror="true"
    // data-aos-once="false"
    // data-aos-anchor-placement="top-bottom">
    //   <img
    //         className="autoMotive"
    //         srcSet={`${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/CarDetailing3x.png'} 600w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/CarDetailing2x.png'} 1200w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/CarDetailing1x.png'} 1800w`}
    //         sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
    //         src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/CarDetailing3x.png'}
    //         alt=''
    //         // alt="contact us main image"
    //         // width={400} height={400}
    //       />
    //  <h1 className='startup-top-heading'>Business Management Software for the Automotive Industry</h1>
    //   <p className='startup-middle-heading'>For Car<br/> Wrapping & <br/>Detailing  </p>
    //   <p className='startup-heading-content'>meMate streamlines operations for car wrapping and detailing services, managing workflows, contractors, and customer communication—all in one easy-to-use platform.</p>
    //   <Link href="https://app.memate.com.au/requestdemo" target="_blank"><button className='startup-heading-button'>Book a Demo</button></Link>
    // </div>

    <>
      <div className="NextHeaderWrap">
        <h1>Business Management</h1>
        <h2>software for construction companies</h2>
        <p>
        All-in-one business software for Australian construction companies. Manage jobs, quotes,<br/> contractors, scheduling, invoicing, and site teams — all in one place        
        </p>
      </div>
      <div className="NextHeaderWrapper">
        <div className="industryNewHead">
          <div className="LeftSide">
            <span>Management Software for</span>
            <h4>Builders, Trades & Construction Teams</h4>
            <p>
            Run your construction business the smart way — with everything in one dashboard. From job quotes to on-site contractor coordination, MeMate <br/>handles it all.           </p>
            <div className="dubleButtonLeft">
              <div className="request-btn">
                <Link
                  href="https://app.memate.com.au/requestdemo"
                  target="_blank"
                  className="nav-btn--get-started  navbar-link"
                >
                  <TronRequestADemo text="Book a Demo" />
                </Link>
              </div>
              <div className="request-btn">
                <Link
                  href="https://app.memate.com.au/onboarding"
                  target="_blank"
                  className="nav-btn--get-started  navbar-link"
                >
                  <WhiteButtonBammer text="Start Free Trial" />
                </Link>
              </div>
            </div>
          </div>
          <div className="RightSide">
            <img
              src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/industry-new-img.png"
              width="100%"
              alt="industry-specific software solutions"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ConstructionHeader;
