import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state={

      a:[100,75,50,25],
      b:[],
      c:[],
      popped: 0
  }

  handleClickEventStack(stack, letter){
    let stackLength = stack.length;
    let lastInStack = stack[stack.length-1];
    console.log(lastInStack)
    console.log(stackLength)
      if( stack.length > 0 && this.state.popped === 0 ){
         let x = stack.pop();
         this.setState( { popped: x } )
       }
      if(this.state.popped > 0){
        if(this.state.popped < lastInStack || stackLength === 0){
          let x = this.state.popped;
          console.log( x + 'this is popped' );
          stack.push(x);
          this.setState( { popped : 0 } );
        }
        // //HOW DO I PASS THE STACK ARGUMENT FROM THE dataStack DIV???
      }
  }
  render() {
    let a = a;
    let b = this.state.b;
    let c = this.state.c;
    return (
      <div>
        <div className="dataStack"  onClick={() => this.handleClickEventStack(this.state.a, a)}>
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
        <div className="dataStack" key='b' onClick={() => this.handleClickEventStack(this.state.b, 'b')}>
        <h1>B</h1>
        </div>
        <div className="dataStack" key='c' onClick={() => this.handleClickEventStack(this.state.c, 'c')}>
        <h1>C</h1>
        </div>
      </div>
    );
  }
}

export default App;
