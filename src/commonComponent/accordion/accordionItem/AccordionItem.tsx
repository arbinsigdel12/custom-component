import React, { useState, useRef } from "react";
import { FaAngleDown } from "react-icons/fa";
import "./accordionitem.scss";

interface AccordionItemProps {
  header: string;
  body: React.ReactNode;
  classNameHeader?: string;
  classNameBody?: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  header,
  body,
  classNameHeader,
  classNameBody,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="accordionItem">
      <div
        className={`accordionItem__header ${classNameHeader || ""}`}
        onClick={toggle}
      >
        <span>{header}</span>
        <FaAngleDown className={`icon ${isOpen ? "icon__active" : ""}`} />
      </div>
      <div
        className={`accordionItem__body ${classNameBody || ""} ${
          isOpen ? "accordionItem__body--open" : ""
        }`}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        <div className="accordionItem__body__text" ref={contentRef}>
          {body}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
