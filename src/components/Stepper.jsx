import Question from "./Question";
import Form from "./Form";
import Select from "./Select";
import EndMessage from "./EndMessage";

const Stepper = ({
  type,
  question,
  message,
  options,
  products,
  freeWriting,
  handleOptionSelect,
}) => {
  return (
    <section className="w-full px-4 md:w-2/4">
      {type === "question" && (
        <Question
          question={question}
          options={options}
          handleOptionSelect={handleOptionSelect}
        />
      )}
      {type === "form" && (
        <Form
          question={question}
          options={options}
          handleOptionSelect={handleOptionSelect}
          freeWriting={freeWriting}
        />
      )}
      {type === "select" && (
        <Select
          question={question}
          options={options}
          handleOptionSelect={handleOptionSelect}
          products={products}
        />
      )}
      {type === "end" && (
        <EndMessage message={message} handleOptionSelect={handleOptionSelect} />
      )}
    </section>
  );
};

export default Stepper;
