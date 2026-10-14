function validarFormulario(event) {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  if (nombre === '' || correo === '' || mensaje === '') {
    alert(' Por favor completa todos los campos obligatorios.');
    return;
  }

  if (!correo.includes('@') || !correo.includes('.')) {
    alert(' Por favor ingresa un correo electrónico válido.');
    return;
  }

  alert(' ¡Datos correctos! Tu mensaje ha sido enviado exitosamente.');

  document.getElementById('contactForm').reset();
}
