// where users will enter information about Skateboarders to submit to Post Fetch
// we'll make function that take current state of the form, and will be submitted via
// the addSkateboarder function from the actions folder
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addSkateboarder } from '../actions/skateboardersActions'

class SkateboardersForm extends Component {

    state = {
        name: '',
        hometown: '',
        style: '',
        biography: '',
        image: ''
    }

    handleChange = e => {
        const { name, value } = e.target
        // grabbing name and value attributes from form for each text field
        this.setState({
            [name]: value
        })
        // since we have targeted name and value, we can setState to change the state from it's previous
        // values
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addSkateboarder(this.state)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Name:</label>
                <input type='text' value={this.state.name} onChange={this.handleChange} name="name" />
                <br/>
                <label>Hometown:</label>
                <input type='text' value={this.state.hometown} onChange={this.handleChange} name="hometown" />
                <br/>
                <label>Style:</label>
                <input type='text' value={this.state.style} onChange={this.handleChange} name="style" />
                <br/>
                <label>Biography:</label>
                <input type='text' value={this.state.biography} onChange={this.handleChange} name="biography" />
                <br/>
                <label>Image:</label>
                <input type='text' value={this.state.image} onChange={this.handleChange} name="image" />
                <br/>
                <input type='submit' value='Submit New Skateboarder' />
            </form>
        )
    }
}

export default connect(null, { addSkateboarder })(SkateboardersForm);