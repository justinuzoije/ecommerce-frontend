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
       }));
       //CATCH THE ERROR FROM SERVER
    }
    hashHistory.push('/');
    return asyncAction;
}
