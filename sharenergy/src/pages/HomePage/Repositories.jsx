import React, { useState } from "react";

const Repositories = ({ repositories, onDeleteName, onNewName }) => {
  const [newName, setNewName] = useState("");

  return (
    <div className="repositories">
      <h2 className="title">Names</h2>
      <ul className="list">
        {repositories.map((repository) => (
          <li className="item" key={repository._id}>
            <div className="info">
              <div className="name">Name.: {repository.name}</div>
              <div className="code">Code.......: {repository.code}</div>
              <div className="email">Email......: {repository.email}</div>
              <div className="phone">Phone....: {repository.phone}</div>
              <div className="address">Address.: {repository.address}</div>
            </div>
            <button onClick={() => onDeleteName(repository)}>Delete</button>
          </li>
        ))}
      </ul>

      <div className="new">
        <label htmlFor="new-name">New Name</label>
        <input
          type="text"
          name="new-name"
          id="new-name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <button onClick={() => onNewName(newName)}>Add</button>
      </div>
    </div>
  );
};

export default Repositories;
