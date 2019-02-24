import React, { Component } from 'react';

class UserInfo extends Component {
    render() {
        const user = this.props.user;
        return (
            <div className="user__header">
                <div className="user__header--image">
                    <img src={user.avatar_url} alt="avatar"/>
                </div>
                <div className="user__header--text">
                    <h1>{user.name}</h1>
                    <p>Currently has {user.public_repos} public repositories.</p>
                    {
                        user.location ? <p>Resides in {user.location}</p> : ""
                    }
                    <div>
                        <p>Followers: {user.followers}</p>
                        <p>Following: {user.following}</p>
                    </div>
                    <p>Created account on {user.created_at.substr(0, 10)}</p>
                    <p>Visit user's github page by clicking <a href={user.html_url}>here</a></p>
                </div>
            </div>
        );
    }
}

export default UserInfo;