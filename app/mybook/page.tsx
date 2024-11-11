"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
      <p className="">
        Explore my favorite books that have shaped my perspective and inspired my journey.
      </p>

      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-px place-items-center place-content-cente">
          {books.map((book, index) => (
            <div
              key={index}
              className="relative shadow-lg"
              data-aos="fade-up"
              data-aos-delay={index * 200} // Delay animation based on index
            >
              <img
                src={book.cover}
                alt={`Cover of ${book.title}`}
                className="h-48 sm:h-56 md:h-60 max-w-full object-contain"
              />
              <div className="text-center mt-2">
                <h3 className="font-semibold text-lg">{book.title}</h3>
                <p className="text-sm text-gray-600">{book.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
