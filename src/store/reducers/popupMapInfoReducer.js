const  popupReducer = (state = {}, action) => {
  switch(action.type){
    case 'POPUP_INFO':
      return action.payload
    default:
      return state;
  }
}

export default popupReducer;