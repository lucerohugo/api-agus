import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(  //renderiza el componente App en el elemento con id root
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
  document.getElementById("root")  //elemento con id root
);
