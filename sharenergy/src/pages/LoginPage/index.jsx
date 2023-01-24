import React , { useState } from "react";
import "./styles.css";

const LoginPage = () => {
  const [users, setUsers] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", { users, password });
  };

  return (
    <div id="login">
      <h1 className="title">Sharenergy</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="users">Usuário</label>
          <input
            type="users"
            name="users"
            id="users"
            value={users}
            onChange={(e) => setUsers(e.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="password">Senha </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="actions">
          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
