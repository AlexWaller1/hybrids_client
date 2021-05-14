import React from 'react';
import { connect } from 'react-redux'
import { removeHybrid } from '../actions/hybridsActions';

const HybridsList = ({ hybrids, deleteHybrid }) => {
    return (
        <div><ul>
           {hybrids.map(hybrid => (
            <li key={hybrid.id}>
                <h2>  {hybrid.name} </h2>
                <h3> {hybrid.species} </h3>
                <h4>  {hybrid.origin} </h4>
                <h5>  {hybrid.personality} </h5>
                <img src={hybrid.image} alt='Hybrid Image'/> 
                <button onClick={e => {
                    deleteHybrid(hybrid.id)
                }}>delete</button>
              </li>
              ))}
            </ul>
        </div>
    );
};

const mapStateToProps = state => {
    return { hybrids: state.hybrids }
}
// 
const mapDispatchToProps = dispatch => {
    return {
        deleteHybrid: (id) => {dispatch(removeHybrid(id))}
        // id is the argument for the function, the function is the value of the key value
        // pair
    }
}
// mapDispatchToProps is responsible for enabling a component to dispatch actions
export default connect(mapStateToProps, mapDispatchToProps)(HybridsList);

// the connect() function connects a React component to Redux store
// It provides its connected component with the pieces of the data it needs from the store,
// and the functions it can use to dispatch actions to the store.
// connect method provided by react-redux, a library that connects react and redux
// the connect method passes redux values as props to components
// because they are props, the components will re render components immediately
// mapDispatchToProps sends props to component