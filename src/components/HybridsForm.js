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

   handleChange = e => {
       const { name, value }
   }

    render() {
        return (
            <form>
                <label>Name:</label>
                <input type='text' value={this.state.name} onChange={this.handleChange} name="name" />
                <br/>
                <label>Species:</label>
                <input type='text' value={this.state.species} onChange={this.handleChange} name="species" />
                <br/>
                <label>Origin:</label>
                <input type='text' value={this.state.origin} onChange={this.handleChange} name="origin" />
                <br/>
                <label>Personality:</label>
                <input type='text' value={this.state.personality} onChange={this.handleChange} name="personality" />
                <br/>
                <label>Image:</label>
                <input type='text' value={this.state.image} onChange={this.handleChange} name="image" />
                <br/>
                <input type='submit' value="Create Hybrid" />
            </form>
        );
    }
}

export default HybridsForm;