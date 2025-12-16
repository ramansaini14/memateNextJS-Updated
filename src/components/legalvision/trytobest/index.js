import WhiteButtonBammer from "@/layout/hover-button/WhiteButtonBammer";
import './style.css';
import Link from "next/link";
const TryToBestComponent = () => {
  return (
  <>
  <div className="trytobestSection">
  <div className="trytobestL">
   <div className="img_box">
        <video
                      width="100%"
                      height="100%"
                      autoPlay
                      muted
                      loop
                      playsInline
                 
                    >
                      <source
                        src="https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/try-the-best-video.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
    {/* <img src="https://res.cloudinary.com/dn0jqjad3/image/upload/v1763701007/trytobest-img_tivit3.jpg" alt="trytobest-img_tivit3" /> */}
    </div>
  </div>
  <div className="trytobestR">
    <span>Try the Best </span>
    <p>Business Management Software</p>
    <div className="lightButton">
          <Link
            href="https://memate.com.au/"
            target="_blank">
            <WhiteButtonBammer text="Find more" />
          </Link>
        </div>
  </div>
  </div>
    
  </>
  );
};

export default TryToBestComponent;
