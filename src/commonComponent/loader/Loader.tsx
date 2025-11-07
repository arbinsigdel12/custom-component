import React from "react";
import "./loader.scss";
import { AiOutlineLoading } from "react-icons/ai";
import { BsDot } from "react-icons/bs";

export type LoaderType = "spin" | "dots";

interface LoaderProps {
  type?: LoaderType;
}

const Loader: React.FC<LoaderProps> = ({ type = "spin" }) => {
  return (
    <div className="loader">
      {type === "spin" ? (
        <AiOutlineLoading className="loader__spin" />
      ) : (
        <div className="loader__dots">
          <BsDot />
          <BsDot />
          <BsDot />
        </div>
      )}
    </div>
  );
};

export default Loader;
