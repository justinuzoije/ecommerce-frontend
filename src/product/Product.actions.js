import $ from 'jquery';

export function fetchProduct(id) {
  let asyncAction = function(dispatch) {
    $.get('http://localhost:4000/api/product/' + id)
     .then(data => dispatch({
       type: 'fetch-product',
       value: data
     }));
  }
  return asyncAction;
}

// export function fetchProduct(id) {
//   let data = {"id":1,"name":"wiiu","price":299,"description":"Nintendo Wii U ","image_path":"images/wiiu.jpg"}
//   return {
//     type:"fetch-product",
//     value: data
//   };
// }

export function addToCart(id) {

  let asyncAction = function(dispatch) {
    $.ajax({
      url: 'http://localhost:4000/api/user/shopping_cart',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(id)
    })
     .then(data => dispatch({
       type: 'add-tocart',
       value: data
     }))
      .catch(function(err) {
        console.log("There was an error");
      });
  }
  
  return asyncAction;
}
