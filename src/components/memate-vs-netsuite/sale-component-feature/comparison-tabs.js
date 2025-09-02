import React, { useState } from "react";
import style from './tabs-comp.module.scss';
import ToolTip from "./tool-tip";
<<<<<<< HEAD
=======
import Image from "next/image";
>>>>>>> 5f1279a59947b65843d469a8c7ac34696f7faa7c
const data = [
    {
      category: "Quoting & Invoicing",
      meMate: "Built-in quoting tools, auto-invoicing, client approvals",
      meMateM8: "Available, but often requires setup/customisation",
<<<<<<< HEAD
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
       falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/slash-circle.png`,
      toolTip: "Built-in quoting tools, auto-invoicing, client approvals"
=======
      service: "Built-in quoting tools, auto-invoicing, client approvals",
      serviceM8: "Available, but often requires setup/customisation",
      toolTip: "Available, but often requires setup/customisation"
>>>>>>> 5f1279a59947b65843d469a8c7ac34696f7faa7c
    },
    {
      category: "Project & Job Management",
      meMate: "Visual job board, scheduling, contractor assignment, progress tracking",
      meMateM8: "Enterprise-grade tools, better for large project teams",
<<<<<<< HEAD
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
      falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/falseIcon.png`,
=======
      service: "Visual job board, scheduling, contractor assignment, progress tracking",
      serviceM8: "Enterprise-grade tools, better for large project teams",
>>>>>>> 5f1279a59947b65843d469a8c7ac34696f7faa7c
       toolTip: "Visual job board, scheduling, contractor assignment, progress tracking"
    },
    {
      category: "CRM & Lead Tracking",
      meMate: "Simple CRM with pipeline, contact history, and reminders",
<<<<<<< HEAD
      meMateM8: "Job management with a focus on checklists and job completion",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
      falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/slash-circle.png`,
=======
      meMateM8: "Advanced CRM system, often more complex than needed",
      service: "Simple CRM with pipeline, contact history, and reminders",
      serviceM8: "Advanced CRM system, often more complex than needed",
>>>>>>> 5f1279a59947b65843d469a8c7ac34696f7faa7c
       toolTip: "Simple CRM with pipeline, contact history, and reminders"
    },
    {
      category: "Team Scheduling & Time Tracking",
      meMate: "Staff clock-in/out, shift planner, task timers",
<<<<<<< HEAD
      meMateM8: "Available via modules or partner tools",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
      falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/slash-circle.png`,
       toolTip: "Staff clock-in/out, shift planner, task timers"
    },
    {
      category: "Internal Communication",
      meMate: "Built-in messaging, job comments, tagging, @mentions",
      meMateM8: "Limited — usually handled via third-party integrations",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
     falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/slash-circle.png`,
       toolTip: "Built-in messaging, job comments, tagging, @mentions"
    },
    {
      category: "Reporting & Analytics",
      meMate: "Real-time job profitability, expenses, client stats",
      meMateM8: "Robust reports, but requires configuration and training",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
      falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/falseIcon.png`,
       toolTip: "Real-time job profitability, expenses, client stats "
    },
    {
      category: "Local Support & Setup",
      meMate: "Free onboarding, Australian-based team, data migration included",
      meMateM8: "Setup through NetSuite partners; paid onboarding",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
      falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/falseIcon.png`,
       toolTip: "Free onboarding, Australian-based team, data migration included"
    },
    {
      category: "Ease of Use",
      meMate: "Easy to learn, clean interface, built for SMEs",
      meMateM8: "Complex interface, more suited to IT-managed environments",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
       falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/slash-circle.png`,
       toolTip: "Easy to learn, clean interface, built for SMEs"
    },
    {
      category: "Pricing Transparency",
      meMate: "Flat monthly plans, no hidden fees",
      meMateM8: "Tiered pricing, often custom and high for full features",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
      falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/x-circle-fill.png`,
       toolTip: "Flat monthly plans, no hidden fees"
    },
    {
      category: "Best Suited For",
      meMate: "Aussie service businesses with national operations",
      meMateM8: "Large enterprises with global structures and teams",
      trueIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/trueIcon.png`,
       falseIcon: `https://memate-website.s3.ap-southeast-2.amazonaws.com/x-circle-fill.png`,
       toolTip: "Aussie service businesses with national operations"
    },
    
   
   
  ];
