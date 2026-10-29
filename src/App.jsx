import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Counter from "./components/Counter";
import Properties from "./components/Properties";
import Colorchanger from "./components/Colorchanger";
function App() {
  return (
    <div>
      <Header />
      <Counter />
      <Properties userName="javascript" />
      <Colorchanger />
    </div>
  );
}

export default App;

// NOTE: FIRST FILE LOADED IS INDEX.HTML WHEN BROWSER IS LOADED AND AFTER MAIN.JSX IS LOADED.
// REACT IS A LIBRARY.
// VITE IS A BUNDLER.
// jab bhi result setState me hota he tab component re-render hota he.
