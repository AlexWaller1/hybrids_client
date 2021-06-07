// This is to make a show page for the Hybrids
import React from 'react'
import { useSelector } from 'react-redux'

export const SingleHybridPage = ({ match }) => {
    const { hybridId } = match.params

    const hybrid = useSelector(state => 
        state.hybrids.find(hybrid => hybrid.id === hybridId)
        )

if (!hybrid) {
    return (
        <section>
            <h2>Hybrid Not in Database.</h2>
        </section>
    )
}

return (
    <section>
        <article className="hybrid">
            <h2> {hybrid.name} </h2>
            <h3> {hybrid.species} </h3>
            <h4> {hybrid.origin} </h4>
            <h5> {hybrid.personality} </h5>
            <img src={hybrid.image} alt='Hybrid Image'/>

        </article>
    </section>
)
}