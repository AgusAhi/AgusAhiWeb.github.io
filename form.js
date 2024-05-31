// Validador

function validator() {

  // Que el nombre no este vacio

  if (document.getElementById('name').value == "") {
      alert("Por favor, rellene el campo nombre correctamente");
      return false;
  }

  // Que el telefono elimine lo que no sean digitos

  var phoneNumber = document.getElementById('phone').value
  var cleaned = ('' + phoneNumber).replace(/\D/g, '');
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{3})$/);
  if (match) {
      document.getElementById('phone').value =  match[1] + match[2] + match[3];
  } else {
      alert("Por favor, rellene el campo teléfono correctamente");
      return false;
  }
  
  // Que el email tenga un formato

  if (!/^\w+([.-_+]?\w+)*@[\w-]+(\.[\w-]+)*(\.\w{2,10})+$/.test(document.getElementById('email').value)) {
      alert("Por favor, rellene el campo email correctamente");
      return false;
  }

  // Seleccionar al menos un circulito

  opciones = document.getElementsById("selection");

  var seleccionado = false;
  for (var i = 0; i < opciones.length; i++) {
    if (opciones[i].checked) {
      seleccionado = true;
      break;
    }
  }
  if (!seleccionado) {
    alert("Por favor, de su opinión sobre el betis");
    return false;
  }
  return true;
} 

  // Convertir formato en cadena
  function formatString(str) {
    return str.replace(/\+/g, ' ').trim();
  }



