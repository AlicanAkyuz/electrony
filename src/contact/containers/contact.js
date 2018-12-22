import React from 'react';
import FormSubmit from './form_submit';
import AfterForm from '../components/after_form';
import { connect } from 'react-redux';
import { onReset } from '../../actions/contact_actions/actions';

class Contact extends React.Component {
  render() {
    let renderForm;

    if (!this.props.submitted) {
      renderForm = <FormSubmit />
    };

    if (this.props.error) {
      renderForm = <FormSubmit errorFound="errorFound" />
    };

    if (this.props.loading) {
      renderForm = <AfterForm
        textHeader={this.props.loadingContent.title}
        textContent={this.props.loadingContent.content}
        loading={this.props.loading} />
    };

    if (this.props.success) {
      renderForm = <AfterForm
        token={this.props.token}
        textHeader={this.props.successContent.title}
        textContent={this.props.successContent.content}
        onReset={() => {this.props.dispatch(onReset())}} />
    };

    if (this.props.failure) {
      renderForm = <AfterForm
        token={this.props.token}
        textHeader={this.props.failureContent.title}
        textContent={this.props.failureContent.content}
        onReset={() => {this.props.dispatch(onReset())}} />
    };

    return (
      <div>{renderForm}</div>
    )
  };
};

const mapStateToProps = state => {
  const info = state.ContactReducer;
  return {
    token: state.SelectionReducer.user_data.user_token,
    submitted: info.submitted,
    error: info.error,
    loading: info.isLoading,
    success: info.isSuccess,
    failure: info.isFailure,
    loadingContent: info.loadingContent,
    successContent: info.successContent,
    failureContent: info.failureContent
  };
};

const connectedTwo = connect(mapStateToProps)(Contact);
export default connectedTwo;
