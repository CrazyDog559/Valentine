// LoginForm.js
import React, { useState } from 'react';

function LoginForm({ onLogin }) {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button type="submit">Login</button>
      
    </form>
  );
}

export default LoginForm;
