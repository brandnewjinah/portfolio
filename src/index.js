import React from "react";
import ReactDOM from "react-dom";

//import components
import Routes from "./Routes";
import GlobalStyle from "./components/globalStyle";

//import styles
import "./index.css";

ReactDOM.render(
  <>
    <GlobalStyle />
    <Routes />
  </>,
  document.getElementById("root")
);
