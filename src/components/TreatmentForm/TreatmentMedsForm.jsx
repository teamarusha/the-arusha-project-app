import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

//Material UI imports
import { TextField, Button } from "@material-ui/core";

const TreatmentMedsForm = () => {

    let [localTreatment, setLocalTreatment] = useState(JSON.parse(localStorage.getItem('treatment')));
    let [render, setRender] = useState(false);
    const { id } = useParams();
    const history = useHistory();

    // Runs once when the component mounts
    useEffect(() => {
        // console.log('Params id:', id);
        console.log('Cookie Mirror:', localTreatment);
        console.log('Treatment Storage:', JSON.parse(localStorage.getItem('treatment')));
        // If the user comes to this page without a patient ID, get redirected to patient 1
        if (!id) {
            history.push('/treatment/medication/1');
        }
        // If they get redirected from patient 1 AND they have already entered values, skip this step
        // If they are redirected here from /patients, initialize the first patient
        else if (id == 1 && JSON.parse(localStorage.getItem('treatment')) === null) {
            setLocalTreatment({ "1medicationArray": [1], "1medication1": '',
             "1routeAdministered1": '', "1dosage1": '', "1units1": '', 
             "1medicationResponse1": '', "1medsAdminBy1": '' });
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
        console.log('UPDATING browser storage', localTreatment);
        localStorage.setItem('treatment', JSON.stringify(localTreatment));
    }, [localTreatment]);

    // Only handles when a value is changed by keystroke/inputfield clicks. 
    // Does NOT handle initialization of new data.
    function submitValue(newParameter) {
        console.log('Updating parameter in submitValue', newParameter.key, newParameter.thing);

        setLocalTreatment({ ...localTreatment, [newParameter.key]: newParameter.thing });

        // localStorage.setItem(`${newParameter.key}`, JSON.stringify(newParameter.thing));
    }

     // This function handles initialization of new patients
     function addMedication() {
        // newMedicationID will be the next medication added. Does not use params from the url 
        // Instead it looks at the treatmentArray and adds the next procedure based on that
        // THIS ID IS NOT THE PROCEDURE'S ID FROM THE DATABASE,
        // THIS VALUE MEANS NOTHING AFTER SUBMISSION
        let newMedicationID = localTreatment.medicationArray.length + 1;
        console.log('new medication ID', newMedicationID);
        // This is where all parameters associated with a new patient get initialized
        // We do this in order to not have inputs stagnate as you chose a new patient to edit
        setLocalTreatment({
            ...localTreatment,
            'treatmentArray': [...localTreatment.medicationArray, newMedicationID],
            [newMedicationID + 'medication1']: '',
            [newMedicationID + 'routeAdministered1']: '',
            [newMedicationID + 'dosage1']: '',
            [newMedicationID + 'units1']: '',
            [newMedicationID + 'medicationResponse1']: '',
            [newMedicationID + 'medsAdminBy1']: ''
        })
    }

    // Simply redirects to the patient page of a new patient 
    // based on their position in the patientArray
    function changePatient(patientNumber) {
        history.push(`/treatment/${patientNumber}`);
    }

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

            <Button size="small" color="primary" variant="contained" onClick={addMedication}>
                Add Medication
            </Button>

            <TextField id="outlined-basic" label="Medication Administered" 
                variant="outlined" value={ localTreatment[`medication`]}
                onChange={( event ) => submitValue({ key: `medication`,
                thing: event.target.value })}>
            </TextField>

            <TextField id="outlined-basic" label="Administered Route" 
                variant="outlined" value={ localTreatment[`routeAdministered`]}
                onChange={( event ) => submitValue({ key: `routeAdministered`,
                thing: event.target.value })}>
            </TextField>

            <TextField id="outlined-basic" label="Dosage" variant="outlined" 
                value={ localTreatment[`dosage`]}
                onChange={( event ) => submitValue({ key: `dosage`, 
                thing: event.target.value })}>
            </TextField>

            <TextField id="outlined-basic" label="Units" variant="outlined"
                value={ localTreatment[`units`]} onChange={( event ) => 
                submitValue({ key: `units`, thing: event.target.value })}>
            </TextField>

            <TextField id="outlined-basic" label="Response to Medication" 
                variant="outlined" value={ localTreatment[`medicationResponse`]}
                onChange={( event ) => submitValue({ key: `medicationResponse`,
                thing: event.target.value })}>
            </TextField>

            <TextField id="outlined-basic" label="Role/Type of Person Administering 
                Medication" variant="outlined" value={ localTreatment[`medsAdminBy`]}
                onChange={( event ) => submitValue({ key: `medsAdminBy`, 
                thing: event.target.value })}>
            </TextField>

        </div>
    );
};

export default TreatmentMedsForm;