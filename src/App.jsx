import React from "react";
 

import { Helmet } from "react-helmet";
import { RouterProvider } from "react-router-dom";

import router from "./routes/routes";

const App = () => {
  return (
    <>
      <Helmet>
        <title>title page</title>
        <link rel="canonical" href="/" />
        <meta
          name="description"
          content="content"
        />
      </Helmet>

      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </>
  );
};

export default App;
