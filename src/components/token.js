import React from 'react';
import queryString from 'query-string';
import { onTokenReceived } from '../actions/selection_actions/actions';
import { connect } from 'react-redux';

class Token extends React.Component {
  constructor(props) {
    super(props);
    this.updateToken = this.updateToken.bind(this);
  }
  componentDidMount() {
    console.log(this.props.user_token);
    this.props.history.push('/steps')
  };

  updateToken(key, value) {
    localStorage.setItem(key, value);
  };

  render() {
    const parsed = queryString.parse(window.location.hash);
    const accessToken = parsed.access_token;
    this.props.dispatch(onTokenReceived(accessToken));
    this.updateToken('token', accessToken);
    return (<div></div>)
  };
};

const mapStateToProps = state => {
  return {
    user_token: state.SelectionReducer.user_data.user_token,
  };
};

const tokenConnect = connect(mapStateToProps)(Token);
export default tokenConnect;
