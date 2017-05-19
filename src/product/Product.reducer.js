const INITIAL_STATE = {
  content: ''
};

export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'fetch-product') {
    return Object.assign({}, state, {
      content: action.value
    });
  } else if (action.type === 'add-tocart') {
    return Object.assign({}, state, {
      content: action.value
    });
  }
  return state;
}






// const INITIAL_STATE = {
//   content: []
// };
//
// export default function reducer(state = INITIAL_STATE, action) {
//   if (action.type === 'fetch-product') {
//     let newContent = state.content.slice()
//
//     newContent.push(action.value["name"])
//     newContent.push(action.value["price"])
//     newContent.push(action.value["description"])
//     newContent.push(action.value["image_path"])
//
//     return Object.assign({}, state, {
//       content: newContent
//     });
//   }
//   return state;
// }
