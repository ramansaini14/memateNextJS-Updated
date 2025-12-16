import WhiteButtonBammer from "@/layout/hover-button/WhiteButtonBammer";
import Link from "next/link";
import './style.css';
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
