import React from 'react';

//import containers
import './home_nav.css'



class HomeNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navOption: true,
    }

    this.responseNavClicked = this.responseNavClicked.bind(this);
    this.matchesNavClicked = this.matchesNavClicked.bind(this);
  }

  responseNavClicked() {
    this.props.showResponses();
    this.setState({
      navOption: true
    })
  }

  matchesNavClicked() {
    this.props.showMatches();
    this.setState({
      navOption: false 
    });
  }

  render() {
    const {  navOption } = this.state;
    let buttonOne = null;
    let buttonTwo = null;
    if (navOption) {
      buttonOne = "nav-chosen-button active";
      buttonTwo = "nav-chosen-button";
    } else {
      buttonOne = "nav-chosen-button";
      buttonTwo = "nav-chosen-button active";
    }

    return <div className="home-nav-container">
        <div className="home-nav">
        <button className={buttonOne} onClick={this.responseNavClicked}>
          Responses
            </button>
        <button className={buttonTwo} onClick={this.matchesNavClicked}>
          Matches
            </button>
        </div>
      </div>;

  }
};

export default HomeNav;