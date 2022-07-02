import type { Component } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";

import Header from "./components/Header";
import Counter from "./components/Counter";

const App: Component = () => {
  return (
    <div>
      {/* Components */}
      <Header />


      <Counter />
    </div>
  );
};

export default App;
