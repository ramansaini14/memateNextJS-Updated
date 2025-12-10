import WhiteButtonBammer from "@/layout/hover-button/WhiteButtonBammer";
import './style.css';
import Link from "next/link";
const TryToBestComponent = () => {
  return (
  <>
  <div className="trytobestSection">
  <div className="trytobestL">
   <div className="img_box"><img src="https://res.cloudinary.com/dn0jqjad3/image/upload/v1763701007/trytobest-img_tivit3.jpg" alt="trytobest-img_tivit3" /></div>
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
    
       <style jsx>{`
    .trytobestSection {
    text-align: left;
    position: relative;
    grid-template-columns: 1fr 1fr;
    align-items: center;
        gap: 60px;
    padding: 100px 0;
    display: grid;
     width: 1107px;
     margin: 0 auto;
}
 .trytobestSection .img_box {
    width: 620px;
}
 .trytobestSection .img_box img {
    width: 100%;
    border-radius: 16px;
    object-fit: cover;
}
.trytobestSection span {
    color: transparent;
    text-align: center;
    letter-spacing: -1px;
    -webkit-text-fill-color: transparent;
    background: linear-gradient(90deg,#1ab2ff 33.15%,#ffb258 62%);
    -webkit-background-clip: text;
    margin: 0px 0 0;
    padding-bottom: 0;
    padding-right: 0;
    font-size: 72px;
    font-style: normal;
    line-height: 102px;
    display: inline-block;
    font-family: sequel_sans_semi_bold_disp!important;
}
       .trytobestSection p{
        color: #29292b;
    text-align: left;
    letter-spacing: -1.44px;
    font-size: 40px;
    font-style: normal;
    font-weight: 100;
    line-height: 43px;
    font-family: sequel_sans !important;
       }
       .trytobestSection .lightButton{
       display: flex;
   justify-content: flex-start;
    align-items: center;
       }


@media screen and (max-width: 600px) {
       .trytobestSection span {
    margin: 25px 0 0;
    padding-bottom: 14px;
    font-size: 39px;
    line-height: 46px;
}
    .trytobestSection p {
    letter-spacing: 0;
    font-size: 20px;
    line-height: 24px;
}
    .trytobestSection .img_box {
    width: 100%;
}
    .trytobestSection p {
    text-align: center;
}
    .trytobestSection .lightButton {
    justify-content: center;
    align-items: center;
    display: flex;
}
    .trytobestSection {
    text-align: center;
    grid-template-columns: 1fr;
    align-items: center;
    gap: 18px;
    width: 100%;
    margin: 0 auto;
    padding: 48px 28px;
    display: grid;
    position: relative;
}
       }
       
            `}</style>
  </>
  );
};

export default TryToBestComponent;
