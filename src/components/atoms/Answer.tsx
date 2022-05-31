import React, { useContext } from "react";
import styled from "styled-components";
import { CalcContext } from "../../providers/CalcProvider";

const Answer = () => {
  const context: any = useContext(CalcContext);
  return <Calc>{Number(context.CalcItem.inputValue).toLocaleString()}</Calc>;
};

const Calc = styled.h2`
  color: #fff;
  font-size: 4rem;
  letter-spacing: 0.1rem;
  margin: 0 0 0 10px;
`;

export default Answer;
