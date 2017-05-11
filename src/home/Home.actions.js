import $ from 'jquery';
export function fetchImages() {
  let asyncAction = function(dispatch){
    $.get('http://localhost:4000/api/products')
    .then(data => dispatch({
      type: 'all-images',
      value: data
    }));
  }
  return asyncAction;
}

export function selectImage(idx) {
  return {
    type: 'select',
    index: idx
  }
}

// let data = [{"id":1,"name":"wiiu","price":299,"description":"Nintendo Wii U ","image_path":"images/wiiu.jpg"},{"id":2,"name":"ps4","price":399,"description":"PlayStation 4","image_path":"images/ps4.png"}]
// return {
//   type: 'no-images',
//   value: data
//   }
// }
