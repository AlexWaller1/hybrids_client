import React  from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { removeHybrid } from '../actions/hybridsActions';
import HybridsForm from './HybridsForm';


const HybridsList = ({ hybrids, deleteHybrid }) => {
// takes arguments from mapStateToProps and mountDispatchToProps
  
       
   

    return (
        <div>
            <HybridsForm />
            <ul>

           {hybrids.map(hybrid => (
            <li key={hybrid.id}>
                <h2>  <Link to={`/hybrids/${hybrid.id}`}>{hybrid.name}</Link> </h2>
                <h3> {hybrid.species} </h3>
                <h4>  {hybrid.origin} </h4>
                <h5>  {hybrid.personality} </h5>
                <img src={hybrid.image} alt='Hybrid Image'/> 
                
                <button onClick={() => {
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
/* 
handleDelete = () => {
    this.props.removeHybrid(id)
}

*/
// mapDispatchToProps is responsible for enabling a component to dispatch actions
export default connect(mapStateToProps, mapDispatchToProps)(HybridsList);

// the connect() function connects a React component to Redux store
// It provides its connected component with the pieces of the data it needs from the store,
// and the functions it can use to dispatch actions to the store.
// connect method provided by react-redux, a library that connects react and redux
// the connect method passes redux values as props to components
// because they are props, the components will re render components immediately
// mapDispatchToProps sends props to component