// this component will have local react state, which will be used for the text fields
// form where users can fill out City information
// here, we can call addCities from Redux actions as a prop
// onSubmit event handler can call addCities as a prop to submit new Cities to Redux store

// we want controlled components
// so values of input fields will be controlled by state
// store state is global
// component state is local and isolated to the respective component

import React, { Component } from 'react';
import { connect } from 'react-redux'

import { addCity } from '../actions/citiesActions'

class CitiesForm extends Component {

    state = {
        name: '',
        population: '',
        state: '',
        country: '',
        report: '',
        image: ''
    }

    handleChange = e => {
        const { name, value } = e.target
        // name is name attribute on form, value is value attribute on form
        this.setState({
            [name]: value
            // grabbing the values from the state so they can be changed on the form
            // will allow user to type in text fields
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addCity(this.state)
        // good alternative for mapDispatchToProps
    }
    // takes submitted data and is sent to post fetch request

    render() {
        return (
            <form>
                
            </form>
        )
    }
}