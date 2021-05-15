// this will be our robots container; it will hold robots data and robots methods

import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchRobots } from '../actions/robotsActions'
import RobotsForm from './RobotsForm'

class RobotsContainer extends Component {

    componentDidMount() {
        this.props.fetchRobots()
        // pulls robots data and fetches it for application
    }

    render() {
        return (
            <div>
                <RobotsForm />
            </div>
        )
    }
}

export default connect(null, { fetchRobots })(RobotsContainer);

// componentDidMount special name for method, when RobotsContainer mounts, it will
// automatically call the method specified
// we're not using any values from redux store, but we're using redux actions