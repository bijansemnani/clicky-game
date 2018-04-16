import React, { Component } from 'react';
import friends from "./friends.json";
import './App.css';
import Pictures from "./components/Pictures";
import Wrapper from "./components/Wrapper";

var score = 0;
var topScore = 0;

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

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
      shuffleArray(friends);
      this.setState({
        friends: friends
      });
    }
    else {
      topScore = (topScore < score) ? score : topScore;
      console.log(topScore);
      score = 0;
      for (var i = 0; i < friends.length; i++)
        friends[i].chosen = false;
      shuffleArray(friends);
      this.setState({
        friends: friends
      });
    }

  };
  render() {
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
