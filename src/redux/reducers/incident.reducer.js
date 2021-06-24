const incident = (state = {go: false}, action) => {
    switch (action.type) {
      case 'SET_INCIDENT':
        return action.payload;
      case 'ADD_INCIDENT_OBJECT':
        return {...state, [action.payload.key]: action.payload.value}
      case 'UNSET_INCIDENT':
        return {};
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default incident;