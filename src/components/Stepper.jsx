import Question from "./Question";
import FAQ from "./FAQ";
import Form from "./Form";
import WarrantyForm from "./WarrantyForm";
import SelectProduct from "./SelectProduct";
import SelectStore from "./SelectStore";
import SelectDate from "./SelectDate";
import EndMessage from "./EndMessage";
import EndProducts from "./EndProducts";
import UploadFile from "./UploadFile";
import UploadImages from "./UploadImages";
import DataConfirmation from "./DataConfirmation";

const Stepper = ({
  type,
  subtype,
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
      {type === "faq" && (
        <FAQ question={question} handleOptionSelect={handleOptionSelect} />
      )}
      {type === "form" && (
        <Form
          question={question}
          options={options}
          handleOptionSelect={handleOptionSelect}
          freeWriting={freeWriting}
        />
      )}
      {type === "warranty_form" && (
        <WarrantyForm
          question={question}
          options={options}
          handleOptionSelect={handleOptionSelect}
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
          subtype={subtype}
          message={message}
          question={question}
          options={options}
          handleOptionSelect={handleOptionSelect}
        />
      )}
      {type === "picture_files" && (
        <UploadImages
          message={message}
          question={question}
          options={options}
          handleOptionSelect={handleOptionSelect}
        />
      )}
      {type === "data_confirmation" && (
        <DataConfirmation
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
