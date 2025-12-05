import Link from "next/link";
import './bannerstyle.css'
import WhiteButtonBammer from "@/layout/hover-button/WhiteButtonBammer";
import DarkButtonLauout from "@/layout/hover-button/darkButtonLauout";
const GeandHelpBannerComponent = () => {
  return (
    <>
      <div className="legalvisionSectionBanner">
        <h2>Smarter. Faster. Digital.</h2>
        <h1>Run Your Business.</h1>
        <div className="sales-componet-content-wrapper client-component-para">
          <div className="compaire-service01">
            <img
              src="https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/runyourbusiness-banner.png"
              width="1100px"
              alt="Mockup"
            />
          </div>
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
      <div className="downClickButton" onClick={() => {
  document.getElementById("legalvision")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}}>
  <img
    alt="DownBlackArrow"
    src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/down-black-arrow.svg"
  />
</div>
      </div>
      <div id="legalvision" className="legalvision-special-sec">
        <div className="legalvision-flex">
          <div className="legalvision-gridL">
            <img
              src="https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/Free_MacBook_Pro_1+1.png"
              width="100%"
              alt="Free_MacBook_Pro_1+1"
            />
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
              <strong>GH50</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeandHelpBannerComponent;
