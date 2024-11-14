import useProductStore from "../store/useProductStore";
import Button from "./Button";

const FAQ = ({ question, handleOptionSelect }) => {
  const selectedProduct = useProductStore((state) => state.selectedProduct);

  return (
    <section className="flex flex-col items-center justify-center w-full gap-8">
      <h3 className="text-center text-lg md:text-start md:text-xl">
        {question}
      </h3>
      <div className="flex flex-col md:flex-row gap-6">
        <button
          className="border-2 border-gray-50 md:w-40 md:h-40 grid grid-cols-1 grid-rows-2 place-items-center gap-8 cursor-pointer rounded-lg hover:bg-gray-700 hover:text-white 
          transition duration-300 ease-in-out transform hover:scale-105 py-8 px-2"
        >
          <img
            src="/naconsupport/pdf.svg"
            alt="Realizar una consulta"
            width={50}
            height={50}
          />
          <p className="text-center">
            Manual <br />
            {selectedProduct.name}
          </p>
        </button>

        <button
          className="border-2 border-gray-50 md:w-40 md:h-40 grid grid-cols-1 grid-rows-2 place-items-center gap-8 cursor-pointer rounded-lg hover:bg-gray-700 hover:text-white 
          transition duration-300 ease-in-out transform hover:scale-105 py-8 px-2"
        >
          <img
            src="/naconsupport/pdf.svg"
            alt="Realizar una consulta"
            width={50}
            height={50}
          />
          <p className="text-center">
            Web Oficial <br />
            {selectedProduct.name}
          </p>
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-1 md:gap-0 items-center justify-around md:w-2/4">
        <Button
          onClick={() => handleOptionSelect(1)}
          content={"Volver a inicio"}
        />
      </div>
    </section>
  );
};

export default FAQ;
