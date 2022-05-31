import React from "react";
import styled from "styled-components";
import Header from "../molecules/Header";
import MemoryArea from "../molecules/MemoryArea";
import NumButtonArea from "../molecules/NumButtonArea";
import AnswerArea from "../molecules/AnswerArea";

const CalcContainer = () => {
  return (
    <Container>
      <Header></Header>
      <AnswerArea></AnswerArea>
      <MemoryArea></MemoryArea>
      <NumButtonArea></NumButtonArea>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  background-color: #1f1f1f;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export default CalcContainer;
