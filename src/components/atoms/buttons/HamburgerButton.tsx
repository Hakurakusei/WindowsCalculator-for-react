import React from "react";
import styled from "styled-components";

const HamburgerButton = () => {
  return (
    <Container>
      <Bar position={"35%"}></Bar>
      <Bar position={"50%"}></Bar>
      <Bar position={"65%"}></Bar>
    </Container>
  );
};

const Bar = styled.span<{ position: string }>`
  position: absolute;
  width: 50%;
  top: ${(props) => props.position};
  left: 50%;
  transform translate(-50%, -50% );
  height: 1px;
  background-color: #fff;

`;
const Container = styled.div`
  position: relative;
  width: 35px;
  height: 35px;
  cursor: pointer;
`;

export default HamburgerButton;
