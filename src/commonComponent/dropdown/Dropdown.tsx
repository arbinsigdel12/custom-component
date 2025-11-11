import React, { useState, useRef, useEffect } from "react";
import "./dropdown.scss";

export interface DropdownMenuItem {
  id: string;
  content: React.ReactNode;
}

interface DropdownProps {
  trigger: React.ReactNode;
  items: DropdownMenuItem[];
  onSelect?: (id: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ trigger, items, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClick);
      return () => document.removeEventListener("mousedown", handleClick);
    }
  }, [isOpen]);

  const handleItemClick = (id: string) => {
    onSelect?.(id);
    setIsOpen(false);
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="dropdown__trigger" onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>
      {isOpen && (
        <div className="dropdown__menu">
          {items.map((item) => (
            <div
              key={item.id}
              className="dropdown-item"
              onClick={() => handleItemClick(item.id)}
            >
              {item.content}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
