import {Component} from 'react';

class Player extends Component {

    //Handles clicks on +/- buttons. Runs callback from App.js and sends updated score with it.
    handleClick = e => {

        const btnName = e.target.name;
        const playerId = e.target.id;

        if (btnName === "plus"){
            this.props.updateScore(this.props.score+1, playerId);
        } else {
            this.props.updateScore(this.props.score-1, playerId);
        }
    }

    render () {
        return (
            <h2>{this.props.playerName} {this.props.score} <button name={"plus"} onClick={this.handleClick} id={this.props.id}>+</button><button name={"minus"} id={this.props.id} onClick={this.handleClick}>–</button></h2>
        )
    }
}

export default Player;