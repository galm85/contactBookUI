import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class Contact extends Form {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
    errors: {},
  };

  schema = {
    firstName: Joi.string().required().min(2).label("First Name"),
    lastName: Joi.string().required().min(2).label("Last Name"),
    email: Joi.string().email().label("Email"),
    phone: Joi.string().label("Phone number"),
  };

  doSubmit() {
    console.log("submitted");
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("firstName", "First Name")}
          {this.renderInput("lastName", "Last Name")}
          {this.renderInput("email", "Email", "email")}
          {this.renderInput("phone", "Phone")}
          {this.renderButton("send")}
        </form>

        <span>{this.state.errors.firstName}</span>
      </div>
    );
  }
}

export default Contact;
