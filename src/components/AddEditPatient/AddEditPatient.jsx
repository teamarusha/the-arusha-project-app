import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

function AddEditPatient({ formName, render, setRender }) {

    const history = useHistory();
    const { id } = useParams();


    useEffect(() => {
        // console.log('Params id:', id);
        console.log('Cookie Mirror:', localPatientMirror);
        console.log('Patient Storage:', JSON.parse(localStorage.getItem('patients')));

        // If the user comes to this page without a patient ID, get redirected to patient 1
        if (!id) {
            history.push(`/${formName}/1`);
        }

        else if (id == 1 && JSON.parse(localStorage.getItem(`${formName}`)) === null) {

            switch (formName) {
                case "patients":
                    setLocalPatientMirror(
                        {
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
                            '1bloodType': ''
                        });
                    setRender(true);
                    break;
                case "incident":
                    // code block
                    break;
                default:
                // code block
            }

        }

        else {
            setRender(true);
        }


    }, []);

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
            {
                render &&
                <>

                    {
                        localPatientMirror.patientArray.map(value =>
                            <button key={`${value}changePatient`} disabled={id == value} onClick={() => changePatient(value)}>
                                Edit Patient {value}
                            </button>
                        )
                    }

                    <p>Add another Patient</p>
                    <button onClick={addPatient}>
                        Add Patient!
                    </button>
                </>
            }

        </>
    )
}

export default AddEditPatient;