import React, { useState } from "react";
import Input, { RadioInput } from "../input/Input";
import Button from "../button/Button";
import { FaArrowRight } from "react-icons/fa";
import "./form.scss";

interface FormValue {
  value: string;
  error: string;
}

interface FormData {
  fullname: FormValue;
  username: FormValue;
  email: FormValue;
  number: FormValue;
  password: FormValue;
  confirmpassword: FormValue;
  gender: FormValue;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullname: { value: "", error: "" },
    username: { value: "", error: "" },
    email: { value: "", error: "" },
    number: { value: "", error: "" },
    password: { value: "", error: "" },
    confirmpassword: { value: "", error: "" },
    gender: { value: "", error: "" },
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, value, type, name } = e.target;
    const key = type === "radio" ? name : id;

    setFormData((prev) => {
      const updated = {
        ...prev,
        [key]: { value, error: "" },
      };

      if (
        key === "password" ||
        key === "confirmpassword" ||
        prev.password.value ||
        prev.confirmpassword.value
      ) {
        const passwordToValidate =
          key === "password" ? value : updated.password.value;
        const confirmPasswordToValidate =
          key === "confirmpassword" ? value : updated.confirmpassword.value;

        const passwordError = validateLetterWithValue(passwordToValidate);
        const confirmPasswordError = validatePasswordMatchWithValues(
          passwordToValidate,
          confirmPasswordToValidate
        );

        updated.password = { ...updated.password, error: passwordError || "" };
        updated.confirmpassword = {
          ...updated.confirmpassword,
          error: confirmPasswordError || "",
        };
      }

      return updated;
    });
  };

  // Helper functions that accept values as parameters
  const validateLetterWithValue = (passwordValue: string): string | null => {
    const passwordSmall = /[a-z]/;
    const passwordCapital = /[A-Z]/;
    const passwordNumber = /\d/;
    const passwordSymbol = /[^a-zA-Z0-9]/;
    const atleasteightLetter = /.{8,}/;

    if (!atleasteightLetter.test(passwordValue))
      return "Password must contain at least 8 letters.";
    if (!passwordSmall.test(passwordValue))
      return "Password must contain at least one lowercase letter.";
    if (!passwordCapital.test(passwordValue))
      return "Password must contain at least one uppercase letter.";
    if (!passwordNumber.test(passwordValue))
      return "Password must contain at least one number.";
    if (!passwordSymbol.test(passwordValue))
      return "Password must contain at least one special character.";

    return null;
  };

  const validatePasswordMatchWithValues = (
    passwordValue: string,
    confirmPasswordValue: string
  ): string | null => {
    if (passwordValue !== confirmPasswordValue && confirmPasswordValue !== "")
      return "Passwords do not match.";
    return null;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const passwordError = validateLetterWithValue(formData.password.value);
    const confirmPasswordError = validatePasswordMatchWithValues(
      formData.password.value,
      formData.confirmpassword.value
    );

    const updatedFormData = { ...formData };

    updatedFormData.password = {
      ...formData.password,
      error: passwordError || "",
    };

    updatedFormData.confirmpassword = {
      ...formData.confirmpassword,
      error: confirmPasswordError || "",
    };

    if (passwordError || confirmPasswordError) {
      setFormData(updatedFormData);
      alert("Fix all error before submitting");
      return;
    }
    setIsLoading(true);

    const alertMessage = `
    Name: ${formData.fullname.value}
    Username: ${formData.username.value}
    Email: ${formData.email.value}
    Number: ${formData.number.value}
    Gender: ${formData.gender.value}
  `;

    setTimeout(() => {
      setIsLoading(false);
      alert(alertMessage);
      handleReset();
    }, 2000);
  };

  const handleReset = (): void => {
    setFormData({
      fullname: { value: "", error: "" },
      username: { value: "", error: "" },
      email: { value: "", error: "" },
      number: { value: "", error: "" },
      password: { value: "", error: "" },
      confirmpassword: { value: "", error: "" },
      gender: { value: "", error: "" },
    });
  };

  return (
    <div className="form">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form__inputField">
          <div className="form__inputField__nameField">
            <Input
              id="fullname"
              required
              label="Full Name"
              type="text"
              placeholder="Enter your name"
              value={formData.fullname.value}
              onChange={handleInputChange}
              errorMessage={formData.fullname.error}
            />
            <Input
              id="username"
              required
              label="User Name"
              type="text"
              placeholder="Enter your username"
              value={formData.username.value}
              onChange={handleInputChange}
              minLength={3}
              maxLength={20}
              errorMessage={formData.username.error}
            />
          </div>

          <div className="form__inputField__emailField">
            <Input
              id="email"
              required
              label="Email"
              type="email"
              placeholder="Enter your email"
              value={formData.email.value}
              onChange={handleInputChange}
              errorMessage={formData.email.error}
            />
            <Input
              id="number"
              required
              label="Phone Number"
              type="tel"
              placeholder="Enter your number"
              value={formData.number.value}
              onChange={handleInputChange}
              maxLength={10}
              errorMessage={formData.number.error}
            />
          </div>

          <div className="form__inputField__passwordField">
            <Input
              id="password"
              required
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={formData.password.value}
              onChange={handleInputChange}
              errorMessage={formData.password.error}
            />
            <Input
              id="confirmpassword"
              required
              label="Confirm Password"
              type="password"
              placeholder="Re-enter your password"
              value={formData.confirmpassword.value}
              onChange={handleInputChange}
              errorMessage={formData.confirmpassword.error}
            />
          </div>
        </div>

        <div className="form__inputField__radioField">
          <RadioInput
            id="gender"
            label="Gender"
            name="gender"
            required
            value={formData.gender.value}
            onChange={handleInputChange}
            errorMessage={formData.gender.error}
            options={[
              { label: "male", value: "male" },
              { label: "female", value: "female" },
              { label: "prefer not to say", value: "prefer not to say" },
            ]}
          />
        </div>

        <div className="form__buttons">
          <Button
            buttonClassname="submitButton"
            type="submit"
            label="Register"
            variant="primary"
            labelAppend={<FaArrowRight />}
            isloading={isLoading}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
