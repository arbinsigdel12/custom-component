import React from "react";
import "./input.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type: string;
  placeholder: string;
  label?: string;
  isrequired: boolean;
  errorMessage?: string | null;
}

const Input: React.FC<InputProps> = ({
  id,
  type,
  placeholder,
  label,
  isrequired,
  errorMessage,
  ...defaultAttribute
}) => {
  return (
    <div className="input">
      <div className="input__label">
        <label htmlFor={id}>{label}</label>
        {isrequired === true ? <span>*</span> : null}
      </div>
      <div className="input_inputFeild">
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className={errorMessage ? "input--error" : ""}
          {...defaultAttribute}
        />
      </div>
      {errorMessage && <div className="input__error">{errorMessage}</div>}
    </div>
  );
};

export default Input;
