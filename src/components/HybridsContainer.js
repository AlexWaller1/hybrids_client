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