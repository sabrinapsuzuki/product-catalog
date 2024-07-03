import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CadastroPage from './pages/CadastroPage';
import ConsultaPage from './pages/ConsultaPage';
import ListaProdutos from './pages/ListaProdutos';
import EdicaoItem from './pages/EdicaoItem';

const AppRoutes = () => {
  return (
    <Router>
        <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Product Catalog</h1>
        <div>
          <Link to="/lista-produtos" className="text-white mx-2 hover:text-gray-300">Lista</Link>
          <Link to="/consulta" className="text-white mx-2 hover:text-gray-300">Consulta</Link>
          <Link to="/cadastro" className="text-white mx-2 hover:text-gray-300">Cadastro</Link>
        </div>
      </div>
    </nav>
      <Routes>
        
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/consulta" element={<ConsultaPage />} />
        <Route path="/lista-produtos" element={<ListaProdutos />} />
        <Route path="/edicao/:code" element={<EdicaoItem />} />
        <Route path="/" element={<ConsultaPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
