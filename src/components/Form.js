import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Form extends Component {
    onSubmit = (text) => {
        console.log(text);
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
                        <i class="fas fa-search"></i>
                    </button>

            </form>
        );
    }
}

export default compose(
    connect(null, actions),
    reduxForm({ form: 'username' })
  )(Form);