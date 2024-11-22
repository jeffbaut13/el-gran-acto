import React, { useEffect } from "react";
import { createBrowserRouter, useLocation } from "react-router-dom";

import { ErrorPage } from "../pages/ErrorPage";

import Layout from "../layout/Layout";
import { Home } from "../pages/Home";
import Visita from "../pages/Visita";
import Preguntas from "../pages/Preguntas";
import Match from "../pages/Match";

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(100, 0);
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
        <ScrollToTopOnRouteChange />
        <Visita />
      </>
    ),
  },
  {
    path: "preguntas",
    element: (
      <>
        <ScrollToTopOnRouteChange />
        <Preguntas />
      </>
    ),
  },
  {
    path: "match",
    element: (
      <>
        <ScrollToTopOnRouteChange />
        <Match />
      </>
    ),
  },
]);

export default router;
