import React from "react";
import AccordionItem from "./accordionItem/AccordionItem";
import "./accordion.scss";

interface AccordionItemType {
  header: string;
  body: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItemType[];
  classNameMainComponent?: string;
  classNameHeader?: string;
  classNameBody?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  classNameHeader,
  classNameBody,
  classNameMainComponent,
}) => {
  return (
    <div className={`accordion ${classNameMainComponent || ""}`}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          header={item.header}
          body={item.body}
          classNameHeader={classNameHeader}
          classNameBody={classNameBody}
        />
      ))}
    </div>
  );
};

export default Accordion;
