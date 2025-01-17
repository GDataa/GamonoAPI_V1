require('dotenv').config(); // Importa o dotenv para usar o .env
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware para habilitar CORS
app.use(cors());

// Configuração do Giphy API
const GAMONO_KEY_GEN = process.env.GAMONO_KEY_GEN;
const GAMONO_BASE_URL = 'https://api.giphy.com/v1/gifs';

// Endpoint para buscar GIFs por categoria
app.get('/:category', async (req, res) => {
    const { category } = req.params; // Obtém a categoria da URL
    const limit = req.query.limit || 1; // Limita o número de GIFs retornados (padrão: 1)

    try {
        // Faz a requisição à API do Giphy
        const response = await axios.get(`${GAMONO_BASE_URL}/search`, {
            params: {
                api_key: GAMONO_KEY_GEN,
                q: category, // Termo de busca
                limit,
                rating: 'pg', // Classificação do conteúdo
                lang: 'pt-br', // Idioma dos gifs
            },
        });

        // Extrai as URLs dos GIFs
        const gifs = response.data.data.map((gif) => gif.images.original.url);

        res.json({ gifs });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Erro ao buscar GIFs do Giphy.' });
    }
});

// Endpoint raiz para informações sobre a API
app.get('/', (req, res) => {
    res.json({
        message: 'Bem-vindo à API de GIFs com Giphy!',
        usage: '/:category?limit=5 (Ex: /hug?limit=3)',
    });
});

// Inicializa o servidor
app.listen(PORT, () => {
    console.log(`API rodando em http://localhost:${PORT}`);
});
