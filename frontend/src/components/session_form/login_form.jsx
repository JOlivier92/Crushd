import React from "react";
import { withRouter } from "react-router-dom";
import "./login_signup_form.css";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.loginAsGuest = this.loginAsGuest.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleOpenModal(e) {
    e.preventDefault();
    this.props.openModal({ modal: "ShowSignup" });
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  loginAsGuest(e) {
    e.preventDefault();

    const email = "x@gmail.com".split("");
    const password = "password".split("");
    const button = document.getElementById("session-submit");
    debugger;
    this.setState({ email: "", password: "" }, () =>
      this.fillForm(email, password, button)
    );
  }

  fillForm(email, password, button) {
    if (email.length > 0) {
      this.setState({ email: this.state.email + email.shift() }, () => {
        window.setTimeout(
          () => this.fillForm(email, password, button),
          Math.floor(Math.random() * 50) + 45
        );
      });
    } else if (password.length > 0) {
      this.setState(
        { password: this.state.password + password.shift() },
        () => {
          window.setTimeout(
            () => this.fillForm(email, password, button),
            Math.floor(Math.random() * 50) + 45
          );
        }
      );
    } else {
      button.click();
    }
  }

  render() {
    return (
      <div className="login-form-container">
        <button onClick={this.loginAsGuest}>Login As Guest</button>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h2 className="login-signup-message">WELCOME BACK!</h2>
          <br />
          {this.renderErrors()}
          <div className="login-form">
            <label>
              Email:
              <br />
              <input
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                className="login-input"
              />
            </label>
            <br />
            <br />
            <label>
              Password:
              <br />
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="login-input"
              />
            </label>

            <br />

            <input
              className="session-submit"
              id="session-submit"
              type="submit"
              value={this.props.formType}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
