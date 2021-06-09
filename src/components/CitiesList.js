// this is the component that will actually render our minimart list
// we will pass in the form component within the <div> for the list component
// that way the form and the list can be called on the same page

import React from 'react';
import { connect } from 'react-redux'
// if importing a function, it must be imported through curly braces
import { removeCity } from '../actions/citiesActions'
// if importing a function, it must be imported through curly braces
import CitiesForm from './CitiesForm';

const CitiesList = ({ cities, deleteCity }) => {
    // takes arguments of key names from mapStateToProps and mountDispatchToProps
    return (
        <div>
            <CitiesForm />
        </div>
    )
}