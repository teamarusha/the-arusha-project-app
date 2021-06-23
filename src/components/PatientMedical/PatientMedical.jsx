import React from 'react';

// ----- Material UI -----
import { TextField } from '@material-ui/core';

function PatientMedical() {

    return (
        <div className="container">
            <h2>Patient Medical History Form:</h2>
            <button>Tell Me About Your Past</button> <br /><br />

            <TextField id="outlined-basic" label="State of Residence" variant="outlined">
            </TextField> &nbsp;
            <TextField id="outlined-basic" label="County of Residence" variant="outlined">
            </TextField>

        </div>
    )
}

export default PatientMedical;