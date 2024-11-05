import Button from "./Button";

const EndMessage = ({ message, handleOptionSelect }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-8 pt-10">
      <img
        src="/supportnacon/questionmark.svg"
        alt="Realizar una consulta"
        width={70}
        height={70}
      />
      <p className="text-center text-lg md:text-start md:text-xl">{message}</p>
      <Button content="Volver a inicio" onClick={() => handleOptionSelect(1)} />
    </div>
  );
};

export default EndMessage;
