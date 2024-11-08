import Question from "./Question";
import Form from "./Form";
import SelectProduct from "./SelectProduct";
import SelectStore from "./SelectStore";
import EndMessage from "./EndMessage";

const Stepper = ({
  type,
  question,
  message,
  options,
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
      {type === "select_product" && (
        <SelectProduct
          question={question}
          options={options}
          handleOptionSelect={handleOptionSelect}
        />
      )}
      {type === "select_store" && (
        <SelectStore
          question={question}
          options={options}
          handleOptionSelect={handleOptionSelect}
        />
      )}
      {type === "end" && (
        <EndMessage message={message} handleOptionSelect={handleOptionSelect} />
      )}
    </section>
  );
};

export default Stepper;
