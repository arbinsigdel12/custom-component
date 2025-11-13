import "./App.scss";
import Button from "./commonComponent/button/Button";
import Accordion from "./commonComponent/accordion/Accordion";
import { FaArrowRight, FaUserCircle } from "react-icons/fa";
import { accordionData, customAccordionData } from "./data/accordionData";
import Input from "./commonComponent/input/Input";
import Form from "./commonComponent/form/Form";
import Tabs from "./commonComponent/tabs/Tabs";
import { tabItems } from "./data/tabsData";
import Dropdown from "./commonComponent/dropdown/Dropdown";
import { menuItems, menuItems2 } from "./data/DropdownItem";
import BaseDropdown from "./commonComponent/dropdown/BaseDropdown/BaseDropdown";
import Tooltip from "./commonComponent/tooltip/Tooltip";
import { toolItem1, toolItem2 } from "./commonComponent/tooltip/TooltipItem";
import { CiCircleInfo } from "react-icons/ci";
import Modal from "./commonComponent/modal/Modal";

function App() {
  return (
    <div className="app">
      <div className="app__button">
        <div className="app__button__heading">
          <h2>Common Button Component</h2>
        </div>
        <div className="app__button__commonButton">
          <Button label="Primary Button" />
          <Button
            label="Secondary Button"
            variant="secondary"
            labelAppend={<FaArrowRight />}
          />
          <Button label="Click to load" variant="primary" isloading={true} />
          <Button
            label=""
            variant="primary"
            isloading={true}
            loaderType="dots"
          />
        </div>
      </div>
      <div className="app__accordion">
        <div className="app__accordion__heading">
          <h2>Common Accordion Component</h2>
        </div>
        <div className="app__accordion__commonAccordion">
          <Accordion items={accordionData} />
          <Accordion
            items={customAccordionData}
            classNameMainComponent="custom__accordion"
            classNameHeader="custom__accordion__header"
            classNameBody="custom__accordion__body"
          />
        </div>
      </div>
      <div className="app__input">
        <div className="app__input__heading">
          <h2>Common Input Component</h2>
        </div>
        <div className="app__input__commonInput">
          <Input
            id="rf"
            label="Normal required Field"
            placeholder="Enter Name"
            type="text"
            required={true}
          />
          <Input
            id="nrf"
            label="Not required Field"
            placeholder="Enter Email"
            type="email"
            required={false}
          />
          <Input
            id="nf"
            label="Number Field"
            placeholder="Enter Number"
            type="number"
            required={true}
          />
          <Input
            id="ef"
            label="Error Field shown"
            placeholder="Enter Email"
            type="email"
            required={true}
            errorMessage="Not a email address"
          />
        </div>
      </div>
      <div className="app__form">
        <Form />
      </div>
      <div className="app__tab">
        <h2>Common Tabs Component</h2>
        <h3>Default tabs component</h3>
        <Tabs
          tabs={tabItems}
          defaultActiveTab={"home"}
          rightComponent={
            <button className="date-range-button">From Date - To Date</button>
          }
        />
        <h3>Tabs with Header style change</h3>
        <Tabs
          tabs={tabItems}
          defaultActiveTab={"about"}
          tabHeaderClassName="classHeader"
        />
        <h3>Tabs with Content style change</h3>
        <Tabs
          tabs={tabItems}
          defaultActiveTab={"home"}
          tabContentClassName="classContent"
        />
      </div>
      <h2>Dropdown Component</h2>
      <div className="app__dropdown">
        <Dropdown
          dropdownClassname="component__dropdown"
          trigger={
            <div className="dropdownTrigger">
              <FaUserCircle size={32} />
            </div>
          }
          items={menuItems}
          position={"bottom-start"}
        />
        <Dropdown
          trigger={
            <div className="dropdownTrigger">
              <FaUserCircle size={32} />
              <span>Dropdown with closeOnClick false</span>
            </div>
          }
          closeOnInsideClick={false}
          closeOnOutsideClick={false}
          items={menuItems2}
          position={"bottom-start"}
        />
        <BaseDropdown
          trigger={
            <div className="dropdownTrigger">
              <FaUserCircle size={32} />
              <span>Dropdown Base Prop</span>
            </div>
          }
          position={"bottom-center"}
        >
          {() => (
            <div>
              <span>Can add other component and apply positioning</span>
              <Dropdown
                trigger={
                  <div className="dropdownTrigger">
                    <FaUserCircle size={32} />
                    <span>Normal Dropdown</span>
                  </div>
                }
                items={menuItems}
                position={"top-end"}
              />
            </div>
          )}
        </BaseDropdown>
      </div>
      <h2>Custom Tooltip</h2>
      <div className="app__tooltip">
        <Tooltip
          items={toolItem1}
          trigger={
            <div className="tooltipTrigger">
              <span>Tooltip with no interaction</span>
              <CiCircleInfo />
            </div>
          }
          position="top-start"
        />
        <Tooltip
          offset="1rem"
          isInteractive={true}
          items={toolItem2}
          trigger={
            <div className="tooltipTrigger">
              <span>Tooltip with interaction</span>
              <CiCircleInfo />
            </div>
          }
          position="top-start"
        />
        <div className="tooltipTrigger">
          <span>Tooltip with only icon as trigger</span>
          <Tooltip
            offset="1rem"
            isInteractive={true}
            items={toolItem2}
            trigger={<CiCircleInfo />}
            position="top-start"
          />
        </div>
      </div>
      <h2>Custom Modal</h2>
      <div className="app__modal">
        <Modal
          trigger={<span>Normal Modal</span>}
          heading={<h2>This is a modal component</h2>}
        >
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            deleniti officia quas dignissimos labore consequuntur similique
            quisquam facilis nulla molestiae repellat praesentium iure inventore
            quaerat sed recusandae, ullam eaque. Dolorem.Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Assumenda deleniti officia quas
            dignissimos labore consequuntur similique quisquam facilis nulla
            molestiae repellat praesentium iure inventore quaerat sed
            recusandae, ullam eaque. Dolorem.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Assumenda deleniti officia quas
            dignissimos labore consequuntur similique quisquam facilis nulla
            molestiae repellat praesentium iure inventore quaerat sed
            recusandae, ullam eaque. Dolorem.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Assumenda deleniti officia quas
            dignissimos labore consequuntur similique quisquam facilis nulla
            molestiae repellat praesentium iure inventore quaerat sed
            recusandae, ullam eaque. Dolorem.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Assumenda deleniti officia quas
            dignissimos labore consequuntur similique quisquam facilis nulla
            molestiae repellat praesentium iure inventore quaerat sed
            recusandae, ullam eaque. Dolorem.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Assumenda deleniti officia quas
            dignissimos labore consequuntur similique quisquam facilis nulla
            molestiae repellat praesentium iure inventore quaerat sed
            recusandae, ullam eaque. Dolorem. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Assumenda deleniti officia quas
            dignissimos labore consequuntur similique quisquam facilis nulla
            molestiae repellat praesentium iure inventore quaerat sed
            recusandae, ullam eaque. Dolorem.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Assumenda deleniti officia quas
            dignissimos labore consequuntur similique quisquam facilis nulla
            molestiae repellat praesentium iure inventore quaerat sed
            recusandae, ullam eaque. Dolorem.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Assumenda deleniti officia quas
            dignissimos labore consequuntur similique quisquam facilis nulla
            molestiae repellat praesentium iure inventore quaerat sed
            recusandae, ullam eaque. Dolorem.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Assumenda deleniti officia quas
            dignissimos labore consequuntur similique quisquam facilis nulla
            molestiae repellat praesentium iure inventore quaerat sed
            recusandae, ullam eaque. Dolorem.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Assumenda deleniti officia quas
            dignissimos labore consequuntur similique quisquam facilis nulla
            molestiae repellat praesentium iure inventore quaerat sed
            recusandae, ullam eaque. Dolorem.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Assumenda deleniti officia quas
            dignissimos labore consequuntur similique quisquam facilis nulla
            molestiae repellat praesentium iure inventore quaerat sed
            recusandae, ullam eaque. Dolorem.
          </span>
        </Modal>
        <Modal trigger={<span>Modal with no header</span>}>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            deleniti officia quas dignissimos labore consequuntur similique
            quisquam facilis nulla molestiae repellat praesentium iure inventore
            quaerat sed recusandae, ullam eaque. Dolorem.Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Assumenda deleniti officia quas
            dignissimos labore consequuntur similique quisquam facilis nulla
            molestiae repellat praesentium iure inventore quaerat sed
            recusandae, ullam eaque. Dolorem.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Assumenda deleniti officia quas
            dignissimos labore consequuntur similique quisquam facilis nulla
            molestiae repellat praesentium iure inventore quaerat sed
            recusandae, ullam eaque. Dolorem.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Assumenda deleniti officia quas
            dignissimos labore consequuntur similique quisquam facilis nulla
            molestiae repellat praesentium iure inventore quaerat sed
            recusandae, ullam eaque. Dolorem.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Assumenda deleniti officia quas
            dignissimos labore consequuntur similique quisquam facilis nulla
            molestiae repellat praesentium iure inventore quaerat sed
            recusandae, ullam eaque. Dolorem.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Assumenda deleniti officia quas
            dignissimos labore consequuntur similique quisquam facilis nulla
            molestiae repellat praesentium iure inventore quaerat sed
            recusandae, ullam eaque. Dolorem. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Assumenda deleniti officia quas
            dignissimos labore consequuntur similique quisquam facilis nulla
            molestiae repellat praesentium iure inventore quaerat sed
            recusandae, ullam eaque. Dolorem.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Assumenda deleniti officia quas
            dignissimos labore consequuntur similique quisquam facilis nulla
            molestiae repellat praesentium iure inventore quaerat sed
            recusandae, ullam eaque. Dolorem.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Assumenda deleniti officia quas
            dignissimos labore consequuntur similique quisquam facilis nulla
            molestiae repellat praesentium iure inventore quaerat sed
            recusandae, ullam eaque. Dolorem.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Assumenda deleniti officia quas
            dignissimos labore consequuntur similique quisquam facilis nulla
            molestiae repellat praesentium iure inventore quaerat sed
            recusandae, ullam eaque. Dolorem.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Assumenda deleniti officia quas
            dignissimos labore consequuntur similique quisquam facilis nulla
            molestiae repellat praesentium iure inventore quaerat sed
            recusandae, ullam eaque. Dolorem.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Assumenda deleniti officia quas
            dignissimos labore consequuntur similique quisquam facilis nulla
            molestiae repellat praesentium iure inventore quaerat sed
            recusandae, ullam eaque. Dolorem.
          </span>
        </Modal>
        <Modal
          trigger={<span>Modal with no header nor close button</span>}
          hideCloseBtn
        >
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            deleniti officia quas dignissimos labore consequuntur similique
            quisquam facilis nulla molestiae repellat praesentium iure inventore
            quaerat sed recusandae, ullam eaque. Dolorem.Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Assumenda deleniti officia quas
            dignissimos labore consequuntur similique quisquam facilis nulla
            molestiae repellat praesentium iure inventore quaerat sed
            recusandae, ullam eaque. Dolorem.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Assumenda deleniti officia quas
            dignissimos labore consequuntur similique quisquam facilis nulla
            molestiae repellat praesentium iure inventore quaerat sed
            recusandae, ullam eaque. Dolorem.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Assumenda deleniti officia quas
            dignissimos labore consequuntur similique quisquam facilis nulla
            molestiae repellat praesentium iure inventore quaerat sed
            recusandae, ullam eaque. Dolorem.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Assumenda deleniti officia quas
            dignissimos labore consequuntur similique quisquam facilis nulla
            molestiae repellat praesentium iure inventore quaerat sed
            recusandae, ullam eaque. Dolorem.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Assumenda deleniti officia quas
            dignissimos labore consequuntur similique quisquam facilis nulla
            molestiae repellat praesentium iure inventore quaerat sed
            recusandae, ullam eaque. Dolorem. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Assumenda deleniti officia quas
            dignissimos labore consequuntur similique quisquam facilis nulla
            molestiae repellat praesentium iure inventore quaerat sed
            recusandae, ullam eaque. Dolorem.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Assumenda deleniti officia quas
            dignissimos labore consequuntur similique quisquam facilis nulla
            molestiae repellat praesentium iure inventore quaerat sed
            recusandae, ullam eaque. Dolorem.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Assumenda deleniti officia quas
            dignissimos labore consequuntur similique quisquam facilis nulla
            molestiae repellat praesentium iure inventore quaerat sed
            recusandae, ullam eaque. Dolorem.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Assumenda deleniti officia quas
            dignissimos labore consequuntur similique quisquam facilis nulla
            molestiae repellat praesentium iure inventore quaerat sed
            recusandae, ullam eaque. Dolorem.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Assumenda deleniti officia quas
            dignissimos labore consequuntur similique quisquam facilis nulla
            molestiae repellat praesentium iure inventore quaerat sed
            recusandae, ullam eaque. Dolorem.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Assumenda deleniti officia quas
            dignissimos labore consequuntur similique quisquam facilis nulla
            molestiae repellat praesentium iure inventore quaerat sed
            recusandae, ullam eaque. Dolorem.
          </span>
        </Modal>
      </div>
    </div>
  );
}

export default App;
