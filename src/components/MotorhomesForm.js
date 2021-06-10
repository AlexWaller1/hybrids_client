// here is where the user will enter motorhome information
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addMotorhome } from '../actions/motorhomesActions'

class MotorhomesForm extends Component {

state = {
    name: '',
    year: '',
    mileage: '',
    color: '',
    description: '',
    image: ''
}
// all text fields with begin as empty strings

handleChange = e => {
    const { name, value } = e.target
    // grabbing name field and value field from form
    this.setState({
        [name]: value
    })
}
// will allow users to type in text fields

handleSubmit = e => {
    e.preventDefault()
    // will keep page from refreshing when form is submitted
    this.props.addMotorhome(this.state)
    // when submitted, component will call the addMotorhome function with current React State
}

render(){
    return(
        <form onSubmit={this.handleSubmit}>
            <label>Name:</label>
            <input type='text' value={this.state.name} onChange={this.handleChange} name="name" />
            <br/>
            <label>Model:</label>
            <input type='text' value={this.state.model} onchange={this.handleChange} name="model" />
            <label>Year:</label>
            <input type='text' value={this.state.year} onChange={this.handleChange} name="year" />
            <br/>
            <label>Mileage:</label>
            <input type='text' value={this.state.mileage} onChange={this.handleChange} name="mileage"/>
            <br/>
            <label>Color:</label>
            <input type='text' value={this.state.color} onChange={this.handleChange} name="color" />
            <br/>
            <label>Description:</label>
            <input type='text' value={this.state.description} onChange={this.handleChange} name="description" />
            <br/>
            <input type='submit' value='Submit Motorhome' />

        </form>
    )
}

}

export default connect(null, { addMotorhome })(MotorhomesForm);