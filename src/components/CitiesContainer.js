// this component will be called when application starts up
// while it won't hold the city form or city list, it will fetch the city objects for the
// application and for the form and list. When the application starts, and this component 
// mounts, we will call on the fetchCities function from the actions folder.
import React, { Component } from 'react';

import { connect } from 'react-redux'

import { fetchCities } from '../actions/citiesActions'

class CitiesContainer extends Component {

    componentDidMount() {
        this.props.fetchCities()
        // pulls cities data and fetches it for application
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default connect(null, { fetchCities })(CitiesContainer);
// componentDidMount special name for method, when CitiesContainer mounts, it will
// automatically call the method specified
// we're not using any values from redux store, but we're using redux actions
// react, react-redux, react-router-dom are different packages
// react-redux allows us to pass redux values and actions to components as props
// react-router-dom responsible for URL and links


