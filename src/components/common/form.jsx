import React, { Component } from "react";
import Input from "./input";
import Joi from "joi-browser";

class Form extends Component {
  validate() {
    const { error } = Joi.validate(this.state.data, this.schema, {
      abortEarly: false,
    });

    if (!error) return null;

    const errors = {};
    for (const item of error.details) {
      errors[item.path] = item.message;
    }

    return errors;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors });

    if (!errors) {
      this.doSubmit();
      return;
    }
    console.log(errors);
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  renderInput(name, placeholder, type = "text", ...rest) {
    const {data, errors } = this.state;
    return (
      <Input
        {...rest}
        type={type}
        name={name}
        value={data[name]}
        placeholder={placeholder}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderButton(label) {
    return <button className="btn btn-dark mt-5">{label}</button>;
  }
}

export default Form;
