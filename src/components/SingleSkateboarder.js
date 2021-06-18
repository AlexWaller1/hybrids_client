// Building a show page for a Skateboarder entry
import React from 'react'
import { useSelector } from 'react-redux'

export const SingleSkateboarder = ({ match }) => {

    const { skateboarderId } = match.params

    const skateboarder = useSelector(state =>
        state.skateboarders.find(skateboarder.id === skateboarderId))

        if(!skateboarder){
            return(
                <section>
                    <h2>Skateboarder Not In Database</h2>
                </section>
            )
        }

        return(
            <section>
                <article classname="Skateboarders">
                    <h1> {skateboarder.name} </h1>
                    <h2> {skateboarder.hometown} </h2>
                    <h3> {skateboarder.style} </h3>
                    <h4> {skateboarder.biography} </h4>
                    <img src={skateboarder.image} alt="Skateboarder Image"/>

                </article>
            </section>
        )
        
}