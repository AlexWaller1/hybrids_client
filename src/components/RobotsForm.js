// we want controlled components
// so values ofinput fields will be controlled by state
// store state is global
// component state is local and isolated to the respective component

import React, { Component } from 'react';
import { connect } from 'react-redux'

import { addRobot } from '../actions/robotsActions'

class RobotsForm extends Component {

    state = {
        name: '',
        model: '',
        manufacturer: '',
        purpose: '',
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
        this.props.addRobot(this.state)
    }
    // takes submitted data and is sent to post fetch request

    render() {
        return (
            <form onSubmit={this.handleSubmit}>

            </form>
        )
    }

}

export default connect(null, { addRobot })(RobotsForm);