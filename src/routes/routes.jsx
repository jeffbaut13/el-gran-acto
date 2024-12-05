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
    path: "match",
    element: (
      <>
        <ScrollToTopOnRouteChange />
        <Match />
      </>
    ),
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
  },
  {
    path: "/ticketinter/:id",
    element: (
      <>
         
          <ScrollToTopOnRouteChange />
          <TicketInterDay />
       
      </>
    ),
  },
  {
    path: "/scanner",
    element: (
      <>
        <ScrollToTopOnRouteChange />
        <Scanner />
      </>
    ),
  },
  {
    path: "/personalizacion",
    element: (
      <>
        <Souvenir />
      </>
    ),
  },
]);

export default router;
