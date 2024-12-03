import React, { useState } from 'react';
import axios from 'axios';
import QrScanner from 'qr-scanner'; // Asegúrate de instalar un paquete para escanear el QR

const Scanner = () => {
  const [scannedCode, setScannedCode] = useState('');
  const [valid, setValid] = useState(false);
  const [ticketInfo, setTicketInfo] = useState(null);

  // Función para manejar el escaneo del QR
  const handleScan = async (result) => {
    // El código QR escaneado (puede contener el prefijo QR-)
    const scannedCode = result.data;
    setScannedCode(scannedCode);
    console.log('Código escaneado:', scannedCode);

    // Llamada al backend para validar el QR
    try {
      const response = await axios.get('https://backboletas.onrender.com/validar-qr', {
        params: { uniqueCode: scannedCode }, // Enviar código completo
      });

      // Si el código es válido, mostrar el botón para validarlo
      if (response.data.message === 'QR válido') {
        setValid(true);
        setTicketInfo(response.data);
      } else {
        setValid(false);
        setTicketInfo(null);
      }
    } catch (error) {
      console.error('Error al validar el QR:', error);
      setValid(false);
      setTicketInfo(null);
    }
  };

  // Función para manejar la validación del código
  const handleValidateTicket = async () => {
    const { id, usado } = ticketInfo;

    // Verificar si ya está usado
    if (usado) {
      alert('Este código QR ya fue validado.');
      return;
    }

    // Actualizar el estado de usadoPrincipal a true en Firestore
    try {
      await axios.patch(`http://localhost:5000/validar-qr/${id}`, {
        usadoPrincipal: true,
      });
      alert('Boleta validada exitosamente!');
      setValid(false); // Ocultar el botón
    } catch (error) {
      console.error('Error al validar la boleta:', error);
      alert('Hubo un error al validar la boleta.');
    }
  };

  return (
    <div>
      <h1>Escanea tu QR</h1>

      {/* Aquí deberías tener el componente para escanear el QR */}
      <QrScanner onScan={handleScan} />

      {/* Mostrar el código escaneado */}
      {scannedCode && <p>Código Escaneado: {scannedCode}</p>}

      {/* Mostrar el mensaje si el código es válido */}
      {valid && ticketInfo && (
        <div>
          <p>{ticketInfo.nombre}</p>
          <button onClick={handleValidateTicket}>Validar Boleta</button>
        </div>
      )}

      {/* Si el QR no es válido */}
      {!valid && scannedCode && <p style={{ color: 'red' }}>Código QR no encontrado</p>}
    </div>
  );
};

export default Scanner;
