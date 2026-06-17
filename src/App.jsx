import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>React Project</h1>
      <Header />
    </div>
  );
}

export default App;

// NOTE: FIRST FILE LOADED IS INDEX.HTML WHEN BROWSER IS LOADED AND AFTER MAIN.JSX IS LOADED.

// 1:15 minutes
