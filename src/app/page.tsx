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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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
    company: "",
    jobTitle: "",
    date: "",
    description: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCvData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      id="fullWidth"
                      label="First Name"
                      name="firstName"
                      value={cvData.firstName}
                      onChange={handleInputChange}
                      variant="standard"
                      placeholder="Enter your first name"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="fullWidth"
                      label="Last Name"
                      name="lastName"
                      value={cvData.lastName}
                      onChange={handleInputChange}
                      variant="standard"
                      placeholder="Enter your last name"
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      fullWidth
                      id="fullWidth"
                      label="Profession"
                      name="position"
                      value={cvData.position}
                      onChange={handleInputChange}
                      variant="standard"
                      placeholder="Enter your profession"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="fullWidth"
                      label="Years Of Experience"
                      name="yearsOfExperience"
                      value={cvData.yearsOfExperience}
                      onChange={handleInputChange}
                      variant="standard"
                      placeholder="Enter your experience"
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      fullWidth
                      id="fullWidth"
                      label="E-mail"
                      name="email"
                      value={cvData.email}
                      onChange={handleInputChange}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="fullWidth"
                      label="Mobile phone"
                      name="phone"
                      value={cvData.phone}
                      onChange={handleInputChange}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      fullWidth
                      id="fullWidth"
                      label="LinkedIn"
                      name="linkedIn"
                      value={cvData.linkedIn}
                      onChange={handleInputChange}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="fullWidth"
                      label="Location"
                      name="location"
                      value={cvData.location}
                      onChange={handleInputChange}
                      variant="standard"
                    />
                  </Grid>
                </Grid>
                {/* <div>
                  <label htmlFor="firstName">First Name:</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={cvData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter your first name"
                  />
                </div> */}
                <div>
                  <label htmlFor="lastName">Last Name:</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={cvData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter your last name"
                  />
                  {/* {(cvData.lastName = lastName)} */}
                </div>
                <div>
                  <label htmlFor="position">Position / Profession:</label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={cvData.position}
                    onChange={handleInputChange}
                    placeholder="Enter your position"
                  />
                </div>
                <div>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={cvData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="phone">Phone:</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={cvData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="linkedIn">LinkedIn:</label>
                  <input
                    type="text"
                    id="linkedIn"
                    name="linkedIn"
                    value={cvData.linkedIn}
                    onChange={handleInputChange}
                    placeholder="Enter your LinkedIn"
                  />
                </div>
                <div>
                  <label htmlFor="summary">Summary:</label>
                  <textarea
                    id="summary"
                    name="summary"
                    value={cvData.summary}
                    onChange={handleInputChange}
                    placeholder="Enter a summary about yourself"
                  />
                </div>
                <br></br>
                {/* Work Experience */}
                <span className="k-icon k-i-wrench"></span>
                <h3>Work Experience</h3>
                <div>
                  <label htmlFor="company">Company:</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={cvData.company}
                    onChange={handleInputChange}
                    placeholder="Enter company name"
                  />
                </div>
                <div>
                  <label htmlFor="jobTitle">Job Title:</label>
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    value={cvData.jobTitle}
                    onChange={handleInputChange}
                    placeholder="Enter job title"
                  />
                </div>
                <div>
                  <label htmlFor="date">Date:</label>
                  <input
                    type="text"
                    id="date"
                    name="date"
                    value={cvData.date}
                    onChange={handleInputChange}
                    placeholder="Enter date"
                  />
                </div>
                <div>
                  <label htmlFor="description">Description:</label>
                  <textarea
                    id="description"
                    name="description"
                    value={cvData.description}
                    onChange={handleInputChange}
                    placeholder="Enter job description"
                  />
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
                <TemplateSelector data={cvData} />
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
    </div>
  );
}
