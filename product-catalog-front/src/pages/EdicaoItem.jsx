import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EdicaoItem = () => {
  const { code } = useParams(); // Captura o parâmetro da URL

  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/catalog/product/${code}`);
        const { name, price, imageUrl } = response.data;
        setNome(name);
        setPreco(price);
        setImageUrl(imageUrl);
      } catch (error) {
        console.error('Erro ao buscar o produto:', error);
        setMensagem('Erro ao carregar o produto.');
      }
    };

    if (code) {
      fetchItem();
    }
  }, [code]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/catalog/product/${code}`, {
        name: nome,
        price: preco,
        imageUrl: imageUrl
      });
      setMensagem('Produto atualizado com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar o produto:', error);
      setMensagem('Erro ao atualizar o produto.');
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Edição de Produto</h2>
      {mensagem && <p className="text-green-600 mb-4">{mensagem}</p>}
      <form onSubmit={handleSubmit} className="max-w-lg">
        <div className="mb-4">
          <label htmlFor="nome" className="block text-gray-700 font-bold mb-2">Nome:</label>
          <input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} className="border border-gray-300 px-3 py-2 rounded-md w-full" required />
        </div>
        <div className="mb-4">
          <label htmlFor="preco" className="block text-gray-700 font-bold mb-2">Preço:</label>
          <input type="number" id="preco" value={preco} onChange={(e) => setPreco(e.target.value)} step="0.01" min="0" className="border border-gray-300 px-3 py-2 rounded-md w-full" required />
        </div>
        <div className="mb-4">
          <label htmlFor="imageUrl" className="block text-gray-700 font-bold mb-2">URL da Imagem:</label>
          <input type="url" id="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} className="border border-gray-300 px-3 py-2 rounded-md w-full" required />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Atualizar</button>
        {/* <button type="button" onClick={() => history.push('/lista')} className="ml-4 bg-gray-300 text-gray-700 px-4 py-2 rounded-md">Cancelar</button> */}
      </form>
    </div>
  );
};

export default EdicaoItem;
