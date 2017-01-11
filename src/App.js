import React, { Component } from 'react';

class App extends Component {
  componentWillMount() {
    this.state = {focus: false}
  }
  handleFocus() {
    this.setState({focus: true})
  }
  handleBlur() {
    this.setState({focus: false})
  }
  render() {
    let logoClass = this.state.focus? 'logo active': 'logo'
    return (
      <div className="App">
        <a href="#">
          <div className={logoClass} onFocus={this.handleFocus.bind(this)} onBlur={this.handleBlur.bind(this)}>
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
