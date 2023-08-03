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
	new ObjectPlant("Aeglos",["Forests"],"Uncommon"),
	new ObjectPlant("Alchemilla",["Cities"],"Common"),
	new ObjectPlant("Aldaka",["Forests"],"Uncommon"),
	new ObjectPlant("Alether",["Forests"],"Common"),
	new ObjectPlant("Alfirin",["Deserts"],"Very Rare"),
	new ObjectPlant("Alil",["Deserts"],"Very Rare"),
	new ObjectPlant("Allathorne",["Arctic"],"Common"),
	new ObjectPlant("All-Heale",["Forests"],"Very Common"),
	new ObjectPlant("Aloe",["Cities","Coastal","Deserts"],"Very Common"),
	new ObjectPlant("Alor",["Forests"],"Very Common"),
	new ObjectPlant("Angakara Tree",["Forests"],"Very Rare"),
	new ObjectPlant("Angel's Cactus",["Deserts"],"Uncommon"),
	new ObjectPlant("Angel's Stammerwort",["Forests"],"Very Common"),
	new ObjectPlant("Anserke",["Coastal"],"Common"),
	new ObjectPlant("Arcasa",["Forests"],"Uncommon"),
	new ObjectPlant("Archangelica",["Coastal"],"Common"),
	new ObjectPlant("Arctic Creeper",["Arctic"],"Common"),
	new ObjectPlant("Ardulan",["Arctic","Forests"],"Uncommon"),
	new ObjectPlant("Arkasu",["Deserts"],"Common"),
	new ObjectPlant("Arrowroot",["Deserts"],"Rare"),
	new ObjectPlant("Asarabacca",["Forests"],"Uncommon"),
	new ObjectPlant("Ash",["Forests"],"Common"),
	new ObjectPlant("Ashline",["Forests"],"Uncommon"),
	new ObjectPlant("Ashvein",["Forests"],"Common"),
	new ObjectPlant("Aspen Tree",["Forests"],"Common"),
	new ObjectPlant("Astir",["Forests"],"Common"),
	new ObjectPlant("Astragalus Root",["Forests"],"Uncommon"),
	new ObjectPlant("Atramen",["Coastal"],"Common"),
	new ObjectPlant("Autumn Skullcap",["Forests"],"Rare"),
	new ObjectPlant("Avataer",["Arctic"],"Very Rare"),
	new ObjectPlant("Azure Leaves",["Forests"],"Rare"),
	new ObjectPlant("Balon's Plant",["Deserts"],"Rare"),
	new ObjectPlant("Barberry",["Forests"],"Very Common"),
	new ObjectPlant("Barisc",["Forests"],"Uncommon"),
	new ObjectPlant("Barrelstalk",["Deserts"],"Uncommon"),
	new ObjectPlant("Basil",["Cities","Forests"],"Very Common"),
	new ObjectPlant("Basilisk Breath",["Arctic"],"Very Rare"),
	new ObjectPlant("Bastit",["Deserts"],"Common"),
	new ObjectPlant("Bee Balm",["Arctic"],"Very Common"),
	new ObjectPlant("Belan",["Deserts"],"Very Common"),
	new ObjectPlant("Bija Tree",["Arctic","Forests"],"Rare"),
	new ObjectPlant("Bilberry",["Forests"],"Very Rare"),
	new ObjectPlant("Birthnot",["Arctic"],"Very Common"),
	new ObjectPlant("Bishop's Weed",["Arctic"],"Uncommon"),
	new ObjectPlant("Bison-Gourd",["Forests"],"Common"),
	new ObjectPlant("Bittermourn",["Arctic"],"Legendary"),
	new ObjectPlant("Blackberry",["Forests"],"Very Common"),
	new ObjectPlant("Black Rose",["Forests"],"Common"),
	new ObjectPlant("Bloodbracken",["Forests"],"Very Rare"),
	new ObjectPlant("Bloodgrass",["Forests"],"Common"),
	new ObjectPlant("Bloodspine",["Deserts"],"Common"),
	new ObjectPlant("Bloodstaunch",["Deserts"],"Common"),
	new ObjectPlant("Blueleaf",["Arctic","Forests"],"Very Common"),
	new ObjectPlant("Bodhi Tree",["Cities"],"Rare"),
	new ObjectPlant("Borneas",["Forests"],"Rare"),
	new ObjectPlant("Brelidar",["Arctic"],"Uncommon"),
	new ObjectPlant("Brethil",["Forests"],"Common"),
	new ObjectPlant("Bronzewood",["Forests"],"Common"),
	new ObjectPlant("Butterspice Weed",["Forests"],"Common"),
	new ObjectPlant("Calamus",["Coastal"],"Common"),
	new ObjectPlant("Calacaza Bush",["Deserts"],"Uncommon"),
	new ObjectPlant("Callofex",["Forests"],"Uncommon"),
	new ObjectPlant("Caravara",["Deserts"],"Rare"),
	new ObjectPlant("Cassil",["Forests"],"Very Common"),
	new ObjectPlant("Cat's Tail",["Coastal"],"Very Common"),
	new ObjectPlant("Ceran",["Arctic"],"Very Common"),
	new ObjectPlant("Chromus Slime",["Coastal"],"Very Rare"),
	new ObjectPlant("Cinquefort",["Forests"],"Uncommon"),
	new ObjectPlant("Cline Cactus",["Deserts"],"Uncommon"),
	new ObjectPlant("Coldwood",["Arctic","Forests"],"Common"),
	new ObjectPlant("Constrictor Vine",["Forests"],"Uncommon"),
	new ObjectPlant("Cotsbalm",["Forests"],"Rare"),
	new ObjectPlant("Covadish",["Arctic"],"Very Rare"),
	new ObjectPlant("Cow-Wheat",["Forests"],"Very Common"),
	new ObjectPlant("Crab-Apple",["Cities","Forests"],"Very Common"),
	new ObjectPlant("Crimson Ladies",["Forests"],"Rare"),
	new ObjectPlant("Crisp Chondrus",["Coastal"],"Uncommon"),
	new ObjectPlant("Cubeb",["Forests"],"Common"),
	new ObjectPlant("Culkas",["Coastal"],"Very Common"),
	new ObjectPlant("Culumalda",["Forests"],"Common"),
	new ObjectPlant("Dainaberry",["Forests"],"Common"),
	new ObjectPlant("Darkberry",["Forests"],"Rare"),
	new ObjectPlant("Darkwood",["Arctic"],"Very Rare"),
	new ObjectPlant("Darmanzar Stalk",["Forests"],"Uncommon"),
	new ObjectPlant("Darnell",["Forests"],"Common"),
	new ObjectPlant("Dathlil",["Deserts"],"Very Common"),	
	new ObjectPlant("Deadroot",["Forests"],"Very Rare"),
	new ObjectPlant("Delrean",["Forests"],"Common"),
	new ObjectPlant("Deva's Tears",["Forests"],"Common"),
	new ObjectPlant("Dittany",["Forests"],"Very Common"),
	new ObjectPlant("Djin Blossom",["Deserts"],"Uncommon"),
	new ObjectPlant("Dog Rose",["Forests"],"Very Common"),
	new ObjectPlant("Draaf",["Coastal"],"Very Common"),
	new ObjectPlant("Dragon's Breath",["Arctic"],"Common"),
	new ObjectPlant("Dragon-Eye Oak",["Forests"],"Uncommon"),
	new ObjectPlant("Dragonspine",["Deserts"],"Uncommon"),
	new ObjectPlant("Dragontears",["Deserts"],"Very Rare"),
	new ObjectPlant("Duskwood",["Forests"],"Common"),
	new ObjectPlant("Dwarf Hops",["Cities","Forests"],"Very Common"),
	new ObjectPlant("Dwarven Oak",["Forests"],"Rare"),
	new ObjectPlant("Ecru",["Coastal"],"Rare"),
	new ObjectPlant("Edelwood",["Forests"],"Very Rare"),
	new ObjectPlant("Eldaas",["Arctic"],"Very Common"),
	new ObjectPlant("Elder Tree",["Forests"],"Very Common"),
	new ObjectPlant("Elm",["Forests"],"Very Common"),
	new ObjectPlant("Elven Willow",["Forests"],"Very Common"),
	new ObjectPlant("Elvish Galingale",["Forests"],"Very Common"),
	new ObjectPlant("Ember Root",["Coastal","Forests"],"Common"),
	new ObjectPlant("Entriste",["Deserts"],"Uncommon"),
	new ObjectPlant("Ephedra",["Deserts"],"Rare"),
	new ObjectPlant("Falsifal",["Forests"],"Common"),
	new ObjectPlant("Febfendu",["Forests"],"Very Rare"),
	new ObjectPlant("Felmather",["Coastal"],"Rare"),
	new ObjectPlant("Felsul",["Forests"],"Rare"),
	new ObjectPlant("Fennel Silk",["Arctic"],"Common"),
	new ObjectPlant("Fey Cherry",["Forests"],"Very Rare"),
	new ObjectPlant("Firethorn",["Coastal"],"Rare"),
	new ObjectPlant("Footleaf",["Arctic"],"Uncommon"),
	new ObjectPlant("Foxglove",["Cities","Forests"],"Very Common"),
	new ObjectPlant("Fumitore",["Forests"],"Uncommon"),
	new ObjectPlant("Fuiyáru",["Forests"],"Rare"),
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
	new ObjectPlant("Oruighen",["Desert"],"Uncommon"),
	new ObjectPlant("Peony",["Cities"],"Common"),
	new ObjectPlant("Periwinkle",["Cities"],"Very Common"),
	new ObjectPlant("Powdered Desert Milk",["Desert"],"Uncommon"),
	new ObjectPlant("Psyllium",["Cities"],"Very Common"),
	new ObjectPlant("Purple Pipeweed",["Cities"],"Uncommon"),
	new ObjectPlant("Quickweed",["Coastal"],"Common"),
	new ObjectPlant("Quivar",["Arctic"],"Rare"),
	new ObjectPlant("Redroot",["Cities"],"Uncommon"),
	new ObjectPlant("Rose Campion",["Desert"],"Very Rare"),
	new ObjectPlant("Rouddan",["Arctic"],"Rare"),
	new ObjectPlant("Sabito",["Coastal"],"Uncommon"),
	new ObjectPlant("Salamander Orchids",["Arctic","Cities"],"Rare"),
	new ObjectPlant("Sand Vine",["Coastal"],"Uncommon"),
	new ObjectPlant("Sandberry Bush",["Desert"],"Very Common"),
	new ObjectPlant("Sasami Tree",["Cities"],"Very Rare"),
	new ObjectPlant("Scented Mayweed",["Arctic"],"Common"),
	new ObjectPlant("Scholar's Dream",["Cities"],"Rare"),
	new ObjectPlant("Sessali",["Coastal"],"Uncommon"),
	new ObjectPlant("Sinquoi",["Desert"],"Very Rare"),
	new ObjectPlant("Sleeping Ivy",["Coastal"],"Common"),
	new ObjectPlant("Snowflake Lichen",["Arctic"],"Uncommon"),
	new ObjectPlant("Snowwood",["Arctic"],"Uncommon"),
	new ObjectPlant("Stonestream",["Arctic"],"Very Rare"),
	new ObjectPlant("Strawberry",["Cities"],"Very Common"),
	new ObjectPlant("Surane",["Coastal"],"Uncommon"),
	new ObjectPlant("Swordstalks",["Desert"],"Very Rare"),
	new ObjectPlant("Tansy",["Cities"],"Very Common"),
	new ObjectPlant("Taran'ka",["Desert"],"Common"),
	new ObjectPlant("Tateesha",["Desert"],"Rare"),
	new ObjectPlant("Tereeka Root",["Coastal"],"Rare"),
	new ObjectPlant("Thalsen Weed",["Arctic"],"Very Common"),
	new ObjectPlant("Thir",["Arctic"],"Very Common"),
	new ObjectPlant("Thistledown",["Arctic"],"Very Rare"),
	new ObjectPlant("Thurl",["Desert"],"Very Common"),
	new ObjectPlant("Thyme",["Cities"],"Very Common"),
	new ObjectPlant("Umozokai Flower",["Coastal","Desert"],"Very Common"),
	new ObjectPlant("Verdant Goeleth",["Cities"],"Very Rare"),
	new ObjectPlant("Vodare",["Cities"],"Rare"),
	new ObjectPlant("Waterorb",["Coastal"],"Common"),
	new ObjectPlant("Werasa",["Cities"],"Common"),
	new ObjectPlant("Whistling Cactus",["Desert"],"Uncommon"),
	new ObjectPlant("Ylam Tree",["Desert"],"Very Rare"),
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
