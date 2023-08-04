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
import { Roboto, Fruktur, Courier_Prime } from "@next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const fruktur = Fruktur({
  subsets: ["latin"],
  weight: ["400"],
});

const courier_prime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
});

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
    selectedFont,
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

  const marginBottonValue = "5px";

  return (
    <div>
      <PDFExport ref={pdfExportComponent} paperSize="A4">
        {/* A4-sized rectangle */}
        <div
          style={{
            border: "2px solid #000",
            width: "210mm",
            height: "297mm",
            position: "relative",
          }}
          // className={styles.page}
        >
          <Box
            sx={{
              width: "100%",
              height: 20,
              backgroundColor: colorFromResumeSetting,
            }}
          ></Box>
          <div className={stylesCV.cv} style={{ fontFamily: selectedFont }}>
            <header className={stylesCV.cv_header}>
              <h1>
                {firstName} {lastName}
              </h1>
              <p>{position}</p>
              <p>Experience: {yearsOfExperience} years</p>
            </header>
            <section className={stylesCV.cv_section}>
              <ColoredLineWithText
                color={colorFromResumeSetting}
                text="Personal Information:"
                selectedFont={selectedFont}
              />
              <div className={stylesCV.workItem}>
                <span>Phone:</span> <span>{phone}</span>
              </div>
              <div className={stylesCV.workItem}>
                <span>Email:</span> <span>{email}</span>
              </div>
              <div className={stylesCV.workItem}>
                <span>LinkedIn:</span> <span>{linkedIn}</span>
              </div>
              <div className={stylesCV.workItem}>
                <span>Location:</span> <span>{location}</span>
              </div>
            </section>
            <section className={stylesCV.cv_section}>
              <ColoredLineWithText
                color={colorFromResumeSetting}
                text="Work Experience:"
                selectedFont={selectedFont}
              />
              <div className={stylesCV.workItem}>
                {workExperiences.map((experience, index) => (
                  <div key={index} style={{ marginBottom: marginBottonValue }}>
                    <p
                      className={stylesCV.infoItem}
                    >{`Company: ${experience.company}`}</p>
                    <p>{`Job Title: ${experience.jobTitle}`}</p>
                    <p>{`Date: ${experience.date}`}</p>
                    <p>{`Description: ${experience.description}`}</p>
                  </div>
                ))}
              </div>
            </section>
            <section className={stylesCV.cv_section}>
              <ColoredLineWithText
                color={colorFromResumeSetting}
                text="Education:"
                selectedFont={selectedFont}
              />
              <div className={stylesCV.workItem}>
                {educations.map((experience, index) => (
                  <div key={index} style={{ marginBottom: marginBottonValue }}>
                    <p
                      className={stylesCV.infoItem}
                    >{`Scool: ${experience.school}`}</p>
                    <p>{`Degree And Major: ${experience.degreeAndMajor}`}</p>
                    <p>{`Date: ${experience.schoolDate}`}</p>
                    <p>{`Achievements: ${experience.achievements}`}</p>
                  </div>
                ))}
              </div>
            </section>
            <section className={stylesCV.cv_section}>
              <ColoredLineWithText
                color={colorFromResumeSetting}
                text="Skills:"
                selectedFont={selectedFont}
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
          </div>
        </div>
      </PDFExport>
      <div className="button-area">
        <Button themeColor={"primary"} onClick={handleExportWithComponent}>
          Save as PDF
        </Button>
      </div>
    </div>
  );
};

export default TemplateA;
