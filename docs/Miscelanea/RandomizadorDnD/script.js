class ObjectPlant{

	constructor(nameString, biomesStrings, rarityString){
		this.nameString = nameString;
		this.biomesStrings = biomesStrings;
		this.rarityString = rarityString;
	}

}


const plantas = [
	new ObjectPlant("Aadarna",["Swamps"],"Rare"),
	new ObjectPlant("Abyssal Blackgrass",["Underdark/Caves"],"Uncommon"),
	new ObjectPlant("Acacia Tree",["Jungles","Plains"],"Common"),
	new ObjectPlant("Acai Berries",["Jungles"],"Very Common"),
	new ObjectPlant("Adamant Algae",["Oceans"],"Rare"),
	new ObjectPlant("Adder's Tongue",["Plains"],"Very Common"),
	new ObjectPlant("Adgana",["Plains"],"Common"),
	new ObjectPlant("Aeglos",["Forests"],"Uncommon"),
	new ObjectPlant("Agrimony",["Plains"],"Very Common"),
	new ObjectPlant("Air Plant",["Rivers"],"Uncommon"),
	new ObjectPlant("Alchemilla",["Cities","Plains"],"Common"),
	new ObjectPlant("Aldaka",["Forests"],"Uncommon"),
	new ObjectPlant("Alether",["Forests","Jungles"],"Common"),
	new ObjectPlant("Alfengrape",["Plains"],"Rare"),
	new ObjectPlant("Alfirin",["Deserts"],"Very Rare"),
	new ObjectPlant("Alil",["Deserts"],"Very Rare"),
	new ObjectPlant("Alkanet",["Plains"],"Common"),
	new ObjectPlant("Allathorne",["Arctic"],"Common"),
	new ObjectPlant("Alligator Teeth",["Mountains"],"Common"),
	new ObjectPlant("All-Heale",["Forests"],"Very Common"),
	new ObjectPlant("Aloe",["Cities","Coastal","Deserts"],"Very Common"),
	new ObjectPlant("Alor",["Forests"],"Very Common"),
	new ObjectPlant("Amalion",["Plains"],"Rare"),
	new ObjectPlant("Amanita",["Underdark/Caves"],"Uncommon"),
	new ObjectPlant("Amrans",["Plains"],"Uncommon"),
	new ObjectPlant("Angakara Tree",["Forests"],"Very Rare"),
	new ObjectPlant("Angelica",["Mountains"],"Very Common"),
	new ObjectPlant("Angel's Cactus",["Deserts"],"Uncommon"),
	new ObjectPlant("Angel's Stammerwort",["Forests","Plains"],"Very Common"),
	new ObjectPlant("Anise",["Plains"],"Very Common"),
	new ObjectPlant("Anserke",["Coastal"],"Common"),
	new ObjectPlant("Arcasa",["Forests","Jungles"],"Uncommon"),
	new ObjectPlant("Archangelica",["Coastal"],"Common"),
	new ObjectPlant("Arctic Creeper",["Arctic","Mountains"],"Common"),
	new ObjectPlant("Ardulan",["Arctic","Forests","Mountains"],"Uncommon"),
	new ObjectPlant("Arfandas",["Rivers"],"Very Common"),
	new ObjectPlant("Arkas Grass",["Plains"],"Uncommon"),
	new ObjectPlant("Arkasu",["Deserts"],"Common"),
	new ObjectPlant("Arlan",["Plains"],"Common"),
	new ObjectPlant("Arnica",["Mountains"],"Very Common"),
	new ObjectPlant("Arnuminas",["Plains"],"Very Common"),
	new ObjectPlant("Arpusar",["Rivers"],"Very Common"),
	new ObjectPlant("Arrowroot",["Deserts"],"Rare"),
	new ObjectPlant("Asarabacca",["Forests"],"Uncommon"),
	new ObjectPlant("Ash",["Forests"],"Common"),
	new ObjectPlant("Ash Willow",["Jungles"],"Very Rare"),
	new ObjectPlant("Ashline",["Forests"],"Uncommon"),
	new ObjectPlant("Ashvein",["Forests","Jungles"],"Common"),
	new ObjectPlant("Ashwaganda Root",["Jungles"],"Common"),
	new ObjectPlant("Aspen Tree",["Forests"],"Common"),
	new ObjectPlant("Astir",["Forests","Plains"],"Common"),
	new ObjectPlant("Astragalus Root",["Forests","Plains"],"Uncommon"),
	new ObjectPlant("Swordstalks",["Deserts","Jungles"],"Very Rare"),
	new ObjectPlant("Taggit",["Jungles"],"Rare"),
	new ObjectPlant("Tahtoalethi",["Mountains"],"Legendary"),
	new ObjectPlant("Tai-Gi",["Plains"],"Very Rare"),
	new ObjectPlant("Takara Bulb",["Forests","Mountains"],"Very Common"),
	new ObjectPlant("Tamarind",["Jungles"],"Very Common"),
	new ObjectPlant("Tamariske",["Jungles"],"Uncommon"),
	new ObjectPlant("Tangara Kelp",["Oceans"],"Common"),
	new ObjectPlant("Tangled Waybread",["Plains"],"Very Common"),
	new ObjectPlant("Tansy",["Cities","Plains"],"Very Common"),
	new ObjectPlant("Taran'ka",["Deserts"],"Common"),
	new ObjectPlant("Tateesha",["Deserts"],"Rare"),
	new ObjectPlant("Tekkil",["Swamps"],"Very Rare"),
	new ObjectPlant("Tempin",["Forests"],"Uncommon"),
	new ObjectPlant("Tephrosia",["Forests"],"Uncommon"),
	new ObjectPlant("Terbas",["Plains"],"Very Common"),
	new ObjectPlant("Tereeka Root",["Coastal","Rivers"],"Rare"),
	new ObjectPlant("Thalsen Weed",["Arctic"],"Very Common"),
	new ObjectPlant("Thanalayla",["Jungles"],"Uncommon"),
	new ObjectPlant("Thelmallow Flower",["Swamps"],"Very Rare"),
	new ObjectPlant("Thimbleweed",["Forests","Plains"],"Very Common"),
	new ObjectPlant("Thir",["Arctic"],"Very Common"),
	new ObjectPlant("Thistledown",["Arctic","Plains"],"Very Rare"),
	new ObjectPlant("Thornapple",["Mountains"],"Common"),
	new ObjectPlant("Throw-Waxe",["Plains"],"Very Common"),
	new ObjectPlant("Thurl",["Deserts","Mountains"],"Very Common"),
	new ObjectPlant("Thyme",["Cities","Plains"],"Very Common"),
	new ObjectPlant("Tickleweed",["Jungles"],"Rare"),
	new ObjectPlant("Torchstalk",["Forests","Underdark/Caves"],"Uncommon"),
	new ObjectPlant("Torment Toadstool",["Swamps"],"Common"),
	new ObjectPlant("Trathua",["Underdark/Caves"],"Common"),
	new ObjectPlant("Troll Poppy",["Forests","Plains"],"Common"),
	new ObjectPlant("Trueroot",["Forests"],"Legendary"),
	new ObjectPlant("Twilight Birch",["Forests"],"Very Rare"),
	new ObjectPlant("Twilight Green",["Jungles"],"Rare"),
	new ObjectPlant("Tyrant's Mercy",["Jungles"],"Uncommon"),
	new ObjectPlant("Tyrant's Sword",["Plains"],"Common"),
	new ObjectPlant("Umanhunan",["Jungles"],"Common"),
	new ObjectPlant("Umozokai Flower",["Coastal","Deserts","Mountains"],"Very Common"),
	new ObjectPlant("Ur",["Plains"],"Very Common"),
	new ObjectPlant("Valerian",["Plains"],"Very Common"),
	new ObjectPlant("Varenia",["Forests"],"Legendary"),
	new ObjectPlant("Vaundyr Vine",["Jungles","Swamps"],"Very Rare"),
	new ObjectPlant("Verdant Goeleth",["Cities","Plains"],"Very Rare"),
	new ObjectPlant("Vinuk",["Forests","Plains"],"Uncommon"),
	new ObjectPlant("Violet Slime",["Swamps"],"Rare"),
	new ObjectPlant("Viper's Bugloss",["Plains"],"Common"),
	new ObjectPlant("Vipervine",["Jungles","Swamps"],"Common"),
	new ObjectPlant("Visma",["Jungles"],"Common"),
	new ObjectPlant("Vodare",["Cities","Plains"],"Rare"),
	new ObjectPlant("Vortax",["Unknown"],"Unknown"),
	new ObjectPlant("Waredan",["Forests"],"Very Rare"),
	new ObjectPlant("Watercress",["Rivers"],"Very Common"),
	new ObjectPlant("Waterorb",["Coastal"],"Common"),
	new ObjectPlant("Waxtree",["Forests"],"Very Rare"),
	new ObjectPlant("Waxworm",["Forests"],"Very Common"),
	new ObjectPlant("Weeping Tree",["Forests"],"Very Common"),
	new ObjectPlant("Weirwood",["Forests"],"Uncommon"),
	new ObjectPlant("Werasa",["Cities","Plains"],"Common"),
	new ObjectPlant("Whistling Cactus",["Deserts"],"Uncommon"),
	new ObjectPlant("White Byrony",["Forests"],"Common"),
	new ObjectPlant("Whitecandle",["Plains"],"Very Common"),
	new ObjectPlant("Wild Fireclover",["Plains"],"Rare"),
	new ObjectPlant("Wildwood",["Jungles"],"Very Rare"),
	new ObjectPlant("Willow-Herb",["Plains","Swamps"],"Very Common"),
	new ObjectPlant("Winclamit",["Jungles"],"Legendary"),
	new ObjectPlant("Windwhip Tree",["Plains"],"Common"),
	new ObjectPlant("Wispstalks",["Forests","Jungles","Underdark/Caves"],"Very Rare"),
	new ObjectPlant("Witchweed",["Jungles","Plains"],"Common"),
	new ObjectPlant("Witchweave Palm",["Jungles"],"Uncommon"),
	new ObjectPlant("Wittlewort",["Forests"],"Very Common"),
	new ObjectPlant("Wizard Hats",["Underdark/Caves"],"Very Common"),
	new ObjectPlant("Wolfsbane",["Plains"],"Rare"),
	new ObjectPlant("Wolfweed",["Mountains"],"Very Common"),
	new ObjectPlant("Woodrose",["Forests","Jungles","Plains"],"Rare"),
	new ObjectPlant("Wood Sorrel",["Forests","Plains"],"Common"),
	new ObjectPlant("Wormwood",["Forests","Jungles"],"Rare"),
	new ObjectPlant("Xitluchi",["Forests","Jungles"],"Uncommon"),
	new ObjectPlant("Yagdav Bush",["Forests","Plains"],"Very Common"),
	new ObjectPlant("Yaran",["Forests","Plains"],"Rare"),
	new ObjectPlant("Yarpick",["Forests","Jungles"],"Common"),
	new ObjectPlant("Yarrow",["Plains"],"Very Common"),
	new ObjectPlant("Yavethalion",["Mountains","Plains"],"Common"),
	new ObjectPlant("Yazur",["Jungles"],"Legendary"),
	new ObjectPlant("Yew Tree",["Forests"],"Uncommon"),
	new ObjectPlant("Ylam Tree",["Deserts"],"Very Rare"),
	new ObjectPlant("Young Lad's Love",["Forests","Plains"],"Very Common"),
	new ObjectPlant("Yuzine",["Rivers","Swamps"],"Very Rare"),
	new ObjectPlant("Zalanthar",["Forests"],"Rare"),
	new ObjectPlant("Zulsendra",["Arctic","Mountains"],"Very Rare"),
	new ObjectPlant("Zur",["Underdark/Caves"],"Rare"),
	new ObjectPlant("Zurkhwood",["Underdark/Caves"],"Common")
];


