import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './Form';
import UserCard from './UserCard';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <Form/>
                {
                    this.props.userData.login ? <UserCard/> : ""
                }

            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        userData: state.userData
    }
}

export default connect(mapStateToProps)(LandingPage);