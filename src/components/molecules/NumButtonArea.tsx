import React from "react";
import styled from "styled-components";
import NumButton from "../atoms/buttons/NumButton";
import SymbolButton from "../atoms/buttons/SymbolButton";

const NumButtonArea = () => {
  return (
    <Container>
      <SymbolButton type="">%</SymbolButton>
      <SymbolButton type="delete">CE</SymbolButton>
      <SymbolButton type="delete">C</SymbolButton>
      <SymbolButton type="delete">DEL</SymbolButton>
      <SymbolButton type="">1/x</SymbolButton>
      <SymbolButton type="">x2</SymbolButton>
      <SymbolButton type="">2√x</SymbolButton>
      <SymbolButton type="">/</SymbolButton>
      <NumButton type="number">7</NumButton>
      <NumButton type="number">8</NumButton>
      <NumButton type="number">9</NumButton>
      <SymbolButton type="">*</SymbolButton>
      <NumButton type="number">4</NumButton>
      <NumButton type="number">5</NumButton>
      <NumButton type="number">6</NumButton>
      <SymbolButton type="">-</SymbolButton>
      <NumButton type="number">1</NumButton>
      <NumButton type="number">2</NumButton>
      <NumButton type="number">3</NumButton>
      <SymbolButton type="">+</SymbolButton>
      <NumButton type="number">+/-</NumButton>
      <NumButton type="number">0</NumButton>
      <NumButton type="number">.</NumButton>
      <SymbolButton type="equal">=</SymbolButton>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 65%;
  box-sizing: border-box;
`;

export default NumButtonArea;
