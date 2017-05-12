import $ from 'jquery';
import { hashHistory} from 'react-router';

export function changeUsername(username) {
  return {
    type: 'change-username',
    username: username
  }
}

export function changeEmail(email) {
  return {
    type: 'change-email',
    email: email
  }
}

export function changeFirstName(first_name) {
  return {
    type: 'change-firstname',
    first_name: first_name
  }
}

export function changeLastName(last_name) {
  return {
    type: 'change-lastname',
    last_name: last_name
  }
}

export function changePassword(password) {
  return {
    type: 'change-password',
    password: password
  }
}

export function changeConfirmPassword(confirm_password) {
  return {
    type: 'change-confirmpassword',
    confirm_password: confirm_password
  }
}

export function submitForm(stateInfo) {
  if (stateInfo.password === stateInfo.confirm_password) {
    let asyncAction = function(dispatch) {
      $.ajax({
        url: 'http://localhost:4000/api/user/signup',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(stateInfo)
      })

       .then(data => dispatch({
         type: 'submit-form',
         value: data
       }));
    }
    hashHistory.push('/login');
    return asyncAction;

  } else {
    return {
      type: 'signup-error',
      message: 'A sign up error has occured'
    }
  }


}
