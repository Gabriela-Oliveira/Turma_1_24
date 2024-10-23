import React from 'react';

// Declaração da função tagged
function simplesTag(textos, valor1, valor2) {
  console.log("Textos:", textos);  // Exibe as partes fixas da string
  console.log("Valor 1:", valor1); // Exibe o primeiro valor interpolado
  console.log("Valor 2:", valor2); // Exibe o segundo valor interpolado

  // Retorna uma string simples concatenando os textos e valores
  return `${textos[0]}${valor1}${textos[1]}${valor2}${textos[2]}`;
}

// Componente React
function TaggedComponent() {
  const nome = "João";
  const idade = 25;

  // Chamando a tagged template function
  const resultado = simplesTag`Meu nome é ${nome} e eu tenho ${idade} anos.`;

  return (
    <div>
      <h1>Tagged Template Function no React</h1>
      {/* Exibindo o resultado da função tagged */}
      <p>{resultado}</p>
    </div>
  );
}

export default TaggedComponent;
