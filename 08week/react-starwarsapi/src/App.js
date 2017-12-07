import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

class App extends Component {

  constructor (props) {
    super(props);
    this.state ={
      choice: "test",
      data: "",

    }
    this.handleOnChange.bind(this);
    this.renderSelection.bind(this);
  }


  componentDidMount(){
   const that = this;
   fetch('https://swapi.co/api/planets/')
       .then((response) => response.json())
       .then((responseJson) => {
           that.setState({data: responseJson.results})
       })
       .catch((error) => {
           console.error(error);
       });
     }

  handleOnChange = (e,f) => {
    const that = this;
    this.setState({choice: f});
     const decision = 'https://swapi.co/api/' + this.state.choice + "/";

     console.log(decision)

    fetch(decision)
        .then((response) => response.json())
        .then((responseJson) => {
            that.setState({data: responseJson.results})
        })
        .catch((error) => {
            console.error(error);
        });
  }

  renderSelection(){
    let poop = this.state.data;
    console.log(this.state.data[0])
      return (
        <div> render names here

        </div>
      )

  }



  render() {
    const styles = {
        block: {
          maxWidth: 250,
        },
        radioButton: {
          marginBottom: 16,
        },
    };
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <RadioButtonGroup name="shipSpeed" defaultSelected="movies"
          onChange={this.handleOnChange}>
              <RadioButton
              value="planets"
              label="Planets"
              style={styles.radioButton}
              />
              <RadioButton
                value="species"
                label="Species"
                style={styles.radioButton}
              />
          </RadioButtonGroup>
          {this.renderSelection()}
        </div>
     </MuiThemeProvider>

    );
  }
}

export default App;
