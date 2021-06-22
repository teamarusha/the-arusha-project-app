const cookieMirror = (state = {}, action) => {
    switch (action.type) {
      case 'SET_COOKIE_MIRROR':
        return action.payload;
      case 'UNSET_COOKIE_MIRROR':
        return {};
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default cookieMirror;