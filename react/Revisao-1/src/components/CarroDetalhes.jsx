import React from 'react';

const CarroDetalhes = ({}) => {
  return (
    <div className='carro-detalhes'>
      <h2>{}</h2>
      <h3>{} - {}</h3>
      <img src={} alt={} />
      <button onClick={}>Voltar</button>
    </div>
  );
};

export default CarroDetalhes;
