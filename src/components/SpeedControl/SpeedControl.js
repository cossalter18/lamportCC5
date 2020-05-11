import React, { Component } from 'react';

// THIS COMPONENT IS OUR INTERFACE FOR SPEED
// YOU SHOULD DISPLAY THE CURRENT SPEED
// BUTTONS SHOULD INCREASE OR DECREASE SPEED, RESPECTIVELY

class SpeedControl extends Component {

  state={
    speed: 0,
  }


  increaseSpeed=()=>{
    console.log('INCREASE CLICK');
    
    this.setState({speed: this.state.speed + 1});
  }

  decreaseSpeed=()=>{
    console.log('DECREASE CLICK');
    if(this.state.speed === 0){
      this.setState({
        speed: 0
      });
    }else{ 
      this.setState({
        speed: this.state.speed - 1
      });
    }
  }
  
  render() {
    
    return (
      <div>
        <h2>Speed Control</h2>

        <button onClick={this.increaseSpeed} name="increase">Increase Speed</button>
        <p>SPEED: {this.state.speed}</p>
        <button onClick={this.decreaseSpeed} name="decrease">Decrease Speed</button>
       
      </div>
    )
  }
}

export default SpeedControl;