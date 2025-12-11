import './brandLogoSlider.css'

const BrandLogoSlide = () => {
    
    return (
      <div className="brandLogoSlider">
        <span>Our partners</span>
        <div className="brandLogoWrapper">
      <div className="logoItem">
          <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/theadLogo.svg" />
        </div>
        <div className="logoItem">
          <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/legalvisionLogo.svg" />
        </div>
        <div className="logoItem">
          <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/sortedLogo.svg" />
        </div>
        <div className="logoItem">
          <img src="https://res.cloudinary.com/dn0jqjad3/image/upload/v1765365094/payComLogo_rfgxh7.svg" />
        </div>
        <div className="logoItem">
          <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/grantHelpLogo.svg" />
        </div>
   
      </div>
    </div>
    );
}

export default BrandLogoSlide;


