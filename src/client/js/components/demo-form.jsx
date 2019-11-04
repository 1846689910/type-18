import React from "react";
import PropTypes from "prop-types";
import { FormValidator, EVUnit } from "cicero/lib/client";
import bs from "bootstrap/dist/css/bootstrap.min.css";

export default class DemoForm extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    this.formValidator = new FormValidator([
      new EVUnit(this._inputUsername, ele => ele.value.length > 0),
      new EVUnit(this._inputPassword, ele => ele.value.length > 8)
    ], {
      validCallback: () => {
        this._btnLogin.disabled = false;
        this._btnSignup.disabled = false;
      },
      invalidCallback: () => {
        this._btnLogin.disabled = true;
        this._btnSignup.disabled = true;
      },
      afterUnapply: () => {
        this._btnLogin.disabled = false;
        this._btnSignup.disabled = false;
      }
    }).apply();
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexFlow: "column wrap",
          justifyContent: "center",
          width: "50%",
          border: "1px solid rgba(0,0,0,0.5)",
          borderRadius: "10px"
        }}
      >
        <p style={{ margin: "0" }}>
          <strong>simple FormValidator display</strong>
        </p>
        <div style={{ height: "50px", padding: "10px 0" }}>
          <label htmlFor="username" style={{ width: "20%" }}>
            username{" "}
          </label>
          <input
            id="username"
            ref={r => this._inputUsername = r}
            type="text"
            style={{ width: "70%" }}
            autoComplete="off"
          />
        </div>
        <div style={{ height: "50px", padding: "10px 0" }}>
          <label htmlFor="password" style={{ width: "20%" }}>
            password{" "}
          </label>
          <input
            id="password"
            ref={r => this._inputPassword = r}
            type="password"
            style={{ width: "70%" }}
            autoComplete="off"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "flex-end"
          }}
        >
          <button
            ref={r => this._btnLogin = r}
            styleName={"bs.btn bs.btn-primary"}
            style={{
              margin: "0 30px",
              width: "30%",
              height: "40px",
              alignSelf: "center"
            }}
          >
            Log In
          </button>
          <button
            ref={r => this._btnSignup = r}
            styleName={"bs.btn bs.btn-info"}
            style={{
              margin: "0 30px",
              width: "30%",
              height: "40px",
              alignSelf: "center"
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    );
  }
}
DemoForm.propTypes = {};
