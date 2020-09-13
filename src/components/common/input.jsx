import React from "react";

const Input = ({ name, placeholder, type, error, ...rest }) => {
  return (
    <div className="form-group">
      <input
        {...rest}
        name={name}
        id={name}
        placeholder={placeholder}
        type={type}
        className="form-control col-8 mt-5"
      />
      {error && <span className="text-danger">{error}</span>}
    </div>
  );
};

export default Input;
