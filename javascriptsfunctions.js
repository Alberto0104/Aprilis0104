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
	new ObjectPlant("Acacia Tree",["Jungles","Plains"],"Common"),
	new ObjectPlant("Acai Berries",["Jungles"],"Very Common"),
	new ObjectPlant("Adamant Algae",["Oceans"],"Rare"),
	new ObjectPlant("Adder's Tongue",["Plains"],"Very Common"),
	new ObjectPlant("Adgana",["Plains"],"Common"),
	new ObjectPlant("Aeglos",["Forests"],"Uncommon"),
	new ObjectPlant("Agrimony",["Plains"],"Very Common"),
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
	new ObjectPlant("Arkas Grass",["Plains"],"Uncommon"),
	new ObjectPlant("Arkasu",["Deserts"],"Common"),
	new ObjectPlant("Arlan",["Plains"],"Common"),
	new ObjectPlant("Arnica",["Mountains"],"Very Common"),
	new ObjectPlant("Arnuminas",["Plains"],"Very Common"),
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
	new ObjectPlant("Athas",["Plains"],"Rare"),
	new ObjectPlant("Athelas",["Jungles"],"Legendary"),
	new ObjectPlant("Atigax",["Plains"],"Uncommon"),
	new ObjectPlant("Atramen",["Coastal"],"Common"),
	new ObjectPlant("Autumn Skullcap",["Forests"],"Rare"),
	new ObjectPlant("Avataer",["Arctic"],"Very Rare"),
	new ObjectPlant("Azure Leaves",["Forests"],"Rare"),
	new ObjectPlant("Balm",["Plains"],"Common"),
	new ObjectPlant("Balon's Plant",["Deserts"],"Rare"),
	new ObjectPlant("Barberry",["Forests","Plains"],"Very Common"),
	new ObjectPlant("Barisc",["Forests","Mountains","Plains"],"Uncommon"),
	new ObjectPlant("Barrelstalk",["Deserts"],"Uncommon"),
	new ObjectPlant("Base Mullein",["Mountains"],"Very Common"),
	new ObjectPlant("Basil",["Cities","Forests","Mountains","Plains"],"Very Common"),
	new ObjectPlant("Basilisk Breath",["Arctic","Mountains"],"Very Rare"),
	new ObjectPlant("Bastit",["Deserts"],"Common"),
	new ObjectPlant("Bee Balm",["Arctic","Plains"],"Very Common"),
	new ObjectPlant("Belan",["Deserts"],"Very Common"),
	new ObjectPlant("Bija Tree",["Arctic","Forests"],"Rare"),
	new ObjectPlant("Bilberry",["Forests"],"Very Rare"),
	new ObjectPlant("Birthnot",["Arctic","Plains"],"Very Common"),
	new ObjectPlant("Bishop's Weed",["Arctic","Mountains"],"Uncommon"),
	new ObjectPlant("Bison-Gourd",["Forests","Plains"],"Common"),
	new ObjectPlant("Bittergar Bush",["Plains"],"Very Common"),
	new ObjectPlant("Bittermourn",["Arctic"],"Legendary"),
	new ObjectPlant("Blackberry",["Forests","Mountains","Plains"],"Very Common"),
	new ObjectPlant("Black Rose",["Forests","Mountains","Plains"],"Common"),
	new ObjectPlant("Bloodbracken",["Forests"],"Very Rare"),
	new ObjectPlant("Bloodgrass",["Forests","Jungles","Plains"],"Common"),
	new ObjectPlant("Bloodkeep",["Jungles","Mountains"],"Common"),
	new ObjectPlant("Bloodroot",["Jungles"],"Rare"),
	new ObjectPlant("Bloodspine",["Deserts","Mountains"],"Common"),
	new ObjectPlant("Bloodstaunch",["Deserts","Mountains"],"Common"),
	new ObjectPlant("Blueleaf",["Arctic","Forests"],"Very Common"),
	new ObjectPlant("Bocraugh",["Jungles","Mountains"],"Legendary"),
	new ObjectPlant("Bodhi Tree",["Cities","Jungles"],"Rare"),
	new ObjectPlant("Borage",["Plains"],"Very Common"),
	new ObjectPlant("Borneas",["Forests","Jungles","Plains"],"Rare"),
	new ObjectPlant("Brandac",["Mountains"],"Uncommon"),
	new ObjectPlant("Brelidar",["Arctic"],"Uncommon"),
	new ObjectPlant("Brethil",["Forests"],"Common"),
	new ObjectPlant("Bronzewood",["Forests","Jungles"],"Common"),
	new ObjectPlant("Burdock",["Plains"],"Very Common"),
	new ObjectPlant("Bursthelas",["Plains"],"Common"),
	new ObjectPlant("Butterspice Weed",["Forests","Jungles"],"Common"),
	new ObjectPlant("Cachuga Pepper",["Plains"],"Uncommon"),
	new ObjectPlant("Caffar",["Jungles"],"Common"),
	new ObjectPlant("Calamus",["Coastal"],"Common"),
	new ObjectPlant("Calacaza Bush",["Deserts","Jungles"],"Uncommon"),
	new ObjectPlant("Calamus",["Jungles"],"Common"),
	new ObjectPlant("Calithil",["Mountains"],"Common"),
	new ObjectPlant("Callin",["Jungles"],"Very Common"),
	new ObjectPlant("Callofex",["Forests","Plains"],"Uncommon"),
	new ObjectPlant("Caravara",["Deserts"],"Rare"),
	new ObjectPlant("Cassil",["Forests","Jungles","Plains"],"Very Common"),
	new ObjectPlant("Cat's Tail",["Coastal"],"Very Common"),
	new ObjectPlant("Ceran",["Arctic","Mountains","Plains"],"Very Common"),
	new ObjectPlant("Chamomile",["Plains"],"Very Common"),
	new ObjectPlant("Chervil",["Jungles"],"Common"),
	new ObjectPlant("Choking Cinder Fungus",["Jungles"],"Uncommon"),
	new ObjectPlant("Chromus Slime",["Coastal"],"Very Rare"),
	new ObjectPlant("Cinquefort",["Forests"],"Uncommon"),
	new ObjectPlant("Cline Cactus",["Deserts"],"Uncommon"),
	new ObjectPlant("Coldwood",["Arctic","Forests"],"Common"),
	new ObjectPlant("Coltsfoot",["Plains"],"Very Common"),
	new ObjectPlant("Comfrey",["Plains"],"Very Common"),
	new ObjectPlant("Common Coneflower",["Plains"],"Very Common"),
	new ObjectPlant("Constrictor Vine",["Forests","Plains"],"Uncommon"),
	new ObjectPlant("Cosmos Glond",["Jungles"],"Very Rare"),
	new ObjectPlant("Cotsbalm",["Forests","Jungles"],"Rare"),
	new ObjectPlant("Covadish",["Arctic"],"Very Rare"),
	new ObjectPlant("Cow Parsnip",["Plains"],"Common"),
	new ObjectPlant("Cow-Wheat",["Forests","Plains"],"Very Common"),
	new ObjectPlant("Crab-Apple",["Cities","Forests"],"Very Common"),
	new ObjectPlant("Crimson Ladies",["Forests","Jungles"],"Rare"),
	new ObjectPlant("Crisp Chondrus",["Coastal"],"Uncommon"),
	new ObjectPlant("Cubeb",["Forests"],"Common"),
	new ObjectPlant("Culkas",["Coastal"],"Very Common"),
	new ObjectPlant("Culumalda",["Forests"],"Common"),
	new ObjectPlant("Dagmather",["Plains"],"Very Common"),
	new ObjectPlant("Dainaberry",["Forests"],"Common"),
	new ObjectPlant("Damiana",["Jungles"],"Common"),
	new ObjectPlant("Darkanda Bush",["Mountains"],"Uncommon"),
	new ObjectPlant("Darkberry",["Forests","Jungles"],"Rare"),
	new ObjectPlant("Darkwood",["Arctic"],"Very Rare"),
	new ObjectPlant("Darmanzar Stalk",["Forests"],"Uncommon"),
	new ObjectPlant("Darnell",["Forests"],"Common"),
	new ObjectPlant("Darsurion",["Plains"],"Very Common"),
	new ObjectPlant("Dathlil",["Deserts","Mountains","Plains"],"Very Common"),	
	new ObjectPlant("Deadly Nightshade",["Jungles"],"Uncommon"),
	new ObjectPlant("Deadroot",["Forests","Jungles"],"Very Rare"),
	new ObjectPlant("Decorous Nun-Cloak",["Plains"],"Common"),
	new ObjectPlant("Degiik",["Jungles"],"Legendary"),
	new ObjectPlant("Delrean",["Forests","Jungles"],"Common"),
	new ObjectPlant("Densewood",["Jungles"],"Uncommon"),
	new ObjectPlant("Devarencia",["Jungles","Mountains"],"Very Rare"),
	new ObjectPlant("Deva's Tears",["Forests","Plains"],"Common"),
	new ObjectPlant("Devil's Crown",["Mountains"],"Rare"),
	new ObjectPlant("Devilweed",["Plains"],"Common"),
	new ObjectPlant("Dittany",["Forests","Plains"],"Very Common"),
	new ObjectPlant("Djin Blossom",["Deserts"],"Uncommon"),
	new ObjectPlant("Dog Rose",["Forests","Jungles"],"Very Common"),
	new ObjectPlant("Draaf",["Coastal"],"Very Common"),
	new ObjectPlant("Dragon's Breath",["Arctic","Mountains"],"Common"),
	new ObjectPlant("Dragon-Eye Oak",["Forests","Jungles"],"Uncommon"),
	new ObjectPlant("Dragonspine",["Deserts","Mountains"],"Uncommon"),
	new ObjectPlant("Dragontears",["Deserts"],"Very Rare"),
	new ObjectPlant("Dramas",["Jungles","Plains"],"Rare"),
	new ObjectPlant("Dratiddel",["Oceans"],"Legendary"),
	new ObjectPlant("Dripping Tree",["Jungles"],"Rare"),
	new ObjectPlant("Duskwood",["Forests"],"Common"),
	new ObjectPlant("Dwarf Hops",["Cities","Forests","Plains"],"Very Common"),
	new ObjectPlant("Dwarf Mallow",["Mountains","Plains"],"Uncommon"),
	new ObjectPlant("Dwarven Oak",["Forests","Mountains"],"Rare"),
	new ObjectPlant("Ebur",["Plains"],"Common"),
	new ObjectPlant("Ecru",["Coastal"],"Rare"),
	new ObjectPlant("Edelwood",["Forests"],"Very Rare"),
	new ObjectPlant("Eglantine",["Plains"],"Very Common"),
	new ObjectPlant("Elandir",["Mountains"],"Very Rare"),
	new ObjectPlant("Elausa",["Plains"],"Common"),
	new ObjectPlant("Eldaas",["Arctic"],"Very Common"),
	new ObjectPlant("Elder Tree",["Forests"],"Very Common"),
	new ObjectPlant("Eldritch Whorlwood",["Jungles"],"Very Rare"),
	new ObjectPlant("Elecampane",["Plains"],"Very Common"),
	new ObjectPlant("Elm",["Forests"],"Very Common"),
	new ObjectPlant("Elven Willow",["Forests"],"Very Common"),
	new ObjectPlant("Elvish Galingale",["Forests","Plains"],"Very Common"),
	new ObjectPlant("Ember Root",["Coastal","Forests","Jungles", "Mountains"],"Common"),
	new ObjectPlant("Entangle Weed",["Oceans"],"Rare"),
	new ObjectPlant("Entriste",["Deserts","Mountains"],"Uncommon"),
	new ObjectPlant("Ephedra",["Deserts","Mountains"],"Rare"),
	new ObjectPlant("Falsifal",["Forests"],"Common"),
	new ObjectPlant("Faranir",["Jungles"],"Rare"),
	new ObjectPlant("Fairy Bells",["Plains"],"Very Common"),
	new ObjectPlant("False Unicorn Root",["Plains"],"Very Rare"),
	new ObjectPlant("Falsifal",["Plains"],"Common"),
	new ObjectPlant("Febfendu",["Forests"],"Very Rare"),
	new ObjectPlant("Felmather",["Coastal"],"Rare"),
	new ObjectPlant("Felsul",["Forests","Jungles"],"Rare"),
	new ObjectPlant("Fennel",["Plains"],"Very Common"),
	new ObjectPlant("Fennel Silk",["Arctic"],"Common"),
	new ObjectPlant("Fetherfew",["Plains"],"Uncommon"),
	new ObjectPlant("Fey Cherry",["Forests"],"Very Rare"),
	new ObjectPlant("Fieldcress",["Plains"],"Very Common"),
	new ObjectPlant("Fiend's Ivy",["Jungles"],"Common"),
	new ObjectPlant("Fire Flower",["Jungles","Mountains"],"Legendary"),
	new ObjectPlant("Firethorn",["Coastal"],"Rare"),
	new ObjectPlant("Firmanon",["Plains"],"Uncommon"),
	new ObjectPlant("Flame Clove",["Plains"],"Very Common"),
	new ObjectPlant("Flame Petal",["Plains"],"Very Common"),
	new ObjectPlant("Fleshshiver",["Jungles"],"Uncommon"),
	new ObjectPlant("Fleshwort",["Plains"],"Common"),
	new ObjectPlant("Flintmoss",["Mountains"],"Rare"),
	new ObjectPlant("Floure-du-luce",["Jungles"],"Very Common"),
	new ObjectPlant("Footleaf",["Arctic","Mountains"],"Uncommon"),
	new ObjectPlant("Foxglove",["Cities","Forests","Plains"],"Very Common"),
	new ObjectPlant("Fumitore",["Forests","Mountains"],"Uncommon"),
	new ObjectPlant("Fuiyáru",["Forests"],"Rare"),
	new ObjectPlant("Fumellar",["Plains"],"Common"),
	new ObjectPlant("Furyax",["Jungles","Mountains"],"Legendary"),
	new ObjectPlant("Galda",["Jungles"],"Very Common"),
	new ObjectPlant("Gallowbrush",["Forests","Jungles"],"Uncommon"),
	new ObjectPlant("Garadar",["Plains"],"Rare"),
	new ObjectPlant("Gardenflax",["Cities","Forests","Jungles","Plains"],"Very Rare"),
	new ObjectPlant("Gariig",["Coastal","Deserts"],"Legendary"),
	new ObjectPlant("Gefnul",["Arctic","Mountains"],"Legendary"),
	new ObjectPlant("Giant Grass",["Plains"],"Very Rare"),
	new ObjectPlant("Ginyak Weed",["Cities","Plains"],"Common"),
	new ObjectPlant("Glaredak",["Jungles"],"Rare"),
	new ObjectPlant("Glowvine",["Jungles"],"Rare"),
	new ObjectPlant("Goat's Rue",["Forests","Plains"],"Very Common"),
	new ObjectPlant("Goblinberry Bush",["Mountains"],"Common"),
	new ObjectPlant("Goblin Rogue",["Forests","Plains"],"Very Common"),
	new ObjectPlant("Goldencup",["Arctic"],"Rare"),
	new ObjectPlant("Goldenweb",["Forests"],"Uncommon"),
	new ObjectPlant("Golden Coin Cactus",["Deserts", "Mountains"],"Very Common"),
	new ObjectPlant("Golden Crown",["Forests"],"Very Common"),
	new ObjectPlant("Golden Desert Tree",["Deserts"],"Rare"),
	new ObjectPlant("Golden Lungwort",["Forests","Jungles"],"Uncommon"),
	new ObjectPlant("Gotu Kola",["Jungles"],"Uncommon"),
	new ObjectPlant("Green-Air Bramble",["Mountains"],"Rare"),
	new ObjectPlant("Grendar",["Arctic"],"Very Common"),
	new ObjectPlant("Grim Flowers",["Cities","Plains"],"Common"),
	new ObjectPlant("Guardseye",["Mountains"],"Legendary"),
	new ObjectPlant("Gulthias Tree",["Forests","Jungles"],"Legendary"),
	new ObjectPlant("Gylvir",["Oceans"],"Rare"),
	new ObjectPlant("Gyumin Beans",["Plains"],"Very Common"),
	new ObjectPlant("Haella",["Cities","Plains"],"Uncommon"),
	new ObjectPlant("Halcyon Crocus",["Arctic"],"Legendary"),
	new ObjectPlant("Halfling Thistle",["Forests","Mountains","Plains"],"Rare"),
	new ObjectPlant("Hands of Laretha",["Forests","Plains"],"Rare"),
	new ObjectPlant("Hangman Tree",["Forests","Jungles"],"Rare"),
	new ObjectPlant("Hara'dan",["Deserts"],"Uncommon"),
	new ObjectPlant("Hara'den",["Deserts"],"Uncommon"),
	new ObjectPlant("Hare's Ear",["Arctic"],"Very Common"),
	new ObjectPlant("Harfy",["Coastal"],"Very Common"),
	new ObjectPlant("Harlequin's Harp",["Cities","Coastal"],"Very Common"),
	new ObjectPlant("Harpy Nest",["Forests","Jungles"],"Common"),
	new ObjectPlant("Harrada Leaf",["Jungles"],"Very Rare"),
	new ObjectPlant("Hart's Crown",["Forests"],"Rare"),
	new ObjectPlant("Hate Gartlet",["Forests","Plains"],"Common"),
	new ObjectPlant("Hawkweed",["Forests","Plains"],"Uncommon"),
	new ObjectPlant("Healing Apple Tree",["Forests","Jungles"],"Common"),
	new ObjectPlant("Healwell",["Cities","Plains"],"Very Common"),
	new ObjectPlant("Heather",["Plains"],"Very Common"),
	new ObjectPlant("Helmthorne",["Mountains"],"Very Rare"),
	new ObjectPlant("Henbane",["Plains"],"Uncommon"),
	new ObjectPlant("Hidden Hibiscus",["Forests","Jungles"],"Very Rare"),
	new ObjectPlant("Hiexel",["Forests"],"Common"),
	new ObjectPlant("Hiljirat Pepper",["Forests","Jungles","Plains"],"Uncommon"),
	new ObjectPlant("Hoggle Beans",["Arctic"],"Very Common"),
	new ObjectPlant("Horehound",["Plains"],"Very Common"),
	new ObjectPlant("Horseweed",["Plains"],"Very Common"),
	new ObjectPlant("Hydrathistle",["Coastal"],"Uncommon"),
	new ObjectPlant("Hyperia",["Forests","Plains"],"Very Rare"),
	new ObjectPlant("Iazutl",["Plains"],"Very Common"),
	new ObjectPlant("Ice Lotus",["Arctic"],"Rare"),
	new ObjectPlant("Iceflower",["Arctic"],"Uncommon"),
	new ObjectPlant("Inari",["Deserts"],"Very Common"),
	new ObjectPlant("Ipt",["Jungles"],"Common"),
	new ObjectPlant("Iraster",["Forests"],"Very Rare"),
	new ObjectPlant("Ironhard",["Forests"],"Rare"),
	new ObjectPlant("Jabberweed",["Jungles"],"Uncommon"),
	new ObjectPlant("Jaffray",["Forests","Jungles","Plains"],"Common"),
	new ObjectPlant("Jalap",["Jungles"],"Very Common"),
	new ObjectPlant("Jelly Moss",["Jungles","Plains"],"Common"),
	new ObjectPlant("Jinab",["Jungles"],"Rare"),
	new ObjectPlant("Jojopojo",["Arctic"],"Uncommon"),
	new ObjectPlant("Juniper",["Cities","Forests","Plains"],"Very Common"),
	new ObjectPlant("Juxi Root",["Plains"],"Very Common"),
	new ObjectPlant("Juzam",["Deserts"],"Very Rare"),
	new ObjectPlant("Kae'la",["Forests","Plains"],"Rare"),
	new ObjectPlant("Kanishta",["Arctic"],"Uncommon"),
	new ObjectPlant("Karat",["Coastal","Jungles"],"Very Common"),
	new ObjectPlant("Karcatta Brambles",["Deserts"],"Uncommon"),
	new ObjectPlant("Kathkusa",["Arctic","Mountains"],"Very Rare"),
	new ObjectPlant("Kaitlin's Weed",["Plains"],"Common"),
	new ObjectPlant("Kelventari",["Deserts"],"Very Rare"),
	new ObjectPlant("Kieros",["Forests"],"Rare"),
	new ObjectPlant("Kilmakur",["Forests","Jungles"],"Rare"),
	new ObjectPlant("King's Pear",["Forests"],"Common"),
	new ObjectPlant("Kingsfruit",["Forests"],"Very Rare"),
	new ObjectPlant("Kinuka Tree",["Jungles"],"Very Common"),
	new ObjectPlant("Kiss of Discord",["Plains"],"Rare"),
	new ObjectPlant("Klagul",["Arctic"],"Legendary"),
	new ObjectPlant("Krakaem Pods",["Jungles"],"Common"),
	new ObjectPlant("Kylathar",["Forests"],"Legendary"),
	new ObjectPlant("Laishaberries",["Forests","Plains"],"Common"),
	new ObjectPlant("Lakeleaf",["Coastal"],"Uncommon"),
	new ObjectPlant("Land Caltrops",["Jungles"],"Very Common"),
	new ObjectPlant("Larnurma",["Forests"],"Very Common"),
	new ObjectPlant("Laspar",["Forests"],"Very Common"),
	new ObjectPlant("Latimer Orchid",["Plains"],"Very Rare"),
	new ObjectPlant("Laumspur",["Mountains"],"Common"),
	new ObjectPlant("Lavender Ragweed",["Plains"],"Very Common"),
	new ObjectPlant("Leopard's Bane",["Forests","Jungles"],"Very Common"),
	new ObjectPlant("Lesser Centaury",["Mountains"],"Common"),
	new ObjectPlant("Lichbriar",["Plains"],"Rare"),
	new ObjectPlant("Linden Tree",["Cities","Forests"],"Very Common"),
	new ObjectPlant("Link-Suriss",["Plains"],"Uncommon"),
	new ObjectPlant("Lish",["Forests"],"Uncommon"),
	new ObjectPlant("Lissuin",["Deserts"],"Rare"),
	new ObjectPlant("Livewood",["Forests"],"Very rare"),
	new ObjectPlant("Lizard Eaters",["Cities","Plains"],"Very Common"),
	new ObjectPlant("Locust Needle",["Coastal","Forests"],"Very Common"),
	new ObjectPlant("Longinal Leaf",["Cities"],"Common"),
	new ObjectPlant("Lordinberry",["Forests"],"Very Rare"),
	new ObjectPlant("Luhix",["Forests"],"Uncommon"),
	new ObjectPlant("Lumina Cap",["Cities"],"Rare"),
	new ObjectPlant("Luurden",["Jungles"],"Uncommon"),
	new ObjectPlant("Maiden's Hair",["Forests"],"Very Rare"),
	new ObjectPlant("Maitake Mushroom",["Forests"],"Very Common"),
	new ObjectPlant("Makebate",["Plains"],"Very Common"),
	new ObjectPlant("Mallow",["Plains"],"Uncommon"),
	new ObjectPlant("Mallus",["Plains"],"Very Rare"),
	new ObjectPlant("Mandrake",["Jungles"],"Rare"),
	new ObjectPlant("Maracan",["Deserts"],"Very Rare"),
	new ObjectPlant("Maraga Flowers",["Jungles","Plains"],"Rare"),
	new ObjectPlant("Marjoram",["Cities"],"Very Common"),
	new ObjectPlant("Mar'kerlan",["Forests"],"Rare"),
	new ObjectPlant("Marigold",["Forests","Plains"],"Very Common"),
	new ObjectPlant("Marisia",["Plains"],"Legendary"),
	new ObjectPlant("Marjoram",["Plains"],"Very Common"),
	new ObjectPlant("Maruera",["Forests"],"Rare"),
	new ObjectPlant("Mashtin",["Jungles"],"Common"),
	new ObjectPlant("Masterwort",["Plains"],"Common"),
	new ObjectPlant("Meadow Giant",["Plains"],"Uncommon"),
	new ObjectPlant("Megillos",["Cities","Plains"],"Common"),
	new ObjectPlant("Melander",["Jungles"],"Rare"),
	new ObjectPlant("Midnight Coneflower",["Mountains"],"Legendary"),
	new ObjectPlant("Milkworte",["Plains"],"Very Common"),
	new ObjectPlant("Mimetry Sprigs",["Mountains"],"Very Rare"),
	new ObjectPlant("Mirenna",["Forests"],"Rare"),
	new ObjectPlant("Mistletoe",["Arctic","Forests"],"Very Common"),
	new ObjectPlant("Mokodo Bush",["Cities","Plains"],"Very Rare"),
	new ObjectPlant("Mordayn",["Jungles"],"Rare"),
	new ObjectPlant("Mordock Bramble",["Mountains"],"Uncommon"),
	new ObjectPlant("Mother's Mercy",["Mountains"],"Common"),
	new ObjectPlant("Mother's Worry",["Mountains"],"Very Common"),
	new ObjectPlant("Mountain Garlic",["Coastal","Mountains"],"Common"),
	new ObjectPlant("Mountain Setwall",["Mountains"],"Common"),
	new ObjectPlant("Mugwort",["Plains"],"Legendary"),
	new ObjectPlant("Mule Pollen",["Plains"],"Rare"),
	new ObjectPlant("Myrthis",["Forests","Plains"],"Common"),
	new ObjectPlant("Napweed",["Plains"],"Very Common"),
	new ObjectPlant("Nararoot",["Plains"],"Very Common"),
	new ObjectPlant("Navew",["Cities","Plains"],"Uncommon"),
	new ObjectPlant("Nettle",["Plains"],"Very Common"),
	new ObjectPlant("Nordra",["Deserts"],"Very Common"),
	new ObjectPlant("Northlinch",["Cities"],"Very Common"),
	new ObjectPlant("Nossa",["Plains"],"Very Common"),
	new ObjectPlant("Novanor",["Deserts"],"Uncommon"),
	new ObjectPlant("Obaddis Leaf",["Arctic"],"Rare"),
	new ObjectPlant("Oede",["Mountains"],"Legendary"),
	new ObjectPlant("Old Man's Friend",["Plains"],"Rare"),
	new ObjectPlant("Oliosse",["Mountains"],"Legendary"),
	new ObjectPlant("Olvar",["Jungles"],"Very Rare"),
	new ObjectPlant("Orach",["Plains"],"Very Common"),
	new ObjectPlant("Orevine",["Mountains","Plains"],"Rare"),
	new ObjectPlant("Orticusp",["Forests"],"Very Rare"),
	new ObjectPlant("Ortona",["Jungles"],"Rare"),
	new ObjectPlant("Oruighen",["Deserts"],"Uncommon"),
	new ObjectPlant("Osira",["Forests"],"Common"),
	new ObjectPlant("Pallast",["Forests","Jungles"],"Very Common"),
	new ObjectPlant("Palma Eldath",["Plains"],"Common"),
	new ObjectPlant("Pattran",["Plains"],"Common"),
	new ObjectPlant("Pennyroyal",["Forests"],"Rare"),
	new ObjectPlant("Peony",["Cities","Plains"],"Common"),
	new ObjectPlant("Periwinkle",["Cities","Plains"],"Very Common"),
	new ObjectPlant("Petiveria",["Plains"],"Very Common"),
	new ObjectPlant("Phandar",["Forests"],"Very Rare"),
	new ObjectPlant("Pixie Table",["Forests"],"Rare"),
	new ObjectPlant("Poison Apple",["Jungles"],"Uncommon"),
	new ObjectPlant("Pomow",["Plains"],"Common"),
	new ObjectPlant("Pondstone Tree",["Jungles"],"Uncommon"),
	new ObjectPlant("Powdered Desert Milk",["Deserts"],"Uncommon"),
	new ObjectPlant("Poznan's Chain",["Jungles","Mountains"],"Rare"),
	new ObjectPlant("Prickly Tea",["Jungles"],"Common"),
	new ObjectPlant("Prince's Feather",["Plains"],"Very Common"),
	new ObjectPlant("Psyllium",["Cities","Plains"],"Very Common"),
	new ObjectPlant("Purple Pipeweed",["Cities","Plains"],"Uncommon"),
	new ObjectPlant("Pygmy King Flower",["Jungles"],"Rare"),
	new ObjectPlant("Quare",["Forests"],"Very Common"),
	new ObjectPlant("Queen's Ambrosia",["Plains"],"Very Common"),
	new ObjectPlant("Quickweed",["Coastal"],"Common"),
	new ObjectPlant("Quivar",["Arctic"],"Rare"),
	new ObjectPlant("Rainbowpetal",["Jungles"],"Very Common"),
	new ObjectPlant("Rampalt",["Forests","Plains"],"Common"),
	new ObjectPlant("Rasira",["Plains"],"Common"),
	new ObjectPlant("Ratavasa Flowers",["Jungles"],"Very Common"),
	new ObjectPlant("Rattlestalks",["Jungles"],"Uncommon"),
	new ObjectPlant("Razorvine",["Plains"],"Uncommon"),
	new ObjectPlant("Reath",["Jungles"],"Rare"),
	new ObjectPlant("Redgold's Feather",["Mountains","Plains"],"Rare"),
	new ObjectPlant("Redroot",["Cities","Plains"],"Uncommon"),
	new ObjectPlant("Redstar Flowers",["Mountains"],"Uncommon"),
	new ObjectPlant("Rewk",["Plains"],"Common"),
	new ObjectPlant("Ribwort Plantain",["Jungles"],"Very Common"),
	new ObjectPlant("Ripplebark",["Forests"],"Common"),
	new ObjectPlant("Ripplewood",["Jungles"],"Uncommon"),
	new ObjectPlant("Rosecork",["Forests"],"Common"),
	new ObjectPlant("Rose Campion",["Deserts"],"Very Rare"),
	new ObjectPlant("Rose of Forgetfulness",["Forests","Jungles","Plains"],"Legendary"),
	new ObjectPlant("Rouddan",["Arctic"],"Rare"),
	new ObjectPlant("Rowan Tree",["Forests"],"Common"),
	new ObjectPlant("Ruby Apple",["Forests"],"Very Rare"),
	new ObjectPlant("Ruby Blushrose",["Forests","Jungles","Plains"],"Uncommon"),
	new ObjectPlant("Rue",["Plains"],"Very Common"),
	new ObjectPlant("Sabito",["Coastal"],"Uncommon"),
	new ObjectPlant("Sable Fir",["Forests"],"Common"),
	new ObjectPlant("Sadaq's Bedwort",["Plains"],"Legendary"),
	new ObjectPlant("Saddilia",["Jungles"],"Very Rare"),
	new ObjectPlant("Saffron",["Plains"],"Common"),
	new ObjectPlant("Salamander Orchids",["Arctic","Cities"],"Rare"),
	new ObjectPlant("Sand Vine",["Coastal","Oceans"],"Uncommon"),
	new ObjectPlant("Sandberry Bush",["Deserts"],"Very Common"),
	new ObjectPlant("Sanicle",["Forests","Plains"],"Common"),
	new ObjectPlant("Saracen's Compound",["Plains"],"Very Common"),
	new ObjectPlant("Sarasar",["Mountains"],"Uncommon"),
	new ObjectPlant("Sasami Tree",["Cities","Jungles"],"Very Rare"),
	new ObjectPlant("Scarlet Heart Mushrooms",["Forests"],"Uncommon"),
	new ObjectPlant("Scented Mayweed",["Arctic"],"Common"),
	new ObjectPlant("Scholar's Dream",["Cities","Plains"],"Rare"),
	new ObjectPlant("Serapia's Turbith",["Mountains"],"Legendary"),
	new ObjectPlant("Seregon",["Mountains"],"Rare"),
	new ObjectPlant("Serren Wood",["Jungles"],"Very Rare"),
	new ObjectPlant("Sessali",["Coastal"],"Uncommon"),
	new ObjectPlant("Sezarad",["Plains"],"Uncommon"),
	new ObjectPlant("Shadbush",["Forests","Jungles"],"Very Common"),
	new ObjectPlant("Shadowtop",["Forests"],"Very Common"),
	new ObjectPlant("Shepherd's Purse",["Mountains"],"Uncommon"),
	new ObjectPlant("Silver Hibiscus",["Jungles"],"Legendary"),
	new ObjectPlant("Silverleaf",["Mountains","Plains"],"Rare"),
	new ObjectPlant("Silverthorn",["Mountains"],"Very Rare"),
	new ObjectPlant("Silverwood",["Forests"],"Uncommon"),
	new ObjectPlant("Sinquoi",["Deserts"],"Very Rare"),
	new ObjectPlant("Sky Lotus",["Mountains"],"Very Rare"),
	new ObjectPlant("Sleeping Ivy",["Coastal","Plains"],"Common"),
	new ObjectPlant("Sleepweed",["Plains"],"Uncommon"),
	new ObjectPlant("Slimmerane",["Jungles","Mountains","Plains"],"Rare"),
	new ObjectPlant("Slumberweed",["Plains"],"Uncommon"),
	new ObjectPlant("Snakespike",["Plains"],"Very Common"),
	new ObjectPlant("Snapping Grass",["Plains"],"Uncommon"),
	new ObjectPlant("Snowflake Lichen",["Arctic"],"Uncommon"),
	new ObjectPlant("Snowwood",["Arctic"],"Uncommon"),
	new ObjectPlant("Soarwood",["Jungles"],"Uncommon"),
	new ObjectPlant("Sparish Nut",["Jungles"],"Common"),
	new ObjectPlant("Sparkleberry",["Forests","Jungles","Plains"],"Common"),
	new ObjectPlant("Spectreflower",["Forests"],"Rare"),
	new ObjectPlant("Spellbane",["Mountains"],"Legendary"),
	new ObjectPlant("Spelleater Ivy",["Forests"],"Rare"),
	new ObjectPlant("Spiderbush",["Jungles"],"Rare"),
	new ObjectPlant("Spiderwort",["Forests","Plains"],"Common"),
	new ObjectPlant("Spotty Dragonfire",["Forests","Jungles","Plains"],"Common"),
	new ObjectPlant("Spring Adonis",["Forests","Mountains"],"Common"),
	new ObjectPlant("Stirge Traps",["Plains"],"Very Common"),
	new ObjectPlant("Stonestream",["Arctic"],"Very Rare"),
	new ObjectPlant("Stonewort",["Plains"],"Very Rare"),
	new ObjectPlant("Strawberry",["Cities","Forests","Mountains"],"Very Common"),
	new ObjectPlant("Stygian Pumpkin",["Forests","Plains"],"Common"),
	new ObjectPlant("Suaeysit",["Forests"],"Legendary"),
	new ObjectPlant("Sunberry Bush",["Plains"],"Very Common"),
	new ObjectPlant("Sunflower of Pelor",["Plains"],"Common"),
	new ObjectPlant("Surane",["Coastal"],"Uncommon"),
	new ObjectPlant("Suth",["Forests","Jungles","Plains"],"Very Rare"),
	new ObjectPlant("Swampwalker",["Jungles"],"Uncommon"),
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
	new ObjectPlant("Tempin",["Forests"],"Uncommon"),
	new ObjectPlant("Tephrosia",["Forests"],"Uncommon"),
	new ObjectPlant("Terbas",["Plains"],"Very Common"),
	new ObjectPlant("Tereeka Root",["Coastal"],"Rare"),
	new ObjectPlant("Thalsen Weed",["Arctic"],"Very Common"),
	new ObjectPlant("Thanalayla",["Jungles"],"Uncommon"),
	new ObjectPlant("Thimbleweed",["Forests","Plains"],"Very Common"),
	new ObjectPlant("Thir",["Arctic"],"Very Common"),
	new ObjectPlant("Thistledown",["Arctic","Plains"],"Very Rare"),
	new ObjectPlant("Thornapple",["Mountains"],"Common"),
	new ObjectPlant("Throw-Waxe",["Plains"],"Very Common"),
	new ObjectPlant("Thurl",["Deserts","Mountains"],"Very Common"),
	new ObjectPlant("Thyme",["Cities","Very Common"],"Very Common"),
	new ObjectPlant("Tickleweed",["Jungles"],"Rare"),
	new ObjectPlant("Torchstalk",["Forests"],"Uncommon"),
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
	new ObjectPlant("Vaundyr Vine",["Jungles"],"Very Rare"),
	new ObjectPlant("Verdant Goeleth",["Cities","Plains"],"Very Rare"),
	new ObjectPlant("Vinuk",["Forests","Plains"],"Uncommon"),
	new ObjectPlant("Viper's Bugloss",["Plains"],"Common"),
	new ObjectPlant("Vipervine",["Jungles"],"Common"),
	new ObjectPlant("Visma",["Jungles"],"Common"),
	new ObjectPlant("Vodare",["Cities","Plains"],"Rare"),
	new ObjectPlant("Waredan",["Forests"],"Very Rare"),
	new ObjectPlant("Waterorb",["Coastal"],"Common"),
	new ObjectPlant("Waxtree",["Forests"],"Very Rare"),
	new ObjectPlant("Waxworm",["Forests"],"Very Common"),
	new ObjectPlant("Weirwood",["Forests"],"Uncommon"),
	new ObjectPlant("Werasa",["Cities","Plains"],"Common"),
	new ObjectPlant("Whistling Cactus",["Deserts"],"Uncommon"),
	new ObjectPlant("White Byrony",["Forests"],"Common"),
	new ObjectPlant("Whitecandle",["Plains"],"Very Common"),
	new ObjectPlant("Wild Fireclover",["Plains"],"Rare"),
	new ObjectPlant("Wildwood",["Jungles"],"Very Rare"),
	new ObjectPlant("Willow-Herb",["Plains"],"Very Common"),
	new ObjectPlant("Winclamit",["Jungles"],"Legendary"),
	new ObjectPlant("Windwhip Tree",["Plains"],"Common"),
	new ObjectPlant("Wispstalks",["Forests","Jungles"],"Very Rare"),
	new ObjectPlant("Witchweed",["Jungles","Plains"],"Common"),
	new ObjectPlant("Witchweave Palm",["Jungles"],"Uncommon"),
	new ObjectPlant("Wittlewort",["Forests"],"Very Common"),
	new ObjectPlant("Woodrose",["Forests","Jungles"],"Rare"),
	new ObjectPlant("Wood Sorrel",["Forests"],"Common"),
	new ObjectPlant("Wolfsbane",["Plains"],"Rare"),
	new ObjectPlant("Wolfweed",["Mountains"],"Very Common"),
	new ObjectPlant("Woodrose",["Plains"],"Rare"),
	new ObjectPlant("Wood Sorrel",[""],""),
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
	new ObjectPlant("Zalanthar",["Forests"],"Rare"),
	new ObjectPlant("Zulsendra",["Arctic","Mountains"],"Very Rare"),
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
