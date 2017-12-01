import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state={
        stacks:{
          a:[100,75,50,25],
          b:[],
          c:[]
        },
        popped: 0,
        gameOver: null,
  }

  renderBlocks(letter){
    const callingStacks = this.state.stacks[letter];
    const test = 'dataBlock';
    return (
      <div>{callingStacks.map(block => <div className={test + '-' + block}></div>)}
      </div>
    )
  }
  renderStacks(){
    const callingStacks = this.state.stacks;
    return (

      <div>{Object.keys(callingStacks).map(letter => <div className='dataStack' onClick={() => this.handleClickEventStack(letter)}>{letter} : {this.renderBlocks(letter)}</div>)}</div>
)
}
  win(){
    return alert('You win!'),
    this.setState({
          stacks:{
            a:[100,75,50,25],
            b:[],
            c:[]
          },
          popped: 0,
          gameOver: null
        })
  }
  handleClickEventStack(letter){
    if(this.state.gameOver !== true){
    console.log(letter)
    let stackLength = this.state.stacks[letter].length;
    let lastInStack = this.state.stacks[letter][stackLength - 1];
    console.log(lastInStack);

    if( stackLength && this.state.popped === 0 ){
      let storedPopped = this.state.stacks[letter].pop();
      this.setState( { popped: storedPopped } )
    }
    if(this.state.popped > 0){
      if(this.state.popped < lastInStack || stackLength === 0){
        let storedPopped = this.state.popped;
        console.log('this is stored ', storedPopped)
        this.state.stacks[letter].push(storedPopped);
        this.setState( { popped : 0 } );
      }
    }
    if(this.state.stacks.c.length === 4){
      return this.setState( { gameOver: true } ),
      this.win();
    }

  }
}
  render() {


    return (
        this.renderStacks()
      //
      // <div>
      //
      //   <div className="dataStack"  onClick={() => this.handleClickEventStack(this.state.stacks.a, 'a')}>
      //     <h1>A</h1>
      //     <div className="dataBlock-100">
      //     </div>
      //
      //     <div className="dataBlock-75">
      //     </div>
      //     <div className="dataBlock-50">
      //     </div>
      //     <div className="dataBlock-25">
      //     </div>
      //   </div>
      //   <div className="dataStack" key='b' onClick={() => this.handleClickEventStack(this.state.b, 'b')}>
      //   <h1>B</h1>
      //   </div>
      //   <div className="dataStack" key='c' onClick={() => this.handleClickEventStack(this.state.c, 'c')}>
      //   <h1>C</h1>
      //   </div>
      // </div>
    );
  }
}

export default App;
