// Building a show page for a Skateboarder entry
import React from 'react'
import { useSelector } from 'react-redux'
// we use useSelector from react-redux to find specific instance of skateboarder class

export const SingleSkateboarder = ({ match }) => {
    // match contains url information
    const { skateboarderId } = match.params
    // const { skateboarderId } is equal to the param of the route
    // so if its localhost:3000/skateboarders/:skateboarderId
    // then match.params = :skateboarderId part of route

    // React router will pass in a match object as a prop that contains the URL information
    // we're looking for. When we set up the route in Router.js to render this component, we're going
    // to tell it to parse the second part of the URL as a variable name skateboarderId, and we can
    // read that value from match.params

    const skateboarder = useSelector(state =>
        state.skateboarders.find(skateboarder => skateboarder.id + '' === skateboarderId))
        // we connect to the redux store through useSelector
        // then iterate through each element in skateparks array to find
        // a skateboarder object with the same id as the const skateboarderId

        // Once we have that skateboarderId, we can use it inside a selector function to find
        // the right skateboarder object from the Redux Store. We know that state.skateboarders should
        // be an array of all the skatepark objects, so we can use the Array.find() function to loop
        // through the array and return the ksateboarder entry with the ID we're looking for

        // It's important to note that the component will re-render any time the value returned
        // from useSelector changes to a new reference. Components should try to select the
        // smallest possible amount of data they need from the store, which will help ensure that
        // it only renders when it actually needs to.

        if(!skateboarder){
            return(
                <section>
                    <h2>Skateboarder Not In Database</h2>
                </section>
            )
        }
        // It's possible that we might not have a matching entry in the store - maybe the user
        // tried to type the URL directly, or we don't have the right data loaded. If that happens,
        // the find() function will return undefined instead of an actual skateboarder object. Our
        // component needs to check for that and handle it by showing a 'Skateboarder Not Found!' 
        // message in the page.

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

        /* 
        
        Assuming we do have the right skateboarder object in the store, useSelector will return that,
        and we can use it to render the name and content of the skatepark in the page.

        You might notice that this looks fairly similar to the logic we have in the body of our
        SkateboardersList.js component, where we loop the whole skateboarders array to show excerpts in
        the main feed. We could try to extract a Skateboarder component that could be used in both places,
        but there are already some differences in how we're showing skateboarder and the whole skateboarder.

        It's usually better to keep writing separately for a while even if there's some duplication, and
        then we can decide later if the different sections of code are similar enough that we can really
        extract a reusable component.

        */
        
}

export default SingleSkateboarder