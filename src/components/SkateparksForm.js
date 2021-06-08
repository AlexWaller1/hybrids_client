// form where users can fill out Skatepark information
// form will have react state for its text fields
// here, we can call addSkateparks from Redux actions as a prop
// onSubmit event handler can call addSkatepark prop to submit new Skateparks to Redux store

// we want controlled components 
// so values of input fields will be controlled by state
// store state is global
// component state is local and isolated to the respective component

import React, { Component } from 'react';
import { connect } from 'react-redux'

import { addSkatepark } from '../actions/skateparksActions'

class SkateparksForm extends Component {

    state = {
        name: '',
        location: '',
        features: '',
        image: ''
    }

    handleChange = e => {
        const {name, value} = e.target
        // name is name attribute on form, value is value attribute on form
        this.setState({
            [name]: value
            // grabbing the values from the state so they can be changed on the form
        })
    }
    // allows user to type in text fields

    handleSubmit = e => {
        e.preventDefault()
        this.props.addSkatepark(this.state)
        // good alternative for mapDispatchToProps
    }
    // takes submitted data and is sent to post fetch request

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name:</label>
                <input type='text' value={this.state.name} onChange={this.handleChange} name="name" />
                <br/>
                <label>Location:</label>
                <input type='text' value={this.state.location} onChange={this.handleChange} name="location" />
                <br/>
                <label>Features:</label>
                <input type='text' value={this.state.features} onChange={this.handleChange} name="features" />
                <br/>
                <label>Image:</label>
                <input type='text' value={this.state.image} onChange={this.handleChange} name="image" />
                <input type='submit' value="Create Skatepark" />

            </form>
        );
    }
    // form is rendered in JSX
    
}

export default connect(null, { addSkatepark })(SkateparksForm);
// first argument of a connect method is reserved for mapStateToProps
// it null since Redux state is not being mapped to props here.

// the react state is stored locally within a component. When it needs to be shared
// with other components, it is passed down through props. In practice, this means that the 
// top most in your app needing access to a state.
// state here is more short term such as typing characters in a text field
// also, since what is typed in the text fields are supposed to empty out we don't need to 
// persist those changes to the database, just the information that is being submitted.