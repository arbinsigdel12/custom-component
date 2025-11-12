import React, { type ReactNode } from "react";
import "./dropdown.scss";
import BaseDropdown, {
  type DropdownPosition,
} from "./BaseDropdown/BaseDropdown";

export interface DropdownMenuItem {
  id: string;
  content: ReactNode;
  onClick?: () => void;
}
interface DropdownProps {
  trigger: ReactNode;
  items: DropdownMenuItem[];
  position?: DropdownPosition;
  closeOnInsideClick?: boolean;
  closeOnOutsideClick?: boolean;
  dropdownClassname?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  items,
  position = "bottom-center",
  closeOnInsideClick = true,
  closeOnOutsideClick,
  dropdownClassname,
}) => {
  const handleItemClick = (id: string) => {
    const item = items.find((i) => i.id === id);
    if (item?.onClick) {
      item.onClick();
    }
  };

  return (
    <div className="dropdown">
      <BaseDropdown
        dropdownClassname={dropdownClassname}
        trigger={trigger}
        position={position}
        closeOnOutsideClick={closeOnOutsideClick}
      >
        {(_isOpen, { closeDropdown }) =>
          items.map((item) => (
            <div
              key={item.id}
              className="dropdown-item"
              onClick={() => {
                handleItemClick(item.id);
                if (closeOnInsideClick) {
                  closeDropdown();
                }
              }}
            >
              {item.content}
            </div>
          ))
        }
      </BaseDropdown>
    </div>
  );
};

export default Dropdown;
