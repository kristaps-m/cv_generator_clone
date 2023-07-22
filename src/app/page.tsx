"use client";
// import axios from "axios";
// import Image from "next/image";
import { useRef } from "react";
import { ChangeEvent, useState } from "react";
import "@progress/kendo-theme-material/dist/all.css";
import { Button } from "@progress/kendo-react-buttons";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import { Icon } from "@progress/kendo-react-common";
//import WorkIcon from "@mui/icons-material/Work";

export default function Home() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [email, setEmail] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [phone, setPhone] = useState("");
  const [summary, setSummary] = useState("");
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
      case "linkedIn":
        setLinkedIn(value);
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

  const pdfExportComponent = useRef(null);

  const handleExportWithComponent = (event: any) => {
    console.log("I clicked to export PDF");
    pdfExportComponent.current.save();
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
                  <label htmlFor="linkedIn">LinkedIn:</label>
                  <input
                    type="text"
                    id="linkedIn"
                    name="linkedIn"
                    value={linkedIn}
                    onChange={handleInputChange}
                    placeholder="Enter your LinkedIn"
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
                <span className="k-icon k-i-wrench"></span>
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
                <PDFExport ref={pdfExportComponent} paperSize="A4">
                  <div>
                    <h3>Generated CV:</h3>
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
                  </div>
                </PDFExport>
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
      <div className="button-area">
        <Button themeColor={"primary"} onClick={handleExportWithComponent}>
          Primary Button
        </Button>
        <Button>Default Button</Button>
      </div>
    </div>
  );
}
