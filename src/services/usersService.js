import api from '../utils/axios';

// Obtener todos los usuarios
export const getAllUsers = () => {
  return api.get('/users')
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error al obtener usuarios:', error);
      throw error;
    });
};

// Crear un nuevo usuario
export const createUser = (userData) => {
  return api.post('/users', userData)
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error al crear usuario:', error);
      throw error;
    });
};

// Eliminar un usuario por ID
export const deleteUser = (userId) => {
  return api.delete(`/users/${userId}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error al eliminar usuario:', error);
      throw error;
    });
};
