const Button = ({
  content = "Botón",
  onClick = null,
  type = "button",
  isDisabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={isDisabled}
      className="text-white focus:outline-none focus:ring-4 font-medium rounded-full text-[0.90rem] px-8 
      py-2.5 me-2 mb-2 bg-gray-800 hover:bg-gray-700 focus:ring-gray-700 border-gray-700 transition duration-200 ease-in-out
      disabled:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {content}
    </button>
  );
};

export default Button;
