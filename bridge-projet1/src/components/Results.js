import React from 'react';
import { connect } from 'react-redux';

// Components
import RecentForks from "./RecentForks";
import RecentPulls from "./RecentPulls";

const Results = props => {
    // console.log(props.state)

    return (
    <section>
        <h1>{ props.username }</h1>
        { props.forks.length > 0 ? <RecentForks forks={ props.forks } /> : <p>No recent Forks.</p> }
        { props.pulls.length > 0 ? <RecentPulls pulls={ props.pulls } /> : <p>No recent Pull Requests.</p> }
        {/* Add reset/search another user button */}
    </section> 
    )
}

const mapStateToProps = state => ({
    state: state,
    username: state.searchUser.username,
    forks: state.userResults.forks,
    pulls: state.userResults.pulls,
});

export default connect(mapStateToProps)(Results);