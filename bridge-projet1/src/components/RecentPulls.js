import React from 'react';
// import pulls from './testData/pulls';

const RecentPulls = (props) => {
    return <div>
        <h2>Recent Pull Requests</h2>

        <ul>
            {/* {console.log(props.pulls)} */}
            {/* {pulls.map(pull => {
                return <li>
                    <a href={pull.url} target="_blank">{pull.title}</a>
                    Status: {}
                </li>
            })} */}
        </ul>
    </div>
}

export default RecentPulls;