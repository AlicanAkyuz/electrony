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
        textHeader={this.props.successContent.title}
        textContent={this.props.successContent.content}
        onReset={() => {this.props.dispatch(onReset())}} />
    };

    if (this.props.failure) {
      renderForm = <AfterForm
        textHeader={this.props.failureContent.title}
        textContent={this.props.failureContent.content}
        onReset={() => {this.props.dispatch(onReset())}} />
    };

    return (
      <div>
        {renderForm}
      </div>
    )
  };
};

const mapStateToProps = state => {
  state = state.ContactReducer;
  return {
    submitted: state.submitted,
    error: state.error,
    loading: state.isLoading,
    success: state.isSuccess,
    failure: state.isFailure,
    loadingContent: state.loadingContent,
    successContent: state.successContent,
    failureContent: state.failureContent
  };
};

const connectedTwo = connect(mapStateToProps)(Contact);
export default connectedTwo;
