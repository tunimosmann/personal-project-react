import React from 'react';
import { connect } from 'react-redux';
import RecentForks from "./RecentForks";
import RecentPulls from "./RecentPulls";
import ConnectedResetButton from "./ResetButton";

const Results = props => {
    return (
    <section className>
        <h1>{ props.username }</h1>
        { props.forks.length > 0 ? <RecentForks forks={ props.forks } /> : <h2 className="error">No recent Forks.</h2> }
        { props.pulls.length > 0 ? <RecentPulls pulls={ props.pulls } /> : <h2 className="error">No recent Pull Requests.</h2> }
        {<ConnectedResetButton />}
    </section> 
    )
}

const mapStateToProps = state => ({
    username: state.searchUser.username,
    forks: state.userResults.forks,
    pulls: state.userResults.pulls,
});

export default connect(mapStateToProps)(Results);