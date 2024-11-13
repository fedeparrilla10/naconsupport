import Button from "./Button";
import useRetailStore from "../store/useRetailStore";

const EndMessage = ({ message, handleOptionSelect, storeData }) => {
  const selectedRetail = useRetailStore((state) => state.selectedRetail);

  return (
    <div className="flex flex-col items-center justify-center w-full gap-8 pt-10">
      <img
        src="/naconsupport/questionmark.svg"
        alt="Realizar una consulta"
        width={70}
        height={70}
      />
      <p className="text-center text-md">{message}</p>
      {storeData && (
        <div className="flex flex-col items-center justify-center w-full gap-3">
          <h3 className="text-lg font-bold underline">{selectedRetail.name}</h3>
          <p className="">
            <span className="font-bold">Dirección:</span>{" "}
            {selectedRetail.address}
          </p>
          <p className="">
            <span className="font-bold">Horarios:</span> {selectedRetail.hours}
          </p>
        </div>
      )}
      <Button content="Volver a inicio" onClick={() => handleOptionSelect(1)} />
    </div>
  );
};

export default EndMessage;
