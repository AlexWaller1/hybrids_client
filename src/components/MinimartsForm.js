// form where users can fill out Minimart information
// form will have react state for its text fields
// here, we can call addMinimarts from Redux actions as a prop
// onSubmit event handler can call addMinimart prop to submit new Minimarts to Redux store

// we want controlled components
// so values of input fields will be controlled by state
// store state is global
// component state is local and isolated to the respective component

import React, { Component } from 'react';
import { connect } from 'react-redux'

import { addMinimart } from '../actions/minimartsActions'

class MinimartsForm extends Component {

    state = {
        name: '',
        address: '',
        sodamachine: '',
        description: '',
        state: '',
        image: ''
    }

    handleChange = e => {
        const { name, value } = e.target
        // name is name attribute on form, value is value attribute on form
        this.setState({
            [name]: value
            // grabbing the values from the state so they can be changed on the form
        })
    }
    // allows user to type in text fields

    handleSubmit = e => {
        e.preventDefault()
        this.props.addMinimart()
        // good alternative for mapDispatchToProps
    }
    // takes submitted data and is sent to post fetch request.

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name:</label>
                <input type='text' value={this.state.name} onChange={this.handleChange} name="name" />
                <br/>
                <label>Address:</label>
                <input type='text' value={this.state.address} onChange={this.handleChange} name="address" />
                <br/>
                <label>Sodamachine:</label>
                <input type='text' value={this.state.sodamachine} onChange={this.handleChange} name="sodamachine" />
                <br/>
            </form>
        )
    }
    

}