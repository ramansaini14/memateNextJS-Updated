"use client";
import React from "react";
import Layout from "../../layout";
import IndustryPageContent from "../../components/industry";
// import { Helmet } from 'react-helmet-async'
import AppWrapper from "../../components/AppWrapper";

const IndustryPage = ({ postsLatest }) => {
  return (
    <>
        <Layout>
          <div className="bgshadowwrapper">
            {console.log("POST LATEST", postsLatest)}
            <IndustryPageContent postsLatest={postsLatest} />
          </div>
        </Layout>
    </>
  );
};

export default IndustryPage;
