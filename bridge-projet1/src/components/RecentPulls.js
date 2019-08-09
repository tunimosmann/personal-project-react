import React from 'react';

const RecentPulls = ({pulls}) => {
    return <div>
        <h2>Recent Pull Requests</h2>

        <ul>
            { pulls.map(pull => <li><a href={pull.pullUrl}>{pull.pullName}</a><p>Status: {pull.status}</p></li>) }
        </ul>
    </div>
}

export default RecentPulls;