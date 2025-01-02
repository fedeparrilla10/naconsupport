import BigButton from "./BigButton";

const Question = ({
  message,
  question,
  options,
  handleOptionSelect,
  isProcessing,
}) => {
  return (
    <section className="flex flex-col items-center justify-center w-full gap-8 pt-4">
      <div className="flex flex-col items-center gap-2">
        <p className="text-center md:text-start px-8 uppercase text-lg font-semibold">
          {message}
        </p>
        <h3 className="text-center md:text-start text-2xl">{question}</h3>
      </div>
      <div className="flex flex-row gap-8 items-center justify-around md:justify-center md:w-2/4">
        {options.map((option, index) => (
          <BigButton
            key={index}
            onClick={() => handleOptionSelect(option.nextId)}
            content={option.text}
            icon={option.icon}
            isDisabled={isProcessing}
          />
        ))}
      </div>
    </section>
  );
};

export default Question;
