import { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import Button from "./Button";
import useProductStore from "../store/useProductStore";
import { products } from "../data/products";

const SelectProduct = ({ question, options, handleOptionSelect }) => {
  const selectedProduct = useProductStore((state) => state.selectedProduct);
  const updateProduct = useProductStore((state) => state.updateProduct);
  const [selectedProductName, setSelectedProductName] = useState(null);

  const handleProduct = (event, product) => {
    updateProduct(product);
    setSelectedProductName(product.name);
  };

  return (
    <section className="flex flex-col items-center justify-center w-full gap-4">
      <h3 className="text-xl">{question}</h3>
      <Autocomplete
        options={products}
        getOptionLabel={(option) => option.name}
        style={{ width: 300 }}
        value={selectedProduct || null}
        onChange={(event, newValue) => handleProduct(event, newValue)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Buscar producto..."
            variant="filled"
            className="bg-white"
          />
        )}
        renderOption={(props, option) => (
          <li {...props} key={option.name}>
            <img
              src={option.image}
              alt={option.name}
              className="w-8 h-8 object-contain mr-2"
            />
            {option.name}
          </li>
        )}
      />
      <article className="flex flex-col md:flex-row items-center gap-3 pt-4">
        {products.map((product) => {
          return (
            <div
              key={product.name}
              className="grid grid-cols-1 text-center"
              onClick={(event) => handleProduct(event, product)}
            >
              <div
                className={`bg-gray-300 rounded-xl py-4 px-2 ${
                  selectedProductName === product.name
                    ? "ring ring-blue-300"
                    : ""
                }`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[300px] h-[300px] md:w-[150px] md:h-[150px] object-contain cursor-pointer"
                />
                <p className="pt-4 text-black">{product.name}</p>
              </div>
            </div>
          );
        })}
      </article>
      <div className="mt-4 mb-10">
        <Button
          content="Continuar"
          isDisabled={!selectedProduct}
          onClick={() => handleOptionSelect(options.nextId)}
        />
      </div>
    </section>
  );
};

export default SelectProduct;
