import "./brandLogoSlider.css";
import { motion } from "motion/react";

const LOGOS = [
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/theadLogo.svg",
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/legalvisionLogo.svg",
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/sortedLogo.svg",
  "https://res.cloudinary.com/dn0jqjad3/image/upload/v1765365094/payComLogo_rfgxh7.svg",
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/grantHelpLogo.svg",
];

const BrandLogoSlide = () => {
  const marqueeLogos = [...LOGOS, ...LOGOS];

  return (
    <div className="brandLogoSlider">
      <span>Our partners</span>
      <div className="brandLogoWrapper">
        <motion.div
          className="brandLogoTrack"
          animate={{ x: ["0%", "-25%"] }}
          transition={{
            duration: 90,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {marqueeLogos.map((src, index) => (
            <div className="logoItem" key={`${src}-${index}`}>
              <img src={src} alt="Partner logo" draggable={false} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BrandLogoSlide;

