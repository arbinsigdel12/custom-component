import React, { useState, type ReactNode, useEffect } from "react";
import "./tabs.scss";

export interface TabItem {
  key: string;
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  defaultActivetab?: string;
  tabHeaderClassName?: string;
  activeTabClassName?: string;
  tabContentClassName?: string;
}

const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultActivetab,
  tabHeaderClassName = "",
  activeTabClassName = "",
  tabContentClassName = "",
}) => {
  const [activeKey, setActiveKey] = useState<string>(
    defaultActivetab || tabs[0]?.key
  );

  useEffect(() => {
    if (defaultActivetab) setActiveKey(defaultActivetab);
  }, [defaultActivetab]);

  const handleTabClick = (key: string) => {
    setActiveKey(key);
  };

  return (
    <div className="tabs">
      <div className="tabs__header">
        <div className="tabs__header__left">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleTabClick(tab.key)}
              className={`tabs__tab__button ${tabHeaderClassName} ${
                activeKey === tab.key
                  ? `tabs__tab__button--active ${activeTabClassName}`
                  : ""
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className={`tabs__content ${tabContentClassName}`}>
        {tabs.map(
          (tab) =>
            activeKey === tab.key && (
              <div key={tab.key} className="tabs__panel">
                {tab.content}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Tabs;
