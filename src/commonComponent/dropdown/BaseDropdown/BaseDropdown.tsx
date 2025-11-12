import React, { useEffect, useRef, useState, type ReactNode } from "react";
import "./basedropdown.scss";

export type DropdownPosition =
  | "top-start"
  | "top-center"
  | "top-end"
  | "bottom-start"
  | "bottom-center"
  | "bottom-end";

type VoidFunction = () => void;

interface BaseDropdownProp {
  trigger: ReactNode;
  children: (
    currentState: boolean,
    handlers: {
      openDropdown: VoidFunction;
      closeDropdown: VoidFunction;
      toggleDropdown: VoidFunction;
    }
  ) => ReactNode;
  position?: DropdownPosition;
  closeOnOutsideClick?: boolean;
}

const BaseDropdown: React.FC<BaseDropdownProp> = ({
  trigger,
  children,
  position,
  closeOnOutsideClick = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  function closeDropdown() {
    setIsOpen(false);
  }

  function openDropdown() {
    setIsOpen(true);
  }

  function toggleDropdown() {
    setIsOpen((prev) => {
      return !prev;
    });
  }

  useEffect(() => {
    if (closeOnOutsideClick) {
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
    }
  }, [closeOnOutsideClick, isOpen]);
  return (
    <div className="baseDropdown" ref={dropdownRef}>
      <div className="baseDropdown__trigger" onClick={toggleDropdown}>
        {trigger}
      </div>
      {isOpen && (
        <div className={`baseDropdown__menu ${position}`}>
          {children(isOpen, { closeDropdown, openDropdown, toggleDropdown })}
        </div>
      )}
    </div>
  );
};

export default BaseDropdown;
