import React from 'react';
import { addAmount } from '../redux/sync/syncActions';
import store from '../redux/store';
import { useState } from 'react';

const ReduxPage = () => {
  const [amount, setAmount] = useState(1)
  
  const handdleSubmit = (e) =>{
    e.preventDefault()

  }
  return (
    <div>
      <h2>Redux</h2>
      <h3>Amount : </h3>
      <form onSubmit={(e)=>handdleSubmit(e)}>
        <input type='number' value={amount} placeholder='1' onChange={(e) => setAmount(e.target.value)}/>
      </form>
      
      
    </div>
  );
};

export default ReduxPage;