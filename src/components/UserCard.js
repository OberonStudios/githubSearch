import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserInfo from './UserInfo';

class UserCard extends Component {
    getBasicUserInfo(){
        const user = this.props.userData;
        if(user){
            console.log("FOUND")
            return(
                    <UserInfo
                        user={user}
                    />
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
        form: state.form
    }
}

export default connect(mapStateToProps)(UserCard);