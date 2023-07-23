// components/TemplateB.tsx
import React from "react";
import { Icon } from "@progress/kendo-react-common";
import styles from "../styles.module.css";

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

  return (
    <div>
      <h1 className={styles.templateB}>TEMPLATE -A-</h1>
      <div>
        <h3 className={styles.templateB}>Generated CV:</h3>
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
  );
};

export default TemplateB;
