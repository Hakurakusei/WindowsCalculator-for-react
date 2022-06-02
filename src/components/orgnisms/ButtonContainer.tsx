import React from "react";
import styled from "styled-components";
import MemoryArea from "../molecules/MemoryArea";
import NumButtonArea from "../molecules/NumButtonArea";

const ButtonContainer = () => {
  return (
    <Container>
      <MemoryArea></MemoryArea>
      <NumButtonArea></NumButtonArea>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 70%;

  @media screen and (max-width: 480px) {
    height: 55%;
  }
`;

export default ButtonContainer;
