// -------------------------------------------------------------------------
// Funcion para obtener los datos del JSON
// -------------------------------------------------------------------------
const obtenerDatos = async (url) => {
  try {
    let respuesta = await fetch(url);

    if (!respuesta.ok) {
      throw new Error(
        `Error al obtener los datos. Estado: ${respuesta.status}`
      );
    }

    let datosCompletos = await respuesta.json();
    console.log("Datos Extraidos:", datosCompletos);
  } catch (error) {
    console.error("Algo ha salido mal: ", error);
  }
};

// -------------------------------------------------------------------------
// Función que sube los datos al JSON en el servidor
// -------------------------------------------------------------------------
const subirDatos = async (url, nombre, edad, ciudad) => {
  try {
    let respuesta = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        nombre: nombre,
        edad: edad,
        ciudad: ciudad,
      }),
    });

    if (!respuesta.ok) {
      throw new Error(`Error en la solicitud: ${respuesta.statusText}`);
    }

    // Verificar la respuesta del servidor
    console.log("Respuesta del servidor después de POST:", await respuesta.text());
    

    // Opcional: Realizar una solicitud GET para obtener los datos actualizados
    obtenerDatos(url);

    
  } catch (error) {
    console.error("Se ha producido el error: ", error);
  }
};

// -------------------------------------------------------------------------
// PROGRAMA PRINCIPAL
// -------------------------------------------------------------------------
// subirDatos(
  //   "https://pruebas-api.netlify.app/datos.json",
  //   "Kelly Mporta",
//   35,
//   "Miami"
// );

obtenerDatos("https://pruebas-api.netlify.app/datos.json");
