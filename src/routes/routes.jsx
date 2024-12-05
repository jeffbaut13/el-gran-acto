import React, { useEffect } from "react";
import { createBrowserRouter, useLocation } from "react-router-dom";

import { ErrorPage } from "../pages/ErrorPage";

import Layout from "../layout/Layout";
import { Home } from "../pages/Home";
import Visita from "../pages/Visita";
import Match from "../pages/Match";
import { Landing } from "../components/Landing/Landing";
import Scanner from "../components/boleta/Scanner";
/* import Ticket from "../components/boleta/TicketInvitados";
import TicketInter from "../components/boleta/TicketInterDay";
 */import TicketInvitados from "../components/boleta/TicketInvitados";
import TicketInterDay from "../components/boleta/TicketInterDay";
import Ticket from "../components/boleta/ticket";
import { Souvenir } from "../components/Souvenir/Souvenir";

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
      <Layout>

        <ScrollToTopOnRouteChange />
        <TicketInvitados />
      </Layout>
      </>
    ),
  },
  {
    path: "/ticketinter/:id",
    element: (
      <>
      <Layout>

        <ScrollToTopOnRouteChange />
      <TicketInterDay />
      </Layout>
      </>
    ),
  },
  {
    path: "/scanner",
    element: (
      <>
      <Layout>

        <ScrollToTopOnRouteChange />
        <Scanner />
      </Layout>
      </>
    ),
  },
  {
    path: "/personalizacion",
    element: (
      <>
      

      
      <Souvenir/>
      
      </>
    ),
  },
]);

export default router;
