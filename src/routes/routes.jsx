import React, { useEffect } from "react";
import { createBrowserRouter, useLocation } from "react-router-dom";

 
import { ErrorPage } from "../pages/ErrorPage";
 
import   Layout   from "../layout/Layout"
import { Home } from "../pages/Home";
import Visita from "../pages/Visita";
import Preguntas from "../pages/Preguntas";
import Match from "../pages/Match";

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Layout>
          <ScrollToTopOnRouteChange />
          <Home />
        </Layout>
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "visita",
    element: (
      <>
      <Layout>
        <ScrollToTopOnRouteChange />
        <Visita />
      </Layout>
      </>
    )

  },
  {
    path: "preguntas",
    element: (
      <>
      <Layout>
        <ScrollToTopOnRouteChange />
        <Preguntas />
      </Layout>
      </>
    )

  },
  {
    path: "match",
    element: (
      <>
      <Layout>
        <ScrollToTopOnRouteChange />
        <Match />
      </Layout>
      </>
    )

  },

  
]);

export default router;
