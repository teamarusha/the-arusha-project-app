import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

//Material UI imports
import { TextField, Button } from "@material-ui/core";

const TreatmentProcedureForm = () => {
    let [localTreatment, setLocalTreatment] = useState(JSON.parse(localStorage.getItem('treatment')));
    let [render, setRender] = useState(false);
    const { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const dropdowns = useSelector(store => store.dropdowns);

    // Runs once when the component mounts
    useEffect(() => {
        // console.log('Params id:', id);
        console.log('Cookie Mirror:', localTreatment);
        console.log('Treatment Storage:', JSON.parse(localStorage.getItem('treatment')));
        // If the user comes to this page without a patient ID, get redirected to patient 1
        if (!id) {
            history.push('/treatment/procedure/1');
        }
        // If they get redirected from patient 1 AND they have already entered values, skip this step
        // If they are redirected here from /patients, initialize the first patient
        else if (id == 1 && JSON.parse(localStorage.getItem('treatment')) === null) {
            setLocalTreatment({ "1treatmentArray": [1], [id + "procedure1"]: '', 
            [id + "procedureAttempts1"]: '', [id + "successfulProcedure1"]: '', 
            [id + "responseToProcedure1"]: '', [id + "procedurePerformedBy1"]: '' });
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
    function addProcedure() {
        // newProcedureID will be the next procedure added. Does not use params from the url 
        // Instead it looks at the treatmentArray and adds the next procedure based on that
        // THIS ID IS NOT THE PROCEDURE'S ID FROM THE DATABASE,
        // THIS VALUE MEANS NOTHING AFTER SUBMISSION
        let newProcedureID = localTreatment.treatmentArray.length + 1;
        console.log('new procedure ID', newProcedureID);
        // This is where all parameters associated with a new patient get initialized
        // We do this in order to not have inputs stagnate as you chose a new patient to edit
        setLocalTreatment({
            ...localTreatment,
            'treatmentArray': [...localTreatment.treatmentArray, newProcedureID],
            [id + 'procedure' + newProcedureID]: '',
            [id + 'procedureAttempts' + newProcedureID]: '',
            [id + 'successfulProcedure' + newProcedureID]: '',
            [id + 'responseToProcedure' + newProcedureID]: '',
            [id + 'procedurePerformedBy' + newProcedureID]: ''
        })
    }

    // Simply redirects to the patient page of a new patient 
    // based on their position in the patientArray
    function changePatient(patientNumber) {
        history.push(`/treatment/${patientNumber}`);
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
            
            <Button size="small" color="primary" variant="contained" onClick={addProcedure}>
                Add Procedure
            </Button>

            { dropdowns.go &&
            <div>
                <TextField id="outlined-basic" select label="Procedure Attempted" 
                variant="outlined" value={ localTreatment[`procedure`]}
                onChange={( event ) => submitValue({ key: `procedure`,
                thing: event.target.value })}>
            </TextField>

            <TextField id="outlined-basic" select label="Number of Procedure Attempts" 
                variant="outlined" value={ localTreatment[`procedureAttempts`]}
                onChange={( event ) => submitValue({ key: `procedureAttempts`,
                thing: event.target.value })}>
            </TextField>

            <TextField id="outlined-basic" select label="Procedure Successful" 
                variant="outlined" value={ localTreatment[`successfulProcedure`]}
                onChange={( event ) => submitValue({ key: `successfulProcedure`,
                thing: event.target.value })}>
            </TextField>

            <TextField id="outlined-basic" select label="Response to Procedure" 
                variant="outlined" value={ localTreatment[`responseToProcedure`]}
                onChange={( event ) => submitValue({ key: `responseToProcedure`,
                thing: event.target.value })}>
            </TextField>

            <TextField id="outlined-basic" select label="Role/Type of Person Performing
                Procedure" variant="outlined" value={ localTreatment[`procedurePerformedBy`]}
                onChange={( event ) => submitValue({ key: `procedurePerformedBy`, 
                thing: event.target.value })}>
            </TextField>
            </div>
            }
        </div>
    );
};

export default TreatmentProcedureForm;