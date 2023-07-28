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
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import BasicInfo from "./components/BasicInfo"

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCvData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const combinedData = { ...cvData, workExperiences };

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
                <BasicInfo data={combinedData} handleInputChange={handleInputChange}/>
                <br></br>
                <br></br>
                <Grid item xs={12}>
                  <Grid item xs={12}>
                    <h1>Work Experience:</h1>
                  </Grid>
                  {/* Work Experience List */}
                  {workExperiences.map((experience, index) => (
                    <div key={index}>
                      <Grid container spacing={2}>
                        <Grid item xs={10}>
                          <TextField
                            label="Company"
                            name="company"
                            value={experience.company}
                            onChange={(e: any) =>
                              handleWorkExperienceChange(index, e)
                            }
                            variant="standard"
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={2}>
                          {/* Add a button with a trash can icon to remove the work experience */}
                          <Button
                            onClick={() => handleRemoveWorkExperience(index)}
                          >
                            <DeleteIcon></DeleteIcon>
                          </Button>
                        </Grid>
                        <Grid item xs={8}>
                          <TextField
                            label="Job Title"
                            name="jobTitle"
                            value={experience.jobTitle}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                              handleWorkExperienceChange(index, e)
                            }
                            variant="standard"
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <TextField
                            label="Date"
                            name="date"
                            value={experience.date}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                              handleWorkExperienceChange(index, e)
                            }
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            label="Descripion"
                            name="description"
                            value={experience.description}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                              handleWorkExperienceChange(index, e)
                            }
                            variant="standard"
                            fullWidth
                          />
                        </Grid>
                        {/* Add other work experience fields here */}
                      </Grid>
                      <br></br>
                      <br></br>
                    </div>
                  ))}
                  {/* Add Button to add more work experiences */}
                  <Button onClick={handleAddWorkExperience} color="success">
                    Add Work Experience
                  </Button>
                </Grid>
                <br></br>
                {/* Work Experience */}
                <span className="k-icon k-i-wrench"></span>
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
                {/* <div>
                    <p>
                      Name: {firstName} {lastName}
                    </p>
                    <p>Position: {position}</p>
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
