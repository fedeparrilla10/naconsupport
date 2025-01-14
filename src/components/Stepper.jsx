import Question from "./Question";
import FAQ from "./FAQ";
import Form from "./Form";
import WarrantyForm from "./WarrantyForm";
import AddressForm from "./AddressForm";
import SelectProduct from "./SelectProduct";
import SelectStore from "./SelectStore";
import SelectDate from "./SelectDate";
import EndMessage from "./EndMessage";
import EndProducts from "./EndProducts";
import EndSpecificStore from "./EndSpecificStore";
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
  isProcessing,
}) => {
  return (
    <section className="w-full px-4 md:w-4/5 xl:w-3/4">
      {type === "question" && (
        <Question
          message={message}
          question={question}
          options={options}
          handleOptionSelect={handleOptionSelect}
          isProcessing={isProcessing}
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
          isProcessing={isProcessing}
        />
      )}
      {type === "warranty_form" && (
        <WarrantyForm
          message={message}
          question={question}
          options={options}
          handleOptionSelect={handleOptionSelect}
          isProcessing={isProcessing}
        />
      )}
      {type === "address_form" && (
        <AddressForm
          message={message}
          question={question}
          options={options}
          handleOptionSelect={handleOptionSelect}
          isProcessing={isProcessing}
        />
      )}
      {type === "select_product" && (
        <SelectProduct
          message={message}
          question={question}
          options={options}
          handleOptionSelect={handleOptionSelect}
          isProcessing={isProcessing}
        />
      )}
      {type === "select_store" && (
        <SelectStore
          message={message}
          question={question}
          options={options}
          handleOptionSelect={handleOptionSelect}
          isProcessing={isProcessing}
        />
      )}
      {type === "select_date" && (
        <SelectDate
          message={message}
          question={question}
          options={options}
          handleOptionSelect={handleOptionSelect}
          isProcessing={isProcessing}
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
      {type === "end_specific_store" && <EndSpecificStore />}
      {type === "file" && (
        <UploadFile
          subtype={subtype}
          message={message}
          question={question}
          options={options}
          handleOptionSelect={handleOptionSelect}
          isProcessing={isProcessing}
        />
      )}
      {type === "picture_files" && (
        <UploadImages
          message={message}
          question={question}
          options={options}
          handleOptionSelect={handleOptionSelect}
          isProcessing={isProcessing}
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
