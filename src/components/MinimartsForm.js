// form where users can fill out Minimart information
// form will have react state for its text fields
// here, we can call addMinimarts from Redux actions as a prop
// onSubmit event handler can call addMinimart prop to submit new Minimarts to Redux store

// we want controlled components
// so values of input fields will be controlled by state
// store state is global
// component state is local and isolated to the respective component

import React, { Component } from 'react';
import { connect } from 'react-redux'

import { addMinimart } from '../actions/minimartsActions'

class MinimartsForm extends Component {

    state = {
        name: '',
        address: '',
        sodamachine: '',
        description: '',
        state: '',
        image: ''
    }

    
}