function PlantRandomizer() {
	// Obtain biome and dice value by input from player
 var biomeInput = document.getElementById('idBiome').value;
	var diceInput = parseInt(document.getElementById('idDice').value);

	const plantBiome = plantas.filter((planta) => planta.biomesStrings.includes(biomeInput));

	const rarity = ["Very Common", "Common", "Uncommon", "Rare", "Very Rare", "Legendary"];
	var rarityValue = 0;

	let plantBiomeRarity = [];
	if (diceInput >= 1 && diceInput <= 55){
		rarityValue = 0;
	}
	else if (diceInput >= 56 && diceInput <= 81){
		rarityValue = 1;
	}
	else if (diceInput >= 82 && diceInput <= 93){
		rarityValue = 2;
	}
	else if (diceInput >= 94 && diceInput <= 98){
		rarityValue = 3;
	}
	else if (diceInput == 99){
		rarityValue = 4;
	}
	else if (diceInput == 100){
		rarityValue = 5;
	}

	// Fill the list with all the plants that matches the rarity. In case there isn't any plant, fill with the previous rarity.
	var checkRarity = 0;
	do{	
		checkRarity = checkRarity + 1;
		if (rarityValue >= 0 && rarityValue <= 4){
			plantBiomeRarity = plantBiome.filter((planta) => planta.rarityString == rarity[rarityValue]);
		}
		else if (rarityValue == 5){
			plantBiomeRarity = plantBiome.filter((planta) => planta.rarityString == rarity[rarityValue] || planta.rarityString == rarity[rarityValue-1]);
		}
	} while (plantBiomeRarity.length == 0);
	
	var plantafinal = Math.floor(Math.random() * plantBiomeRarity.length);
	
	// Display the result with the paragraph with id "plantaObtenida"
	//if (biomeInput == "Oceans" && plantBiomeRarity.length == 0){
	//	document.getElementById('plantaObtenida').textContent = "No " + plantBiomeRarity[plantafinal].rarityString + " plant found"
	//}
	//else{
	//	document.getElementById('plantaObtenida').textContent = plantBiomeRarity[plantafinal].rarityString + " - " + plantBiomeRarity[plantafinal].nameString;
	//}

	if (checkRarity =! 0){
		document.getElementById('plantaObtenida').textContent = "No " + plantBiomeRarity[plantafinal].rarityString + " plant found with this rarity. But you found this other plant: " + plantBiomeRarity[plantafinal].rarityString + " - " + plantBiomeRarity[plantafinal].nameString;
	}
	else{
		document.getElementById('plantaObtenida').textContent = "You found this plant: " + plantBiomeRarity[plantafinal].rarityString + " - " + plantBiomeRarity[plantafinal].nameString;
	}
 

}
