import { useState } from "react";
import { TextField } from "@mui/material";
import useUserData from "../store/useUserData";
import useProductStore from "../store/useProductStore";
import Button from "./Button";
import { sendMSGToOpenAI } from "../utils/openai";

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
        const res = await sendMSGToOpenAI({
          prompt: `¿Esta imagen incluye el nombre de ${selectedProduct.name} o ${selectedProduct.value}? Tus respuestas positivas deben empezar por COINCIDENCIA y las negativas con NO COINCIDE, seguidas por un punto. Transcribí el nombre exacto que ves, tanto en lo positivo como en lo negativo.`,
          image: file,
        });
        const response = res?.choices[0]?.message?.content;
        setAIResponse(response);
        updateTicketAIResponse(response);
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
