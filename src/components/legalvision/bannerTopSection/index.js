import Link from "next/link";
import "./bannerstyle.css";
import SalesIcon from "../../../svg/SalesIcon";
import ProfitabilityIcon from "../../../svg/ProfitabilityIcon";
import QuoteIcon from "../../../svg/QuoteIcon";
import CommunicationIcon from "../../../svg/CommunicationIcon";
import ReportingIcon from "../../../svg/ReportingIcon";
import CalculationIcon from "../../../svg/CalculationIcon";
import Scheduling from "../../../svg/Scheduling";
import EmployeesIcon from "../../../svg/EmployeesIcon";
import ManagementIconActive from "../../../svg/ManagementIconActive";
import WhiteButtonBammer from "@/layout/hover-button/WhiteButtonBammer";
import DarkButtonLauout from "@/layout/hover-button/darkButtonLauout";
<<<<<<< HEAD
=======
import MacbookCarousel from "../macbookcarousel";
import {motion, useAnimation} from 'motion/react'

>>>>>>> d94d148038808c2551e44ad5d574c66378ee81d9
const LegalvisionBannerComponent = () => {
  const controls = useAnimation();
  const targetState = { x: 0, y: 0, rotate: 0, opacity: 1 };
  return (
    <>
      <div className="legalvisionSectionBanner">
        <h2>Smarter. Faster. Digital.</h2>
        <h1>Run Your Business.</h1>
        <div className="sales-componet-content-wrapper client-component-para">
          <section className="partnerWrap">
            <ul className="leftItems">
              <motion.li
                initial={{ opacity: 0, x: -150, y: -40, rotate: 10 }}
                animate={controls}
                viewport={{ once: true, amount: 0.3 }}
                onViewportEnter={() => {
                  controls.start({
                    ...targetState,
                    transition: {
                      duration: 1,
                      delay: 0.1,
                      ease: "easeOut",
                    },
                  });
                }}
                drag
                dragMomentum={false}
                whileDrag={{ zIndex: 1000 }}
                onDragEnd={() => {
                  controls.start({
                    ...targetState,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    },
                  });
                }}
              >
                <span>
                  <SalesIcon alt="Sales icon" />
                </span>
                <p>Sales</p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -150, y: -20, rotate: 5 }}
                animate={controls}
                viewport={{ once: true, amount: 0.3 }}
                onViewportEnter={() => {
                  controls.start({
                    ...targetState,
                    transition: {
                      duration: 1,
                      delay: 0.1,
                      ease: "easeOut",
                    },
                  });
                }}
                drag
                dragMomentum={false}
                whileDrag={{ zIndex: 1000 }}
                onDragEnd={() => {
                  controls.start({
                    ...targetState,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    },
                  });
                }}>
                <span>
                  <ProfitabilityIcon alt="Profitability icon" />
                </span>
                <p>Profitability</p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -150, y: 20, rotate: -5 }}
                animate={controls}
                viewport={{ once: true, amount: 0.3 }}
                onViewportEnter={() => {
                  controls.start({
                    ...targetState,
                    transition: {
                      duration: 1,
                      delay: 0.1,
                      ease: "easeOut",
                    },
                  });
                }}
                drag
                dragMomentum={false}
                whileDrag={{ zIndex: 1000 }}
                onDragEnd={() => {
                  controls.start({
                    ...targetState,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    },
                  });
                }}>
                <span>
                  <QuoteIcon alt="Quote icon" />
                </span>
                <p>Quote</p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -150, y: 40, rotate: -10 }}
                animate={controls}
                viewport={{ once: true, amount: 0.3 }}
                onViewportEnter={() => {
                  controls.start({
                    ...targetState,
                    transition: {
                      duration: 1,
                      delay: 0.1,
                      ease: "easeOut",
                    },
                  });
                }}
                drag
                dragMomentum={false}
                whileDrag={{ zIndex: 1000 }}
                onDragEnd={() => {
                  controls.start({
                    ...targetState,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    },
                  });
                }}>
                <span>
                  <CommunicationIcon alt="Communication icon" />
                </span>
                <p>Communication</p>
              </motion.li>
            </ul>
            <div className="middleItem">
              <img
                src="https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/partner-banner-img.png"
                width="100%"
                alt="Mockup"
              />

              <div className="activeBusiness">
                <div className="activeBorder">
                  <ManagementIconActive alt="Management icon" />
                  <p>Management</p>
                </div>
              </div>
            </div>
            <ul className="RightItems">
              <motion.li
                initial={{ opacity: 0, x: 150, y: -40, rotate: -10 }}
                animate={controls}
                viewport={{ once: true, amount: 0.3 }}
                onViewportEnter={() => {
                  controls.start({
                    ...targetState,
                    transition: {
                      duration: 1,
                      delay: 0.1,
                      ease: "easeOut",
                    },
                  });
                }}
                drag
                dragMomentum={false}
                whileDrag={{ zIndex: 1000 }}
                onDragEnd={() => {
                  controls.start({
                    ...targetState,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    },
                  });
                }}>
                <span>
                  <ReportingIcon alt="Reporting icon" />
                </span>
                <p>Reporting</p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 150, y: -20, rotate: -5 }}
                animate={controls}
                viewport={{ once: true, amount: 0.3 }}
                onViewportEnter={() => {
                  controls.start({
                    ...targetState,
                    transition: {
                      duration: 1,
                      delay: 0.1,
                      ease: "easeOut",
                    },
                  });
                }}
                drag
                dragMomentum={false}
                whileDrag={{ zIndex: 1000 }}
                onDragEnd={() => {
                  controls.start({
                    ...targetState,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    },
                  });
                }}>
                <span>
                  <CalculationIcon alt="Calculation icon" />
                </span>
                <p>Calculation</p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 150, y: 20, rotate: 5 }}
                animate={controls}
                viewport={{ once: true, amount: 0.3 }}
                onViewportEnter={() => {
                  controls.start({
                    ...targetState,
                    transition: {
                      duration: 1,
                      delay: 0.1,
                      ease: "easeOut",
                    },
                  });
                }}
                drag
                dragMomentum={false}
                whileDrag={{ zIndex: 1000 }}
                onDragEnd={() => {
                  controls.start({
                    ...targetState,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    },
                  });
                }}>
                <span>
                  <Scheduling alt="Scheduling icon" />
                </span>
                <p>Scheduling</p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 150, y: 40, rotate: 10 }}
                animate={controls}
                viewport={{ once: true, amount: 0.3 }}
                onViewportEnter={() => {
                  controls.start({
                    ...targetState,
                    transition: {
                      duration: 1,
                      delay: 0.1,
                      ease: "easeOut",
                    },
                  });
                }}
                drag
                dragMomentum={false}
                whileDrag={{ zIndex: 1000 }}
                onDragEnd={() => {
                  controls.start({
                    ...targetState,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    },
                  });
                }}>
                <span>
                  <EmployeesIcon alt="Employees icon" />
                </span>
                <p>Employees</p>
              </motion.li>
            </ul>
          </section>

          <div className="legalvisionbannerbtn">
            <div className="darkButton">
              <Link href="https://app.memate.com.au/onboarding" target="_blank">
                <DarkButtonLauout text="Get started free" />
              </Link>
            </div>
            <span className="saprateSpace">OR</span>
            <div className="lightButton">
              <Link href="tel:0280802100">
                <WhiteButtonBammer text="Quick call" />
              </Link>
            </div>
          </div>
        </div>
        <p>
          Get in touch with our experts above for tailored discovery calls,
          personalized onboarding, and inquiries.
        </p>
        <div
          className="downClickButton"
          onClick={() => {
            document.getElementById("legalvision")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          <img
            alt="DownBlackArrow"
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/down-black-arrow.svg"
          />
        </div>
      </div>
      <div id="legalvision" className="legalvision-special-sec">
        <div className="legalvision-flex">
          <div className="legalvision-gridL">
             <div className="adminSlideWrap">
              <img
              src="https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/Free_MacBook_Pro_transparent.png"
              width="100%"
              alt="Free_MacBook_Pro_1+1"
            />
            
               <div className="adminSlideGrid">
               <div className="adminSlideItem itemActive">
               <img
              src="https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/slide-img01.png"
              width="100%"
              alt="Slider01"
               />
               </div>
               <div className="adminSlideItem itemDeactive">
               <img
              src="https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/slide-img01.png"
              width="100%"
               alt="Slider01"
               />
               </div>
               <div className="adminSlideItem itemDeactive">
               <img
              src="https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/slide-img01.png"
              width="100%"
                alt="Slider01"
               />
               </div>
               </div>
             </div>
           
          </div>
          <div className="legalvision-gridR">
            <span>legalvision Special: </span>
            <h3>First 3 months 50% disount</h3>
            <div className="listText">
              <ul>
                <li>
                  <svg
                    width="23"
                    height="19"
                    viewBox="0 0 23 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.546 0.0503374C17.3532 1.42674 12.0077 5.10762 7.07881 11.4129L4.16569 8.1801C3.71761 7.66818 2.88553 7.66818 2.43721 8.1801L0.293054 10.5811C-0.123106 11.0611 -0.090946 11.7652 0.357134 12.1814L6.95041 18.5186C7.49449 19.0307 8.39065 18.9026 8.77489 18.2306C12.2957 11.861 16.0726 7.1241 22.4741 1.68258C23.2421 1.01058 22.5379 -0.269823 21.5458 0.0505774L21.546 0.0503374Z"
                      fill="#00B300"
                    />
                  </svg>
                  Guided onboarding included
                </li>
                <li>
                  <svg
                    width="23"
                    height="19"
                    viewBox="0 0 23 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.546 0.0503374C17.3532 1.42674 12.0077 5.10762 7.07881 11.4129L4.16569 8.1801C3.71761 7.66818 2.88553 7.66818 2.43721 8.1801L0.293054 10.5811C-0.123106 11.0611 -0.090946 11.7652 0.357134 12.1814L6.95041 18.5186C7.49449 19.0307 8.39065 18.9026 8.77489 18.2306C12.2957 11.861 16.0726 7.1241 22.4741 1.68258C23.2421 1.01058 22.5379 -0.269823 21.5458 0.0505774L21.546 0.0503374Z"
                      fill="#00B300"
                    />
                  </svg>
                  Training included
                </li>
              </ul>
            </div>
            <p>
              Just use this promo code when creating your account:
              <strong>LV50</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LegalvisionBannerComponent;