const ComparisonTabs = () => {
  return (
    <div className={style.tabsComparison}>
    <div className={style.tabsTableWrap}>
      <table>
        <thead>
          <tr className="tabsTableWrapButton">
            <th></th>
 <th style={{ textAlign: 'left' }}>
    <span className="darkLOgo">
    <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/logo.svg" alt="service8 logo" />
    </span></th>
  <th style={{ textAlign: 'left' }}>
    <span className="lightLOgo">
    <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/netsuite.png" alt="service8" />
    </span></th>
</tr>
        </thead>
=======
      meMateM8: "Quoting and invoicing directly from the field.",
      service: "Quotes, invoices, and automated follow-ups.",
      serviceM8: "Quoting and invoicing directly from the field.",
       toolTip: "Basic client management focused on job details and communication."
    },
    {
      category: "Communication",
      meMate: "Automated updates via email/SMS with templates.",
      meMateM8: "Email, SMS, and on-the-way messages.",
      service: "Automated updates via email/SMS with templates.",
      serviceM8: "Email, SMS, and on-the-way messages.",
       toolTip: "Basic client management focused on job details and communication."
    },
    {
      category: "Scheduling",
      meMate: "Job scheduling with profitability tracking. ",
      meMateM8: "Job dispatch with real-time staff visibility on the map.",
      service: "Job scheduling with profitability tracking.",
      serviceM8: "Job dispatch with real-time staff visibility on the map.",
       toolTip: "Basic client management focused on job details and communication."
    },
    {
      category: "Reporting",
      meMate: "Over 20 built-in reports for business analytics. ",
      meMateM8: "Basic job reports, focused on job history and invoicing.",
      service: "Over 20 built-in reports for business analytics.",
      serviceM8: "Basic job reports, focused on job history and invoicing.",
       toolTip: "Basic client management focused on job details and communication."
    },
    {
      category: "Employee Management",
      meMate: "Onboard employees with contact details in one place.",
      meMateM8: "Focused on field staff location and job allocation",
      service: "Onboard employees with contact details in one place.",
      serviceM8: "Focused on field staff location and job allocation",
       toolTip: "Basic client management focused on job details and communication."
    },
    {
      category: "Collaboration",
      meMate: "Manage jobs, fixed or hourly payment trackers, job approvals.",
      meMateM8: "Manage jobs, track staff locations, and communicate via app.",
      service: "Manage jobs, fixed or hourly payment trackers, job approvals.",
      serviceM8: "Manage jobs, track staff locations, and communicate via app.",
       toolTip: "Basic client management focused on job details and communication."
    },
    {
      category: "Functionality",
      meMate: "Task management, internal chat, timesheets. ",
      meMateM8: "Limited to job-related tasks, checklist completion, and forms.",
      service: "Task management, internal chat, timesheets.",
      serviceM8: "Limited to job-related tasks, checklist completion, and forms.",
       toolTip: "Basic client management focused on job details and communication."
    },
    {
      category: "Value Add-ons",
      meMate: "Calendar, calculators for pricing, budgeting.",
      meMateM8: "Online booking, asset management, and accounting integration.",
      service: "Calendar, calculators for pricing, budgeting.",
      serviceM8: "Online booking, asset management, and accounting integration.",
       toolTip: "Basic client management focused on job details and communication."
    },
    {
      category: "Best For",
      meMate: "Established businesses with an office-based workflow.",
      meMateM8: "On-the-go tradespeople needing field flexibility. ",
      service: "Established businesses with an office-based workflow.",
      serviceM8: "On-the-go tradespeople needing field flexibility.",
       toolTip: "Basic client management focused on job details and communication."
    },
   
  ];
const ComparisonTabs = () => {
    const [selectedTab, setSelectedTab] = useState("meMate");
  return (
    <div className={style.tabsComparison}>
    <div className={style.tabsComparisonFlex}>
      <button
        className={`${style.tabsButton} ${selectedTab === "meMate tabsButtonActive" ? `${style.tabsButtonDark}` : `${style.tabsButtonActive}`}`}
        onClick={() => setSelectedTab("meMate")}>
      <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/logo.svg" alt="service8 logo" />
      </button>
      <button
        className={`${style.tabsButton} ${selectedTab === "serviceM8" ? `${style.tabsButtonDark}` :`${style.serviceM8}`}`}
        onClick={() => setSelectedTab("serviceM8")}>
       <Image src='https://memate-website.s3.ap-southeast-2.amazonaws.com/netsuite.png' alt='Services M8' width={160.403}
             height={40} />
      </button>
    </div>
    <div className={style.tabsTableWrap}>
      <table>
        {/* <thead>
          <tr>
            <th>Feature</th>
            <th>{selectedTab === "meMate" ? "Me Mate" : "ServiceM8"}</th>
          </tr>
        </thead> */}
>>>>>>> 5f1279a59947b65843d469a8c7ac34696f7faa7c
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td><span className={style.toolTip}>{item.category} <ToolTip toolTip= {item.meMate} /></span></td>
<<<<<<< HEAD
              <td><em><img src={item.trueIcon} /><p>{item.meMate}</p></em></td>
              <td><em><img src={item.falseIcon} /><p>{item.meMateM8}</p></em></td>     
=======
              <td><em><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20Z" fill="url(#paint0_radial_1399_219667)"/>
  <path d="M5.47656 10.6466L8.06258 13.2326L14.5276 6.76758" stroke="white" strokeWidth="1.54843" strokeLinecap="round" strokeLinejoin="round"/>
  <defs>
    <radialGradient id="paint0_radial_1399_219667" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-1.24043 0.973162) rotate(41.5468) scale(24.1358 391.369)">
      <stop offset="0.00154351" stopColor="#1AB3FF"/>
      <stop offset="1" stopColor="#FFB258"/>
    </radialGradient>
  </defs>
  </svg><p>{selectedTab === "meMate" ? item.meMate : item.service}</p></em></td>
                <td><em><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20Z" fill="#29292B"/>
    <path d="M5.47656 10.6466L8.06257 13.2326L14.5276 6.76758" stroke="white" strokeWidth="1.93554" strokeLinecap="round" strokeLinejoin="round"/>
  </svg><p>{selectedTab === "meMate" ? item.meMateM8 : item.serviceM8}</p></em></td>     
>>>>>>> 5f1279a59947b65843d469a8c7ac34696f7faa7c
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}

<<<<<<< HEAD
export default ComparisonTabs




























=======
export default ComparisonTabs
>>>>>>> 5f1279a59947b65843d469a8c7ac34696f7faa7c
