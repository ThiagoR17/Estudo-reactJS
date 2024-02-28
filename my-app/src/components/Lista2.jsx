import React from 'react';

function Lista2({ itens }) {
  const itemsArray = Array.isArray(itens) ? itens : [];

  return (
    <div>
      <h3>Lista de linguagens</h3>
      {itemsArray.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

export default Lista2;