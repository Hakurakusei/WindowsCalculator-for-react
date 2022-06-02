import React, { useContext } from "react";
import styled from "styled-components";
import { CalcContext } from "../../../providers/CalcProvider";
import { FomulaContext } from "../../../providers/FomulaProvider";

type calc = {
  inputValue: string;
  stack: number;
  symbol: string;
};

const SymbolButton = (props: any) => {
  const { children, type } = props;
  const context: any = useContext(CalcContext);
  const fomulaContext: any = useContext(FomulaContext);
  const rtnObj = Object.assign({}, context.CalcItem);

  const onClickSymbolButton = () => {
    if (props.type == "equal") {
      fomulaContext.setFomula(
        `${rtnObj.stack} ${rtnObj.symbol} ${rtnObj.inputValue} =`
      );

      switch (rtnObj.symbol) {
        case "+":
          rtnObj.inputValue = String(rtnObj.stack + Number(rtnObj.inputValue));
          break;
        case "-":
          rtnObj.inputValue = String(rtnObj.stack - Number(rtnObj.inputValue));
          break;
        case "*":
          rtnObj.inputValue = String(rtnObj.stack * Number(rtnObj.inputValue));
          break;
        case "/":
          rtnObj.inputValue = String(rtnObj.stack / Number(rtnObj.inputValue));
          break;
        default:
          console.log("pass default");
          break;
      }

      rtnObj.stack = "0";
    } else if (props.type == "delete") {
      switch (`${children}`) {
        case "C":
          rtnObj.inputValue = "";
          break;
        case "CE":
          rtnObj.inputValue = "";
          rtnObj.stack = "";
          fomulaContext.setFomula("");
          break;
        case "DEL":
          rtnObj.inputValue = rtnObj.inputValue.slice(0, -1);
          break;
        default:
          console.log("pass default");
          break;
      }
    } else {
      rtnObj.stack =
        rtnObj.stack != 0 ? rtnObj.stack : Number(rtnObj.inputValue);
      fomulaContext.setFomula(`${rtnObj.stack} ${rtnObj.symbol}`);

      rtnObj.inputValue = "0";
      rtnObj.symbol = `${children}`;
    }
    // testLog
    console.log(rtnObj);
    context.setCalcItem(rtnObj);
  };

  return (
    <SButton color={type} onClick={onClickSymbolButton}>
      {children}
    </SButton>
  );
};

const doSymbol = (obj: calc) => {};

const SButton = styled.button<{ color: string }>`
  color: #fff;
  position: relative;
  background-color: ${(props) => {
    if (props.color == "equal") {
      return "#454545";
    } else {
      return "#131313";
    }
  }};
  width: 25%;
  height: 17.2%;
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

export default SymbolButton;
