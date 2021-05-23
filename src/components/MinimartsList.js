// this is the component that will actually render our minimart list
// we will pass in the form component within the <div> for the list component
// that way the form and the list can be called on the same page
import React from 'react';
import { connect } from 'react-redux'
import { removeMinimart } from '../actions/minimartActions';
import MinimartForm from './MinimartsForm';

const MinimartsList = ({ minimarts, deleteMinimart }) => {
    // takes arguments of key names from mapStateToProps and mountDispatchToProps
    return (
        <div>
            <MinimartForm />
            <ul>

            </ul>
        </div>
    );
};

const mapStateToProps = state => {
    return { hybrids: state.hybrids }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteMinimart: (id) => {dispatch(removeMinimart(id))}
    }
}