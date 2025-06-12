import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [pessoas, setPessoas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/pessoas') // seu backend
      .then(response => response.json())
      .then(data => setPessoas(data))
      .catch(error => console.error('Erro ao buscar pessoas:', error));
  }, []);

  return (
    <div className="App">
      <h1>Lista de Pessoas</h1>
      <ul>
        {pessoas.map(pessoa => (
          <li key={pessoa.id}>
            {pessoa.nome} - {pessoa.idade} anos
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
