import React, {Component} from 'react'

class Car extends Component{
    constructor(props){
        super(props)
        this.state= {
            isEditing: false,
            carNo: this.props.car.car_no,
            carTime: this.props.car.time,
            pId:this.props.car.parkingId
           
          
        }
         this.handleInputChange=(event) =>
        {
          this.setState({
            [event.target.name] : event.target.value
          })
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            isEditing: false
            
        })
    }
    render (){
        if(!this.state.isEditing)
        {
        return (
            <div>
            {this.props.car.car_no}&nbsp;&nbsp;&nbsp;
            {this.props.car.time}&nbsp;&nbsp;&nbsp;
            <br></br>
           <button type="button" class="btn btn-success" value="Edit" onClick={() =>this.setState({isEditing:true})}>Edit</button>&nbsp;&nbsp;&nbsp;
           <button type="button" class="btn btn-warning" value="Delete" onClick={()=>this.props.onDelete(this.props.car.id)}>Delete</button>
          
            </div>
            )
        }
             else {
        return (
        <div>
        <input type="text"  class="form-control is-valid" name="carNo" onChange={this.handleInputChange}  value={this.state.carNo}/>
        <input type="text"  class="form-control is-valid" name="carTime" onChange={this.handleInputChange} value={this.state.carTime}/>
 <br></br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

 <button type="button"  class="btn btn-primary btn-sm" value="save" onClick={() =>
        this.props.onSave(this.props.car.id, {car_no:
            this.state.carNo , time:  this.state.carTime})}>Submit</button>
        </div>
        )
             }
            
        
    

    }
    }
export default Car