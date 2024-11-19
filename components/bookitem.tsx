import React from "react";
import BlurFade from "@/components/ui/blur-fade";

interface BookProps {
  title: string;
  author: string;
  cover: string;
  index: number;
}

const BookItem: React.FC<BookProps> = ({ title, author, cover, index }) => {
  // Apply a sequential delay based on the index
  const delay = index * 100; // 100ms delay for each item

  return (
    <BlurFade className="relative shadow-lg mb-6" data-aos="fade-up" data-aos-delay={delay}>
      <img
        src={cover}
        alt={`Cover of ${title}`}
        className="h-48 sm:h-56 md:h-60 max-w-full object-contain"
      />
      <div className="text-center mt-2">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-gray-600">{author}</p>
      </div>
    </BlurFade>
  );
};

export default BookItem;
