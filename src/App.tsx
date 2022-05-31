import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CalcContainer from "./components/orgnisms/CalcContainer";
import { CalcProvider } from "./providers/CalcProvider";
import { FomulaProvider } from "./providers/FomulaProvider";

function App() {
  return (
    <CalcProvider>
      <FomulaProvider>
        <CalcContainer></CalcContainer>
      </FomulaProvider>
    </CalcProvider>
  );
}

export default App;
