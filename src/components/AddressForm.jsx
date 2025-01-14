import { useForm } from "react-hook-form";
import Button from "./Button";
import useUserData from "../store/useUserData";

const AddressForm = ({
  message,
  question,
  options,
  handleOptionSelect,
  isProcessing,
}) => {
  const updateAddressFormData = useUserData(
    (state) => state.updateAddressFormData
  );
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    if (data) {
      updateAddressFormData(data);
    }

    handleOptionSelect(options.nextId);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-4 pb-12">
      <div className="flex flex-col items-center">
        <p className="text-center md:text-start px-8 uppercase text-lg font-semibold">
          {message}
        </p>
        <h3 className="text-2xl text-center md:text-start">{question}</h3>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-around w-2/4 gap-3 md:gap-4 pt-4"
      >
        <input
          {...register("address", {
            required: "El campo 'Dirección' es requerido",
          })}
          type="text"
          placeholder="Dirección"
          className={`w-80 py-2 px-2 text-black bg-gray-100 focus:ring-2 focus:ring-blue-300 rounded-lg 
            shadow-lg transition duration-200 ease-in-out transform focus:outline-none ${
              errors.address ? "ring-2 ring-red-400" : ""
            }`}
        />

        <input
          {...register("town", {
            required: "El campo 'Municipio' es requerido",
          })}
          type="text"
          placeholder="Municipio"
          className={`w-80 py-2 px-2 text-black bg-gray-100 focus:ring-2 focus:ring-blue-300 rounded-lg 
            shadow-lg transition duration-200 ease-in-out transform focus:outline-none ${
              errors.town ? "ring-2 ring-red-400" : ""
            }`}
        />

        <input
          {...register("postal_code", {
            required: "El campo 'Código Postal' es requerido",
          })}
          type="text"
          placeholder="Código Postal"
          className={`w-80 py-2 px-2 text-black bg-gray-100 focus:ring-2 focus:ring-blue-300 rounded-lg 
            shadow-lg transition duration-200 ease-in-out transform focus:outline-none ${
              errors.postal_code ? "ring-2 ring-red-400" : ""
            }`}
        />

        <input
          {...register("province", {
            required: "El campo 'Provincia' es requerido",
          })}
          type="text"
          placeholder="Provincia"
          className={`w-80 py-2 px-2 text-black bg-gray-100 focus:ring-2 focus:ring-blue-300 rounded-lg 
            shadow-lg transition duration-200 ease-in-out transform focus:outline-none ${
              errors.province ? "ring-2 ring-red-400" : ""
            }`}
        />

        {(errors.address ||
          errors.town ||
          errors.province ||
          errors.postal_code ||
          errors.province) && (
          <p clas1sName="text-xs md:text-sm text-red-400 text-center">
            Lo sentimos pero necesitamos sus datos para poder contactar con
            usted. Por favor, introduzca su dirección completa.
          </p>
        )}

        <div className="mt-4">
          <Button
            type="submit"
            content="Enviar Formulario"
            icon={options.icon}
            isDisabled={isProcessing}
          />
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
