import React from "react";
import "./input.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  required?: boolean;
  errorMessage?: string | null;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  required,
  errorMessage,
  ...defaultAttribute
}) => {
  return (
    <div className="input">
      <div className="input__label">
        <label htmlFor={id}>{label}</label>
        {required && <span>*</span>}
      </div>
      <div className="input__inputField">
        <input
          id={id}
          className={errorMessage ? "input--error" : ""}
          required={required}
          {...defaultAttribute}
        />
      </div>
      {errorMessage && <div className="input__error">{errorMessage}</div>}
    </div>
  );
};

interface RadioOption {
  value: string;
  label: string;
}

interface RadioInputProps {
  id: string;
  name: string;
  label?: string;
  required?: boolean;
  options: RadioOption[];
  errorMessage?: string | null;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export const RadioInput: React.FC<RadioInputProps> = ({
  id,
  name,
  label,
  required,
  options,
  errorMessage,
  value,
  onChange,
}) => {
  return (
    <div className="radio">
      <div className="radio__label">
        {label && (
          <label>
            {label}
            {required && <span>*</span>}
          </label>
        )}
      </div>

      <div className="radio__options">
        {options.map((option) => (
          <label key={option.value} className="radio__option">
            <input
              id={`${id}-${option.value}`}
              name={name}
              type="radio"
              value={option.value}
              checked={value === option.value}
              required={required}
              onChange={onChange}
            />
            {option.label}
          </label>
        ))}
      </div>

      {errorMessage && <div className="radio__error">{errorMessage}</div>}
    </div>
  );
};

export default Input;
