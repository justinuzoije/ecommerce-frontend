const INITIAL_STATE = {
  productImages: []

};

export default function reducer(state = INITIAL_STATE, action) {
  if(action.type ==='all-images'){

    return Object.assign({},state, {
      productImages: action.value
    });

  }
  if (action.type === 'select') {
    return Object.assign({}, state, {
      currentIndex: action.index
    });
  }

  return state;
}
