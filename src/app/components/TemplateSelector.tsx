// components/TemplateSelector.tsx
import React, { useState } from "react";
import TemplateA from "./TemplateA";
import TemplateB from "./TemplateB";
import ITemplateProps from "./ITemplateProps";
import { Button } from "@mui/material";

const TemplateSelector: React.FC<ITemplateProps> = ({ data }) => {
  const [selectedTemplate, setSelectedTemplate] = useState("TemplateA");

  const handleTemplateChange = (template: string) => {
    setSelectedTemplate(template);
  };

  return (
    <div className="button-area">
      {/* Add buttons or options to select templates */}
      <Button
        onClick={() => handleTemplateChange("TemplateA")}
        variant="outlined"
        color="success"
      >
        Default Temmplate
      </Button>
      <Button
        onClick={() => handleTemplateChange("TemplateB")}
        variant="outlined"
        color="success"
      >
        Custom Font Size
      </Button>

      {selectedTemplate === "TemplateA" && <TemplateA data={data} />}
      {selectedTemplate === "TemplateB" && <TemplateB data={data} />}
    </div>
  );
};

export default TemplateSelector;
