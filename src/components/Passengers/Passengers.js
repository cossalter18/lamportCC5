import React, { Component } from 'react';
// THIS COMPONENT IS OUR INTERFACE FOR PASSENGER CHECK IN
// YOU SHOULD DISPLAY THE CURRENT PASSENGERS
// INPUT SHOULD COLLECT INFO, BUTTON SHOULD ADD THEM TO THE LIST

class Passengers extends Component {

  handleClick=()=>{
    console.log('in handleClick PASSENGERS');
   
  }

  handleChange=(event)=>{
    console.log(event.target.value);
    
  }
  render() {
    return (
      <div>
        <h2>Passengers</h2>

        <input type="text" name="name" placeholder="Enter Name" onChange={ ( event )=>this.handleChange( event, 'name') }></input>
        <button onClick={this.handleClick}>Add Passenger</button>

        <ul>PASSENGER LIST: GOES HERE</ul>
      
      </div>
    )
  }
}

export default Passengers;