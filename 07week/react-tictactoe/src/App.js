import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  //keep track of player turn, first player is 'X', if div is empty allow placement of player turn, then check for win

  //if user clicks on data cell,

  //if no win, switch player turn
  state = {
    playerTurn:'X',
    grid:{},
    gameOver: false
  };

  handleClickEvent(cell){
    if(this.state.gameOver === false){
    if(!this.state.grid[cell]){

      const newGrid = {...this.state.grid};
      newGrid[cell] = this.state.playerTurn;
      const playerTurn = this.state.playerTurn === 'X' ? 'O' : 'X';
      this.setState({grid: newGrid, playerTurn})

     }
   }

   //check for horizontal first row win
   const currentGrid = this.state.grid;
   if(currentGrid[0] === this.state.playerTurn && currentGrid[1] === this.state.playerTurn && currentGrid[2] === this.state.playerTurn){
     this.setState({gameOver: true})
     alert(this.state.playerTurn + ' is the winner')
   }
   //check for hoizontal middle row win
   if(currentGrid[3] === this.state.playerTurn && currentGrid[4] === this.state.playerTurn && currentGrid[5] === this.state.playerTurn){
     this.setState({gameOver: true})
     alert(this.state.playerTurn + ' is the winner')
   }
   //check for horizontal bottom row win
   if(currentGrid[6] === this.state.playerTurn && currentGrid[7] === this.state.playerTurn && currentGrid[8] === this.state.playerTurn){
     this.setState({gameOver: true})
     alert(this.state.playerTurn + ' is the winner')
   }
   //check for win, left column
   if(currentGrid[0] === this.state.playerTurn && currentGrid[3] === this.state.playerTurn && currentGrid[6] === this.state.playerTurn){
     this.setState({gameOver: true})
     alert(this.state.playerTurn + ' is the winner')
   }
   //check for win, middle column
   if(currentGrid[1] === this.state.playerTurn && currentGrid[4] === this.state.playerTurn && currentGrid[7] === this.state.playerTurn){
     this.setState({gameOver: true})
     alert(this.state.playerTurn + ' is the winner')
   }
   //check for win, right column
   if(currentGrid[2] === this.state.playerTurn && currentGrid[5] === this.state.playerTurn && currentGrid[8] === this.state.playerTurn){
     this.setState({gameOver: true})
     alert(this.state.playerTurn + ' is the winner')
   }
   //check for win, horizontal left to right
   if(currentGrid[0] === this.state.playerTurn && currentGrid[4] === this.state.playerTurn && currentGrid[8] === this.state.playerTurn){
     this.setState({gameOver: true})
     alert(this.state.playerTurn + ' is the winner')
   }

     //check for win, horizontal right to left
     if(currentGrid[2] === this.state.playerTurn && currentGrid[4] === this.state.playerTurn && currentGrid[6] === this.state.playerTurn){
       this.setState({gameOver: true})
       alert(this.state.playerTurn + ' is the winner')
     }
     //game over, reset
   if(this.state.gameOver === true){
     this.setState({grid: {}});
     this.setState({gameOver: false})
   }
  }

  render() {
    return (


          <div>
          <div className="row">
            <div className="playBox" onClick={() => this.handleClickEvent(0)}>{this.state.grid[0]}</div>
            <div className="playBox" onClick={() => this.handleClickEvent(1)}>{this.state.grid[1]}</div>
            <div className="playBox" onClick={() => this.handleClickEvent(2)}>{this.state.grid[2]}</div>
          </div>
          <div className="row">
            <div className="playBox" onClick={() => this.handleClickEvent(3)}>{this.state.grid[3]}</div>
            <div className="playBox" onClick={() => this.handleClickEvent(4)}>{this.state.grid[4]}</div>
            <div className="playBox" onClick={() => this.handleClickEvent(5)}>{this.state.grid[5]}</div>
          </div>
          <div className="row">
            <div className="playBox" onClick={() => this.handleClickEvent(6)}>{this.state.grid[6]}</div>
            <div className="playBox" onClick={() => this.handleClickEvent(7)}>{this.state.grid[7]}</div>
            <div className="playBox" onClick={() => this.handleClickEvent(8)}>{this.state.grid[8]}</div>
          </div>
        </div>
    );
  }
}

export default App;