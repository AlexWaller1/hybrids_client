// this is the component that will actually render our skatepark list
// we will pass in the form component within the <div> for the list component
// that way the form and the list can be called on the same page
import React from 'react';
import { connect } from 'react-redux'
import { removeSkatepark } from '../actions/skateparksActions';
import SkateparksForm from './SkateparksForm';

const SkateparksList = ({ skateparks, deleteSkatepark }) => {
    // takes arguments of key name from mapStateToProps and mountDispatchToProps
    return(
    <div>
        <SkateparksForm />
        <ul>
            {skateparks.map(skatepark =>(
                <li key={skatepark.id}>
                    <h2> {skatepark.name} </h2>
                    <h3> {skatepark.location} </h3>
                    <h4> {skatepark.features} </h4>
                    <img src={skatepark.image} alt='Skatepark Image' />

                    <button onClick={
                        e => {
                            deleteSkatepark(skatepark.id)
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
    return { skateparks: state.skateparks }
    // connecting to Redux state, and then setting up a key-value pair. The key can be called
    // in our jsx
}
// mapDispatchToProps is responsible for enabling a component to dispatch actions
const mapDispatchToProps = dispatch => {
    return {
        deleteSkatepark: (id) => {dispatch(removeSkatepark(id))}
        // id is the argument for the function, the function is the value
        // of the key-value pair
    }
}

/* 

handleDelete = () => {
    this.props.removeSkatepark(id)
}

*/

export default connect(mapStateToProps, mapDispatchToProps)(SkateparksList);

// the connect() fnction connects a React component to Redux store
// It provides its connected component with the pieces of the data it needs from the store,
// and the functions it can use to dispatch actions to the store
// connect method provided by react-redux, a library that connects react and redux
// the connect method passes redux values as props to components
// because they are props, the components will re render components immediately
// mapDispatchToProps sends props to component