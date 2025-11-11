import type { TabItem } from "../commonComponent/tabs/Tabs";

export const tabItems: TabItem[] = [
  {
    key: "home",
    label: "home",
    content: (
      <div>
        <h3>Home Page</h3>
        <p>This is home page</p>
      </div>
    ),
  },
  {
    key: "about",
    label: "about",
    content: (
      <div>
        <h3>About Us</h3>
        <p>This is about us page</p>
      </div>
    ),
  },
  {
    key: "account",
    label: "account",
    content: (
      <div>
        <h3>Account</h3>
        <p>Account Page</p>
      </div>
    ),
  },
];
