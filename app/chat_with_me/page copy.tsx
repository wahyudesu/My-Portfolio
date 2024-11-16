"use client";

import { useState } from "react";
import { generateText } from 'ai';
import { createOpenAI as createGroq } from '@ai-sdk/openai';

const groq = createGroq({apiKey: process.env.GROQ_API_KEY,});

export default function HelloWorldPage() {
  const [recipe, setRecipe] = useState('');

  const fetchRecipe = async () => {
    const { text } = await generateText({
      model: groq('llama-3.1-405b-reasoning'),
      prompt: 'What is love?',
    });
    setRecipe(text);
  };

  return (
    <div>
      <h1 className="mb-2 text-6xl sm:text-7xl font-semibold tracking-tighter text-center">Halaman ini masih dalam tahap development</h1>
      <h2 className="mb-2 text-2xl sm:text-4xl font-semibold tracking-tighter text-center">Feature: Chat with ai (Retrieval Information)</h2>
      <button onClick={fetchRecipe} className="mt-4 p-2 bg-blue-500 text-white rounded">Get Recipe</button>
      {recipe && <p className="mt-4">{recipe}</p>}
    </div>
  );
}
