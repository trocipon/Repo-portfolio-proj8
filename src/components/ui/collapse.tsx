import React, { useState, useRef } from "react";
import { ArrowDown } from "../utils/icons";

interface CollapseProps {
  title: string;
  children: React.ReactNode;
}

const Collapse: React.FC<CollapseProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border border-primary rounded-lg shadow-md overflow-hidden mb-2">
      <button className="w-full text-left h-12 p-4 font-medium text-white bg-primary hover:bg-primary/90 hover:cursor-pointer flex items-center justify-between transition-[background-color] duration-200" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        {/* Même icône et même pattern de rotation que le bouton voir plus/
            voir moins des projets, plutôt qu'un chevron dessiné à la main. */}
        <ArrowDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
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
