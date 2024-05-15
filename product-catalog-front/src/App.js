import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [code, setCode] = useState('');
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:5000/catalog/product/${code}`);
      setProduct(response.data);
      setError('');
    } catch (err) {
      setError('Produto não encontrado');
      setProduct(null);
    }
  };

  return (
    <div className="flex flex-col items-center pt-32 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Busca de produto</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Digite o código do produto"
          className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        <button type="submit" className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Buscar</button>
        <p className='ml-4 text-slate-600 text-sm'>código teste: 123</p>
      </form>
      {error && <p className="text-red-500">{error}</p>}
      {product && (
        <div className="mt-4">
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <p className="text-lg">Preço: R${product.price}</p>
          <img src={product.imageUrl} alt={product.name} className="mt-2 w-64 h-auto rounded-md" />
        </div>
      )}
    </div>
  );
}

export default App;
