const  listingTypeReducer = (state = 'resume', action) => {
  switch(action.type){
    case 'CHANGE_LISTING':
      return action.payload
    default:
      return state;
  }
}

export default listingTypeReducer;