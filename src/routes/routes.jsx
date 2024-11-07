import React, { useEffect } from "react";
import { createBrowserRouter, useLocation } from "react-router-dom";

 
import { ErrorPage } from "../pages/ErrorPage";
 
import   Layout   from "../layout/Layout"
import { Home } from "../pages/Home";

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
  
]);

export default router;
