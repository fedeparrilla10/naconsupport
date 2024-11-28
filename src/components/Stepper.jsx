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
  aproxTime,
  storeData,
  handleOptionSelect,
}) => {
  return (
    <section className="w-full px-4 md:w-4/5 xl:w-3/4">
      {type === "question" && (
        <Question
          message={message}
          question={question}
          options={options}
          handleOptionSelect={handleOptionSelect}
        />
      )}
      {type === "faq" && (
        <FAQ
          message={message}
          question={question}
          handleOptionSelect={handleOptionSelect}
        />
      )}
      {type === "form" && (
        <Form
          message={message}
          question={question}
          options={options}
          handleOptionSelect={handleOptionSelect}
          aproxTime={aproxTime}
          freeWriting={freeWriting}
        />
      )}
      {type === "warranty_form" && (
        <WarrantyForm
          message={message}
          question={question}
          options={options}
          handleOptionSelect={handleOptionSelect}
        />
      )}
      {type === "select_product" && (
        <SelectProduct
          message={message}
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
          options={options}
          handleOptionSelect={handleOptionSelect}
        />
      )}
    </section>
  );
};

export default Stepper;
