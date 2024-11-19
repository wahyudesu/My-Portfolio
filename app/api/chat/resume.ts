import { NextResponse } from "next/server";
import fs from 'fs';
import pdfParse from 'pdf-parse';
import { Groq } from "groq-sdk"; // Misalnya Anda ingin melanjutkan dengan Groq API.

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  try {
    // Path untuk dua file PDF
    const pdfPaths = [
      './path/to/resume1.pdf', // Gantilah dengan path file yang sesuai
      './path/to/resume2.pdf'  // Gantilah dengan path file yang sesuai
    ];

    // Ekstrak teks dari kedua file PDF
    const resumeTexts = await Promise.all(pdfPaths.map((path) => extractTextFromPdf(path)));

    // Gabungkan teks dari kedua resume menjadi satu knowledge base
    const knowledgeBase = resumeTexts.join("\n\n");

    // Optional: Store the knowledge base in a Groq database (atau platform lain)
    await groq.create({
      collection: "resumes", // pastikan ada koleksi untuk resume
      document: {
        text: knowledgeBase,
        extractedAt: new Date().toISOString(),
      }
    });

    // Kembalikan knowledge base yang telah digabungkan
    return NextResponse.json({ knowledgeBase });
  } catch (error) {
    console.error("Error extracting resume:", error);
    return NextResponse.json({ error: "An error occurred while processing the resume" }, { status: 500 });
  }
}

// Function to extract text from a PDF file
async function extractTextFromPdf(pdfPath: string): Promise<string> {
  try {
    // Membaca file PDF
    const buffer = fs.readFileSync(pdfPath);

    // Parse file PDF dan ambil teksnya
    const pdfData = await pdfParse(buffer);

    // Mengembalikan teks yang diekstrak dari PDF
    return pdfData.text;
  } catch (error) {
    console.error(`Error reading or parsing PDF at ${pdfPath}:`, error);
    throw new Error("Error extracting text from PDF");
  }
}
