import React, { useContext } from "react";
import styled from "styled-components";
import { CalcContext } from "../../providers/CalcProvider";
import { FomulaContext } from "../../providers/FomulaProvider";

const Formula = () => {
  const context: any = useContext(FomulaContext);
  return <FormulaText>{context.fomula}</FormulaText>;
};

const FormulaText = styled.h2`
  color: #fff;
  font-size: 1rem;
  letter-spacing: -0.01rem;
  margin: 0 0 0 10px;
  color: #a5a5a5;
`;

export default Formula;
