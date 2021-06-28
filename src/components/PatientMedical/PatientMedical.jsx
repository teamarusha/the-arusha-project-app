import React from 'react';

// ----- Material UI -----
import { TextField } from '@material-ui/core';

function PatientMedical() {

    return (
        <div className="container">
            <h2>Patient Medical History Form:</h2>
             <br /><br />

            <TextField id="outlined-basic" label="Allergies" variant="outlined">
            </TextField> &nbsp; <br /><br />
            <TextField id="outlined-basic" label="Current Medications" variant="outlined">
            </TextField> &nbsp; <br /><br />
            <TextField id="outlined-basic" label="Previous Medical Conditions" variant="outlined">
            </TextField>

        </div>
    )
}

export default PatientMedical;