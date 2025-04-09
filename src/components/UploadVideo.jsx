import { useState } from "react";
import { MuiFileInput } from "mui-file-input";
import useUserData from "../store/useUserData";
import Button from "./Button";

const isSafari =
  /Safari/.test(window.navigator.userAgent) &&
  !/Chrome/.test(window.navigator.userAgent);

const UploadVideo = ({
  subtype,
  message,
  question,
  options,
  handleOptionSelect,
  isProcessing,
}) => {
  const [file, setFile] = useState(null);
  const updateUserMedia = useUserData((state) => state.updateUserMedia);

  const handleChange = (newFile) => {
    if (isSafari && newFile) {
      const maxSize = 20 * 1024 * 1024;
      if (newFile.size > maxSize) {
        alert("El video no puede superar los 10MB.");
        return;
      }
    }

    setFile(newFile);
  };

  const handleSubmit = (nextId) => {
    if (file) {
      updateUserMedia(subtype, file);
      handleOptionSelect(nextId);
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
        <MuiFileInput
          className="bg-slate-50 rounded-xl"
          value={file}
          onChange={handleChange}
          placeholder="Click para buscar e insertar el archivo"
          inputProps={subtype === "video" && { accept: "video/*" }}
        />
        <div className="flex flex-col items-center">
          <div className="mt-4">
            {file && (
              <video width="400" controls>
                <source src={URL.createObjectURL(file)} type="video" />
              </video>
            )}
          </div>

          <p className="text-md text-center md:text-start xl:w-3/4 xl:text-center text-orange-300">
            <span className="font-bold">ATENCIÓN</span>: Tenga en cuenta que los
            vídeos superiores a 20MB pueden resultar en una demora del proceso a
            la hora de enviar la información.
            <span className="block">
              El tiempo de carga final puede variar dependiendo de la velocidad
              de su conexión a internet.
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row mt-4 mb-10">
        {options.map((option) => (
          <Button
            key={option.nextId}
            isDisabled={(option.hasCondition && !file) || isProcessing}
            icon={option.icon}
            content={option.text}
            onClick={() => handleSubmit(option.nextId)}
          />
        ))}
      </div>
    </section>
  );
};

export default UploadVideo;
