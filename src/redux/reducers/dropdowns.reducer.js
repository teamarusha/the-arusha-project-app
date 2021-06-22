const dropdowns = (state = {go: false}, action) => {
    switch (action.type) {
      case 'SET_DROPDOWN_MIRROR':
        return action.payload;
      case 'ADD_DROPDOWN_OBJECT':
        return {...state, [action.payload.key]: action.payload.value}
      case 'UNSET_COOKIE_MIRROR':
        return {};
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default dropdowns;