"use client";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState<string>("");
  const [userInputs, setUserInputs] = useState<string[]>([]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddInput = () => {
    if (inputValue.trim() !== "") {
      setUserInputs((prevInputs) => [...prevInputs, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div>
      <h1>WAZAAAAAAAAAAAAAAAAAAAAAAP</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter your input"
        />
        <button onClick={handleAddInput}>Add</button>
      </div>
      <div>
        <h3>User Inputs:</h3>
        <ul>
          {userInputs.map((input, index) => (
            <li key={index}>{input}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
