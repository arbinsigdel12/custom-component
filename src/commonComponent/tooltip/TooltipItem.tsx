import { customAccordionData } from "../../data/accordionData";
import Accordion from "../accordion/Accordion";
import Button from "../button/Button";
import type { TooltipItem } from "./Tooltip";

export const toolItem1: TooltipItem[] = [
  { id: "1", content: "the icon is from react icon" },
];

export const toolItem2: TooltipItem[] = [
  {
    id: "1",
    content: (
      <div>
        <h2>This is a Interactive Tooltip</h2>
        <Button variant="primary" label="Click me" />
        <Accordion items={customAccordionData} />
      </div>
    ),
  },
];
