const app = require('./App');

const PORT = 3020;

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});
