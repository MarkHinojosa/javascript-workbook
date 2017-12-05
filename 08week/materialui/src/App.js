import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import TextField from 'material-ui/TextField';



import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';

//BUILD REACT APP OF YOU CHOICE
//IT MUST USE MATERIAL UI AND REACT ROUTER
//MUST HAVE AT LEAST 1 CHILD Component
//MUST USE DECONSTRUCTION AT LEAST ONCE

class VerticalLinearStepper extends React.Component {

  state = {
    finished: false,
    stepIndex: 0,
    color: '',
    eye_color: ''
  };







  handleOnClick (x){


    const getInfo = () => {
      console.log('line 45')
      return axios.get().then(() => {})

    }
    getInfo();

    this.setState({color : x});
    if(this.state.color === 'blue'){
      alert('The force is strong with you, young Skywalker, but you are not a Jedi yet!')

      this.setState({color : ''})
    } else if(this.state.color === 'red'){
      alert('I can feel your anger, it gives you focus. Makes you stronger! ')
     this.setState({color : ''})
    } else if(this.state.color === 'brown'){
      alert('Why you stuck up, half-Witted, scruffy looking, nerf herder!')
      this.setState({color : ''})
    }
    console.log(this.state.color)

   }

   handleEyeColorButton = (e,v) => {
     this.setState({
       eye_color: v})
       console.log('line 57')


   }

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  renderStepActions(step) {
    const {stepIndex} = this.state;

    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label={stepIndex === 2 ? 'Finish' : 'Next'}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onClick={this.handleNext}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onClick={this.handlePrev}
          />
        )}
      </div>
    );
  }

  render() {
    const {finished, stepIndex} = this.state;

    return (
      <div style={{maxWidth: 380, maxHeight: 400, margin: 'auto'}}>
        <Stepper activeStep={stepIndex} orientation="vertical">
          <Step>
            <h1> Which Star Wars character are you?</h1>
            <StepLabel>Select Favorite Color</StepLabel>
            <StepContent>
                    <div>

                      <p>Which color do you like more?</p>

                      <div>
                        <RaisedButton backgroundColor="#8C9EFF"
                         onClick={(blue) => this.handleOnClick('blue')}
                        />
                      </div>
                      <div>
                        <RaisedButton
                          backgroundColor="brown"
                          onClick={() => this.handleOnClick('brown')}
                        />
                      </div>

                    </div>
              {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>What color are your eyes?</StepLabel>
            <StepContent>
              <div>
              <TextField
                hintText="Ex. Blue"
                floatingLabelText="line 138"
                floatingLabelFixed={true}
                value={this.state.eye_color}
                onChange={(e,v) => this.handleEyeColorButton(e,v)}
              />
              </div>
              {this.renderStepActions(1)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Create an ad</StepLabel>
            <StepContent>
              <p>
              </p>
              {this.renderStepActions(2)}
            </StepContent>
          </Step>
        </Stepper>
        {finished && (
          <p style={{margin: '20px 0', textAlign: 'center'}}>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                this.setState({stepIndex: 0, finished: false});
              }}
            >
              Click here
            </a> to reset the example.
          </p>
        )}
      </div>
    );
  }
}
injectTapEventPlugin();
export default VerticalLinearStepper;
