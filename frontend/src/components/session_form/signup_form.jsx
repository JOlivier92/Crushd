import React from "react";
import { withRouter } from "react-router-dom";
import "./login_signup_form.css";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      birthdate: "",
      phone_number: "",
      password: "",
      confirmPassword: "",
      gender: "",
      sexual_preference: "",
      zipcode: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
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
    this.props.openModal({ modal: "ShowLogin" })
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
    return <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h2 className="signup-message">GET STARTED!</h2>
          <br />
          {this.renderErrors()}
          <div className="signup-form">
            <label>
              Email:
              <br />
              <input type="text" value={this.state.email} onChange={this.update("email")} className="login-input" />
            </label>

            <br />

            <label>
              Username:
              <br />
              <input type="text" value={this.state.username} onChange={this.update("username")} className="login-input" />
            </label>
            <br />
            <label>
              Phone Number:
              <br />
              <input type="text" value={this.state.phone_number} onChange={this.update("phone_number")} className="login-input" />
            </label>
            <br />
            <label>
              Birthdate:
              <br />
              <input type="date" value={this.state.birthdate} onChange={this.update("birthdate")} className="login-input" />
            </label>
            <br />

            <label>
              Zipcode:
              <br />
              <input type="text" value={this.state.zipcode} onChange={this.update("zipcode")} className="login-input" />
            </label>
            <br />
            <br />
            <label>
              Gender:
              <br />
              <div className="radio">
                <input id="radio-1" type="radio" name="gender" value="M" onClick={this.update("gender")} />
                <label htmlFor="radio-1" className="radio-label">
                  Male
                </label>
                <br />
              </div>
              <div className="radio">
                <input id="radio-2" type="radio" name="gender" value="F" onClick={this.update("gender")} />
                <label htmlFor="radio-2" className="radio-label">
                  Female
                </label>
                <br />
              </div>
              <div className="radio">
                <input id="radio-3" type="radio" name="gender" value="O" onClick={this.update("gender")} />
                <label htmlFor="radio-3" className="radio-label">
                  Other
                </label>
              </div>
            </label>
            <br />
            <br />

            <label>
              Sexual Preference:
              <br />
              <div className="radio">
                <input id="radio-4" type="radio" name="gender" value="M" onClick={this.update("sexual_preference")} />
                <label htmlFor="radio-4" className="radio-label">
                  Male
                </label>
                <br />
              </div>
              <div className="radio">
                <input id="radio-5" type="radio" name="gender" value="F" onClick={this.update("sexual_preference")} />
                <label htmlFor="radio-5" className="radio-label">
                  Female
                </label>
                <br />
              </div>
              <div className="radio">
                <input id="radio-6" type="radio" name="gender" value="O" onClick={this.update("sexual_preference")} />
                <label htmlFor="radio-6" className="radio-label">
                  Other
                </label>
              </div>
            </label>
            <br />
            <br />
            <label>
              Password:
              <br />
              <input type="password" value={this.state.password} onChange={this.update("password")} className="login-input" />
            </label>

            <br />

            <label>
              Confirm Password:
              <br />
              <input type="password" value={this.state.confirmPassword} onChange={this.update("confirmPassword")} className="login-input" />
            </label>

            <br />
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>;
  }
}

export default withRouter(SignupForm);
