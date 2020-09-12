import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class Contact extends Form {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
    },
    errors: {},
  };

  schema = {
    firstName: Joi.required().string().min(2),
    lastName: Joi.required().string().min(2),
    email: Joi.required().string().min(2).email(),
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("firstName", "First Name")}
          {this.renderInput("lastName", "Last Name")}
          {this.renderInput("email", "Email", "email")}
          {this.renderButton("send")}
        </form>
      </div>
    );
  }
}

export default Contact;
