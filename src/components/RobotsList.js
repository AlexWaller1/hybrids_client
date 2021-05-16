import React from 'react';
import { connect } from 'react-redux'
import { removeRobot } from '../actions/robotsActions';

const RobotsList = ({ robots, deleteRobot }) => {
    return (
        <div><ul>
          {robots.map(robot => (
              <li key={robot.id}>
                  <h2> {robot.name} </h2>
                  <h3> {robot.model} </h3>
                  <h4> {robot.manufacturer} </h4>
                  <h5> {robot.purpose} </h5>
                  <img src={robot.image} alt='Robot Image' />
                  <button onClick={e => {
                      deleteRobot(robot.id)
                  }}>delete</button>
              </li>
          ))}
        </ul>
       </div>
    );
};

const mapStateToProps = state => {
    return { robots: state.robots }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteRobot: (id) => {dispatch(removeRobot(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RobotsList);