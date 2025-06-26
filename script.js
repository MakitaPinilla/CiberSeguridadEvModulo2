// VALIDACIÓN BÁSICA DEL FORMULARIO
document.addEventListener("DOMContentLoaded", () => {
  // OBTIENE EL FORMULARIO CON EL ID "contactForm"
  const form = document.getElementById("contactForm");

  // OBTIENE EL ELEMENTO DONDE SE MOSTRARÁ EL MENSAJE DE ÉXITO (ID "formMsg")
  const msg = document.getElementById("formMsg");

  // AGREGA UN EVENTO AL FORMULARIO CUANDO SE ENVÍA (SUBMIT)
  form.addEventListener("submit", (e) => {
      // PREVIENE EL COMPORTAMIENTO POR DEFECTO DEL FORMULARIO (QUE ENVÍA LOS DATOS Y RECARGA LA PÁGINA)
      e.preventDefault();

      // MUESTRA UN MENSAJE DE CONFIRMACIÓN EN EL ELEMENTO "formMsg"
      msg.innerText = "Mensaje enviado correctamente.";

      // LIMPIA TODOS LOS CAMPOS DEL FORMULARIO
      form.reset();
  });
});

// TEST DE SEGURIDAD
function verificarRespuesta() {
  // OBTIENE EL RADIO BUTTON CON ID "correcta" (QUE REPRESENTA LA RESPUESTA CORRECTA)
  const correcta = document.getElementById("correcta");

  // OBTIENE EL ELEMENTO DONDE SE MOSTRARÁ EL RESULTADO DEL TEST
  const resultado = document.getElementById("resultado");

  // SI EL RADIO "CORRECTA" ESTÁ SELECCIONADO
  if (correcta.checked) {
      // MUESTRA UN MENSAJE DE ÉXITO CON COLOR VERDE
      resultado.innerHTML = '<span class="text-success">¡Correcto!</span>';
  } else {
      // MUESTRA UN MENSAJE DE ERROR CON COLOR ROJO
      resultado.innerHTML = '<span class="text-danger">Respuesta incorrecta.</span>';
  }
}

  