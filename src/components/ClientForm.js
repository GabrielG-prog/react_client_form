import React, {useState} from 'react';

const ClientForm = ({propAdd}) => {

    const [newClient, setNewClient] = useState('');

    const handleChange  = event => {
        setNewClient(event.currentTarget.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
    
        const newIdClient = new Date().getTime();
        const newNomClient = newClient;
        
        propAdd({id: newIdClient, nom: newNomClient});
        setNewClient('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={newClient} onChange={handleChange} type="text" placeholder="Ajoutez un client"></input>
            <button>Ajouter</button>
        </form>
    )   
  
}

export default ClientForm;
