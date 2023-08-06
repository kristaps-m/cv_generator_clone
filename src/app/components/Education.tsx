import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import React, { ChangeEvent } from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Button, Input, InputLabel } from "@mui/material";
import { Box, Paper, Typography } from "@mui/material";
import {
  elementInputLabelAndButtonSize,
  grayBackgroundForBox,
} from "../constants";

interface IEducationData {
  school: string;
  schoolDate: string;
  degreeAndMajor: string;
  GPA: string;
  achievements: string;
}

interface IEducationProps {
  educations: IEducationData[];
  handleEducationsChange: (
    index: number,
    data: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleAddEducations: () => void;
  handleRemoveEducation: (index: number) => void;
}

const Education: React.FC<IEducationProps> = ({
  educations,
  handleEducationsChange,
  handleAddEducations,
  handleRemoveEducation,
}) => {
  const [hovered, setHovered] = React.useState(
    new Array(educations.length).fill(false)
  );

  return (
    <Paper elevation={3}>
      <Box p={2} sx={{ backgroundColor: grayBackgroundForBox }}>
        <Box p={2}>
          <Typography variant="h5">Education:</Typography>
          <Grid item xs={12}>
            {/* Education List */}
            {educations.map((experience, index) => (
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
                      School
                    </InputLabel>
                  </Grid>
                  <Grid item xs={2} sx={{ marginBottom: 0, padding: 0 }}>
                    {/* Add a button with a trash can icon to remove the eudcation */}
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
                      onClick={() => handleRemoveEducation(index)}
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
                  <Grid item xs={12}>
                    <Input
                      id="fullWidth"
                      name="school"
                      value={experience.school}
                      onChange={(e: any) => handleEducationsChange(index, e)}
                      placeholder="Your School"
                      fullWidth
                      sx={{ marginTop: 0 }}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      label="Degree And Major"
                      name="degreeAndMajor"
                      value={experience.degreeAndMajor}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleEducationsChange(index, e)
                      }
                      variant="standard"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      label="Date"
                      name="schoolDate"
                      value={experience.schoolDate}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleEducationsChange(index, e)
                      }
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Achievements"
                      name="achievements"
                      value={experience.achievements}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleEducationsChange(index, e)
                      }
                      variant="standard"
                      fullWidth
                    />
                  </Grid>
                  {/* Add other Education fields here */}
                </Grid>
                <br></br>
                <br></br>
              </div>
            ))}
            {/* Add Button to add more Educations */}
            <Button onClick={handleAddEducations} color="success">
              <AddIcon sx={{ marginRight: "8px" }} />
              Add Education
            </Button>
          </Grid>
        </Box>
      </Box>
    </Paper>
  );
};

export default Education;
