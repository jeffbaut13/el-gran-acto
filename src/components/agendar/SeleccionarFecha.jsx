import React, { useState, useEffect } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import Gracias from "./Gracias"; // Importa el componente Gracias

const SeleccionarFecha = ({ documentoId, tipoInteraccion }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHour, setSelectedHour] = useState(""); // Hora seleccionada
  const [fechasDisponibles, setFechasDisponibles] = useState([]); // Fechas habilitadas
  const [horasDisponibles, setHorasDisponibles] = useState([]); // Horas habilitadas para la fecha seleccionada
  const [mapaHoras, setMapaHoras] = useState({}); // Relación entre fechas y horas
  const [formData, setFormData] = useState({
    nombre: "",
    celular: "",
    correo: "",
    acompanantes: "0",
  });
  const [registroExitoso, setRegistroExitoso] = useState(false); // Controla la redirección
  const [datosGracias, setDatosGracias] = useState({}); // Datos para el componente Gracias

  registerLocale("es", es);

  useEffect(() => {
    if (!documentoId || !tipoInteraccion) {
      console.error("Error: documentoId o tipoInteraccion no proporcionados.");
      return;
    }

    const obtenerFechasDesdeFirestore = async () => {
      try {
        const response = await axios.get(
          `https://backboletas.onrender.com/obtener-abuelito/${documentoId}`
        );

        const data = response.data;

        // Filtrar las opciones con estado false y la interacción correspondiente
        const opciones = Object.keys(data)
          .filter((key) => key.startsWith("opcion"))
          .map((key) => data[key])
          .filter(
            (opcion) =>
              opcion.estado === false &&
              opcion.interaccion === tipoInteraccion
          );

        // Crear el array de fechas únicas
        const fechas = [...new Set(opciones.map((opcion) => opcion.fecha))];
        setFechasDisponibles(fechas);

        // Crear un mapa entre fechas y horas
        const fechasHorasMap = opciones.reduce((acc, opcion) => {
          acc[opcion.fecha] = acc[opcion.fecha]
            ? [...acc[opcion.fecha], opcion.hora]
            : [opcion.hora];
          return acc;
        }, {});
        setMapaHoras(fechasHorasMap);
      } catch (error) {
        console.error("Error al obtener datos de Firestore:", error);
      }
    };

    obtenerFechasDesdeFirestore();
  }, [documentoId, tipoInteraccion]);

  // Manejar selección de fecha
  const manejarSeleccionFecha = (date) => {
    setSelectedDate(date);

    // Actualizar las horas disponibles para la fecha seleccionada
    const fechaSeleccionada = date
      ? date.toLocaleDateString("es-ES", { day: "2-digit", month: "2-digit", year: "numeric" })
      : null;
    setHorasDisponibles(mapaHoras[fechaSeleccionada] || []);
    setSelectedHour(""); // Limpiar hora seleccionada si se cambia la fecha
  };

  // Manejar cambios en el formulario
  const manejarCambioFormulario = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Guardar datos en el backend
  const registrarDatos = async () => {
    if (!selectedDate || !selectedHour || !formData.nombre || !formData.celular || !formData.correo) {
      alert("Por favor, completa todos los campos y selecciona una fecha y hora.");
      return;
    }

    const fechaSeleccionada = selectedDate.toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    const donadorData = {
      documentoId,
      tipoInteraccion,
      fecha: fechaSeleccionada,
      hora: selectedHour,
      donador: {
        nombre: formData.nombre,
        celular: formData.celular,
        correo: formData.correo,
        acompanantes: formData.acompanantes,
      },
    };

    try {
      const response = await axios.post(
        "https://backboletas.onrender.com/registrar-donacion",
        donadorData
      );
      if (response.status === 200) {
        setDatosGracias({
          nombreUsuario: formData.nombre,
          tipoInteraccion,
          fecha: fechaSeleccionada,
          hora: selectedHour,
          abuelito: documentoId, // Usa el nombre real si está disponible
        });
        setRegistroExitoso(true); // Mostrar Gracias.jsx
      }
    } catch (error) {
      console.error("Error al registrar los datos:", error);
      alert("Ocurrió un error. Por favor, inténtalo nuevamente.");
    }
  };

  if (registroExitoso) {
    return (
      <Gracias
        nombreUsuario={datosGracias.nombreUsuario}
        tipoInteraccion={datosGracias.tipoInteraccion}
        fecha={datosGracias.fecha}
        hora={datosGracias.hora}
        abuelito={datosGracias.abuelito}
       
      />
    );
  }

  return (
    <div className="w-full h-screen flex md:py-12 xs:py-2 px-20">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <p className=" xs:w-[25rem] md:w-auto text-center ">Selecciona el día, la hora y registra tus datos para donar tu tiempo.</p>
        <div className="xs:flex xs:flex-col md:flex md:flex-row gap-5">
          {/* Calendario */}
          <div className="relative border border-primary rounded-xl mt-4 calendario flex flex-col items-center justify-center backdrop-blur-2xl">
            <DatePicker
              selected={selectedDate}
              onChange={manejarSeleccionFecha}
              locale="es"
              inline
              renderDayContents={(day, date) => {
                const formattedDate = date.toLocaleDateString("es-ES", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                });
                const isAvailable = fechasDisponibles.includes(formattedDate);
                return (
                  <div
                    className={`flex items-center justify-center ${
                      isAvailable ? "text-primary" : "text-gray-500 opacity-50"
                    }`}
                  >
                    {day}
                  </div>
                );
              }}
              filterDate={(date) => {
                const formattedDate = date.toLocaleDateString("es-ES", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                });
                return fechasDisponibles.includes(formattedDate);
              }}
            />
             {/* Mostrar las horas disponibles */}
          <div className="flex flex-col items-center justify-center">
            {selectedDate && (
              <>
                <select
                  className="border border-primary rounded-lg p-2 text-center"
                  value={selectedHour}
                  onChange={(e) => setSelectedHour(e.target.value)}
                >
                  <option value="">Selecciona una hora</option>
                  {horasDisponibles.map((hora, index) => (
                    <option key={index} value={hora}>
                      {hora}
                    </option>
                  ))}
                </select>
              </>
            )}
          </div>
          </div>

          {/* Formulario */}
          <div className="border border-primary rounded-xl mt-4 w-[21rem] md:h-[26rem] xs:h-[20rem]">
            <form className="px-5 w-full flex flex-col justify-center h-full">
              <fieldset className="flex flex-col items-center md:py-5 xs:py-2">
                <label>Nombre:</label>
                <input
                  name="nombre"
                  value={formData.nombre}
                  onChange={manejarCambioFormulario}
                  className="bg-transparent border border-primary rounded-lg w-full text-center placeholder:text-primary placeholder:opacity-35"
                  placeholder="Ingresa tu nombre"
                />
              </fieldset>
              <fieldset className="flex flex-col items-center md:py-5 xs:py-2">
                <label>Celular:</label>
                <input
                  name="celular"
                  value={formData.celular}
                  onChange={manejarCambioFormulario}
                  className="bg-transparent border border-primary rounded-lg w-full text-center placeholder:text-primary placeholder:opacity-35"
                  placeholder="Ingresa tu número"
                />
              </fieldset>
              <fieldset className="flex flex-col items-center md:py-5 xs:py-2">
                <label>Correo:</label>
                <input
                  name="correo"
                  value={formData.correo}
                  onChange={manejarCambioFormulario}
                  className="bg-transparent border border-primary rounded-lg w-full text-center placeholder:text-primary placeholder:opacity-35"
                  placeholder="correo@correo.com"
                />
              </fieldset>
              <fieldset className="flex flex-col items-center md:py-5 xs:py-2">
                <label>Acompañantes:</label>
                <select
                  name="acompanantes"
                  value={formData.acompanantes}
                  onChange={manejarCambioFormulario}
                  className="bg-transparent border border-primary rounded-lg w-full text-center placeholder:text-primary placeholder:opacity-35"
                >
                  <option className=" w-full text-center" value="0">0</option>
                  <option className=" w-full text-center" value="1">1</option>
                  <option className=" w-full text-center" value="2">2</option>
                  <option className=" w-full text-center" value="3">3</option>
                </select>
              </fieldset>
            </form>
          </div>
        </div>

        {/* Botón de registro */}
        <button
          onClick={registrarDatos}
          className="button_large HoverButtons mt-5"
        >
          REGISTRARSE
        </button>
      </div>
    </div>
  );
};

export default SeleccionarFecha;