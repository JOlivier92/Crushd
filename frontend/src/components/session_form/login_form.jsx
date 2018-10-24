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

  render() {
    return <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
        <h2 className="login-signup-message">WELCOME BACK!</h2>
          <br />
          {this.renderErrors()}
          <div className="login-form">
            <label>
              Email:
              <br/>
              <input type="text" value={this.state.email} onChange={this.update("email")} className="login-input" />
            </label>
            <br />
            <br />
            <label>
              Password:
              <br/>
              
              <input type="password" value={this.state.password} onChange={this.update("password")} className="login-input" />
            </label>

            <br />
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
          <div onClick={this.handleOpenModal}>
            SIGN UP instead
          </div>
        </form>
      </div>;
  }
}

export default withRouter(LoginForm);
