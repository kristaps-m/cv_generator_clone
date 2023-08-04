import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import React, { ChangeEvent } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Input, InputLabel } from "@mui/material";
import { Box, Paper, Typography } from "@mui/material";
import { grayBackgroundForBox } from "../constants";
import { data } from "autoprefixer";

interface IWorkExperienceData {
  company: string;
  jobTitle: string;
  date: string;
  description: string;
}

interface IWorkExperienceProps {
  workExperiences: IWorkExperienceData[];
  handleWorkExperienceChange: (
    index: number,
    data: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleAddWorkExperience: () => void;
  handleRemoveWorkExperience: (index: number) => void;
}

const WorkExperience: React.FC<IWorkExperienceProps> = ({
  workExperiences,
  handleWorkExperienceChange,
  handleAddWorkExperience,
  handleRemoveWorkExperience,
}) => {
  return (
    <Paper elevation={3}>
      <Box p={2} sx={{ backgroundColor: grayBackgroundForBox }}>
        <Box p={2}>
          <Typography variant="h5">Work Experience:</Typography>
          <Grid item xs={12}>
            {/* Work Experience List */}
            {workExperiences.map((experience, index) => (
              <div key={index}>
                <Grid container spacing={2}>
                  <Grid item xs={10}>
                    <InputLabel htmlFor="fullWidth">Company</InputLabel>
                  </Grid>
                  <Grid item xs={2}>
                    {/* Add a button with a trash can icon to remove the work experience */}
                    <Button
                      onClick={() => handleRemoveWorkExperience(index)}
                      sx={{
                        minWidth: 15, // Adjust the width of the button
                        minHeight: 15, // Adjust the height of the button
                        padding: 0, // Remove padding to make the icon centered
                        fontSize: "small", // Adjust the font size
                      }}
                    >
                      <DeleteIcon></DeleteIcon>
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    {/* <TextField
                    label="Company"
                    name="company"
                    value={experience.company}
                    onChange={(e: any) => handleWorkExperienceChange(index, e)}
                    variant="standard"
                    fullWidth
                  /> */}

                    <Input
                      id="fullWidth"
                      name="company"
                      value={experience.company}
                      onChange={(e: any) =>
                        handleWorkExperienceChange(index, e)
                      }
                      placeholder="ABC Company *"
                      fullWidth
                    />
                  </Grid>
                  {/* <Grid item xs={2}>
                    Add a button with a trash can icon to remove the work experience
                    <Button onClick={() => handleRemoveWorkExperience(index)}>
                      <DeleteIcon></DeleteIcon>
                    </Button>
                  </Grid> */}
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
        </Box>
      </Box>
    </Paper>
  );
};

export default WorkExperience;
