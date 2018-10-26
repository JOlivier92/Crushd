import React from 'react';

//import containers
import './home_nav.css'



class HomeNav extends React.Component {

  render() {
    return <div className="home-nav-container">
        <div className="home-nav">
          <button className="messages-button">Message Button</button>
          <button className="matches-button">Matches Button</button>
        </div>
      </div>;

  }
};

export default HomeNav;