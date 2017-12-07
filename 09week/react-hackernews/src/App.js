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
      characters: null,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const that = this;
    fetch('https://swapi.co/api/people/').then((response) => response.json()).then((responseJson) => {
      console.log("line22")
      that.setState({characters: responseJson.results})
    })
    .catch((error) => {
      console.error(error);
    })
  }

  handleThis = () => {
    let newArr = [];
    newArr.push(this.state.characters.map(nombre => nombre.name).push(newArr)),
    console.log(this.state.characters.map(nombre => nombre.name))
  }

  handleChange(e,f) {
    this.setState({selection : f })
  }
  render() {


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
