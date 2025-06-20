import { useForm } from "react-hook-form";
import Button from "./Button";
import useUserData from "../store/useUserData";
import { generalQuestionApi } from "../api/general";

const Form = ({
  message,
  question,
  options,
  freeWriting,
  aproxTime,
  handleOptionSelect,
  isProcessing,
}) => {
  const updateContactFormData = useUserData(
    (state) => state.updateContactFormData
  );
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    if (data) {
      updateContactFormData(data);

      if (freeWriting) {
        try {
          await generalQuestionApi.storeGeneralQuestion({
            name: data.name,
            phone: data.phone,
            email: data.email,
            message: data.message,
          });
          handleOptionSelect(options.nextId);
          return;
        } catch (error) {
          console.error("Error al hacer la solicitud:", error);
        }
      }
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
        className="flex flex-col items-center justify-around w-full md:w-2/4 gap-3 md:gap-4 pt-4"
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
              Acepto los{" "}
              <a
                target="_blank"
                href="https://www.nacongamers.es/info/condiciones_venta"
                className="underline"
              >
                términos y condiciones
              </a>
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
              Acepto la{" "}
              <a
                target="_blank"
                className="underline"
                href="https://www.nacongamers.es/info/politica_privacidad"
              >
                política de privacidad
              </a>
            </label>
          </div>

          <div className="flex items-center justify-center gap-2">
            <input
              {...register("promotions")}
              type="checkbox"
              className="h-4 w-4 text-blue-600"
            />
            <label htmlFor="privacy" className="text-sm">
              Acepto recibir ofertas y promociones NACON.
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

        {aproxTime && (
          <>
            <p className="text-sm md:text-md text-center md:w-3/4 pt-4">
              <span className="text-red-500 font-bold md:text-lg">
                ¡IMPORTANTE!
              </span>{" "}
              {aproxTime}
            </p>

            <h4 class="uppercase underline font-semibold text-center md:text-start pt-4">
              Documentación Obligatoria
            </h4>
            <ul>
              <li class="list-disc">Ticket</li>
              <li class="list-disc">Imágenes</li>
              <li class="list-disc">Vídeo con el fallo</li>
            </ul>
          </>
        )}

        <div className="mt-4">
          <Button
            type="submit"
            content="Enviar Formulario"
            icon={options.icon}
            isDisabled={isProcessing}
            // onClick={freeWriting && handleGeneralQuestionSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
