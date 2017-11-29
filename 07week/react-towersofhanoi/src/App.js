import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state={

    grid: [
      [100,75,50,25],
      [],
      []
    ],
      popped: 0
  }

  handleClickEventStack(stack){
  const lengthMinusOne = this.state.grid[stack].length - 1;
    const lastInStack = this.state.grid[stack][lengthMinusOne];

    if(this.state.popped === 0 && lastInStack > 0){
      let x = this.state.grid[stack].pop();
      this.setState({popped: x})
      console.log('line 22' + this.state.popped + x)
    }

    if(this.state.popped > 0){
      if(this.state.popped < lastInStack || lengthMinusOne === 0){
        let y = this.state.popped;
        this.setState({grid: [stack][y] })

      }
    }
  }
  renderGrid(){
    return this.state.grid.map((data, key) =>{
      return (
        <div classname="dataStack" key={key}>

        </div>

      )
    })
    }
  render() {
    return (
      <div>
        <div className="dataStack" onClick={() => this.handleClickEventStack(0)}>
          <h1>A</h1>
          <div className="dataBlock-100">
          </div>

          <div className="dataBlock-75">
          </div>
          <div className="dataBlock-50">
          </div>
          <div className="dataBlock-25">
          </div>
        </div>
        <div className="dataStack" onClick={() => this.handleClickEventStack(1)}>
        <h1>B</h1>
        </div>
        <div className="dataStack" onClick={() => this.handleClickEventStack(2)}>
        <h1>C</h1>
        </div>
      </div>
    );
  }
}

export default App;
