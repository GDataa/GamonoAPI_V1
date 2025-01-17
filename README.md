# ✨ Private JavaScript API - Powered by GDATAA ✨

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-yellow" alt="JavaScript">
  <img src="https://img.shields.io/badge/NPM-%E2%9C%94-green" alt="NPM">
  <img src="https://img.shields.io/badge/Status-Private%20API-red" alt="Private API">
</p>

## 🔧 Sobre a API

Esta é uma poderosa API escrita em **JavaScript** utilizando o ecossistema **NPM**. Criada especificamente para um cliente privado, a API oferece funcionalidades otimizadas e seguras para atender às necessidades do projeto.

> **Nota:** Este repositório é destinado apenas ao cliente privado autorizado. Qualquer acesso não autorizado é estritamente proibido. ⚠️

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Plataforma de execução de JavaScript.
- **NPM**: Gerenciador de dependências para pacotes e bibliotecas.
- **ES6+**: Sintaxe moderna do JavaScript.

---

## 🔼 Instalação

Siga os passos abaixo para configurar o projeto:

1. Clone o repositório:

   ```bash
   git clone https://github.com/GDataa/GamonoAPI_V1.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd GamonoAPI_V1
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Configure as variáveis de ambiente (veja o arquivo `.env.example`).

5. Inicie o projeto:

   ```bash
   npm start
   ```

---

## 📝 Uso

### Exemplo de Requisição:

```javascript
const GamonoAPI = require('gamono-api'); // Importe a biblioteca

// Instancie a API com a chave da API carregada do .env
const gamonoapi = new GamonoAPI();

// Função assíncrona para buscar GIFs
(async () => {
  try {
    const gifs = await gamonoapi.search('cat', 5);
    console.log(gifs); // Exibe os GIFs encontrados
  } catch (error) {
    console.error('Erro:', error.message); // Exibe qualquer erro
  }
})();
```

### Funções Disponíveis:

| Função       | Descrição                     |
|------------------|---------------------------------|
| `search()`       | Busca GIFs por categoria.       |
| `login()`        | Autentica um usuário.           |
| `getData()`      | Retorna dados do cliente.       |
| `updateInfo()`   | Atualiza informações do cliente.|

---

## 🔒 Configuração de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```
GAMONO_KEY_GEN=your_api_key_here
GAMONO_BASE_URL=https://gamono.api/v1/gifs
```

---

## 📊 Testes

Para rodar os testes:

```bash
npm test
```

- Testes estão localizados no diretório `tests/`.
- Utilizamos **Jest** para os testes unitários.

---

## ⚙️ Contribuições

Este projeto é privado e contribuições externas não são permitidas no momento.

---

## 🛠 Suporte

Se você é um cliente autorizado e precisa de suporte, entre em contato pelo email:

**gdataa@hyvel.net**

---

## 🔗 Links Importantes

- [Documentação Oficial](https://github.com/GDataa/GamonoAPI_V1/wiki)
- [Changelog](https://github.com/GDataa/GamonoAPI_V1/releases)
- [Licença](#)

---

## 🌍 Licença

Este projeto é protegido por direitos autorais e não pode ser redistribuído ou modificado sem permissão. Todos os direitos reservados.

---

