import { useCookies } from 'react-cookie';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import SymptomForm from '../SymptomForm/SymptomForm';
import AddSymptom from '../AddSymptom/AddSymptom';

function CookieFormTemplate(props) {

    const [cookie, setCookie, removePatientsCookie] = useCookies(['patients']);
    let [localCookie, setLocalCookie] = useState(cookie);
    let [render, setRender] = useState('');
    
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        console.log('Params id:', id);
        console.log('Cookie Mirror:', localCookie);
        console.log('THE Cookie:', cookie);
        if (id >= 0) {
            setRender(true);
        }
    }, [])

    //___________________________________________#nAthAn___________________________________________
    // This function can handle the submit for every single input field this project will have 
    // They must be passed in as an object and are then extracted as a key value pair.
    function submitCookie(newCookie) {
        console.log('setting THE cookie', newCookie.key, newCookie.thing);

        setLocalCookie({ ...localCookie, [newCookie.key]: newCookie.thing });

        setCookie(newCookie.key, newCookie.thing, { path: '/' });
    }

    function addPatient() {
        if (id === undefined) {
            submitCookie({ key: `1patientFirstName`, thing: '' });
            submitCookie({ key: `1patientLastName`, thing: '' });
            submitCookie({ key: `1bloodType`, thing: '' });
            submitCookie({ key: `1patientIDNumber`, thing: 1 });
            submitCookie({ key: `1birthDate`, thing: '' });
            // submitCookie({ key: `1patientBirthDay`, thing: '' });
            // submitCookie({ key: `1patientBirthMonth`, thing: '' });
            // submitCookie({ key: `1patientBirthYear`, thing: '' });
            // submitCookie({ key: `1symptom1`, thing: '' });
            submitCookie({ key: `patients`, thing: [1] });
            // submitCookie({ key: `eventSummary`, thing: '' });
            setRender(true);
            history.push(`/patient/1`);
        } else {
            let newPatientID = cookie.patients.length + 1;
            submitCookie({ key: `${newPatientID}patientFirstName`, thing: '' });
            submitCookie({ key: `${newPatientID}patientLastName`, thing: '' });
            submitCookie({ key: `${newPatientID}bloodType`, thing: '' });
            submitCookie({ key: `${newPatientID}patientIDNumber`, thing: newPatientID });
            submitCookie({ key: `${newPatientID}birthDate`, thing: '' });
            // submitCookie({ key: `${newPatientID}patientBirthDay`, thing: '' });
            // submitCookie({ key: `${newPatientID}patientBirthMonth`, thing: '' });
            // submitCookie({ key: `${newPatientID}patientBirthYear`, thing: '' });
            // submitCookie({ key: `${newPatientID}symptom1`, thing: '' });
            submitCookie({ key: `patients`, thing: [...cookie.patients, newPatientID] });
            // submitCookie({ key: `eventSummary`, thing: '' });
        }
    }

    function changePatient(patientNumber) {
        setLocalCookie(cookie);
        history.push(`/patient/${patientNumber}`);
    }


    return (
        <>

            {/* Display Global cookie and Local cookie object  */}
            <p>Local Cookie Mirror: {JSON.stringify(localCookie)}</p>
            <p>THE Cookie: {JSON.stringify(cookie)}</p>

            {
                render ?
                    cookie.patients.map(value =>
                        <button key={`${value}changePatient`} disabled={id == value} onClick={() => changePatient(value)}>
                            Edit Patient {value}
                        </button>
                    )
                    :
                    ''
            }


            {
                render ?
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
                            value={localCookie[`${id}patientFirstName`]}
                            // submitCookie takes in a SINGLE OBJECT
                            onChange={(e) => submitCookie({ key: `${id}patientFirstName`, thing: e.target.value })}>
                        </input>

                        <br />
                        <br />

                        <p>Patient {id} Last Name:</p>
                        <input
                            type="text"
                            // Change patientLastName to the desired key for the key value pair
                            placeholder="Enter Patient Last Name"
                            value={localCookie[`${id}patientLastName`]}
                            // submitCookie takes in a SINGLE OBJECT
                            onChange={(e) => submitCookie({ key: `${id}patientLastName`, thing: e.target.value })}>
                        </input>

                        <br />
                        <br />

                        <p>Patient {id} Birthdate:</p>
                        <input
                            type="date"
                            // Change patientIDNumber to the desired key for the key value pair
                            placeholder="Date of Birth"
                            value={localCookie[`${id}birthDate`]}
                            // submitCookie takes in a SINGLE OBJECT
                            onChange={(e) => submitCookie({ key: `${id}birthDate`, thing: e.target.value })}>
                        </input>

                        <br />
                        <br />

                        <p>Patient {id} Blood Type:</p>
                        <select
                            name="Blood Type"
                            // Change bloodType to the variable you are capturing!!!
                            value={localCookie[`${id}bloodType`]}
                            onChange={(e) => submitCookie({ key: `${id}bloodType`, thing: e.target.value })}
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
                    <>
                        <p>Add a Patient to get started...</p>
                        <button onClick={addPatient}>
                            Add Patient!
                        </button>
                    </>
            }
        </>
    )
}

export default CookieFormTemplate;