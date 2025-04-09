import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function sendMSGToOpenAI({ prompt, image, model = "gpt-4o" }) {
  const reader = new FileReader();
  const base64String = await new Promise((resolve) => {
    reader.onload = () => resolve(reader.result.split(",")[1]);
    reader.readAsDataURL(image);
  });

  const res = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: prompt,
          },
          {
            type: "image_url",
            image_url: {
              url: `data:image/jpeg;base64,${base64String}`,
            },
          },
        ],
      },
    ],
    model: model,
  });

  return res;
}
