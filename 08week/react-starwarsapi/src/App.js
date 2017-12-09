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
      choice: "planets",
      data: [],

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

    if(this.state.choice){
      console.log(this.state.choice)
    }else{  this.setState({choice: f})}
if(this.state.choice === f){
  console.log("line 38")
}
}

  renderSelection(){
    if(this.state.data[0]){
      return <div>{this.state.data.map((key, index) => <div>{key.name}</div>)}</div>
    } else {
      return <div>loading...</div>
    }
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
          <RadioButtonGroup name="shipSpeed" defaultSelected="planets"
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
