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

}