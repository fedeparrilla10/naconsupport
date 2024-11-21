import useProductStore from "../store/useProductStore";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Button from "./Button";
import { frecuentlyAsked, PDFs, videos } from "../data/faqs";

const FAQ = ({ message, question, handleOptionSelect }) => {
  const selectedProduct = useProductStore((state) => state.selectedProduct);

  return (
    <section className="flex flex-col items-center justify-center w-full gap-8">
      <div className="flex flex-col items-center">
        <p className="text-center md:text-start px-8 uppercase text-lg font-semibold">
          {message}
        </p>
        <h3 className="text-2xl text-center md:text-start">{question}</h3>
      </div>

      <div className="flex flex-col items-center gap-8 w-full">
        <div className="flex flex-col flex-wrap justify-center items-center md:flex-row gap-4">
          {PDFs.map((faq) => {
            return (
              <a href={faq.url} key={faq.name} target="_blank">
                <button
                  className="flex flex-row items-center border-2 border-gray-50 w-[350px] md:w-[180px] gap-4 cursor-pointer rounded-lg hover:bg-gray-700 hover:text-white 
          transition duration-300 py-4 px-2"
                >
                  <img
                    src="/naconsupport/pdf.svg"
                    alt="Realizar una consulta"
                    width={30}
                    height={30}
                  />
                  <p className="text-center">{faq.name}</p>
                </button>
              </a>
            );
          })}
        </div>
        <div className="w-full md:w-1/2">
          {frecuentlyAsked.map((faq) => {
            return (
              <Accordion
                sx={{
                  borderRadius: "8px",
                  color: "#f1f5f9",
                  overflow: "hidden",
                  bgcolor: "#171717",
                  "&:not(:last-child)": {
                    marginBottom: "3px",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ArrowDropDownIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{
                    bgcolor: "#171717",
                    color: "#f1f5f9",
                    padding: "12px 16px",
                    "&:hover": {
                      bgcolor: "#374151",
                    },
                    "&.Mui-expanded": {
                      bgcolor: "#475569",
                      color: "#f1f5f9",
                    },
                    "& .MuiAccordionSummary-expandIconWrapper": {
                      color: "#f1f5f9",
                    },
                  }}
                >
                  {faq.question}
                </AccordionSummary>
                <AccordionDetails>{faq.answer}</AccordionDetails>
              </Accordion>
            );
          })}
        </div>
        <div className="flex flex-col xl:flex-row gap-12 md:gap-8 pt-2">
          {videos.map((video) => {
            return (
              <div className="flex flex-col items-center justify-center w-full gap-6">
                <h3 className="text-center text-xl md:text-start uppercase font-semibold">
                  {video.title}
                </h3>

                <iframe
                  className="w-[360px] h-[225px] md:w-[560px] md:h-[315px]"
                  src={video.url}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullscreen
                ></iframe>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-1 md:gap-0 items-center justify-around md:w-2/4">
        <a href="https://www.nacongamers.es/" className="mt-4">
          <Button content="Volver a inicio" icon="/naconsupport/back.svg" />
        </a>
      </div>
    </section>
  );
};

export default FAQ;
