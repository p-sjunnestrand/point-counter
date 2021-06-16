import {Component} from 'react';
import Player from './player';
import Form from './form';

class App extends Component {

  state = {
    players: {
      1: {pName: "playerOne", score: 0},
      2: {pName: "playerTwo", score: 0},
      3: {pName: "playerThree", score: 0}
    }
  }

  //Callback called in player.js. Takes in new score ass argument as well as id of player. Finds correct player through id and sets their score to the new score.
  updateScore = (newScore, id) => {

    const newState = {...this.state.players}

    newState[id].score = newScore;

    this.setState({
      players: newState
    })
  }

  //Adds new player w name from parameter. Called in form.js.
  addNewPlayer = (newPlayer) => {

    const newState = {...this.state.players}

    //Grabs the last key in state.players, adds one and inserts it as key in object.
    const stateKeys = Object.keys(this.state.players);
    
    const newPlayerKey = parseInt(stateKeys[stateKeys.length-1])+1;

    newState[newPlayerKey] = {pName: newPlayer, score: 0}
    
    this.setState({
      players: newState
    })
  }

  render () {
    return (
      <main>
        <h1>Point Counter</h1>
        {Object.keys(this.state.players).map((id) => 
          (<Player key={id} id={id} playerName={this.state.players[id].pName} score={this.state.players[id].score} updateScore={this.updateScore}/>)
        )}
        <Form addNewPlayer={this.addNewPlayer}/>
      </main>
    )
  }
}

export default App;
