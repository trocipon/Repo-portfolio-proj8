import React, { useState, useEffect } from "react";

interface CarouselProps {
  images: string[];
  projectTitle?: string;
}

const Carousel: React.FC<CarouselProps> = ({ images, projectTitle }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    // Disable background scroll when the project modal is open
    document.body.style.overflow = "hidden";

    return () => {
      // Re-enable background scroll when the project modal is closed
      document.body.style.overflow = "";
    };
  }, []); // Run only once when the component is mounted

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  // Précharge l'image suivante et précédente pendant que l'actuelle est
  // affichée : sans ça, chaque clic déclenche un fetch + décodage à froid
  // (les captures sources font jusqu'à ~5 Mpx), ce qui donne une impression
  // de lenteur à la navigation dans le carrousel.
  useEffect(() => {
    if (!images || images.length <= 1) return;
    const nextIndex = (current + 1) % images.length;
    const prevIndex = (current - 1 + images.length) % images.length;
    [nextIndex, prevIndex].forEach((i) => {
      const preload = new Image();
      preload.src = images[i];
    });
  }, [current, images]);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative flex flex-col items-center justify-center w-full py-4">
      <div className="relative flex items-center justify-center w-full">
        <button onClick={prev} aria-label="Image précédente" className="absolute left-2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-card border border-border shadow-md text-primary hover:bg-primary hover:text-primary-foreground active:bg-primary active:text-primary-foreground focus-visible:bg-primary focus-visible:text-primary-foreground transition-colors duration-200 cursor-pointer">
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
            alt={projectTitle ? `${projectTitle} — capture ${current + 1} sur ${images.length}` : `Capture ${current + 1} sur ${images.length}`}
            width="700"
            height="394"
            loading="eager"
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
              aspectRatio: "16/9",
            }}
          />
        </div>
        <button onClick={next} aria-label="Image suivante" className="absolute right-2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-card border border-border shadow-md text-primary hover:bg-primary hover:text-primary-foreground active:bg-primary active:text-primary-foreground focus-visible:bg-primary focus-visible:text-primary-foreground transition-colors duration-200 cursor-pointer">
          <span className="sr-only">Image suivante</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="mt-2 text-sm text-foreground/80 font-medium">
        {current + 1} / {images.length}
      </div>
    </div>
  );
};

export default Carousel;
