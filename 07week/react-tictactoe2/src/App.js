// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Mark</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
//
// export default App;


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

   //check for win
   const currentGrid = this.state.grid;
   if(currentGrid[0] === 'X' && currentGrid[1] === 'X' && currentGrid[2] === 'X'){
     this.setState({gameOver: true})
     alert('winner')
   }
   if(this.state.gameOver === true){
     this.state.grid = {};
     this.state.gameOver = false;
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
