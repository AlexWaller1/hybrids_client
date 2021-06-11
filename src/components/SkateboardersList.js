// this is where we will render our Skateboarder Entries
// we will need mapDispatchToProps and mapStateToProps
// key value pairs will need to be arguments in the function
import React from 'react'
import { connect } from 'react-redux'
import { removeSkateboarder } from '../actions/skateboardersActions'
import SkateboardersForm from './SkateboardersForm'

const SkateparksList = () => {

    return(
        <div>
            <SkateboardersForm />
            <ul>
                {skateboarders.map(skateboarder => {
                    <li key={skateboarder.id}>
                        <h2>{skateboarder.name}</h2>
                        <h3>{skateboarder.hometown}</h3>
                        <h3>{skateboarder.style}</h3>
                        <h4>{skateboarder.biography}</h4>
                        <img src={skateboarder.image} alt='skateboarder image' />
                        <button onClick={
                            e => deleteSkateboarder(skateboarder.id)
                        }>
                            Scrub Skateboarder
                        </button>
                    </li>
                })}

            </ul>
        </div>
    )
}
    mapStateToProps = state => {
        return { state: state.skateboarders }
    }

    mapDispatchToProps = dispatch => {
        return { 
            deleteSkateboarder: () => {dispatch(removeSkateboarder(id))}
        }
    }


export default connect(mapStateToProps,mapDispatchToProps)(SkateboardersList);