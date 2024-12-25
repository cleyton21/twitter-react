import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-100">
      <h1 className="text-3xl font-bold text-red-600 mb-4">404 - Página Não Encontrada!</h1>
      <Link to="/" className="text-blue-500 hover:underline">
        Voltar para a Página Inicial
      </Link>
    </div>
  );
};

export default NotFound;
