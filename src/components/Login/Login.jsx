import { FaUser, FaLock } from 'react-icons/fa';

import { useState } from 'react';

import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Loading' + username + ' - ' + password);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Login Facil</h1>
        <div className="input-field"> 
          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input className=""
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>
        <div className="recall-forget">
          <label>
            <input type="checkbox" /> chupe-me
          </label>
          <a href="https://www.youtube.com/watch?v=7qUdgpJhcX0">
            Clique aqui e seja Feliz!
          </a>
        </div>
        <button>Logar</button>
        <div className="signup-galenical">
          <p>
            Nao tem conta? <a href="https://www.phind.com/">Criar</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
