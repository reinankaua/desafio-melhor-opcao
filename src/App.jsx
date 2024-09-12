import React, { useState } from 'react';
import imagem from "./assets/bombaCombustivel.png";
import './App.css'; 
import Card from './components/Card';
import Button from './components/Button';
import Input from './components/Input';

export default function App() {
  const [alcool, setAlcool] = useState('');
  const [gasolina, setGasolina] = useState('');

  const calcularMelhorOpcao = () => {
    if (!alcool || !gasolina) {
      alert('Por favor, preencha ambos os campos.');
      return;
    }

    const precoAlcool = parseFloat(alcool);
    const precoGasolina = parseFloat(gasolina);

    if (precoAlcool / precoGasolina < 0.7) {
      alert('O álcool é a melhor opção.');
    } else {
      alert('A gasolina é a melhor opção.');
    }
  };

  return (
    <div className="container">
      <Card imagem={imagem}>
        <Input label="Preço do Álcool" value={alcool} onChange={(e) => setAlcool(e.target.value)} placeholder="Ex: 1.59" />
        <Input label="Preço da Gasolina" value={gasolina} onChange={(e) => setGasolina(e.target.value)} placeholder="Ex: 3.59"/>
        <Button onClick={calcularMelhorOpcao} children="Calcular"/>
      </Card>
    </div>
  );
}