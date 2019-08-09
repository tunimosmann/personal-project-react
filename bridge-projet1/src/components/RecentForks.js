import React from 'react';

const RecentForks = ({forks}) => {
    // console.log(forks);
    return <div>
        <h2>Recent Forks</h2>

        <ul>
            { forks.map(fork => <li><a href={fork.forkUrl}>{fork.forkName}</a><p>Forked from: {fork.forkedFrom}</p></li>) }
        </ul>
    </div>
}

export default RecentForks;