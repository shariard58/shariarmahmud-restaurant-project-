import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      telnum: "",
      email: "",
      agree: true,
      contactType: "Tel.",
      message: "",
    };
  }
  render() {
    return (
      <div className="container">
        <div className="row row-content">
          <div className="col-12">
            <h3> Send us your FeedBack</h3>
          </div>

          <div className="col-12">
            <Form>
              <FormGroup>
                <Label className="label" for="firstname">
                  First Name
                </Label>
                <Input
                  className="textF"
                  type="text"
                  name="fname"
                  id="firstname"
                  placeholder="First Name "
                  value={this.state.firstname}
                />
              </FormGroup>

              <FormGroup>
                <Label className="label" for="lastname">
                  Last Name
                </Label>
                <Input
                  className="textF"
                  type="text"
                  name="lname"
                  id="lastname"
                  placeholder="Last  Name "
                  value={this.state.lastname}
                />
              </FormGroup>

              <FormGroup>
                <Label className="label" for="number">
                  Phone Number
                </Label>
                <Input
                  className="textF"
                  type="number"
                  name="num"
                  id="number"
                  placeholder="Number "
                  value={this.state.telnum}
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="with a placeholder"
                  value={this.state.email}
                />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    id="checkbox2"
                    checked={this.state.agree}
                  />{" "}
                  <strong> May we contact you </strong>
                </Label>
              </FormGroup>

              <FormGroup>
                <Label for="contactType">Contact Type </Label>
                <Input
                  type="select"
                  name="contactType"
                  id="examplePassword"
                  value={this.state.contactType}
                >
                  <option> Tel.</option>
                  <option> Email </option>
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="exampleText">Message</Label>
                <Input
                  type="textarea"
                  name="text"
                  id="exampleText"
                  value={this.state.message}
                />
              </FormGroup>

              <Button type="submit" color="primary">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
