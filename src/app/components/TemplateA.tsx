// components/TemplateA.tsx
import React from "react";
import { useRef } from "react";
import { Icon } from "@progress/kendo-react-common";
import styles from "../styles.module.css";
import stylesCV from "./CVTemplate.module.css";
import { Button } from "@progress/kendo-react-buttons";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import Head from "next/head";

interface TemplateAProps {
  data: {
    firstName: string;
    lastName: string;
    position: string;
    email: string;
    phone: string;
    linkedIn: string;
    summary: string;
    company: string;
    jobTitle: string;
    date: string;
    description: string;
  };
}

const TemplateA: React.FC<TemplateAProps> = ({ data }) => {
  const {
    firstName,
    lastName,
    position,
    email,
    phone,
    linkedIn,
    summary,
    company,
    jobTitle,
    date,
    description,
  } = data;

  const pdfExportComponent = useRef(null);

  const handleExportWithComponent = (event: any) => {
    console.log("I clicked to export PDF");
    pdfExportComponent.current.save();
  };

  return (
    <div>
      <div className="button-area">
        <Button themeColor={"primary"} onClick={handleExportWithComponent}>
          Save as PDF
        </Button>
        <Button>Default Button</Button>
      </div>
      <PDFExport ref={pdfExportComponent} paperSize="A4">
        {/* A4-sized rectangle */}
        <div
          style={{
            border: "2px solid #000",
            width: "210mm",
            height: "297mm",
            position: "relative",
          }}
        >
          <Head>
            <title>Your Name - CV</title>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
            />
          </Head>
          <div className={stylesCV.cv}>
            <header className={stylesCV.cv_header}>
              <h1>
                {firstName} {lastName}
              </h1>
              <p>{position}</p>
            </header>
            <section className={stylesCV.cv_section}>
              <h2>Personal Information</h2>
              <div className={stylesCV.infoItem}>
                <span>Phone:</span> <span>{phone}</span>
              </div>
              <div className={stylesCV.infoItem}>
                <span>Email:</span> <span>{email}</span>
              </div>
              <div className={stylesCV.infoItem}>
                <span>LinkedIn:</span> <span>{linkedIn}</span>
              </div>
            </section>
            <section className={stylesCV.cv_section}>
              <h2>Summary / Live goals</h2>
              <p>{summary}</p>
            </section>
            <section className={stylesCV.cv_section}>
              <h2>Education</h2>
              <div className={stylesCV.educationItem}>
                <h3>University Name</h3>
                <p>Degree: Bachelor of Science in Computer Science</p>
                <p>Graduation Year: 20XX</p>
              </div>
            </section>
            <section className={stylesCV.cv_section}>
              <h2>Work Experience</h2>
              <div className={stylesCV.workItem}>
                <h3>{company}</h3>
                <p>Position: {jobTitle}</p>
                <p>Duration: {date} - Present</p>
                <p>Description: {description}</p>
              </div>
            </section>
            {/* Add more sections for skills, projects, or any other relevant information */}
          </div>
          {/* <h1 className={styles.templateA}>TEMPLATE -A-</h1>
          <div>
            <h3 className={styles.templateA}>CV</h3>
            <p>
              Name: {firstName} {lastName}
            </p>
            <p className={styles.templateA}>Position: {position}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>
              {<Icon name="linkedin" />} LinkedIn: {linkedIn}
            </p>
            <p>Summary: {summary}</p>
          </div>
          <br></br>
          <div>
            <h3>Work Experience</h3>
            <p>Company: {company}</p>
            <p>Job Title: {jobTitle}</p>
            <p>Date: {date}</p>
            <p>Description: {description}</p>
          </div> */}
        </div>
      </PDFExport>
    </div>
  );
};

export default TemplateA;
