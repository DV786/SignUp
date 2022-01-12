import React, { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Componets/CSS/form.css";
import { useForm } from "react-hook-form";
import { TalentPage } from "../Action/authentication";
import { connect } from "react-redux";
import { NavLink } from "react-bootstrap";

const TalentSignUp = ({ TalentPage }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.name });
  };

  const onSubmit = (e) => {
    TalentPage({ firstname, lastname, username, password, email });
    alert("Sign Up In FAN Page");
  };

  const { firstname, lastname, username, email, password } = data;
  return (
    <div className="form-wrapper">
      <div className="form-Container">
        <ul className="nav nav-pills">
          <li className="nav-item d-flex justify-content-center">
            <NavLink className="nav-link " to="/">
              FAN SIGNUP
            </NavLink>
            <NavLink className="nav-link active" to="/TalentSignUp">
              TALENT SIGNUP
            </NavLink>
          </li>
        </ul>
        <div>
          <Container>
            <Row>
              <Col>
                <div>
                  <p className="Heading">Create Your Talent Account</p>
                </div>
                <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                  <Form.Group className="">
                    <Form.Label className="Label">First Name*</Form.Label>
                    <Form.Control
                      className="Input"
                      type="input"
                      placeholder="First Name"
                      {...register("firstname", {
                        onChange: (e) => onChange(e),
                        required: "Required",
                        maxLength: 12,
                      })}
                      defaultValue={firstname}
                    />
                  </Form.Group>
                  <p className="err">{errors.firstname?.message}</p>

                  <Form.Group className="">
                    <Form.Label className="Label">Last Name*</Form.Label>
                    <Form.Control
                      className="Input"
                      type="input"
                      placeholder="Last Name"
                      {...register("lastname", {
                        onChange: (e) => onChange(e),
                        required: "Required",
                        maxLength: 12,
                      })}
                      defaultValue={lastname}
                    />
                  </Form.Group>

                  <p className="err">{errors.lastname?.message}</p>
                  <Form.Group className="">
                    <Form.Label className="Label">Username*</Form.Label>
                    <Form.Control
                      className="Input"
                      type="input"
                      placeholder="Username"
                      defaultValue={username}
                      {...register("username", {
                        onChange: (e) => onChange(e),
                        required: "Required",
                        maxLength: 12,
                      })}
                    />
                    {/* <p className="error">{formErrors.username}</p> */}
                  </Form.Group>
                  <p className="err">{errors.username?.message}</p>
                  <Form.Group className="" controlId="formBasicEmail">
                    <Form.Label className="Label">E-mail*</Form.Label>
                    <Form.Control
                      className="Input"
                      type="email"
                      placeholder="Enter email"
                      defaultValue={email}
                      onChange={(e) => onChange(e)}
                      {...register("email", {
                        onChange: (e) => onChange(e),
                        required: "Invalid Email",
                        pattern: /^\S+@\S+$/i,
                      })}
                    />
                    {/* <p className="error">{formErrors.email}</p> */}
                  </Form.Group>
                  <p className="err">{errors.email?.message}</p>
                  <Form.Group className="" controlId="formBasicPassword">
                    <Form.Label className="Label">Password*</Form.Label>
                    <Form.Control
                      className="Input"
                      type="password"
                      placeholder="Password"
                      defaultValue={password}
                      {...register("password", {
                        onChange: (e) => onChange(e),
                        required: "Required",
                        maxLength: 12,
                        minLength: 6,
                      })}
                      autoComplete="on"
                    />
                    {/* <p className="error">{formErrors.password}</p> */}
                  </Form.Group>
                  <p className="err">{errors.password?.message}</p>
                  <Form.Group
                    className="Checkbox"
                    controlId="formBasicCheckbox"
                  >
                    <Form.Check
                      type="checkbox"
                      label=" I agree to the Term & Condition "
                      {...register("Checkbox", {
                        required: "tick the checkbox",
                      })}
                    />
                  </Form.Group>
                  <p className="err-checkbox">{errors.Checkbox?.message}</p>
                  <div className="btn">
                    <Button className="btn-SignUp" type="submit">
                      Sign Up
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { TalentPage })(TalentSignUp);
