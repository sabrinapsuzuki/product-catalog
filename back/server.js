const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Simulação de banco de dados de produtos como um array de objetos
const products = [
  {
    code: "123",
    name: "Tenis",
    price: 299.99,
    imageUrl: "https://img.lojasrenner.com.br/item/552100149/medium/3.jpg",
  },
  {
    code: "456",
    name: "Sandália Havaianas",
    price: 39.99,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQRm4MU2BmLEeerHcN7qISr12wABZsFkLbU3pP6I4nthBPlviWi138I3WGcxqrsVaCedWNSaoIaGG4t5xI63pAA12xkUIIw9-VDuTYflcc&usqp=CAE",
  },
  {
    code: "789",
    name: "Boné",
    price: 29.99,
    imageUrl:
      "https://img.youcom.com.br/Custom/Content/Products/11/29/1129976_bone-basico-100914176_l1_638285684523088376.jpg",
  },
];

app.get("/catalog/products", (req, res) => {
  const { name } = req.query;

  const productList = name
    ? products.filter((product) =>
        product.name.toLowerCase().includes(name.toLowerCase())
      )
    : products;

  res.json(productList || []);
});

app.get("/catalog/product/:code", (req, res) => {
  const { code } = req.params;

  const product = products.find((product) => product.code === code);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: "Product not found" });
  }
});

app.post("/catalog/product", (req, res) => {
  const { name, price, imageUrl } = req.body;

  if (!name || !price || !imageUrl) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const newProductCode = Math.random().toString(36).substr(2, 9);
  const newProduct = {
    code: newProductCode,
    name: name,
    price: parseFloat(price),
    imageUrl: imageUrl,
  };

  products.push(newProduct);

  res
    .status(201)
    .json({ message: "Product created successfully", product: newProduct });
});

app.put("/catalog/product/:code", (req, res) => {
  const { code } = req.params;
  const { name, price, imageUrl } = req.body;

  const index = products.findIndex((product) => product.code === code);

  if (index === -1) {
    return res.status(404).json({ error: "Product not found" });
  }

  products[index] = {
    ...products[index],
    name: name || products[index].name,
    price: price || products[index].price,
    imageUrl: imageUrl || products[index].imageUrl,
  };

  res.json({
    message: "Product updated successfully",
    product: products[index],
  });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
