// File: HangMan.js
// Author: John Salman
import React, { Component } from 'react';

import hang_man_0 from '../drawings/hang_man_0.png';
import hang_man_1 from '../drawings/hang_man_1.png';
import hang_man_2 from '../drawings/hang_man_2.png';
import hang_man_3 from '../drawings/hang_man_3.png';
import hang_man_4 from '../drawings/hang_man_4.png';
import hang_man_5 from '../drawings/hang_man_5.png';
import hang_man_6 from '../drawings/hang_man_6.png';
import hang_man_7 from '../drawings/hang_man_7.png';

import GameCard from "./GameCard";

const hang_man_drawings = [hang_man_0, hang_man_1, hang_man_2, hang_man_3, hang_man_4, hang_man_5, hang_man_6, hang_man_7];

/*
* Class: HangMan
* Description: Primary stateful component, handles game logic, and manages all child components.
*              One stateful child component: GuessBox
* */
class HangMan extends Component {
  // Function: Constructor
  // Description: Instantiates game and determines first round solution.
  constructor(props) {
    super(props);

    let _word_bank = ["RABBIT", "BUNNY", "CARROT", "LETTUCE", "BURROW",
      "FLUFFY", "FLOPPY", "LITTER", "PELLETS"];

    let initial_index = Math.floor((Math.random() * 7));
    let _solution = JSON.parse( JSON.stringify( _word_bank[initial_index]));
    _word_bank.splice(initial_index, 1);
    let _words_used = [_solution];

    let _current_word = "";
    for (let i = 0; i < _solution.length; i++) {
      _current_word += "_";
    }

    let _history = [];
    _history = _history.concat({
      current_word: _current_word,
      hang_man_state: 0,
      current_hang_man: hang_man_drawings[0],
      guesses: 0,
      victory_condition: ""
    });

    this.state = {
      guesses: 0,
      history: _history,
      word_bank: _word_bank,
      words_used: _words_used,
      solution: _solution,
      current_hang_man: hang_man_drawings[0],
      hang_man_state: 0,
      current_word: _current_word,
      victory_condition: ""
    };

    this.submitLetter = this.submitLetter.bind(this);
    this.submitWord = this.submitWord.bind(this);
    this.undo = this.undo.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:80');


  }

  // Function: setCharAt
  // Description: Is used to modify the current_word state variable and
  //              replace underscores with the appropriate user-guessed
  //              letter.
  // This function references a thread at: https://stackoverflow.com/questions/1431094/how-do-i-replace-a-character-at-a-particular-index-in-javascript
  setCharAt(str, index, chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
  }

  // Function: submitLetter
  // Description: Receives the user guessed letter from GameCard->GuessBox,
  //              determines if it is part of the solution, and handles
  //              necessary game logic.
  // Expected Param: A single character representing the user guess.
  submitLetter(letter) {
    let _victory_condition = "";
    let _guesses = this.state.guesses + 1;
    let _current_word = JSON.parse(JSON.stringify(this.state.current_word.slice()));
    let _hang_man_state = this.state.hang_man_state;
    let _current_hang_man = hang_man_drawings[_hang_man_state];


    if (this.state.solution.search(letter) !== -1) { // The letter is contained in the solution word

      for (let i = 0; i < this.state.solution.length; i++) {
        if (this.state.solution[i] === letter) {
          _current_word = this.setCharAt(_current_word, i, letter);
        }
      }

      if (_current_word === this.state.solution) {
        _victory_condition = "Won";
      } else if (_guesses === 7) {
        _victory_condition = "Lost";
      }

    } else { // The letter is not part of the solution word
      _hang_man_state++;
      _current_hang_man = hang_man_drawings[_hang_man_state];
      if (_guesses === 7) {
        _victory_condition = "Lost";
      }


    }

    let _history = JSON.parse(JSON.stringify(this.state.history.slice()));

    _history = _history.concat({
      current_word: _current_word,
      hang_man_state: _hang_man_state,
      current_hang_man: _current_hang_man,
      guesses: _guesses,
      victory_condition: _victory_condition
    });

    this.setState({
      current_word: _current_word,
      hang_man_state: _hang_man_state,
      current_hang_man: _current_hang_man,
      guesses: _guesses,
      victory_condition: _victory_condition,
      history: _history
    });
  }

