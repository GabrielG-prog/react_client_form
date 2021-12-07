import React, { useState } from 'react';

const  Counter = () => {

  const [counter, setCounter] = useState(1);

  const handleChange = () => {
    setCounter(counter + 1);
  }

  return (
    <div> 
      {counter}<button onClick={handleChange}>Incrémenter</button>
    </div>
  )
  
}

export default Counter;
