import CMDynamic from "./agile-pipeline-management";
import CMIntuitive from "./crm-sales-tool";
import CMSmart from "./pipeline-tool";
import CMIntelligent from "./sales-management";
import CMWise from "./sales-process-optimization";
import "./style.css";
import { motion } from "framer-motion";
import ScrollStack from "./ScrollStack";
const SalesComponentFeature = () => {
  return (
    <div className="sales-component-feature-wrapperF">
      <div
        className="sales-component-featureF"
        // data-aos="fade-up"
        // data-aos-offset="50"
        // data-aos-delay="50"
        // data-aos-duration="600"
        // data-aos-mirror="true"
        // data-aos-once="false"
        // data-aos-anchor-placement="top-bottom"
      >
        <motion.h2
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 50,
            mass: 0.6,
            delay: 0.2,
            duration: 5,
          }}
        >
          Memate
        </motion.h2>

        <motion.span
          className="gradientAnimenate"
          style={{ display: "inline-block" }}
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 50,
            mass: 0.6,
            delay: 0.2,
            duration: 5,
          }}
        >
          features
        </motion.span>
      </div>
      <div className="scroll-stack-wrapper">
        
        <ScrollStack CardDataComponent={CMIntelligent} color="white" i={1} />
        <ScrollStack CardDataComponent={CMIntuitive} color="white" i={2} />
        <ScrollStack CardDataComponent={CMSmart} color="white" i={3} />
        <ScrollStack CardDataComponent={CMWise} color="white" i={4} />
        <ScrollStack CardDataComponent={CMDynamic} color="white" i={5} />
      </div>
      {/* <div className="sales-feature-wrapperF">
          <CMIntelligent/>
          <CMIntuitive/>
          <CMSmart/>
          <CMWise/>
          <CMDynamic/>
        </div> */}
    </div>
  );
};

export default SalesComponentFeature;
