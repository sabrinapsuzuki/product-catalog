import React, { useState } from 'react';
import axios from 'axios';

const CadastroPage = () => {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [imagemUrl, setImagemUrl] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/catalog/product', {
        name: nome,
        price: preco,
        imageUrl: imagemUrl  
      });
      setMensagem('Produto cadastrado com sucesso!');
      setNome('');
      setPreco('');
      setImagemUrl('');
    } catch (err) {
      setMensagem('');
      console.error('Erro ao cadastrar o produto:', err);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Cadastro de Produto</h2>
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
          <label htmlFor="imagemUrl" className="block text-gray-700 font-bold mb-2">URL da Imagem:</label>
          <input type="url" id="imagemUrl" value={imagemUrl} onChange={(e) => setImagemUrl(e.target.value)} className="border border-gray-300 px-3 py-2 rounded-md w-full" required />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroPage;
