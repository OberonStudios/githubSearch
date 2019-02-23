import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserCard extends Component {
    getBasicUserInfo(){
        const user = this.props.userData;
        if(user && user.data !== "Could not find"){
            return(
                <div>
                    <h1>{user.name}</h1>
                    <p>Currently has {user.public_repos}</p>
                </div>
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