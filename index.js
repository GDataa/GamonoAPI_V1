// index.js
const GamonoAPI = require('./lib/api'); // Importa a classe GamonoAPI

// Cria uma instância da API
const gamonoapi = new GamonoAPI();

(async () => {
  try {
    // Exemplo de busca de GIFs de gatos
    const gifs = await gamonoapi.search('cat', 5); // Busca 5 GIFs de gatos
    console.log('GIFs encontrados:', gifs); // Exibe os GIFs no console
  } catch (error) {
    console.error('Erro na busca de GIFs:', error.message);
  }
})();
