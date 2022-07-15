// STORES PATIENT INFORMATION
const patients = (state = defaultPatients, action) => {
  switch (action.type) {
    case 'SET_PATIENTS':
      return action.payload;
    case 'UNSET_PATIENTS':
      return {};
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default patients;

const defaultPatients = {
  'go': true,
  'patientArray': [1],
  '1patientFirstName': '',
  '1patientLastName': '',
  '1patientAddress': '',
  '1patientHomeCity': '',
  '1patientHomeRegion': '',
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
  '1symptomOnsetDate': '',
  '1symptomOnsetTime': '',
  '1lastKnownWellDate': '',
  '1lastKnownWellTime': '',
  '1primarySymptom': '',
  '1otherSymptoms': '',
  '1initialAcuity': '',
  '1finalAcuity': '',
  '1primaryImpression': '',
  '1injuryLocation': '',
  '1injuryCause': '',
  '1cardiacArrest': 0,
  '1cardiacArrestEtiology': '',
  '1resuscitationAttempt': '',
  '1cardiacArrestWitness': '',
  '1aedUsePrior': '',
  '1cprProvided': '',
  '1spontaneousCirculation': '',
  '1cardiacArrestTime': '',
  '1cardiacArrestDate': '',
  '1cprStopped': '',
  '1cprInitiator': '',
  '1aedApplicator': '',
  '1aedDefibrillator': ''
};