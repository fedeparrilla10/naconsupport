import { useState, useEffect, useCallback } from "react";
import OpenAI from "openai";

const useOpenAI = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeReceipt = useCallback(async (base64Image) => {
    const client = new OpenAI({
      apiKey: import.meta.env.VITE_PUBLIC_OPENAI_API_KEY,
      dangerouslyAllowBrowser: true,
    });

    try {
      const completion = await client.chat.completions.create({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: "You are an image reading assistant.",
          },
          {
            role: "user",
            content: [
              { type: "text", text: "Describe this image." },
              { type: "image_url", image_url: { url: base64Image } },
            ],
          },
        ],
      });

      setResponse(completion.choices[0].message.content);
    } catch (error) {
      console.error("Error fetching OpenAI response:", error);
    }
  }, []);

  useEffect(() => {
    analyzeReceipt();
  }, [analyzeReceipt]);

  return { response, analyzeReceipt, loading };
};

export default useOpenAI;
