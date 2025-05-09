const Hero = ({ handleOptionSelect, isProcessing }) => {
  return (
    <main className="flex flex-col items-center gap-8">
      <div>
        <p className="text-center md:text-start px-8 uppercase text-lg font-semibold pt-4">
          Gracias por contactar con el servicio de atención al cliente de Nacon
        </p>
        <h2 className="text-center text-wrap text-2xl px-2 md:text-4xl tracking-wide pt-8 md:pt-2">
          ¿Cómo podemos ayudarte?
        </h2>
      </div>

      <div className="flex flex-row md:flex-row gap-8 pt-5">
        <button
          className="border-2 border-gray-500 w-40 h-42 md:w-48 md:h-48 grid grid-cols-1 grid-rows-2 place-items-center cursor-pointer rounded-lg hover:bg-gray-700 hover:text-white 
          transition duration-300 ease-in-out transform hover:scale-105 px-4 h-[180px]"
          onClick={() => handleOptionSelect(2)}
          disabled={isProcessing}
        >
          <img
            src="/naconsupport/questionmark.svg"
            alt="Realizar una consulta"
            width={70}
            height={70}
          />
          <p className="text-xl text-center">Realizar una consulta</p>
        </button>
        <button
          className="border-2 border-gray-500 w-40 h-42 md:w-48 md:h-48 grid grid-cols-1 grid-rows-2 place-items-center cursor-pointer rounded-lg hover:bg-gray-700 hover:text-white 
          transition duration-300 ease-in-out transform hover:scale-105 px-4 h-[180px]"
          onClick={() => handleOptionSelect(3)}
          disabled={isProcessing}
        >
          <img
            src="/naconsupport/warranty.svg"
            alt="Garantía de producto"
            width={70}
            height={70}
          />
          <p className="text-xl text-center">Garantía de producto</p>
        </button>
      </div>
    </main>
  );
};

export default Hero;
