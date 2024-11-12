import React from "react";
import AOS from "aos";

interface BookProps {
  title: string;
  author: string;
  cover: string;
  index: number;
}

const BookItem: React.FC<BookProps> = ({ title, author, cover, index }) => (
  <div
    className="relative shadow-lg"
    data-aos="fade-up"
    data-aos-delay={index * 200} // Delay animation based on index
  >
    <img
      src={cover}
      alt={`Cover of ${title}`}
      className="h-48 sm:h-56 md:h-60 max-w-full object-contain"
    />
    <div className="text-center mt-2">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-gray-600">{author}</p>
    </div>
  </div>
);

export default BookItem;
