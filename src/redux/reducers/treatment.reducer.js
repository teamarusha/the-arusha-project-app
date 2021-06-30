const treatments = (
  state =
    {
      '1medicationArray': [1],
      '1lastMedication': 1,
      '1medication1': "",
      '1routeAdministered1': "",
      '1dosage1': "",
      '1units1': "",
      '1medicationResponse1': "",
      '1medsAdminBy1': "",
      '1procedureArray': [1],
      '1lastProcedure': 1,
      '1procedure1': "",
      '1procedureAttempts1': "",
      '1successfulProcedure1': "",
      '1responseToProcedure1': "",
      '1procedurePerformedBy1': ""
    }
  , action) => {
  switch (action.type) {
    case 'SET_TREATMENT':
      return action.payload;
    case 'ADD_TREATMENT_OBJECT':
      return { ...state, [action.payload.key]: action.payload.value }
    case 'UNSET_TREATMENT':
      return {};
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default treatments;