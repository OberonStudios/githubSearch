import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserInfo from './UserInfo';

class UserCard extends Component {
    getBasicUserInfo(){
        const user = this.props.userData;
        if(user && user.data !== "Could not find"){
            return(
                    <UserInfo
                        user={user}
                    />
            )
        }
        else{
            console.log("COULD NOT FIND");
            return(
                <div>
                    <h1>Could not find user</h1>
                </div>
            )
        }
    }
    render() {
        return (
            <div>
                {this.getBasicUserInfo()}
            </div>
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