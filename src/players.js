import {Component} from 'react';

class Players extends Component {

    state = {
        playerOne: this.props.playerOne,
        playerTwo: this.props.playerTwo,
        playerThree: this.props.playerThree
    }

    handleClick = (e) => {

        const parentId = e.target.parentNode.id;
        const operator = e.target.name;

        const increment = () => {
            this.setState(state => ({
                [parentId]: state[parentId] + 1
            }));
        }

        const decrement = () => {
            this.setState(state => ({
                [parentId]: state[parentId] - 1
            }));
        }

        const updateGlobal = () => this.props.changeScore(this.state[parentId], parentId);

        const updateState = async () => {

            if(operator === "plus"){
                await increment();
                updateGlobal();
                } else {
                await decrement();
                updateGlobal();
            }
        }

        updateState();
    }

    generatePlayers() {
        const playerArray = Object.entries(this.state).sort((a, b) => a-b);
        return (
            playerArray.map(([player, score]) => (
            <li key={player} id={player}>
                {player}: {score} 
                <button name="plus" onClick={this.handleClick}>+</button>
                <button name="minus" onClick={this.handleClick}>–</button>
            </li>)));
    }

    render () {
        return (
            <div>
                <h2>Players</h2>
                <ul>
                    {this.generatePlayers()}   
                </ul>
            </div>
        );
    }
}

export default Players;