import { useState } from "react";
import { MuiFileInput } from "mui-file-input";
import { TextField } from "@mui/material";
import { Button as MUIButton } from "@mui/material";
import useUserData from "../store/useUserData";
import Button from "./Button";

const UploadImages = ({
  message,
  question,
  options,
  handleOptionSelect,
  isProcessing,
}) => {
  const updateUserMedia = useUserData((state) => state.updateUserMedia);
  const [images, setImages] = useState([]);
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleUploadFile = (newFile) => {
    setFile(newFile);
  };

  const handleUpload = () => {
    if (file && images.length < 5) {
      setImages([...images, file]);
      setFile(null);
    } else if (images.length === 5) {
      setError("Solo puedes subir 5 imágenes");
    }
  };

  const handleSubmit = (nextId) => {
    updateUserMedia("images", images);
    handleOptionSelect(nextId);
  };

  return (
    <section className="flex flex-col items-center justify-center w-full gap-4">
      <div className="flex flex-col items-center pb-4">
        <p className="text-center md:text-start px-8 uppercase text-lg font-semibold">
          {message}
        </p>
        <h3 className="text-2xl text-center md:text-start">{question}</h3>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col md:flex-row gap-3">
          <MuiFileInput
            className="bg-slate-50 rounded-xl"
            value={file}
            onChange={handleUploadFile}
            placeholder="Click para subir una imagen"
          />
          <MUIButton
            onClick={handleUpload}
            variant="contained"
            size="small"
            disabled={!file}
            sx={{
              "&.Mui-disabled": {
                backgroundColor: "gray",
                color: "#FAFAFA",
                opacity: 0.8,
              },
            }}
          >
            Subir
          </MUIButton>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <article className="flex flex-col md:flex-row gap-4 md:gap-2 items-center">
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={URL.createObjectURL(image)}
                alt="uploaded"
                className="h-[300px] w-[300px] object-cover rounded-xl"
              />
            </div>
          ))}
        </article>
      </div>
      <div className="mt-4 mb-10 flex flex-col-reverse md:flex-row">
        {options.map((option) => (
          <Button
            key={option.nextId}
            isDisabled={
              (option.hasCondition && images.length === 0) || isProcessing
            }
            icon={option.icon}
            content={option.text}
            onClick={() => handleSubmit(option.nextId)}
          />
        ))}
      </div>
    </section>
  );
};

export default UploadImages;
