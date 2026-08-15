import React, { useState, useRef } from "react";

interface CollapseProps {
  title: string;
  children: React.ReactNode;
}

const Collapse: React.FC<CollapseProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border border-primary rounded-lg shadow-md overflow-hidden mb-2">
      {" "}
      {/* Added margin-bottom for spacing */}
      <button className="w-full text-left h-12 p-4 font-medium text-white bg-primary hover:bg-primary/90 hover:cursor-pointer flex items-center justify-between transition-[background-color] duration-200" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className={`w-5 h-5 transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        ref={contentRef}
        style={{
          height: isOpen ? contentRef.current?.scrollHeight : 0,
          transition: "height 0.3s ease",
        }}
        className="overflow-hidden bg-primary/90"
      >
        <div className="p-4 text-sm text-white">{children}</div>
      </div>
    </div>
  );
};

export default Collapse;
