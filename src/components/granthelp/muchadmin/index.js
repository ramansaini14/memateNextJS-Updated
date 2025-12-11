import "../../../components/find-one-all/style.css";
import SliderTab from "../../../components/find-one-all/slider-tabs";
import SliderTabMobile from "../../../components/find-one-all/slider-mobile";
import CenterMode from "../../../components/find-one-all/CenterMode";
import './muchAdmin.css'
import { motion } from "motion/react";
const MuchAdminComponent = () => {
  return (
  <>
  <div className="toMuchAdminSection">
    <p>Too many apps. Too much admin. Too many <br></br>missed  projects or unpaid invoices.</p>
    <div className="adminScrollBackground">
    <motion.div
      className="imageAdminBg"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={{
        visible: { transition: { staggerChildren: 0.18, delayChildren: 0.05 } },
      }}
    >
    <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/backgrounBg-admin.jpg" width="1100px" alt="Mockup" />
     <motion.div className="overlyAdminText overlyAdminTextFirst" variants={{ hidden: {}, visible: {} }}>
      <motion.p variants={{ hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 420, damping: 26 } } }}>
        Still jumping between apps just to get one thing done?
      </motion.p>
    </motion.div>
     <motion.div className="overlyAdminText overlyAdminTextSecond" variants={{ hidden: {}, visible: {} }}>
      <motion.p variants={{ hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 420, damping: 26 } } }}>
        Paperwork’s growing faster than your business?
      </motion.p>
    </motion.div>
     <motion.div className="overlyAdminText overlyAdminTextThird" variants={{ hidden: {}, visible: {} }}>
      <motion.p variants={{ hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 420, damping: 26 } } }}>
        Still chasing timesheets instead of running the crew?
      </motion.p>
    </motion.div>
     <motion.div className="overlyAdminText overlyAdminTextFourth" variants={{ hidden: {}, visible: {} }}>
      <motion.p variants={{ hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 420, damping: 26 } } }}>
        Hard to know if you’re making money ‘til the month’s over?
      </motion.p>
    </motion.div>
     <motion.div className="overlyAdminText overlyAdminTextFifth" variants={{ hidden: {}, visible: {} }}>
      <motion.p style={{ transformOrigin: "right bottom" }} variants={{ hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 420, damping: 26 } } }}>
        More jobs, more admin and none of it paid for?
      </motion.p>
    </motion.div>
     

    </motion.div>
   
    </div>
     
    <motion.div
          className="downClickButton"
          animate={{
            y: [0, 12, 0],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ display: "inline-block" }}
        >
          <motion.img
            alt="DownBlackArrow"
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/down-black-arrow.svg"
            style={{ cursor: "pointer", }}
            onClick={() => {
              document.getElementById("legalvision")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          />
        </motion.div>
  </div>
  <div className="one-application-wrappers toMuchAdminApplication" >   
           <span className="text smokeyGradient">With MeMate you get<br></br> everything in one place:</span>
      <div className="desktop-slider">
      {/* <SliderTab /> */}
      <CenterMode />
      </div>
      <div className="mobile-slider">
      <SliderTabMobile />
      </div>
      </div>
 
    

  </>
  );
};

export default MuchAdminComponent;
