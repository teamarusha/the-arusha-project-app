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
      '1transportDisposition': 0,
      '1transportMethod': "",
      '1transportMode': "",
      '1destinationFacility': "",
      patientNumbers: "",
      incidentState: "",
      incidentCounty: "",
      incidentZipCode: "",
      possibleInjury: "",
      alcoholDrugIndicators: "",
      dispatchButton: "Unit Notified",
      unitNotified: "",
      unitEnRoute: "",
      unitArrivedScene: "",
      unitArrivedPatient: "",
      unitLeftScene: "",
      unitArrivedDestination: "",
      unitTransferCare: "",
      unitInService: "",
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