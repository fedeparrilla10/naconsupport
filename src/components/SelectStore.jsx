import { Autocomplete, TextField } from "@mui/material";
import useRetailStore from "../store/useRetailStore";
import Button from "./Button";
import { stores } from "../data/stores";

const SelectStore = ({ message, question, options, handleOptionSelect }) => {
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
      <div className="flex flex-col items-center pb-4">
        <p className="text-center md:text-start px-8 uppercase text-lg font-semibold">
          {message}
        </p>
        <h3 className="text-2xl text-center md:text-start">{question}</h3>
      </div>
      <Autocomplete
        options={stores}
        getOptionLabel={(option) => option.name}
        style={{ width: 300, paddingTop: 8 }}
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
              {option.name}
            </li>
          )}
        />
      )}
      <div className="mt-4 mb-10">
        <Button
          content="Continuar"
          isDisabled={!selectedStore}
          icon={options.icon}
          onClick={() =>
            handleOptionSelect(
              selectedStore?.sat || selectedRetail?.sat
                ? options.satNextId
                : options.noSatNextId
            )
          }
        />
      </div>
    </section>
  );
};

export default SelectStore;
