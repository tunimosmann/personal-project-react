import React from 'react';

const RecentPulls = ({pulls}) => {
    return <div>
        <h2>Recent Pull Requests:</h2>

        <ul>
            { pulls.map((pull, i) => <li key={i}><a href={pull.pullUrl}>{pull.pullName}</a><p>Status: <span className={pull.status}>{pull.status}</span></p></li>) }
        </ul>
    </div>
}

export default RecentPulls;