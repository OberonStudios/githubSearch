import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserInfo from './UserInfo';
import FollowersList from './FollowersList';

class UserCard extends Component {
    getBasicUserInfo(){
        const user = this.props.userData;
        const followers = this.props.followers;
        if(user){
            console.log("FOUND")
            return(
                <>
                    <UserInfo
                        user={user}
                    />
                    <FollowersList
                        followers={followers}
                    />
                </>
            )
        }
    }
    render() {
        return (
                this.getBasicUserInfo()
        );
    }
}

function mapStateToProps(state){
    return {
        userData: state.userData,
        followers: state.followersData,
        form: state.form
    }
}

export default connect(mapStateToProps)(UserCard);