import React from 'react';

import './App.css';

import Conversor from "./componente/Conversor"

function App() {
  return (
    <div className="App">
      <h1>Conversor de Moedas</h1>
      <div className="linha">
      <Conversor moedaA="USD" moedaB="BRL"></Conversor>
      </div>
      <h3>Desafio Exame</h3>
    </div>

  );
}

export default App;
