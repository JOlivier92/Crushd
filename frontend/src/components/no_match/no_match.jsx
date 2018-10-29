import React from 'react';
import './no_match.css'

class NoMatch extends React.Component {

  render () {
    return <div className="no-match-background">
      <div className="no-match-container">
          <div class="no-match-header">404</div>
          <br/>
          <div className="no-match-message">PAGE NOT FOUND :( </div>
      </div>
    </div>;
  }
}


export default NoMatch