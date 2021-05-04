// this will be our hybrids container; it will hold hybrids data and hybrids methods

import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchHybrids } from '../actions/hybridsActions'

class HybridsContainer extends Component {

    componentDidMount() {
        this.props.fetchHybrids()
    }

    render() {
        return (
            <div>
              HybridsContainer
            </div>
        )
    }
}

export default connect(null, { fetchHybrids })(HybridsContainer);