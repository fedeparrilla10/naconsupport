import { useForm, Controller } from "react-hook-form";
import { RadioGroup, Radio, FormControlLabel, Typography } from "@mui/material";
import Button from "./Button";
import useUserData from "../store/useUserData";

const WarrantyForm = ({ message, question, options, handleOptionSelect }) => {
  const updateProductFormData = useUserData(
    (state) => state.updateProductFormData
  );
  const { control, handleSubmit } = useForm({
    defaultValues: {
      isWet: "",
      isDamaged: "",
      isManipulatedByAnimals: "",
      isUpdated: "",
    },
  });

  const onSubmit = (data) => {
    updateProductFormData(data);

    const isValid =
      data.isWet === "no" &&
      data.isDamaged === "no" &&
      data.isManipulatedByAnimals === "no" &&
      data.isUpdated === "yes";

    isValid
      ? handleOptionSelect(options.validNextId)
      : handleOptionSelect(options.invalidNextId);
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

        <div className="mt-2 mb-8">
          <Button type="submit" content="Continuar" icon={options.icon} />
        </div>
      </form>
    </div>
  );
};

export default WarrantyForm;
