<<<<<<< HEAD
import Link from "next/link";
import "./style.css";
import TronRequestADemo from "../../../layout/hover-button/TronRequestADemo";
import { motion } from "framer-motion";
const SalesComponent = () => {
  return (
  <>
    <div className="sales-component-wrapper salesfeaturesWrapper" 
    >
       <motion.h1
         className="h1tagsseo h1tagsseof fontWeight"
         initial={{ y: -40, opacity: 0 }}
         whileInView={{ y: 0, opacity: 1 }}
         viewport={{ once: true, amount: 0.6 }}
         transition={{ type: "spring", stiffness: 180, damping: 18, mass: 0.6, delay: 0.5 }}
       >
         Time Tracking Software & Employee Time Tracking App
       </motion.h1>
       <div className="sales-headingF gradientText">time tracking</div>
      <div className="sales-componet-content-wrapperF client-component-para">
        <div className="sales-component-contentF">
        <motion.span
        // FADE TEST  
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ type: "spring", stiffness: 180, damping: 18, mass: 0.6, delay: 1  }}
        >
       With meMate, you can track time for all your employees and contractors using our specially designed mobile application. 
        This feature combines the functionality of time tracking tools with real-time time tracking, allowing you to monitor work 
        hours accurately. Whether you’re managing a small business or a large team, meMate provides work hour tracking 
        solutions that include employee time management and time tracking and reporting for seamless workforce oversight.
          </motion.span>
        </div>
        <div className="sales-component-button-wrapper">
        <motion.div className="request-btn request-btn-center" 
        initial={{ y: -10, opacity: 1 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ type: "spring", stiffness: 150, damping: 10, mass: 4, delay: 0  }}
        >
        <Link href='https://app.memate.com.au/requestdemo' target="_blank" className="nav-btn--get-started navbar-link"><TronRequestADemo text="Request a Demo" /></Link>
      </motion.div>
=======
import Link from 'next/link';
import "./style.css";
// import TronButton from "../../../layout/hover-button/tourn-but";
import TronRequestADemo from "../../../layout/hover-button/TronRequestADemo";
const SalesComponent = () => {
  return (
  <>
    <div className="sales-component-wrapper salesfeaturesWrapper" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
       <h1 className="h1tagsseo h1tagsseof fontWeight">Time Tracking Software & Employee Time Tracking App</h1>
       <div className="sales-headingF">time tracking</div>
      <div className="sales-componet-content-wrapperF client-component-para">
        <div className="sales-component-contentF">
        <span>
        With meMate, you can track time for all your employees and contractors using our specially designed mobile application. 
        This feature combines the functionality of time tracking tools with real-time time tracking, allowing you to monitor work 
        hours accurately. Whether you’re managing a small business or a large team, meMate provides work hour tracking 
        solutions that include employee time management and time tracking and reporting for seamless workforce oversight.</span>
        </div>
        <div className="sales-component-button-wrapper">
        <div  className="request-btn request-btn-center">
                <Link href="https://app.memate.com.au/requestdemo" target="_blank" className="nav-btn--get-started navbar-link"><TronRequestADemo text="Request a Demo" /></Link>
              </div>
>>>>>>> ef8a5abf810f9b7aae5a4bbb94c37897e3730277
        </div>
      </div>
    </div>
  </>
  );
};

export default SalesComponent;
