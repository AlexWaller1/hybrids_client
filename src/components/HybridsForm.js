// we want controlled components
// so values of input fields will be controlled by state
// store state is global
// component state is local and isolated to the respective component

import React, { Component } from 'react';

class HybridsForm extends Component {

   state = {
       name: '',
       species: '',
       origin: '',
       personality: '',
       image: ''
   }

    render() {
        return (
            <form>
                <input type='text' value={this.state.name} onChange={this.handleChange} name="name" />
            </form>
        );
    }
}

export default HybridsForm;