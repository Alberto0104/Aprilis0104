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
	new ObjectPlant("Alchemilla",["Cities"],"Common"),
	new ObjectPlant("Alfirin",["Desert"],"Very Rare"),
	new ObjectPlant("Alil",["Desert"],"Very Rare"),
	new ObjectPlant("Allathorne",["Arctic"],"Common"),
	new ObjectPlant("Aloe",["Cities","Coastal","Desert"],"Very Common"),
	new ObjectPlant("Angel's Cactus",["Desert"],"Uncommon"),
	new ObjectPlant("Anserke",["Coastal"],"Common"),
	new ObjectPlant("Archangelica",["Coastal"],"Common"),
	new ObjectPlant("Arctic Creeper",["Arctic"],"Common"),
	new ObjectPlant("Ardulan",["Arctic"],"Uncommon"),
	new ObjectPlant("Arkasu",["Desert"],"Common"),
	new ObjectPlant("Arrowroot",["Desert"],"Rare"),
	new ObjectPlant("Atramen",["Coastal"],"Common"),
	new ObjectPlant("Avataer",["Arctic"],"Very Rare"),
	new ObjectPlant("Balon's Plant",["Desert"],"Rare"),
	new ObjectPlant("Barrelstalk",["Desert"],"Uncommon"),
	new ObjectPlant("Basil",["Cities"],"Very Common"),
	new ObjectPlant("Basilisk Breath",["Arctic"],"Very Rare"),
	new ObjectPlant("Bastit",["Desert"],"Common"),
	new ObjectPlant("Bee Balm",["Arctic"],"Very Common"),
	new ObjectPlant("Belan",["Desert"],"Very Common"),
	new ObjectPlant("Bija Tree",["Arctic"],"Rare"),
	new ObjectPlant("Birthnot",["Arctic"],"Very Common"),
	new ObjectPlant("Bishop's Weed",["Arctic"],"Uncommon"),
	new ObjectPlant("Bittermourn",["Arctic"],"Legendary"),
	new ObjectPlant("Bloodspine",["Desert"],"Common"),
	new ObjectPlant("Bloodstaunch",["Desert"],"Common"),
	new ObjectPlant("Blueleaf",["Arctic"],"Very Common"),
	new ObjectPlant("Bodhi Tree",["Cities"],"Rare"),
	new ObjectPlant("Brelidar",["Arctic"],"Uncommon"),
	new ObjectPlant("Calamus",["Coastal"],"Common"),
	new ObjectPlant("Calacaza Bush",["Desert"],"Uncommon"),
	new ObjectPlant("Caravara",["Desert"],"Rare"),
	new ObjectPlant("Cat's Tail",["Coastal"],"Very Common"),
	new ObjectPlant("Ceran",["Arctic"],"Very Common"),
	new ObjectPlant("Chromus Slime",["Coastal"],"Very Rare"),
	new ObjectPlant("Cline Cactus",["Desert"],"Uncommon"),
	new ObjectPlant("Coldwood",["Arctic"],"Common"),
	new ObjectPlant("Covadish",["Arctic"],"Very Rare"),
	new ObjectPlant("Crab-Apple",["Cities"],"Very Common"),
	new ObjectPlant("Crisp Chondrus",["Coastal"],"Uncommon"),
	new ObjectPlant("Culkas",["Coastal"],"Very Common"),
	new ObjectPlant("Darkwood",["Arctic"],"Very Rare"),
	new ObjectPlant("Draaf",["Coastal"],"Very Common"),
	new ObjectPlant("Dathlil",["Desert"],"Very Common"),
	new ObjectPlant("Djin Blossom",["Desert"],"Uncommon"),
	new ObjectPlant("Dragon's Breath",["Arctic"],"Common"),
	new ObjectPlant("Dragonspine",["Desert"],"Uncommon"),
	new ObjectPlant("Dragontears",["Desert"],"Very Rare"),
	new ObjectPlant("Dwarf Hops",["Cities"],"Very Common"),
	new ObjectPlant("Ecru",["Coastal"],"Rare"),
	new ObjectPlant("Eldaas",["Arctic"],"Very Common"),
	new ObjectPlant("Ember Root",["Coastal"],"Common"),
	new ObjectPlant("Entriste",["Desert"],"Uncommon"),
	new ObjectPlant("Ephedra",["Desert"],"Rare"),
	new ObjectPlant("Felmather",["Coastal"],"Rare"),
	new ObjectPlant("Fennel Silk",["Arctic"],"Common"),
	new ObjectPlant("Firethorn",["Coastal"],"Rare"),
	new ObjectPlant("Footleaf",["Arctic"],"Uncommon"),
	new ObjectPlant("Foxglove",["Cities"],"Very Common"),
	new ObjectPlant("Gardenflax",["Cities"],"Very Rare"),
	new ObjectPlant("Gariig",["Coastal","Desert"],"Legendary"),
	new ObjectPlant("Gefnul",["Arctic"],"Legendary"),
	new ObjectPlant("Ginyak Weed",["Cities"],"Common"),
	new ObjectPlant("Grim Flowers",["Cities"],"Common"),
	new ObjectPlant("Goldencup",["Arctic"],"Rare"),
	new ObjectPlant("Golden Coin Cactus",["Desert"],"Very Common"),
	new ObjectPlant("Golden Desert Tree",["Desert"],"Rare"),
	new ObjectPlant("Grendar",["Arctic"],"Very Common"),
	new ObjectPlant("Haella",["Cities"],"Uncommon"),
	new ObjectPlant("Halcyon Crocus",["Arctic"],"Legendary"),
	new ObjectPlant("Hara'dan",["Desert"],"Uncommon"),
	new ObjectPlant("Hara'den",["Desert"],"Uncommon"),
	new ObjectPlant("Hare's Ear",["Arctic"],"Very Common"),
	new ObjectPlant("Harfy",["Coastal"],"Very Common"),
	new ObjectPlant("Harlequin's Harp",["Cities","Coastal"],"Very Common"),
	new ObjectPlant("Healwell",["Cities"],"Very Common"),
	new ObjectPlant("Hoggle Beans",["Arctic"],"Very Common"),
	new ObjectPlant("Hydrathistle",["Coastal"],"Uncommon"),
	new ObjectPlant("Ice Lotus",["Arctic"],"Rare"),
	new ObjectPlant("Iceflower",["Arctic"],"Uncommon"),
	new ObjectPlant("Inari",["Desert"],"Very Common"),
	new ObjectPlant("Jojopojo",["Arctic"],"Uncommon"),
	new ObjectPlant("Juniper",["Cities"],"Very Common"),
	new ObjectPlant("Juzam",["Desert"],"Very Rare"),
	new ObjectPlant("Kanishta",["Arctic"],"Uncommon"),
	new ObjectPlant("Karat",["Coastal"],"Very Common"),
	new ObjectPlant("Karcatta Brambles",["Desert"],"Uncommon"),
	new ObjectPlant("Kathkusa",["Arctic"],"Very Rare"),
	new ObjectPlant("Kelventari",["Desert"],"Very Rare"),
	new ObjectPlant("Klagul",["Arctic"],"Legendary"),
	new ObjectPlant("Lakeleaf",["Coastal"],"Uncommon"),
	new ObjectPlant("Linden Tree",["Cities"],"Very Common"),
	new ObjectPlant("Lissuin",["Desert"],"Rare"),
	new ObjectPlant("Lizard Eaters",["Cities"],"Very Common"),
	new ObjectPlant("Locust Needle",["Coastal"],"Very Common"),
	new ObjectPlant("Longinal Leaf",["Cities"],"Common"),
	new ObjectPlant("Lumina Cap",["Cities"],"Rare"),
	new ObjectPlant("Maracan",["Desert"],"Very Rare"),
	new ObjectPlant("Marjoram",["Cities"],"Very Common"),
	new ObjectPlant("Megillos",["Cities"],"Common"),
	new ObjectPlant("Mistletoe",["Arctic"],"Very Common"),
	new ObjectPlant("Mokodo Bush",["Cities"],"Very Rare"),
	new ObjectPlant("Mountain Garlic",["Coastal"],"Common"),
	new ObjectPlant("Navew",["Cities"],"Uncommon"),
	new ObjectPlant("Nordra",["Desert"],"Very Common"),
	new ObjectPlant("Northlinch",["Cities"],"Very Common"),
	new ObjectPlant("Novanor",["Desert"],"Uncommon"),
	new ObjectPlant("Obaddis Leaf",["Arctic"],"Rare"),
	new ObjectPlant("Peony",["Cities"],"Common"),
	new ObjectPlant("Periwinkle",["Cities"],"Very Common"),
	new ObjectPlant("Psyllium",["Cities"],"Very Common"),
	new ObjectPlant("Purple Pipeweed",["Cities"],"Uncommon"),
	new ObjectPlant("Quickweed",["Coastal"],"Common"),
	new ObjectPlant("Quivar",["Arctic"],"Rare"),
	new ObjectPlant("Redroot",["Cities"],"Uncommon"),
	new ObjectPlant("Rouddan",["Arctic"],"Rare"),
	new ObjectPlant("Sabito",["Coastal"],"Uncommon"),
	new ObjectPlant("Salamander Orchids",["Arctic","Cities"],"Rare"),
	new ObjectPlant("Sand Vine",["Coastal"],"Uncommon"),
	new ObjectPlant("Sasami Tree",["Cities"],"Very Rare"),
	new ObjectPlant("Scented Mayweed",["Arctic"],"Common"),
	new ObjectPlant("Scholar's Dream",["Cities"],"Rare"),
	new ObjectPlant("Sessali",["Coastal"],"Uncommon"),
	new ObjectPlant("Sleeping Ivy",["Coastal"],"Common"),
	new ObjectPlant("Snowflake Lichen",["Arctic"],"Uncommon"),
	new ObjectPlant("Snowwood",["Arctic"],"Uncommon"),
	new ObjectPlant("Stonestream",["Arctic"],"Very Rare"),
	new ObjectPlant("Strawberry",["Cities"],"Very Common"),
	new ObjectPlant("Surane",["Coastal"],"Uncommon"),
	new ObjectPlant("Tansy",["Cities"],"Very Common"),
	new ObjectPlant("Tereeka Root",["Coastal"],"Rare"),
	new ObjectPlant("Thalsen Weed",["Arctic"],"Very Common"),
	new ObjectPlant("Thir",["Arctic"],"Very Common"),
	new ObjectPlant("Thistledown",["Arctic"],"Very Rare"),
	new ObjectPlant("Thyme",["Cities"],"Very Common"),
	new ObjectPlant("Umozokai Flower",["Coastal"],"Very Common"),
	new ObjectPlant("Verdant Goeleth",["Cities"],"Very Rare"),
	new ObjectPlant("Vodare",["Cities"],"Rare"),
	new ObjectPlant("Waterorb",["Coastal"],"Common"),
	new ObjectPlant("Werasa",["Cities"],"Common"),
	new ObjectPlant("Zulsendra",["Arctic"],"Very Rare"),
	new ObjectPlant("",[""],"")
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
