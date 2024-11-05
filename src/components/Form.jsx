import { useForm } from "react-hook-form";
import Button from "./Button";

const Form = ({ question, options, freeWriting, handleOptionSelect }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    if (data) {
      handleOptionSelect(options.nextId);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-4">
      <img
        src="/supportnacon/questionmark.svg"
        alt="Realizar una consulta"
        width={40}
        height={40}
        className="hidden md:block"
      />
      <h3 className="text-xl">{question}</h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-around w-2/4 gap-3 md:gap-4"
      >
        <input
          {...register("name", {
            required: "El campo 'Nombre' es requerido",
          })}
          type="text"
          placeholder="Nombre"
          className={`w-80 py-2 px-2 text-black bg-gray-100 focus:ring-2 focus:ring-blue-300 rounded-lg 
            shadow-lg transition duration-200 ease-in-out transform focus:outline-none ${
              errors.name ? "ring-2 ring-red-400" : ""
            }`}
        />

        <input
          {...register("phone", {
            required: "El campo 'Teléfono' es requerido",
            pattern: {
              value: /^[0-9]+$/,
              message: "Este campo solo admite números",
            },
          })}
          type="text"
          placeholder="Teléfono"
          inputMode="tel"
          className={`w-80 py-2 px-2 text-black bg-gray-100 focus:ring-2 focus:ring-blue-300 rounded-lg 
            shadow-lg transition duration-200 ease-in-out transform focus:outline-none ${
              errors.phone ? "ring-2 ring-red-400" : ""
            }`}
        />

        <input
          {...register("email", {
            required: "El campo 'Email' es requerido",
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
              message: "Introduzca un correo electrónico válido",
            },
          })}
          type="email"
          placeholder="Email"
          className={`w-80 py-2 px-2 text-black bg-gray-100 focus:ring-2 focus:ring-blue-300 rounded-lg 
            shadow-lg transition duration-200 ease-in-out transform focus:outline-none ${
              errors.email ? "ring-2 ring-red-400" : ""
            }`}
        />

        {freeWriting && (
          <textarea
            {...register("message")}
            placeholder="Mensaje"
            className={`w-80 h-32 py-2 px-2 text-black bg-gray-100 focus:ring-2 focus:ring-blue-300 rounded-lg 
            shadow-lg transition duration-200 ease-in-out transform focus:outline-none}`}
          />
        )}

        <div className="grid grid-cols-1 place-items-start gap-1">
          <div className="flex items-center justify-center gap-2">
            <input
              {...register("terms", {
                required: "Debe aceptar los términos y condiciones",
              })}
              type="checkbox"
              className="h-4 w-4 text-blue-600"
            />
            <label htmlFor="terms" className="text-sm">
              Acepto los términos y condiciones
            </label>
          </div>

          <div className="flex items-center justify-center gap-2">
            <input
              {...register("privacy", {
                required: "Debe aceptar los términos y condiciones",
              })}
              type="checkbox"
              className="h-4 w-4 text-blue-600"
            />
            <label htmlFor="privacy" className="text-sm">
              Acepto la política de privacidad
            </label>
          </div>
        </div>

        {(errors.name || errors.email || errors.phone) && (
          <p className="text-xs md:text-sm text-red-400 text-center">
            Lo sentimos pero necesitamos sus datos para poder contactar con
            usted. Por favor, introduzca su nombre, teléfono y email.
          </p>
        )}

        {(errors.terms || errors.privacy) && (
          <p className="text-xs md:text-sm text-red-400 text-center">
            Debe aceptar los términos y condiciones y la política de privacidad
          </p>
        )}

        <div className="mt-2 mb-8">
          <Button type="submit" content="Continuar" />
        </div>
      </form>
    </div>
  );
};

export default Form;
