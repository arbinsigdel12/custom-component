import Button from "../commonComponent/button/Button";

export const accordionData = [
  {
    header: "What is React?",
    body: "React is a JavaScript library for building user interfaces.",
  },
  {
    header: "Accordion with custom element",
    body: (
      <Button
        label="Login In"
        variant="primary"
        isloading={true}
        loaderType="dots"
      />
    ),
  },
];

export const customAccordionData = [
  {
    header: "Accordion with custom classname and style",
    body: <span>Hellow world</span>,
  },
];
