import React from 'react';
import { connect } from 'react-redux'

const HybridsList = () => {
    return (
        <div>

        </div>
    );
};

const mapStateToProps = state => {
    return { hybrids: state.hybrids }
}

export default connect(mapStateToProps)(HybridsList);