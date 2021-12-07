import './App.css';
import React, { useState } from 'react';
import Client from './components/Client';
import ClientForm from './components/ClientForm';
import Counter from './components/Counter';

const App = () => {

  const [clients, setClients] = useState([
    {id: 1, nom: "Lior Chamla"},
    {id: 2, nom: "Magalie Pernin"},
    {id: 3, nom: "Joseph Durand"},
  ])

  const handleDelete = idClient => {
    const clientCopy = [...clients];
    const indexClientCopy = clientCopy.findIndex(
      c => c.id === idClient
    );
    clientCopy.splice(indexClientCopy, 1);
    setClients(clientCopy);

  }

  const handleAdd = newClient => {
    const clientCopy = [...clients];
    clientCopy.push(newClient);
    setClients(clientCopy);
  }

  const title = "Liste des client";
  const titleSecond = <h2>Ajouter ou supprimer</h2>;
  return (
    <div>
      <h1>{title}</h1>
      <Counter />
      {titleSecond}
      <ul>
        {clients.map(client => 
          (<Client propClient={client} propDelete={handleDelete} />))}
      </ul>
      <ClientForm propAdd={handleAdd}/>
    </div> 
  )
    
}

export default App;
