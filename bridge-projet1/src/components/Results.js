import React from 'react';

// Components
import RecentForks from "./RecentForks";
import RecentPulls from "./RecentPulls";

const Results = ({username, forks, pulls}) => {

    return (
    <section>
        <h1>{ username }</h1>
        { forks.length > 0 ? <RecentForks forks={ forks } /> : <p>No recent Forks.</p> }
        { pulls.length > 0 ? <RecentPulls pulls={ pulls } /> : <p>No recent Pull Requests.</p> }
        {/* Add reset/search another user button */}
    </section> 
    )
}

export default Results;