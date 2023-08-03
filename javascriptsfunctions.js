/* Toggle between adding and removing the "responsive" class to header when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myHeader");
    if (x.className === "header") {
      x.className += " responsive";
    } else {
      x.className = "header";
    }
  }


public class ObjectPlant{

	private String[] biomesStrings;
	private String rarityString;

	public ObjectPlant(String[] biomesStrings, String rarityString){
		this.biomesString = biomesStrings;
		this.rarityString = rarityString;
	}

	public String[] getBiomeStrings(){
		return biomeStrings;
	}

	public void setBiomesStrings(String[] biomesStrings){
		this.biomesStrings = biomesStrings;
	}

	public String getRarityString(){
		return rarityString;
	}

	public void setRarityStrings(String rarityStrings){
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
