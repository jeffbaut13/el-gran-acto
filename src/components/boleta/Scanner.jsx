import React, { useState, useRef, useEffect } from 'react';
import QrScanner from 'qr-scanner';
import axios from 'axios';

const Scanner = () => {
  const [qrData, setQrData] = useState(null); // Almacena los datos del QR validado
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef(null);
  let qrScanner = null;

  useEffect(() => {
    if (videoRef.current) {
      qrScanner = new QrScanner(
        videoRef.current,
        (result) => {
          handleScan(result.data);
        },
        {
          highlightScanRegion: true,
          highlightCodeOutline: true,
        }
      );

      qrScanner.start();
    }

    return () => {
      if (qrScanner) {
        qrScanner.stop();
        qrScanner.destroy();
      }
    };
  }, []);

  const handleScan = async (uniqueCode) => {
    const cleanedCode = uniqueCode.trim();  // Eliminar espacios si existen
    console.log('Código QR escaneado:', cleanedCode); 
    setIsLoading(true);
    setError('');
    setQrData(null);
  
    try {
      const response = await axios.get(`https://backboletas.onrender.com/validar-qr`, {
        params: { uniqueCode: cleanedCode },
      });
      console.log('Respuesta del servidor:', response.data); // Verifica la respuesta
      setQrData(response.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Error al validar el QR');
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleValidate = async () => {
    if (!qrData) return;

    try {
      const response = await axios.post(`https://backboletas.onrender.com/actualizar-qr`, {
        id: qrData.id,
        type: qrData.type,
      });
      alert(response.data.message);
      setQrData(null); // Resetear datos después de la validación
    } catch (err) {
      setError(err.response?.data?.error || 'Error al actualizar el estado');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <video ref={videoRef} className="w-full max-w-md border rounded-md shadow-md" />
      {isLoading && <p className="text-blue-500">Escaneando QR...</p>}
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {qrData && (
        <div className="flex flex-col items-center mt-4">
          <p className="text-green-500">
            {qrData.message} ({qrData.type === 'principal' ? 'Boleta Principal' : 'Acompañante'}) -{' '}
            {qrData.usado ? 'Ya utilizada' : 'Disponible'}
          </p>
          {!qrData.usado && (
            <button
              onClick={handleValidate}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Validar Boleta
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Scanner;
