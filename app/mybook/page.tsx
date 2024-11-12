"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BookItem from "app/components/bookitem"; 

export default function MyBook() {
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
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <h1 className="font-semibold text-5xl md:text-6xl mb-8 tracking-tighter">
        My Book Collection
      </h1>
      <p>
        Explore my favorite books that have shaped my perspective and inspired my journey.
      </p>

      <div className="container mx-auto">
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
      </div>
    </div>
  );
}
