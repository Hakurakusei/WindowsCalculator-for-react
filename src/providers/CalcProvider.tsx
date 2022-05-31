import { createContext, useState } from "react";

export const CalcContext = createContext({});

export const CalcProvider = (props: any) => {
  const { children } = props;
  const [CalcItem, setCalcItem] = useState({
    inputValue: "0",
    stack: 0,
    symbol: "",
  });
  return (
    <>
      <CalcContext.Provider value={{ CalcItem, setCalcItem }}>
        {children}
      </CalcContext.Provider>
    </>
  );
};
