"use client"

import { useEffect, useState } from "react";
import { BlogPosts } from "app/components/post";
import BookItem from "app/components/bookitem";
import { metadata } from "@/app/stuff/metadata"; // Import metadata

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
    {
      title: "Data Science in Marketing",
      url: "https://medium.com/@yourusername/data-science-in-marketing",
      description: "How data science can enhance marketing strategies.",
      tags: ["Data Science", "Marketing", "Business"],
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
      author: "JIM Kwik",
      cover: "/books/limitless.jpg",
      description: "A classic tale of racial injustice and the loss of innocence",
    },
    {
      title: "The talent Code",
      author: "George Orwell",
      cover: "/books/talent.jpg",
      description: "A dystopian novel that depicts a totalitarian future society",
    },
    {
      title: "Indistractable",
      author: "George Orwell",
      cover: "/books/indistractable.jpg",
      description: "A dystopian novel that depicts a totalitarian future society",
    },
    {
      title: "Tenang yang kau cari bukan di sini",
      author: "George Orwell",
      cover: "/books/tenang.jpg",
      description: "A dystopian novel that depicts a totalitarian future society",
    },
    {
      title: "Get out of my head",
      author: "George Orwell",
      cover: "/books/getout.jpg",
      description: "A dystopian novel that depicts a totalitarian future society",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 50 });
  }, []);

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

      {/* Navigation buttons */}
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => setView("posts")}
          className={`flex items-center font-medium text-center px-4 py-2 rounded ${view === "posts" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
        >
          Writing
        </button>
        <button
          onClick={() => setView("books")}
          className={`flex items-center font-medium text-center px-4 py-2 rounded ${view === "books" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
          >
          Reading
        </button>
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
