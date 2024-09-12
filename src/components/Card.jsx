import React from 'react';

export default function Card({ imagem, children }) {
  return (
    <div className="card">
      <img src={imagem} alt="Bomba de Combustível" className="image" />
      <h2>Qual a melhor opção?</h2>
      {children}
    </div>
  );
}