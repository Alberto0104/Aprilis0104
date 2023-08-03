/* Toggle between adding and removing the "responsive" class to header when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myHeader");
    if (x.className === "header") {
      x.className += " responsive";
    } else {
      x.className = "header";
    }
  }


class ObjectPlant{

	constructor(biomesStrings, rarityString){
		this.biomesStrings = biomesStrings;
		this.rarityString = rarityString;
	}

	getBiomesStrings(){
		return biomesStrings;
	}

	setBiomesStrings(biomesStrings){
		this.biomesStrings = biomesStrings;
	}

	getRarityString(){
		return rarityString;
	}

	setRarityStrings(rarityString){
		this.rarityString = rarityString;
	}

	

}

function PlantRandomizer() {
      // Obtener el bioma y dado ingresado por el jugador
      var biomeInput = document.getElementById('idBiome').value;
					var diceInput = document.getElementById('idDice').value;

      // Mostrar el resultado en el párrafo con id "plantaObtenida"
      document.getElementById('plantaObtenida').textContent = biomeInput + diceInput;
}
