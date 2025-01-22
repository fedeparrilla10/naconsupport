import { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useMediaQuery } from "@mui/material";
import Button from "./Button";
import useProductStore from "../store/useProductStore";
import { products } from "../data/products";
import { ProductSlider, VariantSlider } from "./NaconSlider";

const SelectProduct = ({
  message,
  question,
  options,
  handleOptionSelect,
  isProcessing,
}) => {
  const selectedCategory = useProductStore((state) => state.selectedCategory);
  const updateCategory = useProductStore((state) => state.updateCategory);
  const selectedProduct = useProductStore((state) => state.selectedProduct);
  const updateProduct = useProductStore((state) => state.updateProduct);
  const selectedVariant = useProductStore((state) => state.selectedVariant);
  const updateVariant = useProductStore((state) => state.updateVariant);
  const [selectedProductName, setSelectedProductName] = useState(null);
  const [selectedVariantName, setSelectedVariantName] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const allProducts = products.map((product) => product.products).flat();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleAutocomplete = (event, product) => {
    const category = products.find((category) =>
      category.products.some((p) => p.name === product.name)
    );

    updateCategory(category);
    setSelectedProductName(product.name);
    updateProduct(product);

    if (product.variants && product.variants.length > 0) {
      setActiveStep(2);
    }
  };

  const handlePrevStep = () => {
    setActiveStep(0);
  };

  const handleCategory = (category) => {
    updateCategory(category);
    setActiveStep(activeStep + 1);
  };

  const handleProduct = (product) => {
    setSelectedProductName(product.name);
    updateProduct(product);
    product.variants &&
      product.variants.length > 0 &&
      setActiveStep(activeStep + 1);
  };

  const handleVariant = (variant) => {
    setSelectedVariantName(variant.name);
    updateVariant(variant);
  };

  return (
    <section className="flex flex-col items-center justify-center w-full gap-4">
      <div className="flex flex-col items-center pb-4">
        <p className="text-center md:text-start px-8 uppercase text-lg font-semibold">
          {message}
        </p>
        <h3 className="text-2xl text-center md:text-start">{question}</h3>
      </div>
      <Autocomplete
        options={allProducts}
        getOptionLabel={(option) => option.name}
        style={{ width: 300, paddingTop: 8 }}
        value={selectedProduct || null}
        onChange={(event, newValue) => handleAutocomplete(event, newValue)}
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
      <article className="flex flex-col items-center pt-4">
        <div
          className={`${
            activeStep === 0 && "opacity-0"
          } flex flex-row items-center justify-center gap-2 cursor-pointer text-sm h-[1rem]`}
          onClick={handlePrevStep}
        >
          <KeyboardReturnIcon />
          <p className="pb-1.5">Ir Atrás</p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-3 pt-4">
          {activeStep === 0 &&
            products.map((category) => {
              return (
                <div
                  key={category.name}
                  className="grid grid-cols-1 text-center cursor-pointer"
                  onClick={() => handleCategory(category)}
                >
                  <div className="bg-gray-300 rounded-xl py-4 px-2">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-[300px] h-[300px] md:w-[150px] md:h-[150px] object-contain cursor-pointer"
                    />
                    <p className="pt-4 text-black">{category.name}</p>
                  </div>
                </div>
              );
            })}
          {activeStep === 1 &&
            (isMobile ? (
              selectedCategory.products.map((product) => {
                return (
                  <div
                    key={product.name}
                    className="grid grid-cols-1 text-center cursor-pointer"
                    onClick={() => handleProduct(product)}
                  >
                    <div
                      className={`bg-gray-300 rounded-xl py-4 px-2 ${
                        selectedProductName === product.name &&
                        "ring ring-blue-500"
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
              })
            ) : (
              <section className="w-[800px]">
                <ProductSlider
                  data={selectedCategory.products}
                  handleProduct={handleProduct}
                  selectedProductName={selectedProductName}
                />
              </section>
            ))}
          {activeStep === 2 &&
            (isMobile || selectedProduct.variants.length < 4 ? (
              selectedProduct.variants.map((variant) => {
                return (
                  <div
                    key={variant.name}
                    className="relative grid grid-cols-1 text-center cursor-pointer"
                    onClick={() => handleVariant(variant)}
                  >
                    <div
                      className={`flex flex-col items-center justify-center bg-gray-300 rounded-xl py-8 px-2 w-[316px] h-[372px] md:w-[166px] md:h-[222px] ${
                        selectedVariantName === variant.name &&
                        "ring ring-blue-500"
                      }`}
                    >
                      <img
                        src={variant.image}
                        alt={variant.name}
                        className="w-[200px] h-[200px] object-contain mb-2"
                      />
                      <img
                        src={
                          variant.platform
                            ? `/naconsupport/products/platforms/${variant.platform}.svg`
                            : selectedProduct.platform
                            ? `/naconsupport/products/platforms/${selectedProduct.platform}.svg`
                            : selectedProduct.image
                        }
                        alt={variant.platform}
                        className="absolute top-2 right-2 w-6 h-6 object-contain"
                      />
                      <p className="text-black">{variant.name}</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <section className="w-[800px]">
                <VariantSlider
                  data={selectedProduct.variants}
                  handleVariant={handleVariant}
                  selectedVariantName={selectedVariantName}
                  selectedProduct={selectedProduct}
                />
              </section>
            ))}
        </div>
      </article>
      <div className="mt-4 mb-10">
        <Button
          content="Continuar"
          isDisabled={
            selectedProduct?.variants.length > 0
              ? !selectedVariant
              : !selectedProduct || isProcessing
          }
          icon={options.icon}
          onClick={() => handleOptionSelect(options.nextId)}
        />
      </div>
    </section>
  );
};

export default SelectProduct;
