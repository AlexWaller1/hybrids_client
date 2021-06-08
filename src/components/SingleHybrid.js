// This is to make a show page for the Hybrids
import React from 'react'
import { useSelector } from 'react-redux'

export const SingleHybrid = ({ match }) => {
    const { hybridId } = match.params
    // React Router will pass in a match object as a prop that contains the URL information
    // we're looking for. When we set up the route to render this component, we're going to
    // tell it to parse the second part of the URL as a variable named hybridId, and 
    // we can rad that value from match.params

    const hybrid = useSelector(state => 
        state.hybrids.find(hybrid => hybrid.id === hybridId)
        )
    // Once we have that hybridId value, we can use it inside a selector function to find
    // the right hybrid object from the Redux store. We know that state.hybrids should be an
    // array of all the hybrid objects, so we can use the Array.find() function to loop
    // through the array and return the hybrid entry with the ID we're looking for.

    // It's important to note that the component will re-render any time the value returned
    // from useSelector changes to a new reference. Components should always try to select the
    // smallest possible amount of data they need from the store, which will help ensure that
    // it only renders when it actually needs to.

if (!hybrid) {
    return (
        <section>
            <h2>Hybrid Not in Database.</h2>
        </section>
    )
}
// It's possible that we might not have a matching post entry in the store - maybe the user
// tried to type in the URL directly, or we don't have the right data loaded. If that happens, 
// the find() function will return undefined instead of an actual post object. Our component
// needs to check for that and handle it by showing a "Post not found!" message in the page.

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
/* 

Assuming we do have the right hybrid object in the store, useSelector will return that, and 
we can use it to render the name and content of the hybrid in the page.

You might notice that this looks fairly similar to the logic we have in the body of our
HybridsList.js component, where we loop over the whole hybrids array to show excerpts in the 
main feed. We could try to extract a Hybrid component that could be used in both places, but
there are already some differences in how we're showing a hybrid excerpt and the whole hybrid.
It's usually better ti keep writing things separately for a while even if there's some 
duplication, and then we can decide later if the different sections of code are similar enough 
that we can really extract a reusuable component.

*/
export default SingleHybrid