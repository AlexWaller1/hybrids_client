// This is to make a show page for the Robots
import React from 'react'
import { useSelector } from 'react-redux'
// we use useSelector from react-redux to find specific instance of robot class

export const SingleRobot = ({ match }) => {
    const { robotId } = match.params
    // React Router will pass in a match object as a prop that contains the URL information
    // we're looking for. When we set up the route to render this component, we're going to 
    // tell it to parse the second part of the URL as a variable named robotId, and
    // we can read that value from match.params

    const robot = useSelector (state =>
        state.robots.find(robot => robot.id + '' === robotId)
        )
    // Once we have that robotId, we can use it inside a selector function to find
    // the right robot object from the Redux store. We know that state.robots should be an
    // array of all the robot objects, so we can use the Array.find() function to loop
    // through the array and return the robot entry with the ID we're looking for.

    // It's important to note that the component will re-render any time the value returned
    // from useSelector changes to a new reference. Components should always try to select the 
    // smallest possible amount of data they need from the store, which will help ensure that
    // it only renders when it actually needs to.

    if (!robot) {
        return (
            <section>
                <h2>Robot Not in Database.</h2>
            </section>
        )
    }
    // It's possible that we might not have a matching post entry in the store - maybe the user
    // tried to type in the URL directly, or we don't have the right data loaded. If that happens,
    // the find() function will return undefined instead of an actual post object. Our component
    // needs to check for that and handle it by showing a 'Post not found!' message in the page.

    return (
        <section>
            <article className="robot">
                <h1> {robot.name} </h1>
                <h2> {robot.model} </h2>
                <h3> {robot.manufacturer} </h3>
                <h4> {robot.purpose} </h4>
                <img src={robot.image} alt='Robot Image' />


            </article>
        </section>
    )

}

export default SingleRobot