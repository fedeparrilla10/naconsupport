import Button from "./Button";
import useRetailStore from "../store/useRetailStore";

const EndMessage = ({ message, handleOptionSelect, storeData }) => {
  const selectedRetail = useRetailStore((state) => state.selectedRetail);
  const selectedStore = useRetailStore((state) => state.selectedStore);

  return (
    <div className="flex flex-col items-center justify-center w-full gap-6 pt-10">
      <div className="flex flex-col items-center">
        {storeData ? (
          <img
            src="/naconsupport/error.svg"
            alt="Error"
            width={70}
            height={70}
            className="pb-2"
          />
        ) : (
          <img
            src="/naconsupport/sent.svg"
            alt="Formulario Enviado"
            width={100}
            height={100}
          />
        )}

        <p className="text-center text-2xl w-3/4">{message}</p>
      </div>
      {storeData && (
        <div className="flex flex-col items-center justify-center w-full gap-3">
          <h3 className="text-2xl font-bold uppercase">
            {selectedRetail?.name || selectedStore?.name}
          </h3>
          {selectedRetail ? (
            <>
              <p className="text-xl">
                <span className="font-bold">Dirección:</span>{" "}
                {selectedRetail?.address}
              </p>
              <p className="text-xl">
                <span className="font-bold">Horarios:</span>{" "}
                {selectedRetail?.hours}
              </p>
              <p className="text-xl">
                <span className="font-bold">Teléfono:</span>{" "}
                {selectedRetail?.phone}
              </p>
            </>
          ) : (
            <>
              <p className="text-xl">
                <span className="font-bold">Web:</span>{" "}
                <a href={selectedStore?.url} className="underline">
                  Ir a {selectedStore.name}
                </a>
              </p>
              <p className="text-xl">
                <span className="font-bold">Correo:</span> {selectedStore?.mail}
              </p>
            </>
          )}
        </div>
      )}
      <a href="https://www.nacongamers.es/" className="mt-4">
        <Button content="Volver a inicio" icon="/naconsupport/back.svg" />
      </a>
    </div>
  );
};

export default EndMessage;
