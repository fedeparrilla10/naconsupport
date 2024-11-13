import { Autocomplete, TextField } from "@mui/material";
import useProductStore from "../store/useProductStore";
import useRetailStore from "../store/useRetailStore";
import Button from "./Button";
import { stores } from "../data/stores";

const SelectStore = ({ question, options, handleOptionSelect }) => {
  const product = useProductStore((state) => state.selectedProduct);
  const selectedStore = useRetailStore((state) => state.selectedStore);
  const updateStore = useRetailStore((state) => state.updateStore);
  const selectedRetail = useRetailStore((state) => state.selectedRetail);
  const updateRetail = useRetailStore((state) => state.updateRetail);

  const handleStore = (event, store) => {
    updateStore(store);
  };

  const handleRetail = (event, retail) => {
    updateRetail(retail);
  };

  return (
    <section className="flex flex-col items-center justify-center w-full gap-4">
      <h3 className="text-xl">{question}</h3>
      <Autocomplete
        options={stores}
        getOptionLabel={(option) => option.name}
        style={{ width: 300 }}
        value={selectedStore || null}
        onChange={(event, newValue) => handleStore(event, newValue)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Buscar tienda..."
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
      {selectedStore?.retails && (
        <Autocomplete
          options={selectedStore.retails}
          getOptionLabel={(option) => option.name}
          style={{ width: 300 }}
          value={selectedRetail || null}
          onChange={(event, newValue) => handleRetail(event, newValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Buscar retail..."
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
      )}
      <div className="mt-4 mb-10">
        <Button
          content="Continuar"
          isDisabled={!selectedStore}
          onClick={() =>
            handleOptionSelect(
              selectedRetail.sat ? options.satNextId : options.noSatNextId
            )
          }
        />
      </div>
    </section>
  );
};

export default SelectStore;
