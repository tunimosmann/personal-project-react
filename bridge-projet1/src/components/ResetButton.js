import React from 'react';
import { connect } from 'react-redux';
import { setUsername } from './../actions/actions';

const ResetButton = props => {
    const handleSubmit = event => {
        event.preventDefault();

        props.setUsername("");
    }

    return <div>
        <button onClick={handleSubmit}>Search another user.</button>
    </div>
}

const mapDispatchToProps = {
    setUsername
}

export default connect(null, mapDispatchToProps)(ResetButton);