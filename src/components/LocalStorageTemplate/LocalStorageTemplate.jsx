import React, { useState } from 'react';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

function LocalStorageTemplate(props) {

    // Only thing we ever manipulate. Look below at line 40 - useEffect
    // We need to be really selective about when we set the mirror state to be what is in storage
    let [localPatientMirror, setLocalPatientMirror] = useState(JSON.parse(localStorage.getItem('patients')));
    let [render, setRender] = useState(false)
    const { id } = useParams();
    const history = useHistory();

    // Runs once when the component mounts
    useEffect(() => {
        // console.log('Params id:', id);
        console.log('Cookie Mirror:', localPatientMirror);
        console.log('Patient Storage:', JSON.parse(localStorage.getItem('patients')));

        // If the user comes to this page without a patient ID, get redirected to patient 1
        if (!id) {
            history.push('/patient/1')
        }

        // If they get redirected from patient 1 AND they have already entered values, skip this step
        // If they are redirected here from /patients, initialize the first patient
        else if (id == 1 && JSON.parse(localStorage.getItem('patients')) === null) {
            setLocalPatientMirror({ patientArray: [1], "1patientFirstName": '', "1patientLastName": '', '1birthDate': '', '1bloodType': '' });
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
        console.log('UPDATING browser storage', localPatientMirror);
        localStorage.setItem('patients', JSON.stringify(localPatientMirror));
    }, [localPatientMirror]);

    //___________________________________________#nAthAn___________________________________________
    // Only handles when a value is changed by keystroke/inputfield clicks. 
    // Does NOT handle initialization of new data.
    function submitValue(newParameter) {
        console.log('Updating parameter in submitValue', newParameter.key, newParameter.thing);

        setLocalPatientMirror({ ...localPatientMirror, [newParameter.key]: newParameter.thing });

        // localStorage.setItem(`${newParameter.key}`, JSON.stringify(newParameter.thing));
    }

    // This function handles initialization of new patients
    function addPatient() {
        // newPatientID will be the next patient added. Does not use params from the url 
        // Instead it looks at the patientArray and adds the next patient based on that
        // THIS ID IS NOT THE PATIENT'S ID FROM THE DATABASE,
        // THIS VALUE MEANS NOTHING AFTER SUBMISSION
        let newPatientID = localPatientMirror.patientArray.length + 1;
        console.log('new patient ID', newPatientID);

        // This is where all parameters associated with a new patient get initialized
        // We do this in order to not have inputs stagnate as you chose a new patient to edit
        setLocalPatientMirror({
            ...localPatientMirror,
            'patientArray': [...localPatientMirror.patientArray, newPatientID],
            [newPatientID + 'bloodType']: '',
            [newPatientID + 'birthDate']: '',
            [newPatientID + 'patientLastName']: '',
            [newPatientID + 'patientFirstName']: ''
        })
    }

    // Simply redirects to the patient page of a new patient 
    // based on their position in the patientArray
    function changePatient(patientNumber) {
        history.push(`/patient/${patientNumber}`);
    }

    return (
        <>
            <p>Local Mirror: {JSON.stringify(localPatientMirror)}</p>
            <p>Storage: {JSON.stringify(localPatientMirror)}</p>

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


            {/* No Rendering happens unless a patient has been initialized */}
            {render ?
                <>
                    <p>Add another Patient</p>
                    <button onClick={addPatient}>
                        Add Patient!
                    </button>

                    <br />
                    <br />

                    <p>Patient {id} First Name:</p>
                    <input
                        type="text"
                        // change patientFirstName to the desired key for the key value pair
                        placeholder="Enter Patient First Name"
                        value={localPatientMirror[`${id}patientFirstName`]}
                        // submitValue takes in a SINGLE OBJECT
                        onChange={(e) => submitValue({ key: `${id}patientFirstName`, thing: e.target.value })}>
                    </input>

                    <br />
                    <br />

                    <p>Patient {id} Last Name:</p>
                    <input
                        type="text"
                        // Change patientLastName to the desired key for the key value pair
                        placeholder="Enter Patient Last Name"
                        value={localPatientMirror[`${id}patientLastName`]}
                        // submitValue takes in a SINGLE OBJECT
                        onChange={(e) => submitValue({ key: `${id}patientLastName`, thing: e.target.value })}>
                    </input>

                    <br />
                    <br />

                    <p>Patient {id} Birthdate:</p>
                    <input
                        type="date"
                        // Change patientIDNumber to the desired key for the key value pair
                        placeholder="Date of Birth"
                        value={localPatientMirror[`${id}birthDate`]}
                        // submitValue takes in a SINGLE OBJECT
                        onChange={(e) => submitValue({ key: `${id}birthDate`, thing: e.target.value })}>
                    </input>

                    <br />
                    <br />

                    <p>Patient {id} Blood Type:</p>
                    <select
                        name="Blood Type"
                        // Change bloodType to the variable you are capturing!!!
                        value={localPatientMirror[`${id}bloodType`]}
                        onChange={(e) => submitValue({ key: `${id}bloodType`, thing: e.target.value })}
                    >
                        {/* Edit options as needed! 
                            Will be using a map function for these
                            The value attribute is what is
                            taken in by the submit function */}
                        {/* From database, the structure will be:
                            <option value="(id from database table)">(Second Column value from database table)</option> */}
                        <option value="">--- Select Blood Type --- </option>
                        <option value="O+">O Positive</option>
                        <option value="O-">O Negative</option>
                        <option value="A+">A Positive</option>
                        <option value="A-">A Negative</option>
                        <option value="B+">B Positive</option>
                        <option value="B-">B Negative</option>
                        <option value="AB+">AB Positive</option>
                        <option value="AB-">AB Negative</option>
                    </select>
                </>
                :
                ''
            }
        </>
    )
}

export default LocalStorageTemplate;