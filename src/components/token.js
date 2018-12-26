import React from 'react';
import queryString from 'query-string';
import { onTokenReceived } from '../actions/selection_actions/actions';
import Steps from '../user_selection/containers/steps';
import { connect } from 'react-redux';

class Token extends React.Component {
  componentDidMount() {
    this.props.history.push('/steps')
  }

  render() {
    const parsed = queryString.parse(window.location.hash);
    const accessToken = parsed.access_token;
    this.props.dispatch(onTokenReceived(accessToken));
    return (<div></div>)
  };
};

const mapStateToProps = state => {
  return {};
};

const tokenConnect = connect(mapStateToProps)(Token);
export default tokenConnect;
