import React from "react";
import { Box, Typography } from "@mui/material";

interface IColoredLineWithTextProps {
  color: string;
  text: string;
  selectedFont: string;
}

const ColoredLineWithText: React.FC<IColoredLineWithTextProps> = ({
  color,
  text,
  selectedFont,
}) => {
  return (
    <span style={{ display: "flex", alignItems: "center" }}>
      <Box
        sx={{
          width: 100,
          height: 10,
          backgroundColor: color,
          marginRight: "10px",
        }}
      ></Box>
      <Typography
        variant="h6"
        style={{ fontFamily: selectedFont, fontSize: 4 }}
      >
        {text}
      </Typography>
    </span>
  );
};

export default ColoredLineWithText;
