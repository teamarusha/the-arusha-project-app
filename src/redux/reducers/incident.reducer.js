const incident = (state = defaultIncident, action) => {
  switch (action.type) {
    case 'SET_INCIDENT':
      return action.payload;
    case 'RESET_STORAGE':
      return { ...state, ['reinitialize']: true };
    case 'REINITIALIZE_INCIDENT':
      return defaultIncident;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default incident;

const defaultIncident = {
  reinitialize: false,
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
};