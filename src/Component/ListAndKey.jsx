import React, { useState } from "react";

const ListAndKey = () => {
    
  const [data, setData] = useState([
    { id: 1, name: "Rahim" },
    { id: 2, name: "Karim" },
    { id: 3, name: "Kamal" },
    { id: 4, name: "Jabbar" },
  ]);

  const [newUser, setNewUser] = useState({ id: "", name: "" });

  const handleAddUser = () => {
    setData([...data, newUser]);

    setNewUser({ id: "", name: "" });
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Id"
        value={newUser.id}
        onChange={(e) => setNewUser({ ...newUser, id: e.target.value })}
      />

      <input
        type="text"
        placeholder="name"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
      />

      <button onClick={handleAddUser} type="submit">
        Add user
      </button>

      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListAndKey;
