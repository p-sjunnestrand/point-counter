import {Component} from 'react';

class Form extends Component {

    state = {
        input: ""
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.addNewPlayer(this.state.input);
    }

    onChange = e => {
        this.setState({
            input: e.target.value
        })
    }

    render () {
        return (
            <form onSubmit={this.onSubmit}>
                <label htmlFor="newPlayerInput">Add new player: </label>
                <input id="newPlayerInput" onChange={this.onChange}/>
                <button type="submit">Add</button>
            </form>
        )
    }
}

export default Form;