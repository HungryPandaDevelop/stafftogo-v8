const accounInfo = {
  checkingStatus: true, 
  info:{}, 
  ownCards:{},
  currentCard: {},
  ownCardsLoad: true, 
  changeInfo: false,
  roomUpdate: false
}
export default (state=accounInfo, action) => {
  switch(action.type){
    case 'SET_INFO_ACCOUNT':
      return {...state, info: action.payload,}
    case 'CHECK_STATUS_ACCOUNT':
      return {...state, checkingStatus: action.payload}
    case 'SET_OWN_CARDS':
      return {...state, ownCards: action.payload.ownCards, ownCardsLoad: action.payload.ownCardsLoad}
    case 'CHANGE_ACCOUNT_INFO': 
      return {...state, changeInfo: action.payload} 
    case 'CHANGE_ROOM': 
      return {...state, roomId: action.payload} 
    case 'UPDATE_ROOM': 
      return {...state, roomUpdate: action.payload} 
    default: 
      return state
  }
}