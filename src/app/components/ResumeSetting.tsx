import React, { useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import { defaultColor, grayBackgroundForBox } from "../constants";

interface ColorPaletteProps {
  onSelectColor: (color: string) => void;
  onSelectFont: (font: string) => void;
}

const ResumeSetting: React.FC<ColorPaletteProps> = ({
  onSelectColor,
  onSelectFont,
}) => {
  const defaultFont = "Arial";

  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedFont, setSelectedFont] = useState<string>(defaultFont);

  const colors = [
    "#f87171",
    "#ef4444",
    "#fb923c",
    "#f97316",
    "#fbbf24",
    "#f59e0b",
    "#22c55e",
    "#15803d",
    "#38bdf8",
    "#0ea5e9",
    "#818cf8",
    "#6366f1",
  ];

  const fontFamilies = [
    "Arial",
    "Helvetica",
    "Times New Roman",
    "Courier New",
    "Verdana",
  ];

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
    onSelectColor(color); // Pass the selected color to the parent component
  };

  const handleFontClick = (font: string) => {
    setSelectedFont(font);
    onSelectFont(font); // Pass the selected font to the parent component
  };

  return (
    <Paper elevation={3}>
      <Box p={2} sx={{ backgroundColor: grayBackgroundForBox }}>
        <Typography variant="h5">Resume Setting:</Typography>
        {colors.map((color) => (
          <button
            key={color}
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: color,
              border: selectedColor === color ? "2px solid black" : "none",
            }}
            onClick={() => handleColorClick(color)}
          />
        ))}
        <div>Selected color: {selectedColor || defaultColor}</div>

        <div>
          <h3>Font Family:</h3>
          {fontFamilies.map((font) => (
            <button
              key={font}
              style={{
                fontFamily: font,
                padding: "5px",
                border: selectedFont === font ? "2px solid black" : "none",
              }}
              onClick={() => handleFontClick(font)}
            >
              {font}
            </button>
          ))}
        </div>
      </Box>
    </Paper>
  );
};

export default ResumeSetting;
