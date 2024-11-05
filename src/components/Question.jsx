import Button from "./Button";

const Question = ({ question, options, handleOptionSelect }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-8">
      <img
        src="/supportnacon/questionmark.svg"
        alt="Realizar una consulta"
        width={70}
        height={70}
      />
      <h3 className="text-center text-lg md:text-start md:text-xl">
        {question}
      </h3>
      <div className="flex flex-col md:flex-row gap-1 md:gap-0 items-center justify-around md:w-2/4">
        {options.map((option, index) => (
          <Button
            key={index}
            onClick={() => handleOptionSelect(option.nextId)}
            content={option.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
