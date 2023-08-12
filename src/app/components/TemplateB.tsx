import React, { useEffect, useState } from "react";
import { useRef } from "react";
import stylesCV from "./CVTemplate.module.css";
import ITemplateProps from "./ITemplateProps";
import { Box, Button, Grid, Rating } from "@mui/material";
import { defaultColor } from "../constants";
import ColoredLineWithText from "./ColoredLineWithText";
import html2pdf from "html2pdf.js";

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
    selectedFont,
    fontSizeNumber,
  } = data;

  let colorFromResumeSetting =
    selectedColor === "" || selectedColor === null
      ? defaultColor
      : selectedColor;

  const marginBottonValue = "5px";

  const maxMinNumber = (n: number) => {
    if (n < 4) {
      return 4;
    } else if (n > 50) {
      return 50;
    } else {
      return n;
    }
  };

  let fonstSizeMinAndMaxValueCheck = maxMinNumber(fontSizeNumber);

  // ---------------------------- pdf export as picture

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const pdfExportRef = useRef(null);

  const handleExportToPDF = () => {
    if (!isClient) {
      return;
    }

    const element = pdfExportRef.current;
    if (!element) return;

    const opt = {
      margin: 10,
      filename: `${firstName}_${lastName}_cv.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    import("html2pdf.js").then((html2pdfModule) => {
      const html2pdf = html2pdfModule.default || html2pdfModule;
      html2pdf().from(element).set(opt).save();
    });
  };

  return (
    <div>
      <Button color="primary" onClick={handleExportToPDF}>
        Export to PDF image
      </Button>
      {/* A4-sized rectangle */}
      <div
        style={{
          border: "2px solid #000",
          width: "210mm",
          height: "297mm",
          position: "relative",
        }}
      >
        <div ref={pdfExportRef}>
          <Box
            sx={{
              width: "100%",
              height: 20,
              backgroundColor: colorFromResumeSetting,
            }}
          ></Box>
          <div
            className={stylesCV.cv}
            style={{
              fontFamily: selectedFont,
              fontSize: fonstSizeMinAndMaxValueCheck,
            }}
          >
            <header
              className={[stylesCV.fontSizeSmallHeader].join(" ")}
              style={{ fontSize: fonstSizeMinAndMaxValueCheck + 4 }}
            >
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
                fontSizeNumber={fonstSizeMinAndMaxValueCheck}
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
                text="WORK EXPERIENCE:"
                selectedFont={selectedFont}
                fontSizeNumber={fonstSizeMinAndMaxValueCheck}
              />
              <div className={stylesCV.workItem}>
                {workExperiences.map((experience, index) => (
                  <div key={index} style={{ marginBottom: marginBottonValue }}>
                    <p
                      style={{ fontWeight: "bolder" }}
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
                text="EDUCATION:"
                selectedFont={selectedFont}
                fontSizeNumber={fonstSizeMinAndMaxValueCheck}
              />
              <div className={stylesCV.workItem}>
                {educations.map((experience, index) => (
                  <div key={index} style={{ marginBottom: marginBottonValue }}>
                    <p
                      style={{ fontWeight: "bolder" }}
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
                text="SKILLS:"
                selectedFont={selectedFont}
                fontSizeNumber={fonstSizeMinAndMaxValueCheck}
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
                        style={{ fontSize: fonstSizeMinAndMaxValueCheck }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateB;
