/* Toggle between adding and removing the "responsive" class to header when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myHeader");
    if (x.className === "header") {
      x.className += " responsive";
    } else {
      x.className = "header";
    }
  }




function PlantRandomizer() {
      // Obtener el valor ingresado por el usuario
      var palabraIngresada = document.getElementById('idBiome').value;

      // Llamar a la función y obtener el resultado
      var result = procesarPalabra(palabraIngresada);

      // Mostrar el resultado en el párrafo con id "resultado"
      document.getElementById('result').textContent = result;
    }

    function procesarPalabra(palabra) {
      // Hacer alguna operación con la palabra ingresada (ejemplo: convertir a mayúsculas)
      var result = palabra.toUpperCase();

      // Devolver el resultado
      return result;
}
