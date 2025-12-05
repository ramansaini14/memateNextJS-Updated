'use client'
import Layout from "../../layout";
import {
  LegalvisionBannerComponent,
  MuchAdminComponent,
  WhyBusinessesChooseUs,
  TryToBestComponent,
} from "../../components/legalvision";
import AppWrapper from "../../components/AppWrapper";
const RunYourBusinessPage = () => {
  return (
    <>
    <AppWrapper>
    <Layout>
     <div className="bgshadowwrapper1">
      <LegalvisionBannerComponent />
      <MuchAdminComponent />
      <WhyBusinessesChooseUs />
      <TryToBestComponent />
      </div>  
    </Layout>
    </AppWrapper>
    </>
  );
};

export default RunYourBusinessPage;


