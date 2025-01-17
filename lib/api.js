const axios = require('axios');

class GamonoAPI {
  constructor(apiKey) {
    if (!apiKey) {
      throw new Error('Uma chave da API do Giphy é necessária.');
    }
    this.apiKey = process.env.GAMONO_KEY_GEN;
    this.baseURL = 'https://api.giphy.com/v1/gifs';
  }

  // Método para buscar GIFs por categoria
  async search(category, limit = 1, rating = 'pg') {
    try {
      const response = await axios.get(`${this.baseURL}/search`, {
        params: {
          api_key: this.apiKey,
          q: category,
          limit,
          rating,
        },
      });

      const gifs = response.data.data.map((gif) => gif.images.original.url);
      return gifs;
    } catch (error) {
      throw new Error(`Erro ao buscar GIFs: ${error.message}`);
    }
  }
}

module.exports = GamonoAPI;
