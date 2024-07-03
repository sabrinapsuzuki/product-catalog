import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ListaPage = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await axios.get('http://localhost:5000/catalog/products');
        setProdutos(response.data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProdutos();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Lista de Produtos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {produtos.map((produto) => (
          <div key={produto.code} className="border border-gray-300 p-4 rounded-md">
            <h3 className="text-lg font-bold mb-2">{produto.name}</h3>
            <p className="text-gray-700 mb-2">Preço: R$ {produto.price}</p>
            <img src={produto.imageUrl} alt={produto.name} className="w-full h-40 object-contain rounded-md" />
            <Link to={`/edicao/${produto.code}`} className="mt-2 block text-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Editar</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaPage;
