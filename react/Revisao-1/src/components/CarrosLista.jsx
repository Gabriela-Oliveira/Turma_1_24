import React, { useEffect, useState } from 'react';
import CarroCard from './CarroCard';
import CarroDetalhes from './CarroDetalhes';
import { getCarrosTodos, getCarrosId } from '../module/api';

const CarrosLista = () => {
  const [] = useState([]);
  const [] = useState(null);

  useEffect(() => {

  }, []);
  
  const obterCarros = async () => {

  };

  const selecionarCarro = async (id) => {

  };

  const voltarParaLista = () => {

  };

  if () {
    return < />;
  }

  return (
    <div className="carros-lista">
      {.map(() => (
        <CarroCard  />
      ))}
    </div>
  );
};

export default CarrosLista;
