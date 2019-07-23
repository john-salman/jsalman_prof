import React, { Component } from 'react';


class GuessBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            current_guess_letter: "",
            current_guess_word: "",
        }
    };

    addLetter = event => {
        let char = event.target.value[event.target.value.length - 1];
        if (char) {
            let new_letter = char.toUpperCase();
            this.setState({current_guess_letter: new_letter});
        } /*else if (event.key && event.key === "enter") {
            this.props.submitLetter(this.state.current_guess_letter);
        }*/ // will return to this if time permits
    };

    submitLetter() {
        this.props.submitLetter(this.state.current_guess_letter);
    }

    addWord = event => {
        let string = event.target.value;
        if (string) {
            let new_word = string.toUpperCase();
            this.setState({current_guess_word: new_word});
        }
    };

    submitWord() {
        this.props.submitWord(this.state.current_guess_word);
    }


    render() {
        return (
            <div className="guess-box">
                <input name="letter" id="letter" onChange={this.addLetter} value={this.state.current_guess_letter}/>
                <button onClick={() => this.submitLetter()}>Guess a Letter</button>
                <input name="word" id="word" onChange={this.addWord} value={this.state.current_guess_word}/>
                <button onClick={() => this.submitWord()}>Guess a Word</button>
            </div>
        )
    }
}

export default GuessBox;