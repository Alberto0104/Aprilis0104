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
	new ObjectPlant("Bija Tree",["Artic"],"Rare"),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],""),
	new ObjectPlant("",[],"")
];


function PlantRandomizer() {
      // Obtener el bioma y dado ingresado por el jugador
      var biomeInput = document.getElementById('idBiome').value;
					var diceInput = parseInt(document.getElementById('idDice').value);

					const plantBiome = plantas.filter((planta) => planta.biomesStrings.includes(biomeInput));

					let plantBiomeRarity = [];
					if (diceInput >= 1 && diceInput <= 55){
						plantBiomeRarity = plantBiome.filter((planta) => planta.rarityString == "Very Common")
					}
					else if (diceInput >= 56 && diceInput <= 81){
						plantBiomeRarity = plantBiome.filter((planta) => planta.rarityString == "Common")
					}
					else if (diceInput >= 82 && diceInput <= 93){
						plantBiomeRarity = plantBiome.filter((planta) => planta.rarityString == "Uncommon")
					}
					else if (diceInput >= 94 && diceInput <= 98){
						plantBiomeRarity = plantBiome.filter((planta) => planta.rarityString == "Rare")
					}
					else if (diceInput == 99){
						plantBiomeRarity = plantBiome.filter((planta) => planta.rarityString == "Very Rare")
					}
					else if (diceInput == 100){
						plantBiomeRarity = plantBiome.filter((planta) => planta.rarityString == "Legendary" && plantBiome.filter((planta) => planta.rarityString == "very Rare")
					}

					var plantafinal = Math.floor(Math.random() * plantBiomeRarity.length);
	
      // Mostrar el resultado en el párrafo con id "plantaObtenida"
      document.getElementById('plantaObtenida').textContent = plantBiomeRarity[plantafinal].nameString;
}
