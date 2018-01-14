import React, { Component } from 'react'
import {EventEmitter} from 'fbemitter'
import CarOp from './storage/CarOp'
import Car from './Car'
import CarForm from './CarForm'

const emitter=new EventEmitter()
const storage =new CarOp(emitter)

class ParkedCars extends Component {

  constructor(props)
  {
     super(props)
     this.state = {
       cars: []
     }
       this.deleteCar=(carId) => {
       storage.deleteOne(this.props.parking.id,carId)
  }
  //fara parkingId
  this.addCar=(car) => {
      storage.createOne(this.props.parking.id,car)
  }
  this.saveCar=(carId,car) => {
      storage.saveOne(this.props.parking.id, carId, car)
  }

  }
  componentDidMount(){
    storage.getAll(this.props.parking.id)
    emitter.addListener('CAR LOADING..', () => {
      this.setState ({
        cars: storage.content
      })
    })
    
  }

  render() {
    return (
      <div>
      <button type="button" class="btn btn-primary btn-sm" value="Go Back" onClick= {
      () =>  this.props.onUnselect()}>Go back</button>
      <br></br><br></br>
     <div class="card border-info mb-3" styles="max-width: 20rem;">
  <div class="card-header">List of cars</div>
  <div class="card-body text-info">
    <h4 class="card-title">Your car is parked at  {this.props.parking.adress}</h4>
    <p class="card-text">{
        this.state.cars.map((c) =>
        <Car car={c} onDelete={this.deleteCar} onSave={this.saveCar} 
        key ={c.id}/>
  
      )
      }
  </p>
   </div>
         
        </div>
        <div>
        <h4>Register your car at this parking: </h4>
        <h6>Parking id: {this.props.parking.id}</h6>
        <CarForm onAdd={this.addCar} />
        </div>
        </div>
        
      

   
      
    )
  }
}

export default ParkedCars
