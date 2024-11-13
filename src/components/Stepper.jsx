import Question from "./Question";
import Form from "./Form";
import SelectProduct from "./SelectProduct";
import SelectStore from "./SelectStore";
import SelectDate from "./SelectDate";
import EndMessage from "./EndMessage";
import EndProducts from "./EndProducts";
import UploadFile from "./UploadFile";

const Stepper = ({
  type,
  question,
  message,
  options,
  freeWriting,
  storeData,
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
          message={message}
          question={question}
          options={options}
          handleOptionSelect={handleOptionSelect}
        />
      )}
      {type === "select_date" && (
        <SelectDate
          message={message}
          question={question}
          options={options}
          handleOptionSelect={handleOptionSelect}
        />
      )}
      {type === "end" && (
        <EndMessage
          message={message}
          handleOptionSelect={handleOptionSelect}
          storeData={storeData}
        />
      )}
      {type === "end_products" && (
        <EndProducts
          message={message}
          question={question}
          handleOptionSelect={handleOptionSelect}
        />
      )}
      {type === "file" && (
        <UploadFile
          message={message}
          question={question}
          options={options}
          handleOptionSelect={handleOptionSelect}
        />
      )}
    </section>
  );
};

export default Stepper;
