// src/pages/RegisterPage.jsx
import { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import AuthHeader from '../components/AuthHeader';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    console.log('Registrarse:', { name, email, password });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <AuthHeader title="Registrarse" />

        <InputField 
          type="text" 
          placeholder="Nombre Completo" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <div className="my-4">
          <InputField 
            type="email" 
            placeholder="Correo Electrónico" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div className="my-4">
          <InputField 
            type="password" 
            placeholder="Contraseña" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>

        <Button onClick={handleRegister} type="submit" styleType="primary">
          Registrarse
        </Button>
        <div className="text-center mt-4">
          <a href="/login" className="text-blue-500 hover:underline">¿Ya tienes cuenta? Inicia sesión</a>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
