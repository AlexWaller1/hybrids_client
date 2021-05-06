// we want controlled components
// so values of input fields will be controlled by state
// store state is global
// component state is local and isolated to the respective component

import React, { Component } from 'react';
import { connect } from 'react-redux'

import { addHybrid } from '../actions/hybridsActions'

class HybridsForm extends Component {

   state = {
       name: '',
       species: '',
       origin: '',
       personality: '',
       image: ''
   }

   handleChange = e => {
       const { name, value } = e.target
       // name is name attribute on form, value is value attribute on form
       this.setState({
           [name]: value
       })
   }
   // allows user to type in text fields

   handleSubmit = e => {
       e.preventDefault()
       this.props.addHybrid(this.state)
   }
   // takes submitted data and is sent to post fetch request

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name:</label>
                <input type='text' value={this.state.name} onChange={this.handleChange} name="name" />
                <br/>
                <label>Species:</label>
                <input type='text' value={this.state.species} onChange={this.handleChange} name="species" />
                <br/>
                <label>Origin:</label>
                <input type='text' value={this.state.origin} onChange={this.handleChange} name="origin" />
                <br/>
                <label>Personality:</label>
                <input type='text' value={this.state.personality} onChange={this.handleChange} name="personality" />
                <br/>
                <label>Image:</label>
                <input type='text' value={this.state.image} onChange={this.handleChange} name="image" />
                <br/>
                <input type='submit' value="Create Hybrid" />
            </form>
        );
    }
}

export default connect(null, { addHybrid })(HybridsForm);

// the react state is stored locally within a component. When it needs to be shared
// with other components, it is passed down through props. In practice, this means that the
// top most component in your app needing access to a mutable value in its state.
// state here is more short term such as typing characters in a text field