import React, { useState } from 'react';
import axios from 'axios';

const Auth = ({ type }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (type === 'login') {
        const res = await axios.post('/api/login', formData);
        alert('Login Successful');
      } else {
        const res = await axios.post('/api/register', formData);
        alert('Registration Successful');
      }
    } catch (error) {
      alert('Error during authentication');
    }
  };

  return (
    <div className="auth-container">
      <h2>{type === 'login' ? 'Login' : 'Register'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">{type === 'login' ? 'Login' : 'Register'}</button>
      </form>
    </div>
  );
};

export default Auth;
