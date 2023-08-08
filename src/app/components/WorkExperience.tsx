import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import React, { ChangeEvent } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
import { Button, Input, InputLabel } from "@mui/material";
import { Box, Paper, Typography } from "@mui/material";
import {
  elementInputLabelAndButtonSize,
  grayBackgroundForBox,
  whiteColor,
} from "../constants";

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
  const [hovered, setHovered] = React.useState(
    new Array(workExperiences.length).fill(false)
  );

  return (
    <Paper elevation={3}>
      <Box p={2} sx={{ backgroundColor: whiteColor }}>
        <Box p={2}>
          <Typography variant="h5">Work Experience:</Typography>
          <Grid item xs={12}>
            {/* Work Experience List */}
            {workExperiences.map((experience, index) => (
              <div key={index}>
                <Grid container spacing={2}>
                  <Grid item xs={10} sx={{ marginBottom: 0, padding: 0 }}>
                    <InputLabel
                      htmlFor="fullWidth"
                      sx={{
                        marginBottom: 0,
                        fontSize: elementInputLabelAndButtonSize,
                      }}
                    >
                      Company
                    </InputLabel>
                  </Grid>
                  <Grid item xs={2} sx={{ marginBottom: 0, padding: 0 }}>
                    {/* Add a button with a trash can icon to remove the work experience */}
                    <Button
                      onMouseEnter={() => {
                        const updatedHovered = [...hovered];
                        updatedHovered[index] = true;
                        setHovered(updatedHovered);
                      }}
                      onMouseLeave={() => {
                        const updatedHovered = [...hovered];
                        updatedHovered[index] = false;
                        setHovered(updatedHovered);
                      }}
                      onClick={() => handleRemoveWorkExperience(index)}
                      sx={{
                        padding: 0,
                        marginBottom: 0,
                        marginRight: 0,
                        position: "relative",
                      }}
                    >
                      <DeleteForeverIcon
                        sx={{
                          marginBottom: 0,
                          marginRight: 0,
                          padding: 0,
                          fontSize: elementInputLabelAndButtonSize,
                        }}
                      />
                      {hovered[index] && (
                        <Typography
                          variant="caption"
                          sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            backgroundColor: "rgba(0, 0, 0, 0.7)",
                            color: "#fff",
                            padding: "2px 4px",
                            borderRadius: 4,
                            zIndex: 1,
                          }}
                        >
                          DELETE
                        </Typography>
                      )}
                    </Button>
                  </Grid>
                  <Grid item xs={12} sx={{ marginTop: 0, padding: 0 }}>
                    <Input
                      id="fullWidth"
                      name="company"
                      value={experience.company}
                      onChange={(e: any) =>
                        handleWorkExperienceChange(index, e)
                      }
                      placeholder="Your Company"
                      fullWidth
                      sx={{ marginTop: 0 }}
                    />
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
              <AddIcon sx={{ marginRight: "8px" }} />
              Add Work Experience
            </Button>
          </Grid>
        </Box>
      </Box>
    </Paper>
  );
};

export default WorkExperience;
