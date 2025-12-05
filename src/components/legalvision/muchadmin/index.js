import "../../../components/find-one-all/style.css";
import SliderTab from "../../../components/find-one-all/slider-tabs";
import SliderTabMobile from "../../../components/find-one-all/slider-mobile";
import CenterMode from "../../../components/find-one-all/CenterMode";
const MuchAdminComponent = () => {
  return (
  <>
  <div className="toMuchAdminSection">
    <p>Too many apps. Too much admin. Too many <br></br>missed  projects or unpaid invoices.</p>
     <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/tomuchbg.jpg" width="1100px" alt="Mockup" />
    <div className="downClickButton">
        <img alt="DownBlackArrow" src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/down-black-arrow.svg"></img>
       </div>
  </div>
  <div className="one-application-wrappers toMuchAdminApplication" >   
           <span>With MeMate you get<br></br> everything in one place:</span>
      <div className="desktop-slider">
      {/* <SliderTab /> */}
      <CenterMode />
      </div>
      <div className="mobile-slider">
      <SliderTabMobile />
      </div>
      </div>
 
    
       <style jsx>{`
       
       .toMuchAdminApplication{
       padding-bottom: 0;
       }
       .toMuchAdminApplication span{
    color: #29292b;
    text-align: center;
    letter-spacing: -2.16px;
    margin-top: 80px;
    margin-bottom: 0;
    font-size: 72px;
    font-style: normal;
    font-weight: 420;
    line-height: 80px;
    font-family: sequel_sans_semi_bold_disp !important;
    display: inline-block;
    width: 100%;
       }
  
      .toMuchAdminSection {
    text-align: center;
   
}
      .toMuchAdminSection p {
    color: #29292b;
    letter-spacing: 2px;
    margin-bottom: 50px;
    font-size: 48px;
    font-style: normal;
    font-weight: 420;
    line-height: 55px;
    text-decoration: none;
    font-family: sequel_sans !important;
}
    .downClickButton{
     padding-top: 80px;
     text-align: center;
    cursor: pointer;
    width: 100%;
    display: inline-block;
    }


    @media screen and (max-width: 600px) {
    .toMuchAdminSection {
     padding: 0 0px;
    }
       .toMuchAdminSection p {
        margin-bottom: 23px;
        font-size: 24px;
        line-height: 30px;
       
       }
        .downClickButton {
    width: auto;
    padding-top: 13px;
}
       .toMuchAdminSection p br {
        display: none;
       }
       .toMuchAdminSection img {
        width: 100%;
       }
        .toMuchAdminApplication span {
    letter-spacing: 0;
    width: 100%;
    margin-top: 27px;
    margin-bottom: 0;
    font-size: 27px;
    line-height: 31px;
}

       }
            `}</style>
  </>
  );
};

export default MuchAdminComponent;
