import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Ticket = () => {
  const { id } = useParams(); // Obtenemos el ID dinámico de la URL
  const [qrCode, setQrCode] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTicketData = async () => {
      try {
        const response = await axios.get(
          `https://backboletas.onrender.com/boletas/${id}` // Endpoint de tu backend
        );
        const { qrCode } = response.data;

        if (qrCode) {
          setQrCode(qrCode); // Establecemos el QR en el estado
        } else {
          setError("Boleta no encontrada");
        }
      } catch (err) {
        setError("Error al cargar la boleta");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchTicketData();
  }, [id]);

  if (loading) {
    return <div>Cargando boleta...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="w-full h-full relative">
      <img className="w-full h-full" src="/imagenes/BOLETA-SIN-QR.png" alt="Boleta base" />
      <button className="absolute xs:w-full md:w-[23.7rem] xs:bottom-[29.5rem] md:bottom-[19.5rem] text-white border-none px-8 text-sm font-StageGroteskRegular normal-case left-1/2 transform -translate-x-1/2 rounded-xl">
        Descarga tu boleta como PDF o toma una captura de pantalla para presentarla el día del evento
      </button>
      <div className="bg-white absolute xs:bottom-[10rem] md:bottom-[6rem] left-1/2 transform -translate-x-1/2 rounded-xl">
        {qrCode ? (
          <img className="xs:w-52 md:w-40 rounded-xl" src={qrCode} alt="QR Code" />
        ) : (
          <p>QR no disponible</p>
        )}
      </div>
    </div>
  );
};

export default Ticket;
