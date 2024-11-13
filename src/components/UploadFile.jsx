import { useState } from "react";
import { MuiFileInput } from "mui-file-input";
import { TextField } from "@mui/material";
import Button from "./Button";

const UploadFile = ({
  message,
  question,
  options,
  handleOptionSelect,
}) => {
  console.log("🚀 ~ UploadFile ~ options:", options);
  const [file, setFile] = useState(null);
  const [ticketNumber, setTicketNumber] = useState("");

  const handleChange = (newFile) => {
    setFile(newFile);
  };

  return (
    <section className="flex flex-col items-center justify-center w-full gap-4">
      <h3 className="text-xl">{message}</h3>
      <h3 className="text-xl">{question}</h3>
      <div className="flex flex-col items-center gap-4">
        <MuiFileInput
          className="bg-slate-50 rounded-xl"
          value={file}
          onChange={handleChange}
          placeholder="Click para buscar e insertar el archivo"
        />
        <TextField
          placeholder="Número de ticket"
          value={ticketNumber}
          onChange={(e) => setTicketNumber(e.target.value)}
          className="bg-slate-50 rounded-xl pl-8"
          fullWidth
        />
      </div>
      <div className="mt-4 mb-10">
        {options.map((option) => (
          <Button
            key={option.nextId}
            isDisabled={option.hasCondition && (!file || !ticketNumber)}
            content={option.text}
            onClick={() => handleOptionSelect(option.nextId)}
          />
        ))}
      </div>
    </section>
  );
};

export default UploadFile;
