// src/pages/LoginPage.jsx
import { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import AuthHeader from '../components/AuthHeader';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Para manejar el error

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }), // Enviar correo y contraseña al backend
      });

      if (!response.ok) {
        throw new Error('Credenciales inválidas');
      }

      const data = await response.json();  // Obtener los datos de respuesta
      console.log('Login exitoso:', data);

      // Si el login es exitoso, guarda el token
      localStorage.setItem('authToken', data.token);  // Suponiendo que el backend devuelve un token

      // Redirige a otra página
      window.location.href = '/dashboard';  // O redirigir según lo que necesites

    } catch (error) {
      setError(error.message); // Mostrar el error si no se puede iniciar sesión
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <AuthHeader title="Iniciar Sesión" />

        <InputField 
          type="email" 
          placeholder="Correo Electrónico" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <div className="my-4">
          <InputField 
            type="password" 
            placeholder="Contraseña" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        
        <Button onClick={handleLogin} type="submit">
          Ingresar
        </Button>
        
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>} {/* Mostrar el error si ocurre */}

        <div className="text-center mt-4">
          <a href="/register" className="text-blue-500 hover:underline">¿No tienes cuenta? Regístrate aquí</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
