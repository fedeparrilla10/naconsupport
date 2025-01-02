import { useState } from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import useUserData from "../store/useUserData";
import Button from "./Button";

const SelectDate = ({
  message,
  question,
  options,
  handleOptionSelect,
  isProcessing,
}) => {
  const updateSelectedDate = useUserData((state) => state.updateSelectedDate);
  const [date, setDate] = useState(dayjs());
  const minDate = dayjs().subtract(3, "year");
  const isValidDate = date < minDate;

  const handleSubmit = (nextId) => {
    updateSelectedDate(date);
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
      <div className="flex flex-col items-center gap-4">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            className="xl:w-1/4"
            format="DD/MM/YYYY"
            value={date}
            onChange={(newDate) => setDate(newDate)}
            sx={{
              backgroundColor: "white",
              color: "black",
              borderRadius: "0.5rem",
            }}
          />
        </LocalizationProvider>
        <p className="pt-2 md:pt-4 md:w-1/2">
          Recuerde que todas las garantías tienen una fecha de caducidad de tres
          años. Si el producto fue adquirido antes de ese intervalo de tiempo,
          no podrá solicitarla.
        </p>
        {isValidDate && (
          <p className="text-sm text-red-500">
            La fecha de compra no puede ser anterior al{" "}
            {minDate.format("DD/MM/YYYY")}
          </p>
        )}
      </div>
      <div className="mt-4 mb-10">
        <Button
          content="Continuar"
          icon={options.icon}
          isDisabled={isProcessing}
          onClick={() =>
            handleSubmit(
              !isValidDate ? options.validDateNextId : options.invalidDateNextId
            )
          }
        />
      </div>
    </section>
  );
};

export default SelectDate;
