"use client";

import { useEffect, useState } from "react";
import { BlogPosts } from "app/components/post";
import BookItem from "app/components/bookitem";
import { metadata } from "@/app/stuff/metadata";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Blog() {
  const [view, setView] = useState<"posts" | "books">("posts");

  // Example posts data with Medium URLs and tags
  const posts = [
    {
      title: "Understanding Generative AI",
      url: "https://medium.com/@yourusername/understanding-generative-ai",
      description: "A deep dive into the fundamentals of generative AI.",
      tags: ["AI", "Machine Learning", "Generative AI"],
    },
    {
      title: "Data Science in Marketing",
      url: "https://medium.com/@yourusername/data-science-in-marketing",
      description: "How data science can enhance marketing strategies.",
      tags: ["Data Science", "Marketing", "Business"],
    },
  ];

  // Book collection data
  const books = [
    {
      title: "Faster than normal",
      author: "Peter Shankman",
      cover: "/books/faster.jpg",
      description: "A fable about following your dreams",
    },
    {
      title: "Limitless",
      author: "Jim Kwik",
      cover: "/books/limitless.jpg",
      description: "A classic tale of racial injustice and the loss of innocence",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 50 });
  }, []);

  const tabs = [
    { value: "posts", label: "Writing" },
    { value: "books", label: "Reading" },
  ];

  return (
    <div>
      <h1 className="font-semibold text-5xl md:text-6xl mb-8 tracking-tighter">
        {view === "posts" ? "Writing" : "Reading"}
      </h1>
      <p className="mb-4">
        {view === "posts"
          ? "A collection of posts I've written about various topics. From tech to personal, I write about what interests me."
          : "Explore my favorite books that have shaped my perspective and inspired my journey. I hope you find them as interesting as I do."}
      </p>

      {/* Navigation tabs with animation */}
      <div className="flex space-x-4 mb-8 relative">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setView(tab.value)}
            className={`relative px-4 py-2 rounded-full text-sm font-medium transition ${
              view === tab.value ? "text-white" : "text-gray-500 hover:text-gray-700"
            }`}
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            {view === tab.value && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 bg-blue-500 z-10"
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
              />
            )}
            <span className="relative z-20">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Conditional rendering based on selected view */}
      {view === "posts" ? (
        <BlogPosts posts={posts} />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-px place-items-center place-content-center">
          {books.map((book, index) => (
            <BookItem
              key={index}
              title={book.title}
              author={book.author}
              cover={book.cover}
              index={index}
            />
          ))}
        </div>
      )}
    </div>
  );
}
