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
      // Obtener el bioma ingresado por el jugador
      var biomeInput = document.getElementById('idBiome').value;

      // Mostrar el resultado en el párrafo con id "plantaObtenida"
      document.getElementById('result').textContent = biomeInput;
}
