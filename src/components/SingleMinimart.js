// This is to make a show page for the Minimarts
import React from 'react'
import { useSelector } from 'react-redux'
// we use useSelector from react-redux to find specific instance of minimart class

export const SingleMinimart = ({ match }) => {
    const { minimartId } = match.params



    // React Router will pass in a match object as a prop that contains the URL information
    // we're looking for. When we set up the route to render this component, we're going to 
    // tell it to parse the second part of the URL as a variable named minimartId, and we can
    // read that value from match.params

    const minimart = useSelector (state =>
        state.minimarts.find(minimart => minimart.id + '' === minimartId)
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
            
        </section>
    )

}