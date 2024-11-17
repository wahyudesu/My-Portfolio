"use client";

import { useEffect, useState } from "react";
import { BlogPosts } from "@/components/post";
import BookItem from "@/components/bookitem";
import { metadata } from "@/app/stuff/metadata";
import AOS from "aos";
import "aos/dist/aos.css";
import Tabslide from "@/components/ui/tab";

export default function Blog() {
  const [view, setView] = useState<"posts" | "books">("posts");

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
    {
      title: "Get Out of Your Own Way",
      author: "Dave Hollis",
      cover: "/books/getout.jpg",
      description: "Overcoming personal challenges and limiting beliefs",
    },
    {
      title: "Good to Great",
      author: "Jim Collins",
      cover: "/books/good.jpg",
      description: "Why some companies make the leap and others don't",
    },
    {
      title: "Indistractable",
      author: "Nir Eyal",
      cover: "/books/indistractable.jpg",
      description: "How to control your attention and live intentionally",
    },
    {
      title: "Lupa Manusia",
      author: "Erlita Pratiwi",
      cover: "/books/lupamanusia.jpg",
      description: "Exploring the human mind and its complexities",
    },
    {
      title: "The Talent Code",
      author: "Daniel Coyle",
      cover: "/books/talent.jpg",
      description: "Unlocking the secrets of skill mastery",
    },
    {
      title: "Tenang",
      author: "Mo Gawdat",
      cover: "/books/tenang.jpg",
      description: "The pursuit of happiness and calmness in life",
    },
  ];
  

  useEffect(() => {
    AOS.init({ duration: 50 });
  }, []);

  const handleTabChange = (index: number) => {
    setView(index === 0 ? "posts" : "books");
  };

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

      <Tabslide onTabChange={handleTabChange} initialTab={view === "posts" ? 0 : 1} />

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
