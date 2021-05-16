// this will be our hybrids container; it will hold hybrids data and hybrids methods

import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchHybrids } from '../actions/hybridsActions'
import HybridsForm from './HybridsForm'

class HybridsContainer extends Component {

    componentDidMount() {
        this.props.fetchHybrids()
        // pulls hybrids data and fetches it for application
    }

    render() {
        return (
            <div>
              HybridsContainer
             
              <HybridsForm />
            </div>
        )
    }
}

export default connect(null, { fetchHybrids })(HybridsContainer);

// componentDidMount special name for method, when HybridsContainer mounts, it will 
// automatically call the method specified
// we're not using any values from redux store, but we're using redux actions
// react, react-redux, react-router-dom are different packages
// react-redux allows us to pass redux values and actions to components as props
// react-router-dom responsible for URL and links