import React, { useState, type ReactNode } from "react";
import "./tooltip.scss";

export interface TooltipItem {
  id: string;
  content: ReactNode;
  onClick?: () => void;
}

export type TooltipPosition =
  | "top-start"
  | "top-center"
  | "top-end"
  | "bottom-start"
  | "bottom-center"
  | "bottom-end";

interface TooltipProp {
  trigger: ReactNode;
  items: TooltipItem[];
  position?: TooltipPosition;
  offset?: string;
  isInteractive?: boolean;
}

const Tooltip: React.FC<TooltipProp> = ({
  trigger,
  items,
  position = "bottom-center",
  offset = "8px",
  isInteractive = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div
      className="toolTip"
      onMouseEnter={isInteractive ? handleOpen : undefined}
      onMouseLeave={isInteractive ? handleClose : undefined}
    >
      <div
        className="toolTip__trigger"
        onMouseEnter={!isInteractive ? handleOpen : undefined}
        onMouseLeave={!isInteractive ? handleClose : undefined}
      >
        {trigger}
      </div>

      {isOpen && (
        <div
          className={`toolTip__menu ${position}`}
          style={{ padding: offset }}
        >
          <div className="toolTip__menu__itemsContainer">
            {items.map((item) => (
              <div key={item.id} className="toolTip__item">
                {item.content}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
