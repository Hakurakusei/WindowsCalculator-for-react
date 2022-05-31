import React, { useContext } from "react";
import styled from "styled-components";

const CalcTitle = (props: any) => {
  return <Title>{props.title}</Title>;
};

const Title = styled.h1`
  color: #fff;
  font-size: 1.5rem;
  margin: 0 0 0 10px;
`;

export default CalcTitle;
