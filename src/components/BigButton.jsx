const BigButton = ({
  content = "Botón",
  onClick = null,
  type = "button",
  isDisabled = false,
  icon = "/naconsupport/continue.svg",
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={isDisabled}
      className="border-2 border-gray-500 w-40 h-42 md:w-48 md:h-48 grid grid-cols-1 grid-rows-2 place-items-center cursor-pointer rounded-lg hover:bg-gray-700 hover:text-white 
          transition duration-300 ease-in-out transform hover:scale-105 px-4 text-xl text-center h-[180px]"
    >
      <img src={icon} alt="Opción" width={70} height={70} className="pt-8" />
      {content}
    </button>
  );
};

export default BigButton;
