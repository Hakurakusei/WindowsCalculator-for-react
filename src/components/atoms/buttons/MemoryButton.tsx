import React from "react";
import styled from "styled-components";

const MemoryButton = (props: any) => {
  const { children } = props;
  return <MButton>{children}</MButton>;
};

const MButton = styled.button`
  color: #fff;
  background-color: #1f1f1f;
  border: none;
  font-size: 0.8rem;
  padding: 15px 25px;
  cursor: pointer;
`;

export default MemoryButton;
