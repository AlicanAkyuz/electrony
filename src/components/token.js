import React from 'react';
import queryString from 'query-string';
import { onTokenReceived, getUserData } from '../actions/selection_actions/actions';
import { connect } from 'react-redux';

class Token extends React.Component {
  constructor(props) {
    super(props);
    this.updateToken = this.updateToken.bind(this);
  }
  componentDidMount() {
    this.props.history.push('/steps')
  };

  updateToken(key, value) {
    localStorage.setItem(key, value);
  };

  render() {
    const parsed = queryString.parse(window.location.hash);
    const accessToken = parsed.access_token;

    this.props.dispatch(onTokenReceived(accessToken));
    this.props.dispatch(getUserData(accessToken));

    this.updateToken('token', accessToken);
    this.updateToken('user_name', this.props.user_name);
    this.updateToken('user_id', this.props.user_id);
    return (<div></div>)
  };
};

const mapStateToProps = state => {
  return {
    user_token: state.SelectionReducer.user_data.user_token,
    user_name: state.SelectionReducer.user_data.user_name,
    user_id: state.SelectionReducer.user_data.user_id,
  };
};

const tokenConnect = connect(mapStateToProps)(Token);
export default tokenConnect;
