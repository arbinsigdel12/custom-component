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
import { menuItems, menuItems2 } from "./commonComponent/dropdown/DropdownItem";
import BaseDropdown from "./commonComponent/dropdown/BaseDropdown/BaseDropdown";

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
        <h2>Default tabs component</h2>
        <Tabs
          tabs={tabItems}
          defaultActiveTab={"home"}
          rightComponent={
            <button className="date-range-button">From Date - To Date</button>
          }
        />
        <h2>Tabs with Header style change</h2>
        <Tabs
          tabs={tabItems}
          defaultActiveTab={"about"}
          tabHeaderClassName="classHeader"
        />
        <h2>Tabs with Content style change</h2>
        <Tabs
          tabs={tabItems}
          defaultActiveTab={"home"}
          tabContentClassName="classContent"
        />
      </div>
      <h2>Dropdown Component</h2>
      <div className="app__dropdown">
        <Dropdown
          trigger={
            <div className="dropdownTrigger">
              <FaUserCircle size={32} />
              <span>View Dropdown</span>
            </div>
          }
          items={menuItems}
          position={"top-end"}
        />
        <Dropdown
          trigger={
            <div className="dropdownTrigger">
              <FaUserCircle size={32} />
              <span>Dropdown with custom menu</span>
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
              <span>Dropdown with custom menu</span>
            </div>
          }
          position={"top-start"}
        >
          {() => (
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              laoreet ligula nibh. Duis et ante diam. Duis mattis sit amet
            </h2>
          )}
        </BaseDropdown>
      </div>
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet
        ligula nibh. Duis et ante diam. Duis mattis sit amet libero et dictum.
        Nulla facilisi. Aliquam elit mauris, volutpat id massa et, bibendum
        egestas arcu. Nulla lobortis risus vel nisi maximus, quis scelerisque
        nunc eleifend. Pellentesque id ligula gravida, eleifend dolor in, semper
        elit. Suspendisse finibus efficitur lacus in vestibulum. In mi ante,
        tincidunt vitae finibus at, rhoncus at massa. Ut ut tellus mattis,
        ornare justo vel, tincidunt urna. Fusce vitae justo sit amet sem
        dignissim ullamcorper. Etiam elementum tellus egestas congue rhoncus. In
        lacinia dui egestas tellus vestibulum interdum. Phasellus mollis eros
        felis et aliquet semper. Nulla malesuada augue ut imperdiet tincidunt.
        Quisque nec eleifend purus, et mattis justo. Phasellus bibendum, mauris
      </h2>
    </div>
  );
}

export default App;
