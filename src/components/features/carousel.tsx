import React, { useState, useEffect } from "react";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length > 1) {
      const nextIndex = (current + 1) % images.length;
      const img = new window.Image();
      img.src = images[nextIndex];
    }
  }, [current, images]);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative flex flex-col items-center justify-center w-full py-4">
      <div className="relative flex items-center justify-center w-full">
        <button onClick={prev} aria-label="Image précédente" className="absolute left-2 z-10 flex items-center justify-center rounded-full bg-card border border-border shadow-md p-2 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-pointer">
          <span className="sr-only">Image précédente</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div
          className="relative flex items-center justify-center w-full"
          style={{
            height: "auto",
            maxHeight: "70vh",
            contain: "layout style paint",
          }}
        >
          <img
            src={images[current]}
            alt={`Projet image ${current + 1}`}
            width="700"
            height="700"
            loading="lazy"
            decoding="async"
            className="rounded-xl border border-border object-contain bg-card shadow-lg"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              width: "auto",
              height: "auto",
              display: "block",
              contain: "content",
              willChange: "contents",
              aspectRatio: "1" ,
            }}
          />
        </div>
        <button onClick={next} aria-label="Image suivante" className="carousel-arrow absolute right-2 z-10 flex items-center justify-center rounded-full bg-card border border-border shadow-md p-2 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-pointer">
          <span className="sr-only">Image suivante</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="mt-2 text-sm text-foreground/80 font-medium">
        {current + 1} / {images.length}
      </div>
      <style>{`
        @media (max-width: 1024px) {
          .carousel-container {
            max-height: 60vh; /* Adjusted for tablet screens */
          }
        }
      `}</style>
    </div>
  );
};

export default Carousel;
