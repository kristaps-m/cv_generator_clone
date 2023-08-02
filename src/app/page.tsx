"use client";
// import axios from "axios";
// import Image from "next/image";
import { ChangeEvent, useState } from "react";
import "@progress/kendo-theme-material/dist/all.css";
import TemplateSelector from "./components/TemplateSelector";
import React from "react";
import { Box, Paper } from "@mui/material";
import BasicInfo from "./components/BasicInfo";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import ResumeSetting from "./components/ResumeSetting";
import { handleRemoveElement } from "./utils";
import { lightblueBackgroundAllBoxes } from "./constants";

export default function Home() {
  const [cvData, setCvData] = React.useState({
    firstName: "",
    lastName: "",
    position: "",
    yearsOfExperience: "",
    email: "",
    phone: "",
    linkedIn: "",
    location: "",
    summary: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCvData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // ---------------------------- WORK EXP
  const [workExperiences, setWorkExperiences] = useState([
    {
      company: "",
      jobTitle: "",
      date: "",
      description: "",
    },
  ]);

  const handleWorkExperienceChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setWorkExperiences((prevWorkExperiences) => {
      const updatedExperiences = [...prevWorkExperiences];
      updatedExperiences[index] = {
        ...updatedExperiences[index],
        [name]: value,
      };
      return updatedExperiences;
    });
  };

  const handleAddWorkExperience = () => {
    setWorkExperiences((prevWorkExperiences) => [
      ...prevWorkExperiences,
      {
        company: "",
        jobTitle: "",
        date: "",
        description: "",
      },
    ]);
  };

  const handleRemoveWorkExperience = (index: number) => {
    handleRemoveElement(index, workExperiences, setWorkExperiences);
  };
  // ---------------------------- WORK EXP ^^
  // ---------------------------- EDUCATION
  const [educations, setEducations] = useState([
    {
      school: "",
      schoolDate: "",
      degreeAndMajor: "",
      GPA: "",
      achievements: "",
    },
  ]);

  const handleEducationsChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setEducations((prevEducations) => {
      const updatedEducations = [...prevEducations];
      updatedEducations[index] = {
        ...updatedEducations[index],
        [name]: value,
      };
      return updatedEducations;
    });
  };

  const handleAddEducations = () => {
    setEducations((prevEducations) => [
      ...prevEducations,
      {
        school: "",
        schoolDate: "",
        degreeAndMajor: "",
        GPA: "",
        achievements: "",
      },
    ]);
  };

  const handleRemoveEducation = (index: number) => {
    handleRemoveElement(index, educations, setEducations);
  };
  // ---------------------------- EDUCATION ^^
  // ---------------------------- SKILS
  const [skills, setSkills] = useState([
    {
      name: "",
      strength: 1,
    },
  ]);

  const handleSkillNameChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setSkills((prevSkills) => {
      const updatedSkills = [...prevSkills];
      updatedSkills[index] = {
        ...updatedSkills[index],
        name: value,
      };
      return updatedSkills;
    });
  };

  const handleSkillStrengthChange = (index: number, value: number) => {
    setSkills((prevSkills) => {
      const updatedSkills = [...prevSkills];
      updatedSkills[index].strength = value;
      return updatedSkills;
    });
  };

  const handleAddSkill = () => {
    setSkills((prevSkills) => [
      ...prevSkills,
      {
        name: "",
        strength: 1,
      },
    ]);
  };

  const handleRemoveSkill = (index: number) => {
    handleRemoveElement(index, skills, setSkills);
  };
  // ---------------------------- SKILS ^^
  // ---------------------------- ResumeSetting
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };
  // ---------------------------- ResumeSetting ^^


  const combinedData = { ...cvData, workExperiences, educations, skills, selectedColor };

  return (
    <div>
      <h2>CV Generator</h2>
      <p>------------------------------------</p>
      <div>
        <table>
          <thead>
            <tr>
              <th>Input</th>
              <th>Output</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Paper elevation={3}>
                  <Box
                    p={1}
                    sx={{ backgroundColor: lightblueBackgroundAllBoxes }}
                  >
                    <BasicInfo
                      data={combinedData}
                      handleInputChange={handleInputChange}
                    />
                    <br />
                    <WorkExperience
                      workExperiences={workExperiences}
                      handleWorkExperienceChange={handleWorkExperienceChange}
                      handleAddWorkExperience={handleAddWorkExperience}
                      handleRemoveWorkExperience={handleRemoveWorkExperience}
                    />
                    <br />
                    <Education
                      educations={educations}
                      handleEducationsChange={handleEducationsChange}
                      handleAddEducations={handleAddEducations}
                      handleRemoveEducation={handleRemoveEducation}
                    />
                    <br />
                    <Skills
                      skills={skills}
                      handleAddSkill={handleAddSkill}
                      handleSkillNameChange={handleSkillNameChange}
                      handleSkillStrengthChange={handleSkillStrengthChange}
                      handleRemoveSkill={handleRemoveSkill}
                    />
                    <br />
                    <ResumeSetting onSelectColor={handleColorSelect}/>
                  </Box>
                </Paper>
              </td>
              <td>
                <div>
                  <h1>CV Preview</h1>
                  {/* <script>
                    {
                      ((cvData.firstName = firstName),
                      (cvData.lastName = lastName),
                      (cvData.email = email))
                    }
                  </script> */}
                </div>
                <br></br>
                <h3>CV</h3>
                <TemplateSelector data={combinedData} />
              </td>
            </tr>
            <tr>
              <td>
                {/* <input
                  type="text"
                  value={inputs[1].input}
                  onChange={(event) => handleInputChange(event, 1, "input")}
                /> */}
              </td>
              <td>
                {/* <input
                  type="text"
                  value={inputs[1].output}
                  onChange={(event) => handleInputChange(event, 1, "output")}
                /> */}
              </td>
            </tr>
            {/* Add more rows if needed */}
          </tbody>
        </table>
        {/* <button onClick={handleAddInput}>Add Input</button> */}
      </div>
      <p>------------------------------------</p>
      {/* <h1>TEST</h1>
      <h1>
        {cvData.firstName}, {workExperiences[0].company},
        {workExperiences[1]?.company}
      </h1> */}
    </div>
  );
}
