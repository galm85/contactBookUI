import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import PageHeader from "./common/pageHeader";
import http from '../services/httpService';
import { apiUrl } from "../config.json";


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

  doSubmit= async ()=> {
      console.log(this.state.data);
    const {data} = this.state;

    try {
        await http.post(`${apiUrl}/contact`, data);
        this.props.history.replace("/");
      } catch (ex) {
        if (ex.response && ex.response.status === 400) {
          this.setState({ errors: { email: "Email is taken" } });
        }
      }

    
  }

  render() {
    return (
      <div className="container">
        <PageHeader
          title="Create a new Contact"
          icon="fas fa-id-badge"
        ></PageHeader>

        <form onSubmit={this.handleSubmit}  method="POST">
          {this.renderInput("firstName", "First Name")}
          {this.renderInput("lastName", "Last Name")}
          {this.renderInput("email", "Email", "email")}
          {this.renderInput("phone", "Phone")}
          {this.renderButton("send")}
        </form>
      </div>
    );
  }
}

export default Contact;
