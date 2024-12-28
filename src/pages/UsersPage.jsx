import { useEffect, useState } from 'react';
import { createUser, deleteUser, getAllUsers } from './../services/usersService';

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });

  // Cargar todos los usuarios al montar el componente
  useEffect(() => {
    getAllUsers()
      .then((data) => setUsers(data))
      .catch((error) => console.error('Failed to fetch users:', error));
  }, []);

  // Manejar la creación de un nuevo usuario
  const handleCreateUser = (e) => {
    e.preventDefault();
    createUser(newUser)
      .then((user) => {
        setUsers([...users, user]);
        setNewUser({ name: '', email: '' });
      })
      .catch((error) => console.error('Failed to create user:', error));
  };

  // Manejar la eliminación de un usuario
  const handleDeleteUser = (id) => {
    deleteUser(id)
      .then(() => {
        setUsers(users.filter((user) => user.id !== id));
      })
      .catch((error) => console.error('Failed to delete user:', error));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Users List</h2>
      <ul className="mb-4">
        {users.map((user) => (
          <li key={user.id} className="flex justify-between mb-2">
            <span>{user.name} - {user.email}</span>
            <button onClick={() => handleDeleteUser(user.id)} className="text-red-500">
              Delete
            </button>
          </li>
        ))}
      </ul>

      <form onSubmit={handleCreateUser}>
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          className="border p-2 mr-2"
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">Create</button>
      </form>
    </div>
  );
}

export default UsersPage;
