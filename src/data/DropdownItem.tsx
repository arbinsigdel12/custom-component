import Button from "../commonComponent/button/Button";
import type { DropdownMenuItem } from "../commonComponent/dropdown/Dropdown";

export const menuItems: DropdownMenuItem[] = [
  {
    id: "1",
    content: <span>Redirects on click</span>,
    onClick() {
      alert("navigate to home page");
    },
  },
  {
    id: "2",
    content: <span>Closes dropdown on click (on Menu or outside)</span>,
  },
  {
    id: "closes dropdown on Outside click",
    content: <Button variant="primary" label="can add any component" />,
  },
];

export const menuItems2: DropdownMenuItem[] = [
  {
    id: "home",
    content: <span>does not close on Inside click</span>,
  },
  {
    id: "about",
    content: <span>does not close on Outside click</span>,
  },
];
