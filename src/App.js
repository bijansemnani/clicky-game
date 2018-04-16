import React, { Component } from 'react';
import logo from './logo.svg';
import friends from "./friends.json";
import './App.css';
import Pictures from "./components/Pictures";
import Wrapper from "./components/Wrapper";

var score = 0;
class App extends Component {

  state = {
    friends: friends
  };

  toggleClick = (chosen, id) => {
    var newObj = friends[id];
    if(chosen === false){
      score++;
      newObj.chosen = true;
      friends[id] = newObj;
      this.setState({
        friends: friends
      });
    }
    else {
      score = 0;
      for (var i = 0; i < friends.length; i++) {
        friends[i].chosen = false;
      }
      this.setState({
        friends: friends
      });
    }

  };
  render() {
    console.log(friends[0]);
    return (
      <Wrapper>
        {this.state.friends.map((friend, index )=> (
          <Pictures
            name={friend.name}
            key={friend.id}
            id={index}
            image={friend.image}
            toggleClick={this.toggleClick}
            chosen={friend.chosen}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
