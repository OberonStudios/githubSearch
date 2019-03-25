import React, { Component } from 'react';

class FollowerItem extends Component {
    render() {
        const user = this.props.follower;
        return (
            <div>
                <div>
                    <img src={user.avatar_url} alt="avatar"/>
                    <h4>{user.login}</h4>
                </div>

            </div>
        );
    }
}

export default FollowerItem;