const patients = (
  state =
    {
      'go': true,
      'patientArray': [1],
      '1patientFirstName': '',
      '1patientLastName': '',
      '1patientAddress': '',
      '1patientHomeCounty': '',
      '1patientHomeState': '',
      '1patientHomeZip': '',
      '1patientGender': '',
      '1patientRace': '',
      '1patientDateOfBirth': '',
      '1patientAge': '',
      '1patientAgeUnits': '',
      '1patientMedConditions': '',
      '1patientAllergies': '',
      '1patientCurrMedications': '',
      '1anatomicLocation': '',
      '1organSystem': '',
      '1symptomOnset': '',
      '1lastKnownWell': '',
      '1primarySymptom': '',
      '1otherSymptoms': '',
      '1initialAcuity': '',
      '1finalAcuity': '',
      '1primaryImpression': '',
      '1injuryLocation': '',
      '1injuryCause': '',
      '1cardiacArrest': '',
      '1cardiacArrestEtiology': '',
      '1resuscitationAttempt': '',
      '1cardiacArrestWitness': '',
      '1aedUsePrior': '',
      '1cprProvided': '',
      '1spontaneousCirculation': '',
      '1timeCardiacArrest': '',
      '1cprStopped': '',
      '1cprInitiator': '',
      '1aedApplicator': '',
      '1aedDefibrillator': ''
    }
  , action) => {
  switch (action.type) {
    case 'SET_PATIENTS':
      return action.payload;
    case 'ADD_PATIENTS_OBJECT':
      return { ...state, [action.payload.key]: action.payload.value }
    case 'UNSET_PATIENTS':
      return {};
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default patients;