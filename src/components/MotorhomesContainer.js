// This component will be called when application is launched
// while holding no other components, it will be responsible for calling the get fetch function

import React, { Component } from 'react'
// always have to import react, have to import { Component } if we are using a class component
import { connect } from 'react-redux'
// have to use connect if we are connecting to the Redux store
import { fetchMotorhomes } from '../actions/motorhomesActions'
// also have to import functions from Redux that we would like to use

class MotorhomesContainer extends Component {

    componentDidMount(){
        this.props.fetchMotorhomes
        // when components mounts, the fetchMotorhomes will be called and will retrieve the motorhome
        // objects for the components to use
    }
    render(){
        return(
            <div>

            </div>
        )
    }
}

export default connect(null, {fetchMotorhomes})(MotorhomesContainer);