"use client";
import axios from 'axios';
import Image from "next/image";
import { ChangeEvent, useState } from "react";
//import type { NextPage } from 'next'
//import Page from '../components/Page'

const HTML_EXAMPLE = "<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'>  <meta http-equiv='X-UA-Compatible' content='ie=edge'>    <title>My Website</title>    <link rel='stylesheet' href='./style.css'>    <link rel='icon' href='./favicon.ico' type='image/x-icon'>  </head>  <body>    <main>        <h1>Welcome to My Website</h1>      </main>	<script src='index.js'></script>  </body></html>"

const generatePDF = async () => {
  try {
    const response = await axios.post('/api/generate-pdf', { // put this file to cool folder
      html: HTML_EXAMPLE, // Replace this with your actual HTML content
    });
    // '<html><body><h1>Hello, PDF!</h1></body></html>'
    const blob = new Blob([response.data], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    window.open(url);
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
};

export default function Home() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [summary, setSummary] = useState("");

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [workExperience, setWorkExperience] = useState<
    { company: string; jobTitle: string; date: string; description: string }[]
  >([]); //useState([]);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "company":
        setCompany(value);
        break;
      case "position":
        setPosition(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "summary":
        setSummary(value);
        break;
      case "jobTitle":
        setJobTitle(value);
        break;
      case "date":
        setDate(value);
        break;
      case "description":
        setDescription(value);
        break;
      default:
        break;
    }
  };

  const handleAddExperience = () => {
    if (
      company.trim() !== "" &&
      jobTitle.trim() !== "" &&
      date.trim() !== "" &&
      description.trim() !== ""
    ) {
      const experience = { company, jobTitle, date, description };
      setWorkExperience((prevExperience) => [...prevExperience, experience]);
      setCompany("");
      setJobTitle("");
      setDate("");
      setDescription("");
    }
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
                <div>
                  <label htmlFor="firstName">First Name:</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={firstName}
                    onChange={handleInputChange}
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName">Last Name:</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={lastName}
                    onChange={handleInputChange}
                    placeholder="Enter your last name"
                  />
                </div>
                <div>
                  <label htmlFor="position">Position:</label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={position}
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
                    value={email}
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
                    value={phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="summary">Summary:</label>
                  <textarea
                    id="summary"
                    name="summary"
                    value={summary}
                    onChange={handleInputChange}
                    placeholder="Enter a summary about yourself"
                  />
                </div>
                <br></br>
                {/* Work Experience */}
                <h3>Work Experience</h3>
                <div>
                  <label htmlFor="company">Company:</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={company}
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
                    value={jobTitle}
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
                    value={date}
                    onChange={handleInputChange}
                    placeholder="Enter date"
                  />
                </div>
                <div>
                  <label htmlFor="description">Description:</label>
                  <textarea
                    id="description"
                    name="description"
                    value={description}
                    onChange={handleInputChange}
                    placeholder="Enter job description"
                  />
                </div>
              </td>
              <td>
                <div>
                  <h3>Generated CV:</h3>
                  <p>
                    Name: {firstName} {lastName}
                  </p>
                  <p>Position: {position}</p>
                  <p>Email: {email}</p>
                  <p>Phone: {phone}</p>
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
      <button onClick={generatePDF}>Generate PDF</button>
    </div>
  );
}
