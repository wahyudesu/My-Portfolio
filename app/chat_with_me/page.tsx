"use client";

import { useState, FormEvent, useRef } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input"

type Message = {
  id: string;
  sender: "user" | "bot";
  text: string;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messageEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const sendMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: input.trim(),
    };

    setMessages((prev) => [...prev, sendMessage]);
    setInput("");
    setIsLoading(true);

    scrollToBottom(); // Scroll saat klik kirim

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: sendMessage.text }),
      });

      const data = await response.json();

      if (response.ok) {
        const botMessage: Message = {
          id: Date.now().toString() + "1",
          sender: "bot",
          text: data.response,
        };

        setMessages((prev) => [...prev, botMessage]);
      } else {
        const errorMessage: Message = {
          id: Date.now().toString() + "2",
          sender: "bot",
          text: data.error,
        };

        setMessages((prev) => [...prev, errorMessage]);
      }
    } catch (error) {
      console.error("Error fetching chat:", error);
      const errorMessage: Message = {
        id: Date.now().toString() + "3",
        sender: "bot",
        text: "An unexpected error occurred",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1 className="font-semibold text-5xl md:text-6xl mb-8 tracking-tighter">Ask anything</h1>
      <p className="mb-4">
        Kamu bisa menanyakan apa saja soal diriku, mulai dari educational background, experiences, and skills, hingga hobi.
      </p>
      <ScrollArea className="bg-white/5 p-4 rounded-md h-80 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-4 flex ${
              msg.sender === "user" ? "justify-end text-right" : "justify-start text-left"
            }`}
          >
            {msg.sender === "bot" ? (
              <div className="flex items-start gap-2.5">
                <img className="w-8 h-8 rounded-full" src="/icons/avatar.jpg" alt="Bot image" />
                <div className="flex flex-col gap-1 w-full max-w-[320px]">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span className="text-sm font-semibold text-gray-500 dark:text-white">Wahyu</span>
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </span>
                  </div>
                  <div className="flex flex-col leading-1.5 p-3 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                    <p className="text-sm font-normal text-gray-900 dark:text-white">{msg.text}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-1 w-full max-w-[320px]">
                {/* <div className="flex items-center justify-end space-x-2 rtl:space-x-reverse">
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">You</span>
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </span>
                </div> */}
                <div className="flex flex-col leading-1.5 text-white rounded-s-xl rounded-se-xl">
                  <p className="text-sm font-normal">{msg.text}</p>
                </div>
              </div>
            )}
          </div>
        ))}
        <div ref={messageEndRef} />
      </ScrollArea>
      <form className="mt-4 flex flex-col sm:flex-row gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border border-gray-300 rounded-md px-3 py-2"
          placeholder="Adakah yang ingin ditanyakan?"
        />
        {/* <button
          onClick={handleCvAtsClick}
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded focus:bg-blue-900"
        >
          {cvAtsText}
        </button> */}
        <button
          type="submit"
          disabled={isLoading}
          className={`bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded focus:bg-blue-900 ${
            isLoading ? "bg-gray-400" : "bg-blue-500 text-white"
          }`}
        >
          Kirim
        </button>
      </form>
    </div>
  );
}
