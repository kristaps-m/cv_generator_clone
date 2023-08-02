// components/TemplateA.tsx
import React from "react";
import { useRef } from "react";
import { Icon } from "@progress/kendo-react-common";
import styles from "../styles.module.css";
import stylesCV from "./CVTemplate.module.css";
import { Button } from "@progress/kendo-react-buttons";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import Head from "next/head";
import ITemplateProps from "./ITemplateProps";
import { Box, Grid, Rating, Typography } from "@mui/material";
import { defaultColor } from "../constants";
import ColoredLineWithText from "./ColoredLineWithText";

const TemplateA: React.FC<ITemplateProps> = ({ data }) => {
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

  let colorFromResumeSetting =
    selectedColor === "" || selectedColor === null
      ? defaultColor
      : selectedColor;

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
              <p>Experience: {yearsOfExperience} years</p>
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
              <div className={stylesCV.infoItem}>
                <span>Location:</span> <span>{location}</span>
              </div>
            </section>
            <section className={stylesCV.cv_section}>
              <ColoredLineWithText
                color={colorFromResumeSetting}
                text="Work Experience:"
              />
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
              <ColoredLineWithText
                color={colorFromResumeSetting}
                text="Education:"
              />
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
            <section className={stylesCV.cv_section}>
              <ColoredLineWithText
                color={colorFromResumeSetting}
                text="Skills:"
              />
              <div className={stylesCV.workItem}>
                <Grid container spacing={2}>
                  {skills.map((skill, index) => (
                    <Grid key={index} item xs={4}>
                      <p>{skill.name}</p>
                      <Rating
                        name="read-only"
                        value={skill.strength}
                        readOnly
                      />
                    </Grid>
                  ))}
                </Grid>
              </div>
            </section>
            <section>
              <h1>Selected color: {selectedColor}</h1>
            </section>
          </div>
        </div>
      </PDFExport>
    </div>
  );
};

export default TemplateA;
