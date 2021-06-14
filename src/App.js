import {Component} from 'react';
import Players from './players';

class App extends Component {

  state = {
    playerOne: 0,
    playerTwo: 0,
    playerThree: 0
  }

  changeScore = (score, player) => {
    console.log(player, score);
    this.setState({
      [player]: score
    })
  }

  render () {
    return (
      <main>
        <h1>Point Counter</h1>
        <Players playerOne={this.state.playerOne} playerTwo={this.state.playerTwo} playerThree={this.state.playerThree} changeScore={this.changeScore}/>
      </main>
    )
  }
}



export default App;
