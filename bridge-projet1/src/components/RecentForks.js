import React from 'react';

const RecentForks = (props) => {
    return <div>
        <h2>Recent Forks</h2>

        <ul>
            {props.forks.map(fork => {
                console.log(fork);

                return <li>
                    <a href={fork.url} target="_blank">{fork.full_name}</a>
                    Forked from: {}
                </li>
            })}
        </ul>
    </div>
}

export default RecentForks;