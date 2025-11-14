import Button from "../button/Button";
import type { ActionItem } from "./Modal";

export const modalAction: ActionItem[] = [
  {
    label: (
      <Button
        label="Submit"
        variant="primary"
        buttonClassname="modal__action__Submit"
      />
    ),
    onClick() {
      alert("Submitted");
    },
  },
  {
    label: (
      <Button
        label="Delete"
        variant="secondary"
        buttonClassname="modal__action__delete"
      />
    ),
    onClick() {
      alert("Deleted");
    },
  },
];
