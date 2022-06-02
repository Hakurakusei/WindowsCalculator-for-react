import React from "react";
import MemoryButton from "../atoms/buttons/MemoryButton";

const MemoryArea = () => {
  return (
    <div>
      <MemoryButton>MC</MemoryButton>
      <MemoryButton>MR</MemoryButton>
      <MemoryButton>M+</MemoryButton>
      <MemoryButton>M-</MemoryButton>
      <MemoryButton>MS</MemoryButton>
    </div>
  );
};

export default MemoryArea;
