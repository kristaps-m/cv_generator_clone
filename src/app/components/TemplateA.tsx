// components/TemplateA.tsx
import React from "react";
import { useRef } from "react";
import { Icon } from "@progress/kendo-react-common";
import styles from "../styles.module.css";
import { Button } from "@progress/kendo-react-buttons";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

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
      <PDFExport ref={pdfExportComponent} paperSize="A4">
        <h1 className={styles.templateA}>TEMPLATE -A-</h1>
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
        </div>
      </PDFExport>
      <div className="button-area">
        <Button themeColor={"primary"} onClick={handleExportWithComponent}>
          Primary Button
        </Button>
        <Button>Default Button</Button>
      </div>
    </div>
  );
};

export default TemplateA;
