import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { ExportDefault } from "./components/ExportDefault/ExportDefault";
import Jsx from "./components/Jsx/Jsx";
import Jsxuse from "./components/Jsx/Jsxuse";
import ClickEvent from "./components/ClickEvent/ClickEvent";
import StateExample from "./components/StateExample/StateExample";
import Toggle from "./components/Toggle/Toggle";
import Props from "./components/PropsExample/Props";
import GetInput from "./components/GetInput/GetInput";
import Controlled from "./components/Controlled/Controlled";
import Checkbox from "./components/Checkbox/Checkbox";
import Radio from "./components/Radio/Radio";
import Loop from "./components/Loops/Loop";
import PropsUse from "./components/PropsUse/PropsUse";
import Nested from "./components/Nested/Nested";
import Hooks from "./components/Hooks/Hooks";
import UseEffect from "./components/useEffect/UseEffect";
import LifeCycle from "./components/LifeCycle/LifeCycle";
import Inlinestyle from "./components/Inlinestyle/Inlinestyle";
function App() {
  const [count, setCount] = useState(0);
  const userObject = {
    name: "jitendra",
    age: 30,
    email: "abc@gmail.com",
  };

  return (
    <div>
      <Header />
      <ExportDefault />
      <Jsx />
      <Jsxuse />
      <ClickEvent />
      <StateExample />
      <Toggle />
      <Props user={userObject} />
      <GetInput />
      <Controlled />
      <Checkbox />
      <Radio />
      <Loop />
      <PropsUse />
      <Nested />
      <Hooks />
      <UseEffect />
      <LifeCycle />
      <Inlinestyle />
    </div>
  );
}

export default App;

// NOTE: FIRST FILE LOADED IS INDEX.HTML WHEN BROWSER IS LOADED AND AFTER MAIN.JSX IS LOADED.
