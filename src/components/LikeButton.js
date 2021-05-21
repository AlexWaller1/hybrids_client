// creating a "like" button for the Hybrids
import React, { Component } from 'react';

class LikeButton extends Component {

    state = {
        likes: 0
    };
 
    // Create a click handler that will increment the number of likes
    // each time a button is clicked
    addLike = () => {
        let newCount = this.state.likes + 1;
        this.setState({
            likes: newCount
        });
    };

    render() {
        return <button onClick={this.addLike}>
            Have Further Interest: {this.state.likes}</button>
    }

}

export default LikeButton;