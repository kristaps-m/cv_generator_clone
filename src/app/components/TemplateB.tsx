// components/TemplateB.tsx
import React from "react";
import { useRef } from "react";
import { Icon } from "@progress/kendo-react-common";
import styles from "../styles.module.css";
import stylesCV from "./CVTemplate.module.css";
import { Button } from "@progress/kendo-react-buttons";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import ITemplateProps from "./ITemplateProps";
import { colors } from "@mui/material";

const TemplateB: React.FC<ITemplateProps> = ({ data }) => {
  const {
    firstName,
    lastName,
    position,
    yearsOfExperience,
    email,
    phone,
    linkedIn,
    location,
    summary,
    workExperiences,
    educations,
    skills,
    selectedColor,
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
          <h1 className={styles.templateB}>TEMPLATE -B-</h1>
          <div>
            <h3 className={styles.templateB}>CV</h3>
            <p>
              Name: {firstName} {lastName}
            </p>
            <p className={styles.templateB}>Position: {position}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>
              {<Icon name="linkedin" />} LinkedIn: {linkedIn}
            </p>
            <p>Summary: {summary}</p>
          </div>
          <br></br>
          <section className={stylesCV.cv_section}>
            <h2>Work Experience</h2>
            <div className={stylesCV.workItem}>
              {workExperiences.map((experience, index) => (
                <div key={index}>
                  <p>{`Company: ${experience.company}`}</p>
                  <p>{`Job Title: ${experience.jobTitle}`}</p>
                  <p>{`Date: ${experience.date}`}</p>
                  <p>{`Description: ${experience.description}`}</p>
                  <br></br>
                </div>
              ))}
            </div>
          </section>
          <section className={stylesCV.cv_section}>
            <h2>Education</h2>
            <div className={stylesCV.workItem}>
              {educations.map((experience, index) => (
                <div key={index}>
                  <p>{`Scool: ${experience.school}`}</p>
                  <p>{`Degree And Major: ${experience.degreeAndMajor}`}</p>
                  <p>{`Date: ${experience.schoolDate}`}</p>
                  <p>{`Achievements: ${experience.achievements}`}</p>
                  <br></br>
                </div>
              ))}
            </div>
          </section>
        </div>
      </PDFExport>
    </div>
  );
};

export default TemplateB;
