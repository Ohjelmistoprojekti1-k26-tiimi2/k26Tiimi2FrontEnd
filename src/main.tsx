// IMPORTIT
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// RENDERÖIDÄÄN PÄÄKOMPONENTTI DOM:IIN STRICT MODE:lla (KEHITYSTYÖKALUT KÄYTÖSSÄ)
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);