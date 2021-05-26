// this is the component that will actually render our minimart list
// we will pass in the form component within the <div> for the list component
// that way the form and the list can be called on the same page
import React from 'react';
import { connect } from 'react-redux'
import { removeMinimart } from '../actions/minimartActions';
import MinimartForm from './MinimartsForm';

const MinimartsList = ({ minimarts, deleteMinimart }) => {
    // takes arguments of key names from mapStateToProps and mountDispatchToProps
    return (
        <div>
            <MinimartForm />
            <ul>
            {minimarts.map(minimart => (
                <li key={minimart.id}>
                     <h2> {minimart.name} </h2>
                     <h2> {minimart.state} </h2>
                     <h3> {minimart.address} </h3>
                     <h4> {minimart.sodamachine} </h4>
                     <h5> {minimart.description} </h5>
                     <img src={minimart.image} alt='Minimart Image' />

                     <button onClick={
                         e => {
                             deleteMinimart(minimart.id)
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
    return { minimarts: state.minimarts }
    // connecting to Redux state, and then setting up a key-value pair. The key can be called
    // in our JSX
}

const mapDispatchToProps = dispatch => {
    return {
        deleteMinimart: (id) => {dispatch(removeMinimart(id))}
        // id is the argument for the function, the function is the value of the 
        // key-value pair
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MinimartsList);