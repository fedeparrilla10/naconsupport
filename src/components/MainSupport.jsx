import { useState } from "react";
import { questions } from "../data/questions";
import Hero from "./Hero";
import Stepper from "./Stepper";
import { clickLogsApi } from "../api/click_logs";

const MainSupport = () => {
  const [questionId, setQuestionId] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  const currentQuestion = questions.find((q) => q.id === questionId);

  const handleOptionSelect = async (nextId) => {
    if (isProcessing) return;

    setIsProcessing(true);
    try {
      await clickLogsApi.storeClickLogs({
        section_id: nextId,
      });

      setQuestionId(nextId);
    } catch (error) {
      console.error("Error storing click log", error);
    } finally {
      setIsProcessing(false);
    }
  };

  if (!currentQuestion) {
    return null;
  }

  return (
    <section className="flex flex-col items-center justify-center gap-10 pt-12 md:pt-24">
      {questionId === 1 ? (
        <>
          <Hero
            handleOptionSelect={handleOptionSelect}
            isProcessing={isProcessing}
          />
        </>
      ) : (
        <Stepper
          type={currentQuestion.type}
          subtype={currentQuestion.subtype}
          question={currentQuestion.question}
          message={currentQuestion.message}
          options={currentQuestion.options || []}
          handleOptionSelect={handleOptionSelect}
          freeWriting={currentQuestion.freeWriting}
          aproxTime={currentQuestion.aproxTime}
          storeData={currentQuestion.storeData}
          isProcessing={isProcessing}
        />
      )}
    </section>
  );
};

export default MainSupport;
