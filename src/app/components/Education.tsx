import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import React, { ChangeEvent } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import { Box, Paper, Typography } from "@mui/material";
import { grayBackgroundForBox } from "../constants";

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
  return (
    <Paper elevation={3}>
      <Box p={2} sx={{ backgroundColor: grayBackgroundForBox }}>
        <Typography variant="h5">Education:</Typography>
        <Grid item xs={12}>
          <Grid item xs={12}>
            <h1>Education:</h1>
          </Grid>
          {/* Education List */}
          {educations.map((experience, index) => (
            <div key={index}>
              <Grid container spacing={2}>
                <Grid item xs={10}>
                  <TextField
                    label="School"
                    name="school"
                    value={experience.school}
                    onChange={(e: any) => handleEducationsChange(index, e)}
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={2}>
                  {/* Add a button with a trash can icon to remove the Education */}
                  <Button onClick={() => handleRemoveEducation(index)}>
                    <DeleteIcon></DeleteIcon>
                  </Button>
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
            Add Education
          </Button>
        </Grid>
      </Box>
    </Paper>
  );
};

export default Education;
