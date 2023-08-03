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

	constructor(nameString, biomesStrings, rarityString){
		this.nameString = nameString;
		this.biomesStrings = biomesStrings;
		this.rarityString = rarityString;
	}

}


const plantas = [
	new ObjectPlant("Allathorne",["Artic"],"Common"),
	new ObjectPlant("Arctic Creeper",["Artic"],"Common"),
	new ObjectPlant("Ardulan",["Artic"],"Uncommon"),
	new ObjectPlant("Avataer",["Artic"],"Very Rare"),
	new ObjectPlant("Basilisk Breath",["Artic"],"Very Rare"),
	new ObjectPlant("Bee Balm",["Artic"],"Very Common"),
	new ObjectPlant("Bija Tree",["Artic"],"Rare")
];


function PlantRandomizer() {
      // Obtener el bioma y dado ingresado por el jugador
      var biomeInput = document.getElementById('idBiome').value;
					var diceInput = parseInt(document.getElementById('idDice').value);

					const plantBiome = plantas.filter((planta) => planta.biomesStrings.includes(biomeInput));

					let plantBiomeRarity = [];
					if (diceInput >= 1 && diceInput <= 55){
						plantBiomeRarity = plantBiome.filter((planta) => planta.rarityString == "Common")
					}

					var plantafinal = Math.floor(Math.random() * plantBiomeRarity.length);
	
      // Mostrar el resultado en el párrafo con id "plantaObtenida"
      document.getElementById('plantaObtenida').textContent = plantBiomeRarity[plantafinal].nameString;
}
