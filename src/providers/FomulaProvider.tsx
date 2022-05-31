import { createContext, useState } from "react";

export const FomulaContext = createContext({});

export const FomulaProvider = (props: any) => {
  const { children } = props;
  const [fomula, setFomula] = useState("");
  return (
    <>
      <FomulaContext.Provider value={{ fomula, setFomula }}>
        {children}
      </FomulaContext.Provider>
    </>
  );
};
