// this is where we will render our Motorhome objects
// the MotorhomesForm will render within our MotorhomesList component
// we will need both mapStateToProps and mapDispatchToProps

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeMotorhome } from '../actions/motorhomesActions';
import MotorhomesForm from './MotorhomesForm';

 const MotorhomesList = ({ motorhomes, deleteMotorhome }) => {

    

    return(
        <div>
            <MotorhomesForm />
            <ul>
                {motorhomes.map(motorhome => (
                    <li key={motorhome.id}>
                        <h2> <Link to={`/motorhomes/${motorhome.id}`}>{motorhome.name}</Link> </h2>
                        <h3> {motorhome.model} </h3>
                        <h3> {motorhome.year} </h3>
                        <h4> {motorhome.mileage} </h4>
                        <h4> {motorhome.color} </h4>
                        <h5> {motorhome.description} </h5>
                        <img src={motorhome.image} alt='Motorhome Image'  />
                        
                        <button onClick={e => {
                            deleteMotorhome(motorhome.id)
                        }}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>

        </div>
     );
    };

   const mapStateToProps = state => {
       // since it is specific state we are requesting the state needs to be passed in as 
       // a parameter
      return  { motorhomes: state.motorhomes }
    }

    const mapDispatchToProps = dispatch => {
        // since it is a specific dispatch we are requesting the dispatch needs to be passed
        // in as a parameter
        return {
            deleteMotorhome: (id) => {dispatch(removeMotorhome(id))}
        }
    }


export default connect(mapStateToProps, mapDispatchToProps)(MotorhomesList);