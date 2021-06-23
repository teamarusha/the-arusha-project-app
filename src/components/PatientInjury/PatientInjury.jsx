import React from 'react';

// ----- Material UI -----
import { InputLabel } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';


function PatientInjury() {

    return (
        <div className="container">
            <h2>Patient Injury Form:</h2>
            <button>What's Gucci</button><br /><br />

            <InputLabel 
                id="demo-simple-select-autowidth-label">Cause of Injury</InputLabel>
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

        </div>
    )
}

export default PatientInjury;