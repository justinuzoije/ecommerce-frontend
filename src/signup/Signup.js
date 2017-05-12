

import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Signup.actions';

class Signup extends React.Component {
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
          <h3>Please enter information here</h3>
          <div>
            <label>Username</label><br/>
            <input type="text"
              value={this.props.username}
              onChange={event => this.props.changeUsername(event.target.value)}
            />
          </div>
          <div>
            <label>Email</label><br/>
            <input type="text"
              value={this.props.email}
              onChange={event => this.props.changeEmail(event.target.value)}
            />
          </div>
          <div>
            <label>First Name</label><br/>
            <input type="text"
              value={this.props.first_name}
              onChange={event => this.props.changeFirstName(event.target.value)}
            />
          </div>
          <div>
            <label>Last Name</label><br/>
            <input type="text"
              value={this.props.last_name}
              onChange={event => this.props.changeLastName(event.target.value)}
            />
          </div>
          <div>
            <label>Password</label><br/>
            <input type="text"
              value={this.props.password}
              onChange={event => this.props.changePassword(event.target.value)}
            />
          </div>
          <div>
            <label>Confirm Password</label><br/>
            <input type="text"
              value={this.props.confirm_password}
              onChange={event => this.props.changeConfirmPassword(event.target.value)}
            />
          </div>
          <button onClick={() => this.props.submitForm(this.props)}>Submit</button>
        </div>
        <div>
          <h2>{this.props.signuperror}</h2>
        </div>
      </div>
    );
  }
}

const SignupContainer = ReactRedux.connect(
  state => state.signup,
  actions
)(Signup);

export default SignupContainer;
