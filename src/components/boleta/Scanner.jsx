import React, { useState, useEffect } from "react";
import QrScanner from "react-qr-scanner";
import axios from "axios";

const Scanner = () => {
  const [qrData, setQrData] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [cameraAccess, setCameraAccess] = useState(false); // Para manejar el estado de permisos

  useEffect(() => {
    // Solicitar permisos al cargar el componente
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(() => {
        setCameraAccess(true);
      })
      .catch((err) => {
        console.error("No se pudo acceder a la cámara:", err);
        setError("No se pudo acceder a la cámara. Verifique los permisos.");
        setCameraAccess(false);
      });
  }, []);

  const handleScan = async (data) => {
    if (data) {
      const scannedCode = data.text;
      setQrData(scannedCode);
      setIsLoading(true);

      try {
        const response = await axios.post(
          "https://backboletas.onrender.com/validar-qr",
          { qrCode: scannedCode }
        );

        const { message } = response.data;
        setMessage(message);
        setError("");
      } catch (err) {
        setError(err.response?.data?.error || "Error al validar el QR");
        setMessage("");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleError = (err) => {
    console.error("Error del escáner:", err);
    setError("Error al acceder a la cámara. Verifique los permisos.");
    setMessage("");
  };

  const previewStyle = {
    width: "100%",
    height: "100%",
  };

  const videoConstraints = {
    facingMode: "environment",
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <h1 className="text-xl font-bold text-white mb-4">Escáner de Código QR</h1>
      {cameraAccess ? (
        <div className="w-64 h-64 border-2 border-gray-500 rounded-md overflow-hidden">
          <QrScanner
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={previewStyle}
            constraints={videoConstraints}
          />
        </div>
      ) : (
        <p className="text-red-500">
          No se puede acceder a la cámara. Verifique los permisos.
        </p>
      )}
      {isLoading && <p className="text-blue-500 mt-4">Validando QR...</p>}
      {qrData && (
        <p className="text-gray-300 mt-4">Código Escaneado: {qrData}</p>
      )}
      {message && <p className="text-green-500 mt-4">{message}</p>}
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default Scanner;
