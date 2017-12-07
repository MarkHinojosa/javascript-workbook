import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      selection : "default",
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillmount() {
    Api.get()
  }

  handleThis = () => {
    console.log("this")
  }

  handleChange(e,f) {
    this.setState({selection : f })
  }
  render() {
    console.log('render');


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
        <RaisedButton label="Default"
          onClick={e => this.handleThis(e)}
          />
        </div>
      <RadioButtonGroup name="shipSpeed" defaultSelected="not_light" onChange={this.handleChange}>
       <RadioButton
         value="light"
         label="b"
       />

     <RadioButton
       value="dark"
       label="c"
     />

     </RadioButtonGroup>
      </div>
    );
  }
}

export default App;
