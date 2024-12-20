import React, { useEffect } from "react";
import { createBrowserRouter, useLocation } from "react-router-dom";

import { ErrorPage } from "../pages/ErrorPage";

import Layout from "../layout/Layout";
import { Home } from "../pages/Home";
import Visita from "../pages/Visita";
import Match from "../pages/Match";
import { Landing } from "../components/Landing/Landing";

import { Souvenir } from "../components/Souvenir/Souvenir";

import Scanner from "../components/boleta/Scanner";
import TicketInter from "../components/boleta/TicketInterDay";
import TicketInvitados from "../components/boleta/TicketInvitados";
import TicketInterDay from "../components/boleta/TicketInterDay";
import { InterDay } from "../pages/InterDay";
import { ElgranActo } from "../pages/ElgranActo";
import Agotados from "../components/agendar/Agotados";
import { GraciasSouvenir } from "../components/Souvenir/GraciasSouvenir";

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
    errorElement: <ErrorPage />,
  },
  {
    path: "match",
    element: (
      <>
        <ScrollToTopOnRouteChange />
        <Match />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  /* {
    path: "/",
    element: (
      <>
        <Layout>
          <ScrollToTopOnRouteChange />
          <Landing />
        </Layout>
      </>
    ),
  }, */
  {
    path: "/ticket/:id",
    element: (
      <>
        <ScrollToTopOnRouteChange />
        <TicketInvitados />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/ticketinter/:id",
    element: (
      <>
        <ScrollToTopOnRouteChange />
        <TicketInterDay />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/scanner",
    element: (
      <>
        <ScrollToTopOnRouteChange />
        <Scanner />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/personalizacion",
    element: (
      <>
        <Souvenir />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/interday2024",
    element: (
      <>
        <InterDay />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/elgranacto",
    element: (
      <>
        <ElgranActo />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/interday2024",
    element: (
      <>
        <InterDay />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/elgranacto",
    element: (
      <>
        <ElgranActo />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/agotados",
    element: (
      <>
        <Agotados />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/gracias",
    element: (
      <>
        <GraciasSouvenir />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  
]);

export default router;
