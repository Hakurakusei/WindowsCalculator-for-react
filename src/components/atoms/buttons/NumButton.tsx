import React, { useContext } from "react";
import styled from "styled-components";
import { CalcContext } from "../../../providers/CalcProvider";

const NumButton = (props: any) => {
  const { children, type } = props;
  const context: any = useContext(CalcContext);

  const onClickNumButton = () => {
    const rtnObj = Object.assign({}, context.CalcItem);
    let value = "";

    if (rtnObj.inputValue == "0") {
      value = `${children}`;
    } else if (rtnObj.inputValue.length >= 16) {
      return;
    } else {
      value = rtnObj.inputValue + `${children}`;
    }

    rtnObj.inputValue = value;
    // testLog
    console.log(context);
    context.setCalcItem(rtnObj);
  };

  return (
    <NButton color={type} onClick={onClickNumButton}>
      {children}
    </NButton>
  );
};

const NButton = styled.button<{ color: string }>`
  color: #fff;
  position: relative;
  background-color: ${(props) => {
    if (props.color == "number") {
      return "#060606";
    } else if (props.color == "equal") {
      return "#454545";
    }
  }};
  width: 25%;
  height: 105px;
  border: 1px solid #1f1f1f;
  font-size: 1.5rem;
  padding: 25px auto;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    background-color: #1f1f1f;
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: radial-gradient(circle, #f1f1f1 10%, transparent 30%) no-repeat
      50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform 0.05s, opacity 1s;
  }

  &:active::after {
    transform: scale(0, 0);
    transition: 0s;
    opacity: 0.3;
  }
`;

export default NumButton;
