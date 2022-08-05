const actionFn = (type, payload) => {
  
  return (dispatch) =>{
    dispatch({ type: type, payload: payload})
  }
}

export default actionFn;