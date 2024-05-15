const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// Simulação de banco de dados de produtos
const products = {
    "123": { name: "Tenis", price: 299.99, imageUrl: "https://via.placeholder.com/150?text=T%C3%AAnis" },
    "456": { name: "Sandália Havaianas", price: 39.99, imageUrl: "https://via.placeholder.com/150?text=Sand%C3%A1lia+Havaianas" },
    "789": { name: "Boné", price: 29.99, imageUrl: "https://via.placeholder.com/150?text=Bon%C3%A9" },
  };

app.get('/catalog/product/:code', (req, res) => {
  const product = products[req.params.code];
  if (product) {
    res.json(product);
  } else {
    res.status(404).send({ error: "Product not found" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
