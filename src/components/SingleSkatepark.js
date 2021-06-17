// This is to make a show page for the Skatparks
import React from 'react'
import { useSelector } from 'react-redux'
// we use useSelector from react-redux to find specific instance of skatepark class

export const SingleSkatepark = ({ match }) => {
    // match contains url information
    const { skateparkId } = match.params
    // const { skateparkId } is equal to the param of the route
    // so if its localhost:3000/skateparks/:skateparkId
    // then match.params = :skateparkId part of route

    // React Router will pass in a match object as a prop that contains the URL information
    // we're looking for. When we set up the route to render this component, we're going to 
    // tell it to parse the second part of the URL as a variable named skateparkId, and we can
    // read that value from match.params

    const skatepark = useSelector (state =>
        state.skateparks.find(skatepark => skatepark.id + '' === skateparkId)
        // we connect redux store through useSelector
        // then iterate through each element in skateparks array to find
        // a skatepark object with the same id and as the const skateparkId
        )
    // Once we have that skateparkId, we can use it inside a selector function to find
    // the right skatepark object from the Redux store. We know that state.skateparks should be
    // an array of all the skatepark objects, so we can use the Array.find() function to loop
    // through the array and return the skatepark entry with the ID we're looking for.

    // It's important to note that the component will re-render any time the value returned
    // from useSelector changes to a new reference. Components should try to select the
    // smallest possible amount of data they need from the store, which will help ensure that
    // it only renders when it actually needs to.

    if (!skatepark) {
        return (
            <section>
                <h2>Skatepark Not in Database.</h2>
            </section>
        )
    }
    // It's possible that we might not have a matching entry in the store - maybe the user
    // tried to type in the URL directly, or we don't have the right data loaded. If that happens,
    // the find() function will return undefined instead of an actual skatepark object. Our component
    // needs to check for that and handle it by showing a 'Minimart not found!' message in the page.

    return (
        <section>
            <article classname="skatepark">
                <h1>{ skatepark.name }</h1>
                <h2>{ skatepark.location }</h2>
                <h3>{ skatepark.features }</h3>
                <img src={ skatepark.image } alt="Skatepark Image" />
            </article>
        </section>
    )
}

/* 

Assuming we do have the right skatepark object in the store, useSelector will return that, and we can
use it render the name and content of the skatepark in the page.

You might notice that this looks fairly similar to the logic we have in the body of our SkateparksList.js
component, where we loop over the whole skateparks array to show excerpts in the main feed. We could try
to extract a Skatepark component that could be used in both places, but there are already some differences
in how we're showing skatepark and the whole skatepark.

It's usually better to keep writing separately for a while even if there's some duplication, and then
we can decide later if the different sections of code are similar enough that we can really extract a 
reusable component.

*/

export default SingleSkatepark