const defaultState = {
  specialization: [],
  industry: []
}

const  alphabetListPopupReducer = (state = defaultState, action) => {

  switch(action.type){
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

export default alphabetListPopupReducer;