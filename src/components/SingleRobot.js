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

/* 

Assuming we do have the right robot object in the store, useSelector will return that, and we can 
use it to render the name and content of the robot in the page.

You might notice that this looks fairly similar to the logic we have in the body of our RobotsList.js
component, where we loop over the whole hybrids array to show excerpts in the main feed. We could try to 
extract a Robot component that could be used in both places, but there are already some differences in
how we're showing a robot excerpt and the whole robot.
It's usually better to keep writing things separately for a while even if there's some dupication,
and then we can decide later if the different sections of code are similar enough that we can really
extract a reusable component.

*/

export default SingleRobot