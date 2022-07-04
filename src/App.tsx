import type { Component } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";

import Header from "./components/Header";
import Counter from "./components/Counter";
import Namecard from "./components/Namecard";
import Todos from "./components/Todos";
import Auth from "./components/Auth";

const App: Component = () => {
  return (
    <>
      {/* Components */}
      <Header />

      {/* Components passing props */}
      <Namecard name="Cyan" />

      <Counter />
      <Todos />
      <Auth isLoggedIn={false} username={"Cyan"}/>
    </>
  );
};

export default App;
