import "./App.scss";
import Button from "./commonComponent/button/Button";
import Accordion from "./commonComponent/accordion/Accordion";
import { FaArrowRight } from "react-icons/fa";
import { accordionData, customAccordionData } from "./data/accordionData";
import Input from "./commonComponent/input/Input";
import Form from "./commonComponent/form/Form";
import Tabs from "./commonComponent/tabs/Tabs";
import { tabItems } from "./data/tabsData";

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
          defaultActiveTab={"home"}
          tabHeaderClassName="classHeader"
        />
        <h2>Tabs with Content style change</h2>
        <Tabs
          tabs={tabItems}
          defaultActiveTab={"home"}
          tabContentClassName="classContent"
        />
      </div>
    </div>
  );
}

export default App;
