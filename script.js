// VALIDACIÓN BÁSICA DEL FORMULARIO
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const msg = document.getElementById("formMsg");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      msg.innerText = "Mensaje enviado correctamente.";
      form.reset();
    });
  });
  
  // TEST DE SEGURIDAD
  function verificarRespuesta() {
    const correcta = document.getElementById("correcta");
    const resultado = document.getElementById("resultado");
    if (correcta.checked) {
      resultado.innerHTML = '<span class="text-success">¡Correcto!</span>';
    } else {
      resultado.innerHTML = '<span class="text-danger">Respuesta incorrecta.</span>';
    }
  }
  