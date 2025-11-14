import React, { useEffect, useRef, useState, type ReactNode } from "react";
import "./model.scss";
import { IoIosCloseCircle } from "react-icons/io";

export interface ActionItem {
  label: React.ReactNode;
  onClick: () => void;
}

export interface ModalProp {
  trigger: ReactNode;
  children: ReactNode;
  hideCloseBtn?: boolean;
  heading?: ReactNode;
  isBlur?: boolean;
  actions?: ActionItem[];
}

const BaseModal: React.FC<ModalProp> = ({
  trigger,
  children,
  hideCloseBtn = false,
  heading,
  isBlur = true,
  actions,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClose = () => setIsOpen(false);

  function toggleDropdown() {
    setIsOpen((prev) => {
      return !prev;
    });
  }

  //Handle model open and close on click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClick);
      return () => document.removeEventListener("mousedown", handleClick);
    }
  }, [isOpen]);

  //Hide scroll bar of body on modal open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [isOpen]);

  return (
    <div className="modal" ref={modalRef}>
      <div className="modal__trigger" onMouseDown={toggleDropdown}>
        {trigger}
      </div>
      {isOpen && (
        <div className="modal__menu">
          <div
            className={`${isBlur ? "blurred" : ""}`}
            onClick={handleClose}
          ></div>
          <div className="modal__menu__itemsContainer">
            <div
              className="modal__heading"
              style={
                heading
                  ? {
                      backgroundColor: "#fff",
                      borderBottom: "1px solid #eee",
                    }
                  : { backgroundColor: "transparent" }
              }
            >
              <div className="modal__heading__header">{heading}</div>
              {!hideCloseBtn && (
                <div className="modal__heading__closeBtn" onClick={handleClose}>
                  <IoIosCloseCircle />
                </div>
              )}
            </div>
            <div
              className="modal__content"
              style={!heading && !hideCloseBtn ? { marginTop: "-40px" } : {}}
            >
              {children}
            </div>
            {actions && (
              <div className="modal__action">
                {actions.map((action, index) => (
                  <div
                    key={index}
                    className="modal__action__Button"
                    onClick={() => {
                      action.onClick();
                      handleClose();
                    }}
                  >
                    {action.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BaseModal;
