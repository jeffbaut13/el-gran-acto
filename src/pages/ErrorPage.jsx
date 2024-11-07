import React from "react";

import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        Error
        <button onClick={() => navigate("/")} className="btn-home mt-12">
          Volver al inicio
        </button>
      </div>
    </>
  );
};
