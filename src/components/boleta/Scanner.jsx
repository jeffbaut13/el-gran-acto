import React, { useState, useRef, useEffect } from 'react';
import QrScanner from 'qr-scanner';
import axios from 'axios';

const Scanner = () => {
  const [message, setMessage] = useState('');
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
    setIsLoading(true);
    setMessage('');
    setError('');

    try {
      const response = await axios.get(`https://backboletas.onrender.com/validar-qr`, {
        params: { uniqueCode },
      });
      setMessage(response.data.message);
    } catch (err) {
      setError(err.response?.data?.error || 'Error al validar el QR');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <video ref={videoRef} className="w-full max-w-md border rounded-md shadow-md" />
      {isLoading && <p className="text-blue-500">Validando QR...</p>}
      {message && <p className="text-green-500 mt-4">{message}</p>}
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default Scanner;
