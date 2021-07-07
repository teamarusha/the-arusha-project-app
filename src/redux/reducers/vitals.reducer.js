const vitals = (state = defaultVitals, action) => {
  switch (action.type) {
    case 'SET_VITALS':
      return action.payload;
    case 'UNSET_VITALS':
      return {};
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default vitals;

const defaultVitals = {
  '1vitalsArray': [1],
  '1lastVital': 1,
  '1systolicBloodPressure1': '',
  '1heartRate1': '',
  '1pulseOximetry1': '',
  '1respiratoryRate1': '',
  '1bloodGlucoseLevel1': '',
  '1glasgowComaScoreEye1': '',
  '1glasgowComaScoreVerbal1': '',
  '1glasgowComaScoreMotor1': '',
  '1glasgowComaScoreQualifier1': '',
  '1responsivenessLevel1': 1,
  '1painScaleScore1': 1,
  '1strokeScaleScore1': 1,
  '1strokeScaleType1': 1,
  '1vitalTimestamp1': ''
};