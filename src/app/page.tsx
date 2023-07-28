"use client";
// import axios from "axios";
// import Image from "next/image";
import { useRef } from "react";
import { styled } from "@mui/material/styles";
import { ChangeEvent, useState } from "react";
import "@progress/kendo-theme-material/dist/all.css";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import TemplateSelector from "./components/TemplateSelector";
import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Button, Slider } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import BasicInfo from "./components/BasicInfo";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";

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
    setWorkExperiences((prevWorkExperiences) => {
      const updatedExperience = [...prevWorkExperiences];
      updatedExperience.splice(index, 1);
      return updatedExperience;
    });
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
    setEducations((prevEducations) => {
      const updatedEducations = [...prevEducations];
      updatedEducations.splice(index, 1);
      return updatedEducations;
    });
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
    setSkills((prevSkills) => {
      const updatedSkills = [...prevSkills];
      updatedSkills.splice(index, 1);
      return updatedSkills;
    });
  };
  // ---------------------------- SKILS ^^
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCvData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const combinedData = { ...cvData, workExperiences, educations, skills };

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
                {/* firstName,lastName,position,yearsOfExperience,
                email,phone,linkedIn,location: */}
                <BasicInfo
                  data={combinedData}
                  handleInputChange={handleInputChange}
                />
                <br></br>
                <br></br>
                {/*company, jobTitle, date, description, */}
                <WorkExperience
                  workExperiences={workExperiences}
                  handleWorkExperienceChange={handleWorkExperienceChange}
                  handleAddWorkExperience={handleAddWorkExperience}
                  handleRemoveWorkExperience={handleRemoveWorkExperience}
                />
                {/* <span className="k-icon k-i-wrench"></span> */}
                <br></br>
                <br></br>
                <Education
                  educations={educations}
                  handleEducationsChange={handleEducationsChange}
                  handleAddEducations={handleAddEducations}
                  handleRemoveEducation={handleRemoveEducation}
                />
                <br></br>
                <br></br>
                <div>
                  <h1>Skills:</h1>
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <TextField
                        label="Skill Name"
                        name={`skills[${index}].name`}
                        value={skill.name}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          handleSkillNameChange(index, e)
                        }
                        variant="standard"
                      />
                      <Slider
                        value={skill.strength}
                        // onChange={(event, value) =>
                        //   handleSkillStrengthChange(index, value)
                        // }
                        onChange={(event: Event, value: number | number[]) => {
                          // Check if the value is an array (multi-value slider)
                          const newValue =
                            typeof value === "number" ? value : value[0];
                          handleSkillStrengthChange(index, newValue);
                        }}
                        min={1}
                        max={5}
                        step={1}
                        marks
                        valueLabelDisplay="auto"
                      />
                      <Button onClick={() => handleRemoveSkill(index)}>
                        <DeleteIcon />
                      </Button>
                    </div>
                  ))}
                  <Button onClick={handleAddSkill}>Add Skill</Button>
                </div>
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
