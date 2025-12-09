import "../../../components/find-one-all/style.css";
import SliderTab from "../../../components/find-one-all/slider-tabs";
import SliderTabMobile from "../../../components/find-one-all/slider-mobile";
import CenterMode from "../../../components/find-one-all/CenterMode";
import './muchAdmin.css'
const MuchAdminComponent = () => {
  return (
  <>
  <div className="toMuchAdminSection">
    <p>Too many apps. Too much admin. Too many <br></br>missed  projects or unpaid invoices.</p>
    <div className="adminScrollBackground">
    <div className="imageAdminBg">
    <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/backgrounBg-admin.jpg" width="1100px" alt="Mockup" />
     <div className="overlyAdminText overlyAdminTextFirst">
       <p>Still jumping between apps just to get one thing done?</p>
    </div>
     <div className="overlyAdminText overlyAdminTextSecond">
       <p>Paperwork’s growing faster than your business?</p>
    </div>
     <div className="overlyAdminText overlyAdminTextThird">
       <p>Still chasing timesheets instead of running the crew?</p>
    </div>
     <div className="overlyAdminText overlyAdminTextFourth">
       <p>Hard to know if you’re making money ‘til the month’s over?</p>
    </div>
     <div className="overlyAdminText overlyAdminTextFifth">
       <p>More jobs, more admin and none of it paid for?</p>
    </div>
     

    </div>
   
    </div>
     
    <div className="downClickButton">
        <img alt="DownBlackArrow" src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/down-black-arrow.svg"></img>
       </div>
  </div>
  <div className="one-application-wrappers toMuchAdminApplication" >   
           <span className="text">With MeMate you get<br></br> everything in one place:</span>
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
