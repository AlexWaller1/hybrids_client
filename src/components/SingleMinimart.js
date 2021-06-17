// This is to make a show page for the Minimarts
import React from 'react'
import { useSelector } from 'react-redux'
// we use useSelector from react-redux to find specific instance of minimart class

export const SingleMinimart = ({ match }) => {
    // match contains url information
    const { minimartId } = match.params
    // const { minimartId } is equal to the param of the route
    // so if its localhost:3000/minimarts/:minimartId
    // then match.params = :minimartId part of route



    // React Router will pass in a match object as a prop that contains the URL information
    // we're looking for. When we set up the route to render this component, we're going to 
    // tell it to parse the second part of the URL as a variable named minimartId, and we can
    // read that value from match.params

    const minimart = useSelector (state =>
        state.minimarts.find(minimart => minimart.id + '' === minimartId)
        // we connect redux store through useSelector
        // then iterate through each element in minimarts array to find
        // a minimart object with the same id and as the const minimartId
        )
    // Once we have that minimartId, we can use it inside a selector function to find
    // the right minimart object from the Redux store. We know that state.minimarts should be an
    // array of all the minimart objects, so we can use the Array.find() function to loop
    // through the array and return the minimart entry with the ID we're looking for.

    // It's important to note that the component will re-render any time the value returned
    // from useSelector changes to a new reference. Components should always try to select the
    // smallest possible amount of data they need from the store, which will help ensure, that
    // it only renders when it actually needs to.

    if (!minimart) {
        return (
            <section>
                <h2>Minimart Not in Database.</h2>
            </section>
        )
    }
    // It's possible that we might not have a matching minimart entry in the store - maybe the user
    // tried to type in the URL directly, or we don't have the right data loaded. If tht happens,
    // the find() function will return undefined instead of an actual minimart object. Our component
    // needs to check for that and handle it by showing a 'Minimart not found!' message in the page.

    return (
        <section>
            <article classname="minimart">
                <h1>{ minimart.name }</h1>
                <h2>{ minimart.address }</h2>
                <h2>{ minimart.state }</h2>
                <h3>{ minimart.sodamachine }</h3>
                <img src={ minimart.image } alt="Minimart Image" />

            </article>
        </section>
    )

}

/* 

Assuming we do have the right minimart object in the store, useSelector will return that, and we can
use it to render the name and content of the minimart in the page.

You might notice that this looks fairly similar to the logic we have in the body of our MinimartsList.js
component, where we loop over the whole minimarts array to show excerpts in the main feed. We could try to
extract a Minimart component that could be used in both places, but there are already some differences in
how we're showing minimart and the whole minimart.

It's usually better to keep writing separately for a while even if there's some duplication, and then
we can decide later if the different sections of code are similar enough that we can really extract a 
reusable component.

*/

export default SingleMinimart