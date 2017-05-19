import $ from 'jquery';
import { hashHistory} from 'react-router';

export function changeUsername(username) {
  return {
    type: 'change-username',
    username: username
  }
}

export function changePassword(password) {
  return {
    type: 'change-password',
    password: password
  }
}

export function submitForm(stateInfo) {

    let asyncAction = function(dispatch) {
      $.ajax({
        url: 'http://localhost:4000/api/user/login',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(stateInfo)
      })
       .then(data => dispatch({
         type: 'submit-form',
         value: data
       }))
       //CATCH THE ERROR FROM SERVER
       .catch(function(err) {
         console.log("There was an error");
         dispatch({
           type: 'login-error',
           message: 'Login failed. Please try again'
         });
        hashHistory.push('/login');
        return asyncAction;
       });
      //  .catch(err => dispatch({
      //     type: 'login-error',
      //     message: 'Login failed'
      //   }));

    }
    hashHistory.push('/');
    return asyncAction;
}
