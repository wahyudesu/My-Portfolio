import { NextResponse } from "next/server";
import { Groq } from "groq-sdk";
// import { createGroq } from '@ai-sdk/groq';

// const groq = createGroq({
//     apiKey: process.env.GROQ_API_KEY as string,
// });

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: "Berikan jawaban dalam bahasa Indonesia. Singkat padat dan jelas" },
        { role: "user", content: message },
      ],
      model: "llama-3.1-70b-versatile",
    });
    
    const response = chatCompletion.choices[0].message.content;
    
    return NextResponse.json({ response: response });
  } catch (error) {
    console.error("Error in chat API:", error);
    return NextResponse.json(
      { error: "Maaf bot sedang eror, coba lain kali" },
      { status: 500 }
    );
  }
}
