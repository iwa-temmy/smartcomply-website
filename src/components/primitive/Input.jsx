import React, { useState } from "react";
import FormHelperText from "./FormHelperText";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const Input = (props) => {
  const {
    onChange,
    value,
    onBlur,
    type,
    id,
    placeholder,
    name,
    className,
    error,
  } = props;
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div className="relative">
        <input
          className={className}
          type={type === "password" && showPassword ? "text" : type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
        />

        {type === "password" ? (
          <button
            className="absolute right-3 top-5"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
          </button>
        ) : null}
      </div>
      {error ? <FormHelperText text={error} /> : null}
    </>
  );
};

export default Input;
