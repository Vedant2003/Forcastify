import React from "react";

import ReactDOM from "react-dom";
import Weather from "./components/navbar";
const Home = () => <h1>Home</h1>;

const App = () => (
  <div className="app">
    <Weather/>
  </div>
);

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
