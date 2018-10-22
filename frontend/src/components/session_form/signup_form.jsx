import React from "react";
import { withRouter } from "react-router-dom";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      birthdate: "",
      phone_number: "",
      password: "",
      confirmPassword: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to Crush'd!
          <br />
          Please {this.props.formType} or {this.props.navLink}
          {this.renderErrors()}
          <div className="login-form">
            <label>
              Email:
              <input
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                className="login-input"
              />
            </label>

            <br />

            <label>
              Username:
              <input
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
                className="login-input"
              />
            </label>
            <br />
            <label>
              Phone Number:
              <input
                type="text"
                value={this.state.phone_number}
                onChange={this.update("phone_number")}
                className="login-input"
              />
            </label>
            <br />
            <label>
              Birthdate:
              <input
                type="date"
                value={this.state.birthdate}
                onChange={this.update("birthdate")}
                className="login-input"
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="login-input"
              />
            </label>

            <br />

            <label>
              Confirm Password:
              <input
                type="password"
                value={this.state.confirmPassword}
                onChange={this.update("confirmPassword")}
                className="login-input"
              />
            </label>

            <br />
            <input
              className="session-submit"
              type="submit"
              value={this.props.formType}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
