import Button from "../button/Button";
import type { DropdownMenuItem } from "./Dropdown";

export const menuItems: DropdownMenuItem[] = [
  {
    id: "home",
    content: <span>Home</span>,
    onClick() {
      alert("navigate to home page");
    },
  },
  {
    id: "about",
    content: <span>About</span>,
    onClick() {
      alert("navigate to alert page");
    },
  },
  {
    id: "logout",
    content: <button className="buttonMenu">Logout</button>,
  },
];

export const menuItems2: DropdownMenuItem[] = [
  {
    id: "home",
    content: <span>Home</span>,
  },
  {
    id: "about",
    content: <span>About</span>,
  },
  {
    id: "logout",
    content: <Button label="Logout" variant="primary" labelAppend="👍" />,
  },
  {
    id: "loader",
    content: (
      <Button label="" variant="primary" isloading={true} loaderType="dots" />
    ),
  },
];
