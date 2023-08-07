import React from "react";
import { Box, Typography } from "@mui/material";

interface IColoredLineWithTextProps {
  color: string;
  text: string;
  selectedFont: string;
  fontSizeNumber: number;
}

const ColoredLineWithText: React.FC<IColoredLineWithTextProps> = ({
  color,
  text,
  selectedFont,
  fontSizeNumber,
}) => {
  return (
    <span style={{ display: "flex", alignItems: "center" }}>
      <Box
        sx={{
          width: fontSizeNumber * 7,
          height: fontSizeNumber * 0.7,
          backgroundColor: color,
          marginRight: "10px",
        }}
      ></Box>
      <Typography
        variant="h6"
        style={{ fontFamily: selectedFont, fontSize: fontSizeNumber }}
      >
        {text}
      </Typography>
    </span>
  );
};

export default ColoredLineWithText;
