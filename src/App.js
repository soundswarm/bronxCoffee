import React, { Component } from 'react';

class App extends Component {
  componentWillMount() {
    this.state = {focus: false}
  }

  render() {
    return (
      <div className="App">
        <a href="https://bronxcoffee.bigcartel.com">
          <div className="logo">
            <div className="logo-text">
              <div className="first">
                BRONX
              </div>
              <div className="second">
                COFFEE
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default App;
