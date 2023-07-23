// components/TemplateB.tsx
import React from "react";
import { useRef } from "react";
import { Icon } from "@progress/kendo-react-common";
import styles from "../styles.module.css";
import { Button } from "@progress/kendo-react-buttons";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

interface TemplateBProps {
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

const TemplateB: React.FC<TemplateBProps> = ({ data }) => {
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
          <div>
            <h3>Work Experience</h3>
            <p>Company: {company}</p>
            <p>Job Title: {jobTitle}</p>
            <p>Date: {date}</p>
            <p>Description: {description}</p>
          </div>
        </div>
      </PDFExport>
    </div>
  );
};

export default TemplateB;
