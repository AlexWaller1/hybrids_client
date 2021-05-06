import React from 'react';
import { connect } from 'react-redux'

const HybridsList = ({ hybrids }) => {
    return (
        <div>
           {hybrids.map(hybrid => <ul>
               <li key={hybrid.id}>
             <h2>  {hybrid.name} </h2>
             <h3> {hybrid.species} </h3>
             <h4>  {hybrid.origin} </h4>
             <h5>  {hybrid.personality} </h5>
              <img src={hybrid.image} alt='Hybrid Image'/> </li></ul>)}
        </div>
    );
};

const mapStateToProps = state => {
    return { hybrids: state.hybrids }
}

export default connect(mapStateToProps)(HybridsList);

// the connect() function connects a React component to Redux store
// It provides its connected component with the pieces of the data it needs from the store,
// and the functions it can use to dispatch actions to the store.