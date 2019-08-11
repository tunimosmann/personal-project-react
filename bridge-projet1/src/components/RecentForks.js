import React from 'react';

const RecentForks = ({forks}) => {
    return <div>
        <h2>Recent Forks:</h2>

        <ul>
            { forks.map((fork, i) => <li key={i}><a href={fork.forkUrl}>{fork.forkName}</a><p>Forked from: {fork.forkedFrom}</p></li>) }
        </ul>
    </div>
}

export default RecentForks;