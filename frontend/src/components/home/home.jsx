import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-content-section">
        <hgroup className="header-group">
          <h2 className="header-name">Hi, {this.props.currentUser.name}!</h2>
          <button className="header-button" onClick={this.props.logout}>
            Log Out
          </button>
        </hgroup>
      </div>
    );
  }
}

export default Home;
