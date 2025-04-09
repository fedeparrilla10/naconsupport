import { useState } from "react";
import {
  TextField,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Button as MuiButton,
} from "@mui/material";
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
  const [ticket, setTicket] = useState(null);
  const [ticketImg, setTicketImg] = useState(null);
  const [ticketNumber, setTicketNumber] = useState("");
  const [file, setFile] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const updateUserTicket = useUserData((state) => state.updateUserTicket);
  const updateUserMedia = useUserData((state) => state.updateUserMedia);
  const userMedia = useUserData((state) => state.userMedia);
  console.log("🚀 ~ userMedia:", userMedia);
  const [loading, setLoading] = useState(false);
  const [AIResponse, setAIResponse] = useState("");
  const selectedProduct = useProductStore((state) => state.selectedProduct);

  const handleChange = (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setTicketImg(selectedFile);

    const reader = new FileReader();
    reader.onload = () => {
      setTicket(reader.result);
    };

    reader.readAsDataURL(selectedFile);
  };

  const checkTicket =
    AIResponse &&
    AIResponse.trim()
      .toLowerCase()
      .includes(selectedProduct?.name?.toLowerCase());

  const handleSubmit = (nextId) => {
    if (file) {
      updateUserTicket(ticketNumber);
      updateUserMedia(subtype, ticketImg);

      sendMSGToOpenAI({
        prompt: `Dame el nombre del producto que sale en esta foto`,
        image: file,
      }).then((res) => {
        setAIResponse(res?.choices[0]?.message?.content);
        setDialogOpen(true); // Open the dialog after getting AI response
      });

      return;
    }
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleContinue = (nextId) => {
    setDialogOpen(false);
    updateUserTicket(ticketNumber);
    updateUserMedia(subtype, ticketImg);
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
      <p>{AIResponse}</p>
      {/* <p
        className={
          checkTicket
            ? "text-green-500 font-bold text-xl"
            : "text-red-500 font-bold text-xl"
        }
      >
        {AIResponse
          ? checkTicket
            ? "Hay coincidencia"
            : "No hay coincidencia"
          : ""}
      </p> */}
      <div className="flex flex-col-reverse md:flex-row mt-4 mb-10">
        {options.map((option) => (
          <Button
            key={option.nextId}
            icon={option.icon}
            isDisabled={
              (option.hasCondition && (!file || !ticketNumber)) || isProcessing
            }
            content={option.text}
            onClick={() => handleSubmit(option.nextId)}
          />
        ))}
      </div>

      {/* Dialog */}
      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Resultado de la IA</DialogTitle>
        <DialogContent>
          {checkTicket ? (
            <p className="text-green-500 font-bold">
              Hay coincidencia con el producto seleccionado.
            </p>
          ) : (
            <p className="text-red-500 font-bold">
              No hay coincidencia con el producto seleccionado.
            </p>
          )}
        </DialogContent>
        <DialogActions>
          {!checkTicket && (
            <MuiButton onClick={handleDialogClose} color="secondary">
              Cancelar
            </MuiButton>
          )}
          {checkTicket && (
            <MuiButton
              onClick={() =>
                handleContinue(options.find((o) => o.hasCondition).nextId)
              }
              color="primary"
            >
              Continuar
            </MuiButton>
          )}
        </DialogActions>
      </Dialog>
    </section>
  );
};

export default UploadTicket;
