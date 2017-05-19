const INITIAL_STATE = {
  username: '',
  password: '',
  auth_token: '',
  loginerror: ''
};

export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'change-username') {
    return Object.assign({}, state, {
      username: action.username
    });
  } else if (action.type === 'change-password') {
    return Object.assign({}, state, {
      password: action.password
    });
  } else if (action.type === 'submit-form') {
    return Object.assign({}, state, {
      username: action.value.username,
      password: action.value.password,
      auth_token: action.value.auth_token
    });
  } else if (action.type === 'login-error') {
    return Object.assign({}, state, {
      loginerror: action.message
    });
  }
  return state;
}
