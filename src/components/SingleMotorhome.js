// This is to make a show page for the Motorhomes
import React from 'react'
import { useSelector } from 'react-redux'
// we use useSelector from react-redux to find specific instance of motorhome class

export const SingleMotorhome = ({ match }) => {
    // match contains url information
    const { motorhomeId } = match.params
    // const { motorhomeId } is equal to the param of the route
    // so if its localhost:3000/motorhomes/:motorhomeId
    // then match.params = :motorhomeId part of route

    // React Router will pass in a match object as a prop that contains the URL information
    // we're looking for. When we set up the route to render this component, we're going to 
    // tell it to parse the second part of the URL as a variable named motorhomeId, and we can 
    // read that value from match.params

    const motorhome = useSelector (state =>
        // we need to call on a specific state we need to use our state
        // as a parameter for the function
        state.motorhomes.find(motorhome => motorhome.id + '' === motorhomeId)
        // we connect redux store through useSelector
        // then iterate through each element in motorhomes array to find
        // a skatepark obbject with the same id as the const motorhomeId
        )
    // Once we have that motorhomeId, we can use it inside a selector function to find
    // the right motorhome object from the Redux store. We know that state.motorhomes should be
    // an array of all the motorhome objects, so we can use the Array.find() function to loop
    // through the array and return the skatepark entry with the ID we're looking for.

    // It's important to note that the component will re-render any time the value returned
    // from useSelector changes to a new reference. Components should try to select the
    // smallest possible amount of data they need from the store, which will help ensure that
    // it only renders when it actually needs to.

    if (!motorhome) {
        return (
            <section>
                <h2>Motorhome Not in Database.</h2>
            </section>
        )
    }
    // It's possible that we might not have a matching entry in the store - maybe the user
    // tried to type in the URL directly, or we don't have the right data loaded. If that happens,
    // the find() function will return undefined instead of an actual motorhome object. Our component
    // needs to check for that and handle it by showing a 'Motorhome not Found!' message in the page.

    return (
        <section>
            <article>
                <h1> {motorhome.name} </h1>
                <h2> {motorhome.year} </h2>
                <h3> {motorhome.mileage} </h3>
                <h3> {motorhome.color} </h3>
                <img src={motorhome.image} alt="Motorhome Image" />
            </article>
        </section>
    )
}

/* 

Assuming we do have the right motorhome object in the store, useSelector will return that , and we can
use it to  render the name and content of the motorhome in the page.

You might notice that this looks fairly similar to the logic we have in the body of our SingleMotorhome.js
component, where we loop over the whole motorhomes array to show excerpts in the main feed. We could
try to extract a Motorhome component that could be used in both places, but there are already some
differences in how we're showing motorhome and the whole motorhome.

It's usually better to keep writing separately for a while even if there's some duplication, and then
we can decide later if the different sections of code are similar enough that we can really extract a 
reusable component.

*/

export default SingleMotorhome