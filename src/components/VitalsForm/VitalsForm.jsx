import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";

//Material UI imports
import { TextField, Button } from "@material-ui/core";

const VitalsForm = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const dropdowns = useSelector(store => store.dropdowns);

    let [localVitals, setLocalVitals] = useState(JSON.parse(localStorage.getItem('vitals')));
    let [render, setRender] = useState(false);

    // Runs once when the component mounts
    useEffect(() => {
        // console.log('Params id:', id);
        console.log('Cookie Mirror:', localVitals);
        console.log('Vitals Storage:', JSON.parse(localStorage.getItem('vitals')));
 
        // If the user comes to this page without a patient ID, get redirected to patient 1
        if (!id) {
            history.push('/vitals/1');
        }
        // If they get redirected from patient 1 AND they have already entered values, skip this step
        // If they are redirected here from /patients, initialize the first patient
        else if (id == 1 && JSON.parse(localStorage.getItem('vitals')) === null) {
            setLocalVitals({ "1vitalsArray": [1], [id + "systolicBloodPressure1"]: '', 
            [id + "heartRate1"]: '', [id + "pulseOximetry1"]: '', [id + "respiratoryRate1"]: '', 
            [id + "bloodGlucoseLevel1"]: '', [id + "glasgowComaScoreEye1"]: '', 
            [id + "glasgowComaScoreVerbal1"]: '', [id + "glasgowComaScoreMotor1"]: '',
            [id + "glasgowComaScoreQualifier1"]: '', [id + "responsivenessLevel1"]: '',
            [id + "painScaleScore1"]: '', [id + "strokeScaleScore1"]: '', 
            [id + "strokeScaleType1"]: '' });
            setRender(true);
        }
        // Otherwise, we allow the render as there should be data in storage
        else {
            setRender(true);
        }
    }, []);

    // Runs whenever localPatientMirror is changed, updated, manipulated at all
    // This way they will always be the same as long as it is the mirror that is being changed
    useEffect(() => {
        console.log('UPDATING browser storage', localVitals);
        localStorage.setItem('patients', JSON.stringify(localVitals));
    }, [localVitals]);
    
    // Only handles when a value is changed by keystroke/inputfield clicks. 
    // Does NOT handle initialization of new data.
    function submitValue(newParameter) {
        console.log('Updating parameter in submitValue', newParameter.key, newParameter.thing);

        setLocalVitals({ ...localVitals, [newParameter.key]: newParameter.thing });

        // localStorage.setItem(`${newParameter.key}`, JSON.stringify(newParameter.thing));
    }

     // This function handles initialization of new vitals
     function addVitals() {
        // newVitalsID will be the next vitals added. Does not use params from the url 
        // Instead it looks at the vitalsArray and adds the next patient based on that
        // THIS ID IS NOT THE Vitals'S ID FROM THE DATABASE,
        // THIS VALUE MEANS NOTHING AFTER SUBMISSION
        let newVitalsID = localVitals.vitalsArray.length + 1;
        console.log('new vitals ID', newVitalsID);

        // This is where all parameters associated with a new patient get initialized
        // We do this in order to not have inputs stagnate as you chose a new patient to edit
        setLocalVitals({
            ...localPatientMirror,
            'vitalsArray': [...localVitals[id + "vitalsArray"], newVitalsID],
            [id + 'bloodType' + newVitalsID]: '',
            [id + 'birthDate' + newVitalsID]: '',
            [id + 'patientLastName' + newVitalsID]: '',
            [id + 'patientFirstName' + newVitalsID]: ''
        })
    }

        // Simply redirects to the patient page of a new patient 
        // based on their position in the patientArray
        function changePatient(patientNumber) {
            history.push(`/patient/${patientNumber}`);
        }
        let [localDropdownMirror, setLocalDropdownMirror] = useState(JSON.parse(localStorage.getItem('dropdowns')));

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('dropdowns')) === null ){
            dispatch({ type: 'GET_DROPDOWNS' })
        } else {
            dispatch({type: 'SET_DROPDOWNS', payload: localDropdownMirror})
        }
    }, []);

    useEffect(() => {
        if (dropdowns.go === true) {
            localStorage.setItem('dropdowns', JSON.stringify(dropdowns));
        }
    }, [dropdowns.go]);

    return(
        <div>
            {
                render ?
                    localPatientMirror.patientArray.map(value =>
                        <button key={`${value}changePatient`} disabled={id == value} onClick={() => changePatient(value)}>
                            Edit Patient {value}
                        </button>
                    )
                    :
                    ''
            }
             <Button size="small" color="primary" variant="contained" onClick={addVitals}>
                Add Vital Signs
            </Button>

            <TextField id="outlined-basic" label="Systolic Blood Pressure (SBP" 
                variant="outlined" value={ localVitals[`systolicBloodPressure`]}
                onChange={( event ) => submitValue({ key: `systolicBloodPressure`,
                thing: event.target.value })}>
            </TextField>

            <TextField id="outlined-basic" label="Heart Rate" variant="outlined"
                value={ localVitals[`heartRate`]} onChange={( event ) => 
                submitValue({ key: `heartRate`, thing: event.target.value })}>
            </TextField>

            <TextField id="outlined-basic" label="Pulse Oximetry" variant="outlined" 
                value={ localVitals[`pulseOximetry`]} onChange={( event ) => 
                submitValue({ key: `pulseOximetry`, thing: event.target.value })}>
            </TextField>

            <TextField id="outlined-basic" label="Respiratory Rate" variant="outlined"
                value={ localVitals[`respiratoryRate`]} onChange={( event ) => 
                submitValue({ key: `respiratoryRate`, thing: event.target.value })}>
            </TextField>

            <TextField id="outlined-basic" label="Blood Glucose Level" variant="outlined"
                value={ localVitals[`bloodGlucoseLevel`]} onChange={( event ) => 
                submitValue({ key: `bloodGlucoseLevel`, thing: event.target.value })}>
            </TextField>

            <TextField id="outlined-basic" label="Glasgow Coma Score-Eye" 
                variant="outlined" value={ localVitals[`glasgowComaScoreEye`]}
                onChange={( event ) => submitValue({ key: `glasgowComaScoreEye`, 
                thing: event.target.value })}>
            </TextField>

            <TextField id="outlined-basic"  label="Glasgow Coma Score-Verbal" 
                variant="outlined" value={ localVitals[`glasgowComaScoreVerbal`]}
                onChange={( event ) => submitValue({ key: `glasgowComaScoreVerbal`, 
                thing: event.target.value })}>
            </TextField>

            <TextField id="outlined-basic" label="Glasgow Coma Score-Motor" 
                variant="outlined" value={ localVitals[`glasgowComaScoreMotor`]} 
                onChange={( event ) => submitValue({ key: `glasgowComaScoreMotor`, 
                thing: event.target.value })}>
            </TextField>

            <TextField id="outlined-basic" label="Glasgow Coma Score-Qualifier" 
                variant="outlined" value={ localVitals[`glasgowComaScoreQualifier`]}
                onChange={( event ) => submitValue({ key:
                `glasgowComaScoreQualifier`, thing: event.target.value })}>
            </TextField>

            { dropdowns.go &&
            <div>
            <TextField id="outlined-basic" select label="Level of Responsiveness" 
                variant="outlined" value={ localVitals[`responsivenessLevel`]}
                onChange={( event ) => submitValue({ key: `responsivenessLevel`, 
                thing: event.target.value })}>
            {dropdowns['responsiveness_level'].map(item => 
                <MenuItem key={'responsiveness_level'+ item.id} value={item.id}>
                    {item.type}
                </MenuItem>)
            }
            </TextField>

            <TextField id="outlined-basic" select label="Pain Scale Score" 
                variant="outlined" value={ localVitals[`painScaleScore`]}
                onChange={( event ) => submitValue({ key: `painScaleScore`, 
                thing: event.target.value })}>
            {dropdowns['pain_scale'].map(item => 
                <MenuItem key={'pain_scale'+ item.id} value={item.id}>
                    {item.type}
                </MenuItem>)
            }
            </TextField>

            <TextField id="outlined-basic" select label="Stroke Scale Score" 
                variant="outlined" value={ localVitals[`strokeScaleScore`]}
                onChange={( event ) => submitValue({ key: `strokeScaleScore`, 
                thing: event.target.value })}>
            {dropdowns['stroke_score'].map(item => 
                <MenuItem key={'stroke_score'+ item.id} value={item.id}>
                    {item.type}
                </MenuItem>)
            }
            </TextField>

            <TextField id="outlined-basic" select label="stroke Scale Type" 
                variant="outlined" value={ localVitals[`strokeScaleType`]}
                onChange={( event ) => submitValue({ key: `strokeScaleType`, 
                thing: event.target.value })}>
            {dropdowns['stroke_scale'].map(item => 
                <MenuItem key={'stroke_scale'+ item.id} value={item.id}>
                    {item.type}
                </MenuItem>)
            }
            </TextField>

            </div>
            }
        </div>
    );
};

export default VitalsForm;