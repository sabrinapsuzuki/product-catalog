import React, { useState} from 'react';
import axios from 'axios';

const ConsultaPage = () => {
  const [produtos, setProdutos] = useState([]);
  const [busca, setBusca] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleBusca = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:5000/catalog/products?name=${busca}`);
      setProdutos(response.data);
      setMensagem('');
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      setProdutos([]);
      setMensagem('Nenhum produto encontrado.');
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Consulta de Produtos</h2>
      <form onSubmit={handleBusca} className="mb-4">
        <input type="text" value={busca} onChange={(e) => setBusca(e.target.value)} placeholder="Digite o nome do produto..." className="border border-gray-300 px-3 py-2 rounded-md mr-2" />
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Buscar</button>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {produtos.map((produto) => (
          <div key={produto.id} className="border border-gray-300 p-4 rounded-md">
            <h3 className="text-lg font-bold mb-2">{produto.name}</h3>
            <p className="text-gray-700 mb-2">Preço: R$ {produto.price}</p>
            <img src={produto.imageUrl} alt={produto.name} className="w-full h-40 object-contain rounded-md" />
          </div>
        ))}
      </div>
      {mensagem && <p className="text-red-600 mb-4">{mensagem}</p>}
    </div>
  );
};

export default ConsultaPage;
