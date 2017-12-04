
'use strict';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state={
        stacks: {
          a: [100, 75, 50, 25],
          b: [],
          c: [],
        },
        popped: 0,
        gameOver: null,
      };

  renderBlocks(letter) {
    const callingStacks = this.state.stacks[letter];
    const test = 'dataBlock';
    return (

      //used block value from array, added it to the class name to pull
       //unique CSS styling for each block
      <div>{callingStacks.map(block => <div className={test + '-' + block}></div>)}
      </div>
    );
  }

  renderStacks() {
    const callingStacks = this.state.stacks;
    return (

      <div>{Object.keys(callingStacks).map(
        letter => <div className='dataStack' onClick={
          () => this.handleClickEventStack(letter)}>{letter} : {this.renderBlocks(letter)}</div>)}
        </div>
    );
  }

  win() {
    return alert('You win!'),
    this.setState({
          stacks: {
            a: [100, 75, 50, 25],
            b: [],
            c: [],
          },
          popped: 0,
          gameOver: null,
        }
      );
  }

  handleClickEventStack(letter) {
    //check if game is over
    if (this.state.gameOver !== true) {
      let stackLength = this.state.stacks[letter].length;
      let lastInStack = this.state.stacks[letter][stackLength - 1];

      if (stackLength && this.state.popped === 0) {
        let storedPopped = this.state.stacks[letter].pop();
        this.setState({ popped: storedPopped });
      }

      //this checks is to make sure there isn't something already picked up
      if (this.state.popped > 0) {

        if (this.state.popped < lastInStack || stackLength === 0) {
          let storedPopped = this.state.popped;

          //add the picked up value to the drop stack
          this.state.stacks[letter].push(storedPopped);

          //reset popped
          this.setState({ popped: 0 });
        }
      }

      //win check

      if (this.state.stacks.c.length === 4) {
        return this.setState({ gameOver: true }),
      this.win();
      }
    }
  }

  render() {
    return (
        this.renderStacks()
    );
  }
}

export default App;
