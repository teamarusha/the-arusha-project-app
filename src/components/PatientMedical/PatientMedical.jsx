import React from 'react';

// ----- Material UI -----
import { TextField } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function PatientMedical({ patientsMirror, setPatientsMirror }) {

    const dispatch = useDispatch();
    const dropdowns = useSelector((store) => store.dropdowns);
    const { id } = useParams();

    useEffect(() => {
        console.log("UPDATING patients browser storage", patientsMirror);
        localStorage.setItem("patients", JSON.stringify(patientsMirror));
    }, [patientsMirror]);

    function submitValue(newParameter) {
        console.log(
            "Updating parameter in submitValue",
            newParameter.key,
            newParameter.thing
        );

        setPatientsMirror({
            ...patientsMirror,
            [newParameter.key]: newParameter.thing,
        });
    }

    return (
        <div className="container">
            <h2>Patient Medical History Form:</h2>
            <br /><br />
            {patientsMirror &&
                <div>
                    <TextField
                        id="outlined-basic"
                        label="Allergies"
                        variant="outlined"
                        value={patientsMirror[`${id}patientAllergies`]}
                        onChange={(event) =>
                            submitValue({
                                key: `${id}patientAllergies`,
                                thing: event.target.value,
                            })
                        }
                    >
                    </TextField> &nbsp; <br /><br />
                    <TextField
                        id="outlined-basic"
                        label="Current Medications"
                        variant="outlined"
                        value={patientsMirror[`${id}patientCurrMedications`]}
                        onChange={(event) =>
                            submitValue({
                                key: `${id}patientCurrMedications`,
                                thing: event.target.value,
                            })
                        }
                    >
                    </TextField> &nbsp; <br /><br />
                    <TextField
                        id="outlined-basic"
                        label="Previous Medical Conditions"
                        variant="outlined"
                        value={patientsMirror[`${id}patientMedConditions`]}
                        onChange={(event) =>
                            submitValue({
                                key: `${id}patientMedConditions`,
                                thing: event.target.value,
                            })
                        }
                    >
                    </TextField>
                </div>
            }
        </div>
    )
}

export default PatientMedical;