import React from "react";
import { withRouter } from "react-router-dom";
import "./login_signup_form.css";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      component: "signupItem1",
      idx: 0,
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
    this.handleCloseModal = this.handleCloseModal.bind(this);
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
    this.props.openModal({ modal: "ShowLogin" });
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) =>
          <li key={`error-${i}`}>
            {error}
          </li>
        )}
      </ul>
    );
  }

  selectedComponent(e) {
    e.preventDefault();
    const { idx } = this.state;
    const components = ["signupItem2", "signupItem3"];
    const selected = components[idx];
    const newIdx = idx + 1;
    return this.setState({ component: selected, idx: newIdx });
  }

  signupItem1() {
    return (
      <div>
        <label>
          Mobile Number:
          <br />
          <input
            type="text"
            value={this.state.phone_number}
            onChange={this.update("phone_number")}
            className="login-input"
          />
        </label>
        <br />
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
      </div>
    );
  }

  signupItem2() {
    return (
      <div>
        <label>
          Birthdate:
          <br />
          <input
            type="date"
            value={this.state.birthdate}
            onChange={this.update("birthdate")}
            className="login-input"
          />
        </label>
        <br />
        <br />
        <label>
          Gender:
          <br />
          <fieldset id="genderClass">
            <div className="radio">
              <input
                id="radio-1"
                type="radio"
                value="M"
                onClick={this.update("gender")}
                name="genderClass"
              />
              <label htmlFor="radio-1" className="radio-label">
                Male
              </label>
              <br />
            </div>
            <div className="radio">
              <input
                id="radio-2"
                type="radio"
                value="F"
                onClick={this.update("gender")}
                name="genderClass"
              />
              <label htmlFor="radio-2" className="radio-label">
                Female
              </label>
              <br />
            </div>
            <div className="radio">
              <input
                id="radio-3"
                type="radio"
                value="O"
                onClick={this.update("gender")}
                name="genderClass"
              />
              <label htmlFor="radio-3" className="radio-label">
                Other
              </label>
            </div>
          </fieldset>
        </label>
        <br />
        <br />
        <label>
          Sexual Preference:
          <br />
          <fieldset id="sexualPreferenceClass">
            <div className="radio">
              <input
                id="radio-4"
                type="radio"
                name="sexualPreferenceClass"
                value="M"
                onClick={this.update("sexual_preference")}
              />
              <label htmlFor="radio-4" className="radio-label">
                Male
              </label>
              <br />
            </div>
            <div className="radio">
              <input
                id="radio-5"
                type="radio"
                name="sexualPreferenceClass"
                value="F"
                onClick={this.update("sexual_preference")}
              />
              <label htmlFor="radio-5" className="radio-label">
                Female
              </label>
              <br />
            </div>
            <div className="radio">
              <input
                id="radio-6"
                type="radio"
                name="sexualPreferenceClass"
                value="O"
                onClick={this.update("sexual_preference")}
              />
              <label
                htmlFor="radio-6"
                className="radio-label"
                name="sexualPreferenceClass"
              >
                Other
              </label>
            </div>
          </fieldset>
        </label>
      </div>
    );
  }

  signupItem3() {
    return (
      <div>
        <label>
          Username:
          <br />
          <input
            type="text"
            value={this.state.username}
            onChange={this.update("username")}
            className="login-input"
          />
        </label>
        <br />
        <label>
          Zipcode:
          <br />
          <input
            type="text"
            value={this.state.zipcode}
            onChange={this.update("zipcode")}
            className="login-input"
          />
        </label>
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

        <label>
          Confirm Password:
          <br />
          <input
            type="password"
            value={this.state.confirmPassword}
            onChange={this.update("confirmPassword")}
            className="login-input"
          />
        </label>
      </div>
    );
  }

  handleCloseModal() {
    this.props.showLogo();
    this.props.closeModal();
  }

  render() {
    const { component } = this.state;
    const selection = {
      signupItem1: this.signupItem1(),
      signupItem2: this.signupItem2(),
      signupItem3: this.signupItem3()
    };

    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="close">
            <span
              className="close-modal"
              onClick={() => this.handleCloseModal()}
            >
              <i className="fas fa-times" />
            </span>
          </div>
          <h2 className="signup-message">GET STARTED!</h2>
          <br />
          {this.renderErrors()}
          <div className="signup-form">
            {selection[component]}
            {component === "signupItem3"
              ? <input
                  className="session-submit"
                  type="submit"
                  value={this.props.formType}
                />
              : ""}
          </div>
          {component !== "signupItem3"
            ? <button
                className="session-continue"
                onClick={this.selectedComponent.bind(this)}
              >
                Continue
              </button>
            : ""}
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
