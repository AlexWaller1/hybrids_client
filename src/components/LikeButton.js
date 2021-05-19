// creating a "like" button for the Hybrids
import React, { Component } from 'react';

class LikeButton extends Component {

    state = {
        likes: 0
    };

    addLike = () => {
        let newCount = this.state.likes + 1;
        this.setState({
            likes: newCount
        });
    };

    render() {
        return <button>Have Further Interest: {this.state.likes}</button>
    }

}