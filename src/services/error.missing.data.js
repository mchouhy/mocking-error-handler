const missingDataError = (usuario) => {
  return `Datos incompletos o inválidos.
    Necesitamos recibir los siguientes datos: 
    - Nombre: String, pero recibimos ${usuario.nombre}
    - Apellido: String, pero recibimos ${usuario.apellido}
    - Email: String, pero recibimos ${usuario.email}
    `;
};

export default generarInfoError;
