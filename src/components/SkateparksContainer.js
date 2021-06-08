// this will be our skateparks container
// here we will pull our skateparks data and fetch it for our application

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchSkateparks } from '../actions/skateparksActions'

class SkateparksContainer extends Component {
    componentDidMount() {
        this.props.fetchSkateparks()
        // pulls skatepark data and fetches it for application
        // componentDidMount special name for method, when SkateparksContainer mounts, it will
        // automatically call the method specified
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default connect(null, { fetchSkateparks })(SkateparksContainer);

// componentDidMount special name for method, when SkateparksContainer mounts, it will
// automatically call the method specified
// we're not using any values from redux store, but we're using redux actions
// react, react-redux, react-router-dom are different packages
// react-redux allows us to pass redux values and actions to components as props
// react-router-dom responsible for URL and links