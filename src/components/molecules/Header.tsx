import React from "react";
import styled from "styled-components";
import HamburgerButton from "../atoms/buttons/HamburgerButton";
import CalcTitle from "../atoms/CalcTitle";

const Header = () => {
  return (
    <Container>
      <HamburgerButton></HamburgerButton>
      <CalcTitle title={"標準"}></CalcTitle>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding-top: 10px;
`;

export default Header;
