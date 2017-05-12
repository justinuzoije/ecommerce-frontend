const INITIAL_STATE = {
  username: '',
  email: '',
  first_name: '',
  last_name: '',
  password: '',
  confirm_password: '',
  signuperror: ''
};

export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'change-username') {
    return Object.assign({}, state, {
      username: action.username
    });
  } else if (action.type === 'change-email') {
    return Object.assign({}, state, {
      email: action.email
    });
  } else if (action.type === 'change-firstname') {
    return Object.assign({}, state, {
      first_name: action.first_name
    });
  } else if (action.type === 'change-lastname') {
    return Object.assign({}, state, {
      last_name: action.last_name
    });
  } else if (action.type === 'change-password') {
    return Object.assign({}, state, {
      password: action.password
    });
  } else if (action.type === 'change-confirmpassword') {
    return Object.assign({}, state, {
      confirm_password: action.confirm_password
    });
  } else if (action.type === 'submit-form') {
    return Object.assign({}, state, {
      username: action.username,
      email: action.email,
      first_name: action.first_name,
      last_name: action.last_name,
      password: action.password
    });
  } else if (action.type === 'signup-error') {
    return Object.assign({}, state, {
      signuperror: action.message
    });
  }
  return state;
}
