import React, { useState, type ReactNode } from "react";
import "./tabs.scss";

export interface TabItem {
  id: string;
  label: ReactNode;
  content: ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  defaultActiveTab?: number | string;
  tabHeaderClassName?: string;
  activeTabClassName?: string;
  tabContentClassName?: string;
  rightComponent?: ReactNode;
}

const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultActiveTab,
  tabHeaderClassName = "",
  activeTabClassName = "",
  tabContentClassName = "",
  rightComponent,
}) => {
  const getInitialIndex = () => {
    if (typeof defaultActiveTab === "number") {
      return defaultActiveTab;
    }
    const index = tabs.findIndex((tab) => tab.id === defaultActiveTab);
    return index !== -1 ? index : 0;
  };

  const [activeIndex, setActiveIndex] = useState<number>(getInitialIndex());

  return (
    <div className="tabs">
      <div className="tabs__header">
        <div className="tabs__header__left">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`tabs__tab__button ${tabHeaderClassName} ${
                index === activeIndex
                  ? `tabs__tab__button--active ${activeTabClassName}`
                  : ""
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {rightComponent && (
          <div className="tabs__header__right">{rightComponent}</div>
        )}
      </div>

      <div className={`tabs__content ${tabContentClassName}`}>
        <div className="tabs__panel">{tabs[activeIndex]?.content}</div>
      </div>
    </div>
  );
};

export default Tabs;
