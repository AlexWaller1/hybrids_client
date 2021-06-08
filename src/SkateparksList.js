// this is the component that will actually render our skatepark list
// we will pass in the form component within the <div> for the list component
// that way the form and the list can be called on the same page
import React from 'react';
import { connect } from 'react-redux'
import { removeSkatepark } from '../actions/skateparkActions';
import SkateparkForm from './SkateparkForm';

const SkateparksList = ({ skateparks, deleteSkatepark }) => {
    // takes arguments of key name from mapStateToProps and mountDispatchToProps
    <div>
        <SkateparkForm />
        <ul>
            {skateparks.map(skatepark =>(
                <li key={skatepark.id}>
                    <h2> {skatepark.name} </h2>
                    <h3> {skatepark.location} </h3>
                    <h4> {skatepark.features} </h4>
                    <img src={skatepark.image} alt='Skatepark Image' />

                    <button>
                        
                    </button>

                </li>
            ))}
        </ul>
    </div>
}