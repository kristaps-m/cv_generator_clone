import React, { ChangeEvent } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import ITemplateProps from "./ITemplateProps";

interface BasicInfoProps extends ITemplateProps{
    handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  }

const BasicInfo : React.FC<BasicInfoProps> = ({ data, handleInputChange }) => {
    return (
      <div>
        <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      id="fullWidth"
                      label="First Name"
                      name="firstName"
                      value={data.firstName}
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
                      value={data.lastName}
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
                      value={data.position}
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
                      value={data.yearsOfExperience}
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
                      value={data.email}
                      onChange={handleInputChange}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="fullWidth"
                      label="Mobile phone"
                      name="phone"
                      value={data.phone}
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
                      value={data.linkedIn}
                      onChange={handleInputChange}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="fullWidth"
                      label="Location"
                      name="location"
                      value={data.location}
                      onChange={handleInputChange}
                      variant="standard"
                    />
                  </Grid>
                </Grid>
      </div>
    );
  };
  
  export default BasicInfo;