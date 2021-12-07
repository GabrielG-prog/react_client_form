import React from 'react';

const  Client = ({propClient, propDelete }) => {

  return (
    <li> 
      {propClient.nom}<button onClick={() => propDelete(propClient.id)}>X</button>
    </li>
  )
  
}

export default Client;
