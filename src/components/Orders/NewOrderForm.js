

import React, { useState } from 'react';

const NewOrderForm = () => {
  const [order, setOrder] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New order submitted:', order);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        New Order:
        <input
          type="text"
          value={order}
          onChange={(e) => setOrder(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewOrderForm;
