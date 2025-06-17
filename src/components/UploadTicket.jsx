import { useState } from "react";
import { TextField } from "@mui/material";
import useUserData from "../store/useUserData";
import useProductStore from "../store/useProductStore";
import useRetailStore from "../store/useRetailStore";
import Button from "./Button";
// import { sendMSGToOpenAI } from "../utils/openai";

const UploadTicket = ({
  subtype,
  message,
  question,
  options,
  handleOptionSelect,
  isProcessing,
}) => {
  const [ticketImg, setTicketImg] = useState(null);
  const [ticketNumber, setTicketNumber] = useState("");
  const [file, setFile] = useState(null);
  const updateUserTicket = useUserData((state) => state.updateUserTicket);
  const updateUserMedia = useUserData((state) => state.updateUserMedia);
  const updateTicketAIResponse = useUserData(
    (state) => state.updateTicketAIResponse
  );
  const [loading, setLoading] = useState(false);
  const [AIResponse, setAIResponse] = useState("");
  const selectedProduct = useProductStore((state) => state.selectedProduct);
  const selectedVariant = useProductStore((state) => state.selectedVariant);
  const selectedDate = useUserData((state) => state.selectedDate);
  const selectedStore = useRetailStore((state) => state.selectedStore);
  const selectedRetail = useRetailStore((state) => state.selectedRetail);

  const handleChange = (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setTicketImg(selectedFile);

    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
  };

  const handleSubmit = async (nextId) => {
    if (file) {
      setLoading(true);
      updateUserTicket(ticketNumber);
      updateUserMedia(subtype, ticketImg);

      try {
        const formData = new FormData();
        formData.append(
          "prompt",
          `1) ¿Esta imagen incluye el nombre de ${selectedProduct.name}, ${selectedProduct.value} o ${selectedVariant.ref}? Tus respuestas positivas deben empezar por COINCIDENCIA-PRODUCTO y las negativas con NOCOINCIDE-PRODUCTO, seguidas por un punto.
          
          2) ¿Esta imagen incluye el nombre de ${selectedStore.name} y ${selectedRetail.name}? Tus respuestas positivas deben empezar por COINCIDENCIA-TIENDA y las negativas con NOCOINCIDE-TIENDA, seguidas por un punto. Ten en cuenta que tienen que coincidir ambos valores, de lo contrario sería NOCOINCIDE-TIENDA.

          3) Comparame las fechas de ${selectedDate} y la que aparece en la imagen. Solamente me interesa la coincidencia en día, mes y año. Si estas coinciden, pones COINCIDENCIA-FECHA y si no, NOCOINCIDE-FECHA.

          4) Comparame el número de ticket que has introducido (${ticketNumber}) con el que aparece en la imagen. El mismo puede tener letras y números. Si coinciden, pones COINCIDENCIA-TICKET y si no, NOCOINCIDE-TICKET.
          `
        );
        formData.append("image", file);

        const res = await fetch(
          `${import.meta.env.VITE_PUBLIC_API_URL}/api/openai/send`,
          {
            method: "POST",
            body: formData,
          }
        );

        if (!res.ok) {
          throw new Error("Error en la petición al backend");
        }

        const data = await res.json();
        const response = data?.choices?.[0]?.message?.content;

        setAIResponse(response);
        updateTicketAIResponse(response);
      } catch (error) {
        console.error("Error al enviar a OpenAI:", error);
        setAIResponse(error.message);
      } finally {
        setLoading(false);
      }
    }

    handleOptionSelect(nextId);
  };

  return (
    <section className="flex flex-col items-center justify-center w-full gap-4">
      <div className="flex flex-col items-center pb-4">
        <p className="text-center md:text-start px-8 uppercase text-lg font-semibold">
          {message}
        </p>
        <h3 className="text-2xl text-center md:text-start xl:w-3/4 xl:text-center">
          {question}
        </h3>
      </div>
      <div className="flex flex-col items-center gap-4 pb-2">
        <div>
          <input
            className={`block w-[400px] text-md text-gray-400 border border-gray-300 cursor-pointer bg-gray-50 focus:outline-none py-4 px-3 rounded-md`}
            id="uploadInput"
            type="file"
            onChange={handleChange}
          />
          <p className="text-xs text-gray-400 mt-1 pl-2">Max: 2MB</p>
        </div>
        <TextField
          placeholder="Número de ticket"
          value={ticketNumber}
          onChange={(e) => setTicketNumber(e.target.value)}
          className="bg-slate-50 rounded-md pl-8"
          fullWidth
        />
      </div>
      <div className="flex flex-col-reverse md:flex-row mt-4 mb-10">
        {options.map((option) => (
          <Button
            key={option.nextId}
            icon={option.icon}
            isDisabled={
              (option.hasCondition && (!file || !ticketNumber || loading)) ||
              isProcessing
            }
            content={option.text}
            onClick={() => handleSubmit(option.nextId)}
          />
        ))}
      </div>
    </section>
  );
};

export default UploadTicket;
