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
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }

}

export default connect(null, { fetchMinimarts })(MinimartsContainer);