  // Function: submitWord
  // Description: Receives the user-guessed word as a string, determines
  //              if it is the solution, and handles all necessary game logic
  // Expected Param: a string representing the user guessed word
  submitWord(word) {
    let _victory_condition = "";
    let _hang_man_state = this.state.hang_man_state;
    let _current_hang_man = hang_man_drawings[_hang_man_state];
    let _current_word = this.state.current_word;

    if (word === this.state.solution) { // if they correctly guess the word then they won
      _victory_condition = "Won";
      _current_word = this.state.solution;
    } else {
      _victory_condition = "Lost";
      _hang_man_state = 7;
      _current_hang_man = hang_man_drawings[_hang_man_state];
    }

    let _history = JSON.parse(JSON.stringify(this.state.history.slice()));
    let _guesses = this.state.guesses;

    _history = _history.concat({
      current_word: _current_word,
      hang_man_state: _hang_man_state,
      current_hang_man: _current_hang_man,
      guesses: _guesses,
      victory_condition: _victory_condition
    });

    this.setState({
      victory_condition: _victory_condition,
      current_word: _current_word,
      hang_man_state: _hang_man_state,
      current_hang_man: _current_hang_man,
      history: _history,
    })
  }

  // Function: endGame
  // Description: This function checks if the user has satisfied an
  //              end game condition, and prints the appropriate
  //              message to the screen as well as a button that
  //              will allow the user to begin another round.
  endGame() {
    if (this.state.victory_condition === "Won") {
      return (
        <div>
          <p><strong>Congratulations! You won!</strong></p>
          <button onClick={() => this.reset()}>Play Again?</button>
        </div>
      )
    } else if (this.state.victory_condition === "Lost") {
      return (
          <div>
            <p><strong>Oh no! You lost!</strong></p>
            <button onClick={() => this.reset()}>Play Again?</button>
          </div>
      )
    }
  }

  // Function: reset
  // Description: This will reset the game and begin a new round with a new
  //              word.
  reset() {
    let _word_bank = JSON.parse(JSON.stringify(this.state.word_bank.slice()));

    let new_index = Math.floor((Math.random() * 7));
    let _solution = JSON.parse( JSON.stringify( _word_bank[new_index]));
    _word_bank.splice(new_index, 1);
    let _words_used = [_solution];

    let _current_word = "";
    for (let i = 0; i < _solution.length; i++) {
      _current_word += "_";
    }

    this.setState({
      guesses: 0,
      history: [],
      word_bank: _word_bank,
      words_used: _words_used,
      solution: _solution,
      letter_guess: "",
      current_hang_man: hang_man_drawings[0],
      hang_man_state: 0,
      current_word: _current_word,
      victory_condition: ""
    });
  }

  // Function: undo
  // Description: This function will undo the last user move, while ensuring
  //              user doesn't move past the beginning move of the game.
  undo() {
    if (this.state.history.length !== 1) {
      let _history = JSON.parse(JSON.stringify(this.state.history.slice()));
      console.log(_history[_history.length - 1]);
      let temp_state = {};
      _history.pop();
      let reverted_state = JSON.parse(JSON.stringify(Object.assign(temp_state, _history[_history.length - 1])));
      console.log("Revert", reverted_state);
      //_history.pop()

      let _current_word = reverted_state.current_word;
      let _hang_man_state = reverted_state.hang_man_state;
      let _current_hang_man = reverted_state.current_hang_man;
      let _guesses = reverted_state.guesses;
      let _victory_condition = reverted_state.victory_condition;

      this.setState({
        history: _history,
        current_word: _current_word,
        hang_man_state: _hang_man_state,
        current_hang_man: _current_hang_man,
        guesses: _guesses,
        victory_condition: _victory_condition
      });
    }
    console.log("State after undo", this.state)
  }

  render() {
    return (
        <div className="Hangman">
          <div className="end-game">{this.endGame()}</div>
          <GameCard
              current_hang_man={this.state.current_hang_man}
              submitLetter={this.submitLetter}
              submitWord={this.submitWord}
              undo={this.undo}
              current_word={this.state.current_word}
              reset={this.reset}
          />
        </div>
    );
  }
}

export default HangMan;
