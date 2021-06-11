// will gather the Skateboarder objects for the application
// will be called in second top most component of the application.
// while not directly connected to the SkateboardersList or the SkateboardersForm...
// ... it will be needed to actually render any of the skateboard objects to the DOM
import React, { Component } from 'react'
import { connect } from 'react-redux'
// since fetchSkateboarders is coming from redux store, we need to use the connect method to 
// connect it with React
import { fetchSkateboarders } from '../actions/skateboardersActions'

class SkateboardersContainer extends Component {

    componentDidMount() {
        this.props.fetchSkateboarders()
    }

    render(){
        return(
            <div>

            </div>
        )
    }
}

export default connect(null, { fetchSkateboarders })(SkateboardersContainer);