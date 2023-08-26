document.getElementById('generateButton').addEventListener('click', async () => {
	const dataFile = document.getElementById('dataFile').files[0];
	const templateFile = document.getElementById('templateFile').files[0];

	if (dataFile && templateFile) {
 		const dataText = await dataFile.text();
 		const templateText = await templateFile.text();

  	// Procesar los archivos y generar el resultado
  	const resultado = procesarArchivos(dataText, templateText);

  	// Crear un Blob con el resultado y crear un enlace de descarga
  	const blob = new Blob([resultado], { type: 'text/plain' });
  	const downloadLink = document.getElementById('downloadLink');
  	downloadLink.href = URL.createObjectURL(blob);
  	downloadLink.style.display = 'block';
	}
});

function procesarArchivos(data, template) {
    try{
						const inputData = JSON.parse(data);
						const templateObj = JSON.parse(template)

						for (const key in templateObj){
									if (inputData.hasOwnProperty(key)){
												if (!isNaN(inputData[key])){
															templateObj[key] = parseFloat(inputData[key]);
												} else{
															templatObj[key] = inputData[key];
												}
									}
						}

			const resultado = JSON.stringify(templateObj, null, 2);
			return resultado;
			} catch (error){
						console.error('Error al procesar los archivos:', error);
						return 'Error al procesar los archivos';
			}
}

