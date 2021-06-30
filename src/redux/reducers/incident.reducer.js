const incident = (
  state =
    {
      dispositionArray: [1],
      crew: "",
      triageCat: "",
      incidentService: "",
      '1destinationState': "",
      '1destinationCounty': "",
      '1destinationZipCode': "",
      '1transportDisposition': "",
      '1transportMethod': "",
      '1transportMode': "",
      '1destinationFacility': "",
      patientNumbers: "",
      incidentState: "",
      incidentCounty: "",
      incidentZipCode: "",
      possibleInjury: "",
      alcoholDrugIndicators: "",
      incidentSummary: ""
    }
  , action) => {
  switch (action.type) {
    case 'SET_INCIDENT':
      return action.payload;
    case 'ADD_INCIDENT_OBJECT':
      return { ...state, [action.payload.key]: action.payload.value }
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default incident;