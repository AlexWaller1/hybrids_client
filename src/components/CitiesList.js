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

            <ul>
                {cities.map(city => (
                    <li key={city.id}>
                        <h2> {city.name} </h2>
                        <h3> {city.population} </h3>
                        <h3> {city.state} </h3>
                        <h3> {city.country} </h3>
                        <h4> {city.report} </h4>
                        <img src={city.image} alt='City Image'/>

                        <button onClick={
                            e => {
                                deleteCity(city.id)
                            }
                        }>
                            Delete
                        </button>

                    </li>
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = state => {
    // mapStateToProps always needs an argument of state
    return { cities: state.cities }
    // connecting to Redux state, and then setting up a key-value pair. The key can be called
    // in our JSX
}

const mapDispatchToProps = dispatch => {
    return {
        deleteCity: (id) => {dispatch(removeCity(id))}
        // id is the argument for the function, the function is the value of the key-value pair
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);