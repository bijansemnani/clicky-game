import React, { Component } from 'react';
import logo from './logo.svg';
import friends from "./friends.json";
import './App.css';
import Pictures from "./components/Pictures";

class App extends Component {

  state = {
    friends: friends
  };

  toggleClick = chosen => {

  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.state.friends.map(friend => (
          <Pictures
            key={friend.id}
            id={friend.id}
            image={friend.image}
            toggleClick={this.toggleClick}
          />
        ))}

      </div>
    );
  }
}

export default App;
