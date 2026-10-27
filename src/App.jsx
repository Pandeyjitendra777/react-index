import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Counter from "./components/Counter";
function App() {
  return (
    <div>
      <Header />
      <Counter />
    </div>
  );
}

export default App;

// NOTE: FIRST FILE LOADED IS INDEX.HTML WHEN BROWSER IS LOADED AND AFTER MAIN.JSX IS LOADED.
// REACT IS A LIBRARY.
// VITE IS A BUNDLER.
