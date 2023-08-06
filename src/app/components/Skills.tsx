import TextField from "@mui/material/TextField";
import React, { ChangeEvent } from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Button, Grid, Slider } from "@mui/material";
import { Box, Paper, Typography } from "@mui/material";
import {
  elementInputLabelAndButtonSize,
  grayBackgroundForBox,
} from "../constants";

const marks = [
  {
    value: 1,
    label: " 1",
  },
  {
    value: 2,
    label: "2",
  },
  {
    value: 3,
    label: "3",
  },
  {
    value: 4,
    label: "4",
  },
  {
    value: 5,
    label: "5",
  },
];

interface ISkillsData {
  name: string;
  strength: number;
}

interface ISkillsProps {
  skills: ISkillsData[];
  handleSkillNameChange: (
    index: number,
    data: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleSkillStrengthChange: (index: number, value: number) => void;
  handleAddSkill: () => void;
  handleRemoveSkill: (index: number) => void;
}

const Skills: React.FC<ISkillsProps> = ({
  skills,
  handleSkillNameChange,
  handleSkillStrengthChange,
  handleAddSkill,
  handleRemoveSkill,
}) => {
  const [hovered, setHovered] = React.useState(
    new Array(skills.length).fill(false)
  );

  return (
    <Paper elevation={3}>
      <Box p={2} sx={{ backgroundColor: grayBackgroundForBox }}>
        <Box p={2}>
          <Typography variant="h5">Skills:</Typography>
          {skills.map((skill, index) => (
            <div key={index}>
              <Grid container spacing={2}>
                <Grid item xs={10}>
                  <TextField
                    label="Skill Name"
                    name={`skills[${index}].name`}
                    value={skill.name}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleSkillNameChange(index, e)
                    }
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={2}>
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
                    onClick={() => handleRemoveSkill(index)}
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
                <Grid item xs={11}>
                  <Slider
                    value={skill.strength}
                    onChange={(event: Event, value: number | number[]) => {
                      // Check if the value is an array (multi-value slider)
                      const newValue =
                        typeof value === "number" ? value : value[0];
                      handleSkillStrengthChange(index, newValue);
                    }}
                    min={1}
                    max={5}
                    step={1}
                    marks={marks}
                    valueLabelDisplay="auto"
                    sx={{ marginBottom: 6 }}
                  />
                </Grid>
              </Grid>
            </div>
          ))}
          <Button onClick={handleAddSkill} color="success">
            <AddIcon sx={{ marginRight: "8px" }} />
            Add Skill
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default Skills;
