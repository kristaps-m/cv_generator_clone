// components/TemplateSelector.tsx
import React, { useState } from "react";
import TemplateA from "./TemplateA";
import TemplateB from "./TemplateB";
import ITemplateProps from "./ITemplateProps";

const TemplateSelector: React.FC<ITemplateProps> = ({ data }) => {
  const [selectedTemplate, setSelectedTemplate] = useState("TemplateA");

  const handleTemplateChange = (template: string) => {
    setSelectedTemplate(template);
  };

  return (
    <div>
      {/* Add buttons or options to select templates */}
      <button onClick={() => handleTemplateChange("TemplateA")}>
        Template A
      </button>
      <button onClick={() => handleTemplateChange("TemplateB")}>
        Template B
      </button>

      {selectedTemplate === "TemplateA" && <TemplateA data={data} />}
      {selectedTemplate === "TemplateB" && <TemplateB data={data} />}
    </div>
  );
};

export default TemplateSelector;
