import TextField from "@mui/material/TextField";
import React, { ChangeEvent } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Slider } from "@mui/material";
import { Box, Paper, Typography } from "@mui/material";
import { grayBackgroundForBox } from "../constants";

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
  return (
    <Paper elevation={3}>
      <Box p={2} sx={{ backgroundColor: grayBackgroundForBox }}>
        <Typography variant="h5">Skills:</Typography>
        {skills.map((skill, index) => (
          <div key={index}>
            <TextField
              label="Skill Name"
              name={`skills[${index}].name`}
              value={skill.name}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleSkillNameChange(index, e)
              }
              variant="standard"
            />
            <Button onClick={() => handleRemoveSkill(index)}>
              <DeleteIcon />
            </Button>
            <Slider
              value={skill.strength}
              onChange={(event: Event, value: number | number[]) => {
                // Check if the value is an array (multi-value slider)
                const newValue = typeof value === "number" ? value : value[0];
                handleSkillStrengthChange(index, newValue);
              }}
              min={1}
              max={5}
              step={1}
              marks={marks}
              valueLabelDisplay="auto"
            />
          </div>
        ))}
        <Button onClick={handleAddSkill} color="success">
          Add Skill
        </Button>
      </Box>
    </Paper>
  );
};

export default Skills;
