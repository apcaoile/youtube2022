import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
<<<<<<< HEAD
import { AuthContextProvider } from "./context/AuthContext";
=======
>>>>>>> b9226c6de61075bdf238df1282a6f2519b3a40a5

ReactDOM.render(
  <React.StrictMode>
    <DarkModeContextProvider>
<<<<<<< HEAD
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
=======
      <App />
>>>>>>> b9226c6de61075bdf238df1282a6f2519b3a40a5
    </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
