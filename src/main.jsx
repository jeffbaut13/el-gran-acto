import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Helmet } from "react-helmet";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Helmet>
      <title>El gran acto</title>
      <link rel="canonical" href="/" />
      <meta name="description" content="content" />
    </Helmet>
    <App />
  </>
);
