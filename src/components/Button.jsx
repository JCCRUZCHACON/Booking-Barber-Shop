// src/components/Button.jsx
const Button = ({ children, onClick, type = "button", styleType = "primary" }) => {
    const styles = {
      primary: "bg-blue-500 hover:bg-blue-600 text-white",
      secondary: "bg-red-500 hover:bg-red-600 text-white",
    };
    
    return (
      <button
        type={type}
        onClick={onClick}
        className={`${styles[styleType]} px-6 py-2 rounded-lg shadow-lg transition duration-300`}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  