import { useState } from "react";
import { MuiFileInput } from "mui-file-input";
import { TextField } from "@mui/material";
import useUserData from "../store/useUserData";
import Button from "./Button";

const UploadFile = ({
  subtype,
  message,
  question,
  options,
  handleOptionSelect,
}) => {
  const [file, setFile] = useState(null);
  const [ticketNumber, setTicketNumber] = useState("");
  const userTicket = useUserData((state) => state.userTicket);
  const updateUserTicket = useUserData((state) => state.updateUserTicket);
  const updateUserMedia = useUserData((state) => state.updateUserMedia);

  const handleChange = (newFile) => {
    setFile(newFile);
  };

  const handleSubmit = (nextId) => {
    if (file) {
      subtype === "ticket" && updateUserTicket(ticketNumber);
      updateUserMedia(subtype, file);
      handleOptionSelect(nextId);
    }
    handleOptionSelect(nextId);
  };

  return (
    <section className="flex flex-col items-center justify-center w-full gap-4">
      <h3 className="text-lg">{message}</h3>
      <h3 className="text-xl">{question}</h3>
      <div className="flex flex-col items-center gap-4">
        <MuiFileInput
          className="bg-slate-50 rounded-xl"
          value={file}
          onChange={handleChange}
          placeholder="Click para buscar e insertar el archivo"
        />

        {/* Si es para subir el ticket */}
        {subtype === "ticket" && (
          <TextField
            placeholder="Número de ticket"
            value={ticketNumber}
            onChange={(e) => setTicketNumber(e.target.value)}
            className="bg-slate-50 rounded-xl pl-8"
            fullWidth
          />
        )}

        {/* Si es para subir un vídeo */}
        {subtype === "video" && (
          <div className="mt-4">
            {file && (
              <video width="400" controls>
                <source src={URL.createObjectURL(file)} type={file.type} />
              </video>
            )}
          </div>
        )}
      </div>
      <div className="flex flex-col md:flex-row mt-4 mb-10">
        {options.map((option) => (
          <Button
            key={option.nextId}
            isDisabled={
              option.hasCondition &&
              (!file || (subtype === "ticket" && !ticketNumber))
            }
            content={option.text}
            onClick={() => handleSubmit(option.nextId)}
          />
        ))}
      </div>
    </section>
  );
};

export default UploadFile;
