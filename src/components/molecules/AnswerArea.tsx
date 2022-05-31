import React, { useState } from "react";
import styled from "styled-components";
import Answer from "../atoms/Answer";
import Formula from "../atoms/Formula";

const AnswerArea = (props: any) => {
  const [formula, setFormula] = useState("");
  return (
    <Container>
      <Formula></Formula>
      <Answer></Answer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 23%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  box-sizing: border-box;
  padding: 0 20px;
`;

export default AnswerArea;
