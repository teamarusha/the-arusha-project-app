import React from 'react';

// ----- Material UI -----
import { TextField } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';

function PatientSymptoms() {

    return (
        <div className="container">
            <h2>Patient Symptoms Form:</h2>
            <button>What's Buggin' You</button><br /><br />

            <InputLabel 
            id="demo-simple-select-autowidth-label">Chief Complaint Anatomic Location</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    // value={age}
                    // onChange={handleChange}
                    autoWidth
                >
                    <MenuItem value="">
                    <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Option 1</MenuItem>
                    <MenuItem value={20}>Option 2</MenuItem>
                    <MenuItem value={30}>Option 3</MenuItem>
                </Select> <br /><br />

                <InputLabel 
                id="demo-simple-select-autowidth-label">Chief Complaint Organ System</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    // value={age}
                    // onChange={handleChange}
                    autoWidth
                >
                    <MenuItem value="">
                    <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Option 1</MenuItem>
                    <MenuItem value={20}>Option 2</MenuItem>
                    <MenuItem value={30}>Option 3</MenuItem>
                </Select> <br /><br />

                <p>Symptom Onset calendar goes here</p> <br />

                <TextField id="outlined-basic" label="Primary Symptom" variant="outlined">
                </TextField> &nbsp;<br /><br />
                <TextField id="outlined-basic" label="Other Associated Symptoms" variant="outlined">
                </TextField> <br /><br />

                <InputLabel 
            id="demo-simple-select-autowidth-label">Initial Patient Aquity</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    // value={age}
                    // onChange={handleChange}
                    autoWidth
                >
                    <MenuItem value="">
                    <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Option 1</MenuItem>
                    <MenuItem value={20}>Option 2</MenuItem>
                    <MenuItem value={30}>Option 3</MenuItem>
                </Select> <br /><br />

                <InputLabel 
                id="demo-simple-select-autowidth-label">Provider's Primary Impression</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    // value={age}
                    // onChange={handleChange}
                    autoWidth
                >
                    <MenuItem value="">
                    <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Option 1</MenuItem>
                    <MenuItem value={20}>Option 2</MenuItem>
                    <MenuItem value={30}>Option 3</MenuItem>
                </Select> <br /><br />

                <p>Last Known Well calendar goes here</p>

        </div>
    )
}

export default PatientSymptoms;