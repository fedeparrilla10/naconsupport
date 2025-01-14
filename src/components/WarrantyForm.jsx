import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Typography,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import Button from "./Button";
import useUserData from "../store/useUserData";
import useProductStore from "../store/useProductStore";
import { errors } from "../data/errors";

const WarrantyForm = ({
  message,
  question,
  options,
  handleOptionSelect,
  isProcessing,
}) => {
  const [selectedProblem, setSelectedProblem] = useState(null);
  const category = useProductStore((state) => state.selectedCategory);
  const updateProductFormData = useUserData(
    (state) => state.updateProductFormData
  );
  const { control, handleSubmit } = useForm({
    defaultValues: {
      isWet: "",
      isDamaged: "",
      isManipulatedByAnimals: "",
      isUpdated: "",
      selectedProblem: "",
    },
  });

  const errorsByCategory = errors
    .filter((error) => error.name === category?.name)
    .flatMap((error) => error.problems);

  const onSubmit = (data) => {
    updateProductFormData(data);

    const isValid =
      data.isWet === "no" &&
      data.isDamaged === "no" &&
      data.isManipulatedByAnimals === "no" &&
      data.isUpdated === "yes" &&
      data.selectedProblem !== null;

    isValid
      ? handleOptionSelect(options.validNextId)
      : handleOptionSelect(options.invalidNextId);
  };

  const handleProblemSelect = (e, field) => {
    const value = e.target.value;
    setSelectedProblem(value);
    field.onChange(e);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-4">
      <div className="flex flex-col items-center pb-4">
        <p className="text-center md:text-start px-8 uppercase text-lg font-semibold">
          {message}
        </p>
        <h3 className="text-2xl text-center md:text-start">{question}</h3>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-around gap-3 md:gap-4"
      >
        <div className="flex flex-col items-center justify-center w-full gap-4 my-4">
          <div>
            <Typography
              align="center"
              sx={{ color: "#f8fafc", fontWeight: 600 }}
            >
              ¿El producto se ha mojado?
            </Typography>
            <Controller
              name="isWet"
              control={control}
              render={({ field }) => (
                <RadioGroup
                  {...field}
                  value={field.value || ""}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 2,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio sx={{ color: "#f8fafc" }} />}
                    label="Sí"
                  />
                  <FormControlLabel
                    value="no"
                    control={<Radio sx={{ color: "#f8fafc" }} />}
                    label="No"
                  />
                </RadioGroup>
              )}
            />
          </div>

          <div>
            <Typography
              align="center"
              sx={{ color: "#f8fafc", fontWeight: 600 }}
            >
              ¿El producto se ha caído o golpeado?
            </Typography>
            <Controller
              name="isDamaged"
              control={control}
              render={({ field }) => (
                <RadioGroup
                  {...field}
                  value={field.value || ""}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 2,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FormControlLabel
                    value={"yes"}
                    control={<Radio sx={{ color: "#f8fafc" }} />}
                    label="Sí"
                  />
                  <FormControlLabel
                    value={"no"}
                    control={<Radio sx={{ color: "#f8fafc" }} />}
                    label="No"
                  />
                </RadioGroup>
              )}
            />
          </div>

          <div>
            <Typography
              align="center"
              sx={{ color: "#f8fafc", fontWeight: 600 }}
            >
              ¿El producto ha sido manipulado por algún animal doméstico?
            </Typography>
            <Controller
              name="isManipulatedByAnimals"
              control={control}
              render={({ field }) => (
                <RadioGroup
                  {...field}
                  value={field.value || ""}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 2,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FormControlLabel
                    value={"yes"}
                    control={<Radio sx={{ color: "#f8fafc" }} />}
                    label="Sí"
                  />
                  <FormControlLabel
                    value={"no"}
                    control={<Radio sx={{ color: "#f8fafc" }} />}
                    label="No"
                  />
                </RadioGroup>
              )}
            />
          </div>

          <div>
            <Typography
              align="center"
              sx={{ color: "#f8fafc", fontWeight: 600 }}
            >
              ¿El producto está actualizado a su última versión?
            </Typography>
            <Controller
              name="isUpdated"
              control={control}
              render={({ field }) => (
                <RadioGroup
                  {...field}
                  value={field.value || ""}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 2,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FormControlLabel
                    value={"yes"}
                    control={<Radio sx={{ color: "#f8fafc" }} />}
                    label="Sí"
                  />
                  <FormControlLabel
                    value={"no"}
                    control={<Radio sx={{ color: "#f8fafc" }} />}
                    label="No"
                  />
                </RadioGroup>
              )}
            />
          </div>
        </div>

        <div className="w-full">
          <Typography
            className="pb-2"
            align="center"
            sx={{ color: "#f8fafc", fontWeight: 600 }}
          >
            Por favor, seleccione el problema que presenta el producto
          </Typography>
          <FormControl fullWidth className="bg-white rounded p-2">
            <InputLabel id="select-label" sx={{ top: "10px" }} shrink>
              Seleccione una opción
            </InputLabel>
            <Controller
              name="selectedProblem"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  label="Seleccione una opción"
                  labelId="select-label"
                  className="bg-white pt-1"
                  onChange={(e) => handleProblemSelect(e, field)}
                >
                  {errorsByCategory.map((error) => (
                    <MenuItem key={error.id} value={error.name}>
                      {error.name}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </FormControl>
        </div>

        <div className="mt-2 mb-8">
          <Button
            type="submit"
            content="Continuar"
            icon={options.icon}
            isDisabled={isProcessing || !selectedProblem}
          />
        </div>
      </form>
    </div>
  );
};

export default WarrantyForm;
