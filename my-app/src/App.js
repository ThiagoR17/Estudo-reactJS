import { useState } from 'react';
import './App.css';
import Seunome from './components/Seunome';
import Saudacao from './components/Saudacao';

function App() {
  const [nome, setNome] = useState()
  
  return (
    <div className="App">
      <h1>State Lift</h1>
      <Seunome setNome = {setNome}></Seunome>
      <Saudacao nome={nome} ></Saudacao>
    </div>
  );
}

export default App;
