import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

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

  const handleDownloadPDF = async () => {
    const ticketElement = document.getElementById("ticket"); // Elemento a capturar
    if (!ticketElement) return;

    try {
      // Captura de la imagen con html2canvas
      const canvas = await html2canvas(ticketElement, {
        scale: 2, // Mejor calidad
        scrollX: 0, // No se debe desplazar horizontalmente
        scrollY: 0, // No se debe desplazar verticalmente
        x: 0, // Ajustar la posición horizontal de la captura
        y: 0, // Ajustar la posición vertical de la captura
        width: ticketElement.offsetWidth, // Ancho del contenedor
        height: ticketElement.offsetHeight, // Alto del contenedor
        useCORS: true, // Permite cargar imágenes de orígenes cruzados
        logging: true, // Activar los logs para depuración (opcional)
      });

      const imgData = canvas.toDataURL("image/png");

      // Crear un PDF con el tamaño adecuado
      const pdf = new jsPDF("portrait", "px", [canvas.width, canvas.height]);

      // Añadir la imagen al PDF
      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save("boleta.pdf"); // Nombre del archivo
    } catch (err) {
      console.error("Error al generar el PDF:", err);
    }
  };

  if (loading) {
    return <div>Cargando boleta...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div id="ticket" className="w-full h-full relative">
      <img
        className="w-full h-full"
        src="/imagenes/BOLETA-SIN-QR.png"
        alt="Boleta base"
      />
      <button
        onClick={handleDownloadPDF}
        className="absolute xs:w-full lg:hidden md:w-[23.7rem] xs:bottom-[5.5rem] h-14 md:bottom-[1rem] border-none normal-case left-1/2 transform -translate-x-1/2 rounded-xl"
      >
        {/* Este botón no tiene texto, pero puedes agregarlo si es necesario */}
      </button>
      <div className="bg-white absolute xs:bottom-[11rem] md:bottom-[4.8rem] left-1/2 transform -translate-x-1/2 rounded-xl">
        {qrCode ? (
          <img
            className="xs:w-52 md:w-40 rounded-xl"
            src={qrCode}
            alt="QR Code"
          />
        ) : (
          <p>QR no disponible</p>
        )}
      </div>
    </div>
  );
};

export default Ticket;
