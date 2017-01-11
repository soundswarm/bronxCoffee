import React, { Component } from 'react';

class App extends Component {
  componentWillMount() {
    this.state = {focus: false}
  }

  render() {
    return (
      <div className="App">
        <div className='header'>
          <span className='about-us'>
            <a href="#">
              About Us
            </a>
          </span>
          <span>
            <a href="http://bronxcoffee.bigcartel.com">
              Wholesale Orders
            </a>
          </span>
        </div>

        
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
      </div>
    );
  }
}

export default App;
