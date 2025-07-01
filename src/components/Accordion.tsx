import React, { useState, useRef, useEffect } from "react";

export interface AccordionItemProps {
  id: string;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItemProps[];
  allowMultiple?: boolean;
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({ items, allowMultiple = false, className = "" }) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenItems((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(id)) {
          newSet.delete(id);
        } else {
          newSet.add(id);
        }
        return newSet;
      });
    } else {
      setOpenItems((prev) => {
        if (prev.has(id)) {
          return new Set();
        } else {
          return new Set([id]);
        }
      });
    }
  };

  return (
    <div className={`accordion-container ${className}`}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={openItems.has(item.id)}
          onToggle={() => toggleItem(item.id)}
        />
      ))}
    </div>
  );
};

export interface AccordionItemCompProps {
  item: AccordionItemProps;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemCompProps> = ({ item, isOpen, onToggle }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState<string>("0px");

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        setMaxHeight(`${contentRef.current.scrollHeight}px`);
      } else {
        setMaxHeight("0px");
      }
    }
  }, [isOpen]);

  return (
    <div className="accordion-item border-b">
      <div
        className="accordion-header w-full py-4 text-left bg-transparent cursor-pointer transition-colors duration-200 flex justify-between items-center"
        onClick={onToggle}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggle();
          }
        }}
      >
        <span className="accordion-title text-[#1E1E1E] text-[16px] font-bold">{item.title}</span>
        <span
          className={`accordion-icon transform transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.69206 16.7008C5.30497 17.0878 4.67739 17.0878 4.29031 16.7008C3.90323 16.3137 3.90323 15.6861 4.29031 15.299L6.39293 13.1964C6.78001 12.8093 7.40759 12.8093 7.79467 13.1964C8.18176 13.5835 8.18176 14.2111 7.79467 14.5981L5.69206 16.7008ZM19.7097 15.299C20.0968 15.6861 20.0968 16.3137 19.7097 16.7008C19.3226 17.0879 18.695 17.0879 18.3079 16.7008L12.0001 10.3929L10.5983 11.7947C10.2113 12.1818 9.58368 12.1818 9.1966 11.7947C8.80952 11.4076 8.80952 10.78 9.1966 10.3929L11.2992 8.29031C11.6863 7.90323 12.3139 7.90323 12.701 8.29031L19.7097 15.299Z"
              fill="#1F2D3D"
            />
          </svg>
        </span>
      </div>

      <div
        className="accordion-content overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight }}
      >
        <div
          ref={contentRef}
          className="accordion-content-inner pb-2 text-gray-700 leading-relaxed"
        >
          {item.content}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
