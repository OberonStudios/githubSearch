import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Form extends Component {
    onSubmit = (user) => {
        this.props.fetchGithubUser(user);
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                    <Field
                        name="username"
                        type="text"
                        component="input"
                        placeholder="Search Github User"
                    />
                    <button type="submit" className="submitButton">
                        <i className="fas fa-search"></i>
                    </button>

            </form>
        );
    }
}

export default compose(
    connect(null, actions),
    reduxForm({ form: 'username' })
  )(Form);