import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Componets/CSS/form.css";
import { useForm } from "react-hook-form";
import { FanPage } from "../Action/authentication";
import { connect } from "react-redux";
import { NavLink } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const FanSignUp = ({ FanPage }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    FanPage({ firstname, lastname, username, password, email });
    alert("Sign Up In FAN Page");
  };

  const { firstname, lastname, username, email, password } = data;
  return (
    <div className="form-wrapper">
      <div className="form-Container">
        <ul className="nav nav-pills">
          <li className="nav-item d-flex justify-content-center">
            <NavLink className="nav-link active" to="/">
              FAN SIGNUP
            </NavLink>
            <NavLink
              className="nav-link"
              onClick={() => navigate("/talentsignup")}
            >
              TALENT SIGNUP
            </NavLink>
          </li>
        </ul>
        <div>
          <div className="Heading">
            <p>Create Your Fan Account</p>
          </div>
          <Container className="container">
            <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
              <div className="small">
                <div className="Label">First Name*</div>
                <input
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
                <span className="err">{errors.firstname?.message}</span>
              </div>

              <div className="small">
                <div className="Label">Last Name*</div>
                <input
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
                <span className="err">{errors.lastname?.message}</span>
              </div>

              <div className="small">
                <div className="Label">Username*</div>
                <input
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
                <span className="err">{errors.username?.message}</span>
                {/* <p className="error">{formErrors.username}</p> */}
              </div>

              <div className="small">
                <div className="Label">E-mail*</div>
                <input
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
                <span className="err">{errors.email?.message}</span>
                {/* <p className="error">{formErrors.email}</p> */}
              </div>

              <div className="small">
                <div className="Label">Password*</div>
                <input
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
                <span className="err">{errors.password?.message}</span>
                {/* <p className="error">{formErrors.password}</p> */}
              </div>

              <div className="Checkbox">
                <div className="Label">
                  <input
                    type="checkbox"
                    className="check"
                    {...register("Checkbox", {
                      required: "tick the checkbox",
                    })}
                  />
                  <span> I agree Trem & Condition</span>
                </div>
                <span className="err">{errors.Checkbox?.message}</span>
              </div>

              <div className="btn">
                <Button className="btn-SignUp" type="submit">
                  Sign Up
                </Button>
              </div>
            </Form>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { FanPage })(FanSignUp);
