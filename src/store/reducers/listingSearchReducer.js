const search = {
  name: '', 
  price_from: false, 
  price_to: false,
}

const  listingSearchReducer = (state=search, action) => {
  switch(action.type){
    case 'SEARCH_NAME_LISTING':
      return {...state, name: action.payload,}
    case 'SEARCH_PRICE_FROM_LISTING':
      return {...state, price_from: action.payload,}
    case 'SEARCH_PRICE_TO_LISTING':
      return {...state, price_to: action.payload,}
    default:
      return state;
  }
}

export default listingSearchReducer;