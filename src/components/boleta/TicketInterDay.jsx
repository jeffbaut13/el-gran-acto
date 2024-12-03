import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const TicketInterDay = () => {
  const { id } = useParams(); // Obtenemos el ID dinámico de la URL
  const [qrCodePrincipal, setQrCodePrincipal] = useState(null); // Código QR principal
  const [qrCodeAcompanante, setQrCodeAcompanante] = useState(null); // Código QR acompañante
  const [qrCode, setQrCode] = useState(null); // Código QR actual
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTicket, setSelectedTicket] = useState("principal"); // Boleta seleccionada

  useEffect(() => {
    const fetchTicketData = async () => {
      try {
        const response = await axios.get(`https://backboletas.onrender.com/boletas/${id}`);
        const { qrCodePrincipal, qrCodeAcompanante } = response.data;

        if (qrCodePrincipal && qrCodeAcompanante) {
          setQrCodePrincipal(qrCodePrincipal);
          setQrCodeAcompanante(qrCodeAcompanante);
          setQrCode(qrCodePrincipal); // Mostrar la boleta principal por defecto
        } else if (qrCodePrincipal) {
          setQrCodePrincipal(qrCodePrincipal);
          setQrCode(qrCodePrincipal); // Solo la boleta principal
        } else if (qrCodeAcompanante) {
          setQrCodeAcompanante(qrCodeAcompanante);
          setQrCode(qrCodeAcompanante); // Solo la boleta acompañante
        } else {
          setError("Boleta no encontrada o incompleta");
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

  const handleSelectTicket = (type) => {
    setSelectedTicket(type);
    setQrCode(type === "principal" ? qrCodePrincipal : qrCodeAcompanante);
  };

  const handleDownloadPDF = async () => {
    const ticketElement = document.getElementById("ticket");
    if (!ticketElement) return;

    try {
      const canvas = await html2canvas(ticketElement, {
        scale: window.devicePixelRatio > 1 ? 1 : 2,
        useCORS: true,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("portrait", "px", "a4");

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`boleta-${selectedTicket}.pdf`);
    } catch (err) {
      console.error("Error al generar el PDF:", err);
    }
  };

  if (loading) {
    return <div className="text-center">Cargando boleta...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="ticket-container">
      {/* Condición para mostrar los botones solo si ambos QR están disponibles */}
      {(qrCodePrincipal && qrCodeAcompanante) && (
        <div className="flex justify-center gap-4 mb-4">
          <button
            disabled={loading}
            onClick={() => handleSelectTicket("principal")}
            className={`px-4 py-2 rounded-lg ${
              selectedTicket === "principal"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-black"
            }`}
          >
            Boleta 1
          </button>
          <button
            disabled={loading}
            onClick={() => handleSelectTicket("acompanante")}
            className={`px-4 py-2 rounded-lg ${
              selectedTicket === "acompanante"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-black"
            }`}
          >
            Boleta 2
          </button>
        </div>
      )}

      {/* Contenido de la boleta */}
      <div id="ticket" className="xs:w-full lg:m-auto lg:w-96 h-full">
        <div className="w-full flex justify-center h-[60%]">
          <img
            src="/imagenes/invitacion-inter-day-editable1.png"
            alt="Boleta base parte uno"
          />
        </div>
        <div className="w-full flex justify-center relative">
          <img
            src="/imagenes/invitacion-inter-day-editable2.png"
            alt="Boleta base parte dos"
          />
          <div className="bg-white absolute top-[20%] left-1/2 transform -translate-x-1/2 rounded-xl">
            {qrCode ? (
              <img
                className="xs:h-1/2 rounded-xl"
                src={qrCode}
                alt={`QR de la boleta ${selectedTicket}`}
              />
            ) : (
              <p>QR no disponible</p>
            )}
          </div>
        </div>
        {/* Descomentar si deseas mostrar el botón de descarga */}
        {/* 
        <button
          onClick={handleDownloadPDF}
          className="absolute xs:w-full lg:hidden md:w-[23.7rem] xs:bottom-[5.5rem] h-14 md:bottom-[1rem] border-none normal-case left-1/2 transform -translate-x-1/2 rounded-xl bg-blue-500 text-white"
        >
          Descargar PDF
        </button>
        */}
      </div>
    </div>
  );
};

export default TicketInterDay;
