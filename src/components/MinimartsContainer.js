// this will be our minimarts container
// here we will pull our minimarts data 
// and fetch it for our application.

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchMinimarts } from '../actions/minimartsActions'

class MinimartsContainer extends Component {

    componentDidMount() {
        this.props.fetchMinimarts()
        // pulls minimart data and fetches it for application
        // componentDidMount special name for method, when MinimartsContainer mounts, it will
        // autmomatically call the method specified
    }

    render() {
        return (
            <div>

            </div>
        )
    }

}

export default connect(null, { fetchMinimarts })(MinimartsContainer);

// componentDidMount special name for method, when MinimartsContainer mounts, it will
// automatically call the method specified
// we're not using any values from redux store, but we're using redux actions
// react, react-redux, react-router-dom are different packages
// react-redux allows us to pass redux values and actions to components as props
// react-router-dom responsible for URL and links