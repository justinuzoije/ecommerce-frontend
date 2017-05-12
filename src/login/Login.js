

import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Login.actions';


class Login extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
  }
  componentWillReceiveProps(newProps) {

  }

  render() {
    return (
      <div>
        <div>
          <h3>Enter your information to login</h3>
          <div>
            <label>Username</label><br/>
            <input type="text"
              value={this.props.username}
              onChange={event => this.props.changeUsername(event.target.value)}
            />
          </div>
          <div>
            <label>Password</label><br/>
            <input type="text"
              value={this.props.password}
              onChange={event => this.props.changePassword(event.target.value)}
            />
          </div>
          <button onClick={() => this.props.submitForm(this.props)}>Submit</button>
        </div>
        <div>
          <h2>{this.props.loginerror}</h2>
        </div>
      </div>
    );
  }
}

const LoginContainer = ReactRedux.connect(
  state => state.login,
  actions
)(Login);

export default LoginContainer;
