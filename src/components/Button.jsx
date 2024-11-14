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
      className="grid grid-cols-1 grid-rows-2 place-items-center gap-2 text-white focus:outline-none focus:ring-4 font-medium rounded-md text-[1rem] w-[240px] 
      py-4 me-2 mb-2 bg-transparent  hover:bg-gray-700 focus:ring-gray-700 border border-gray-500 transition duration-200 ease-in-out
      disabled:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50"
    >
      <img
        src="/naconsupport/continue.svg"
        alt="Continue"
        className="inline-block w-6 h-6 me-2"
      />
      {content}
    </button>
  );
};

export default Button;
