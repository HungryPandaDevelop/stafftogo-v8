const search = {
  name: '', 
  price_from: false, 
  price_to: false,
  gender: '',
  additional: {},
  age_from: 0,
  age_to: 0,
  exp_from: 0,
  exp_to: 0,
  specialization: [],
  industry: []
}

const  listingSearchReducer = (state=search, action) => {
  switch(action.type){
    case 'SEARCH_NAME_LISTING':
      return {...state, name: action.payload,}
    case 'SEARCH_PRICE_FROM_LISTING':
      return {...state, price_from: action.payload,}
    case 'SEARCH_PRICE_TO_LISTING':
      return {...state, price_to: action.payload,}
    case 'SEARCH_EXTRA_TO_LISTING':
      return {...state, ...action.payload,}
    case "ADD_SPECIALIZATION":
      return {...state, specialization: [...state.specialization, action.payload]}
    case "REMOVE_SPECIALIZATION":
      return {...state, specialization: state.specialization.filter(el => el !== action.payload) }
    case "ADD_INDUSTRY":
      return {...state, industry: [...state.industry, action.payload]}
    case "REMOVE_INDUSTRY":
      return {...state, industry: state.industry.filter(el => el !== action.payload) }
    default:
      return state;
  }
}

export default listingSearchReducer;