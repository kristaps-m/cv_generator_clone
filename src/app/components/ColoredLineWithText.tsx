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
    <span
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: fontSizeNumber * 7, // aproximetly matches 'width' with font size
          height: fontSizeNumber * 0.7, // aproximetly matches 'height' with font size
          backgroundColor: color,
          marginRight: "10px",
          marginTop: "3px",
        }}
      ></Box>
      <Typography
        variant="h6"
        style={{
          fontFamily: selectedFont,
          fontSize: fontSizeNumber,
          lineHeight: "1",
        }}
      >
        {text}
      </Typography>
    </span>
  );
};

export default ColoredLineWithText;
