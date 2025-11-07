import React from "react";
import "./button.scss";
import Loader, { type LoaderType } from "../loader/Loader";

type Variant = "primary" | "secondary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: Variant;
  labelPrepend?: React.ReactNode;
  labelAppend?: React.ReactNode;
  isloading?: boolean;
  loaderType?: LoaderType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  labelAppend,
  labelPrepend,
  isloading,
  loaderType,
  ...defaultAttribute
}) => {
  const buttonClass = `button button--${variant}${
    isloading ? " button--loading" : ""
  }`;

  return (
    <button className={buttonClass} {...defaultAttribute}>
      {labelPrepend}
      {isloading && <Loader type={loaderType} />}
      <span>{label}</span>
      {labelAppend}
    </button>
  );
};

export default Button;
