// src/components/AuthHeader.jsx
const AuthHeader = ({ title }) => {
    return (
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-gray-600">Bienvenido, por favor {title.toLowerCase()}</p>
      </div>
    );
  };
  
  export default AuthHeader;
  