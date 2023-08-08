import React, { useState } from "react";
import { Box, Input, InputLabel, Paper, Typography } from "@mui/material";
import {
  defaultColor,
  defaultFonstSize,
  grayBackgroundForBox,
  whiteColor,
} from "../constants";
import Grid from "@mui/material/Grid";

interface IResumeSettingProps {
  onSelectColor: (color: string) => void;
  onSelectFont: (font: string) => void;
  onSelectFontSizeNumber: (size: number) => void;
}

const ResumeSetting: React.FC<IResumeSettingProps> = ({
  onSelectColor,
  onSelectFont,
  onSelectFontSizeNumber,
}) => {
  const defaultFont = "Arial";

  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedFont, setSelectedFont] = useState<string>(defaultFont);
  const [fontSizeNumber, setFontSizeNumber] =
    useState<number>(defaultFonstSize);

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
    "Times New Roman",
    "Courier New",
    "Verdana",
    "Fruktur",
    "Merriweather",
    "Rakkas",
    "Yatra One",
    "Erica One",
  ];

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
    onSelectColor(color); // Pass the selected color to the parent component
  };

  const handleFontClick = (font: string) => {
    setSelectedFont(font);
    onSelectFont(font); // Pass the selected font to the parent component
  };

  const handleSizeNumber = (size: number) => {
    setFontSizeNumber(size);
    onSelectFontSizeNumber(size); // Pass the selected font size to the parent component
  };

  let colorFromResumeSetting =
    selectedColor === "" || selectedColor === null
      ? defaultColor
      : selectedColor;

  return (
    <Paper elevation={3}>
      <Box p={2} sx={{ backgroundColor: whiteColor }}>
        <Box p={2}>
          <Typography variant="h5">Resume Setting:</Typography>
          <br />
          <span
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "8px",
            }}
          >
            <Typography variant="h6" marginRight={3}>
              Theme Color:
            </Typography>
            <Box bgcolor="gray">
              <Typography variant="h6">
                {selectedColor || defaultColor}
              </Typography>
            </Box>
          </span>
          {colors.map((color) => (
            <button
              key={color}
              style={{
                width: "45px",
                height: "45px",
                backgroundColor: color,
                borderRadius: "12px",
                // padding: "2px",
                margin: "2px 2px",
                border: selectedColor === color ? "2px solid black" : "none",
              }}
              onClick={() => handleColorClick(color)}
            />
          ))}
        </Box>
        <Box p={2}>
          <Typography variant="h6">Font Family:</Typography>
          <Grid container spacing={1}>
            {fontFamilies.map((font) => (
              <Grid item key={font}>
                <button
                  key={font}
                  style={{
                    backgroundColor:
                      selectedFont === font
                        ? colorFromResumeSetting
                        : "transparent",
                    fontFamily: font,
                    padding: "5px",
                    border:
                      selectedFont === font
                        ? "4px solid black"
                        : "1px solid gray",
                  }}
                  onClick={() => handleFontClick(font)}
                >
                  {font}
                </button>
              </Grid>
            ))}
          </Grid>
          <div>
            <InputLabel
              htmlFor="fullWidth"
              sx={{
                marginTop: 6,
                marginBottom: 0,
              }}
            >
              <Typography variant="h6">FontSize:</Typography>
            </InputLabel>
            <Input
              id="fullWidth"
              name="fontSizeNumber"
              value={isNaN(fontSizeNumber) ? "" : fontSizeNumber.toString()}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const newSize =
                  e.target.value !== "" ? parseInt(e.target.value, 10) : NaN;
                handleSizeNumber(newSize);
              }}
              placeholder="Font Size"
              fullWidth
              sx={{ marginTop: 0 }}
            />
          </div>
        </Box>
      </Box>
    </Paper>
  );
};

export default ResumeSetting;
