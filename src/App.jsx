import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { ExportDefault } from "./components/ExportDefault/ExportDefault";
import Jsx from "./components/Jsx/Jsx";
import Jsxuse from "./components/Jsx/Jsxuse";
import ClickEvent from "./components/ClickEvent/ClickEvent";
import StateExample from "./components/StateExample/StateExample";
import Toggle from "./components/Toggle/Toggle";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <ExportDefault />
      <Jsx />
      <Jsxuse />
      <ClickEvent />
      <StateExample />
      <Toggle />
    </div>
  );
}

export default App;

// NOTE: FIRST FILE LOADED IS INDEX.HTML WHEN BROWSER IS LOADED AND AFTER MAIN.JSX IS LOADED.
