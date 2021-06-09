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
            <form onSubmit={this.handleSubmit}>
                <label>Name:</label>
                <input type='text' value={this.state.name} onChange={this.handleChange} name="name" />
                <br/>
                <label>Population:</label>
                <input type='text' value={this.state.population} onChange={this.handleChange} name="population" />
                <br />
                <label>State:</label>
                <input type='text' value={this.state.state} onChange={this.handleChange} name="state" />
                <br/>
                <label>Country:</label>
                <input type='text' value={this.state.country} onChange={this.handleChange} name="country" />
                <br/>
                <label>Report:</label>
                <input type='text' value={this.state.report} onChange={this.handleChange} name="report" />
                <br/>
                <label>Image:</label>
                <input type='text' value={this.state.image} onChange={this.handleChange} name="image" />
                <br/>
                <input type='submit' value="Create City" />

            </form>
        );
    }
    // form is rendered in JSX
}

export default connect(null, { addCity })(CitiesForm);
// first argument of a connect method is reserved for mapStateToProps
// it is null since Redux state is not being mapped to props here.

// The React state is stored locally within a component. When it needs to be shared
// with other components, it is passed through props. In practice, this means that the 
// top most component in your app needing access to a state
// state here is more short term such as typing characters in a text field
// also, since what is typed in the text fields are supposed to empty out we don't need to persist
// those changes to the database, just he information that is being submitted.