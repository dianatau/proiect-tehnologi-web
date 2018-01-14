import React, { Component } from 'react';


class CarForm extends Component {
   constructor(props)
    {
        super(props)
        this.state={
        carNo: ' ',
        carTime: ' ',
        pId:' '
       
       
        }
        
        this.handleInputChange=(event) =>
        {
          this.setState({
            [event.target.name] : event.target.value
          })
        }
    }

  render() {
    return (
      
       <div>
      <form>
      Car No: <input type="text" onChange={this.handleInputChange} name="carNo"/>&nbsp;&nbsp;
      Time: <input type="text" onChange={this.handleInputChange} name="carTime"/>&nbsp;&nbsp;
      Parking id: <input type="text" onChange={this.handleInputChange} name="pId"/>
     
     
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type="button"  class="btn btn-primary btn-sm" value ="add" onClick={() => this.props.onAdd({
          car_no: this.state.carNo, time: this.state.carTime ,parkingId: this.state.pId})}>Add</button>
      </form>
      </div>
    )
  }
}

export default CarForm
