import React from 'react';

// ----- Material UI -----
import { InputLabel } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';

function PatientCardiac() {

    return (
        <div className="container">
            <h2>Patient Cardiac Arrest Form:</h2>
            <button>911 Heart Probz</button> <br /><br />

            <InputLabel 
            id="demo-simple-select-autowidth-label">Cardiac Arrest?</InputLabel>
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
            id="demo-simple-select-autowidth-label">Cardiac Arrest Etiology</InputLabel>
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
            id="demo-simple-select-autowidth-label">Resuscitation Attempted by EMS</InputLabel>
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
            id="demo-simple-select-autowidth-label">Arrest Witnessed By</InputLabel>
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
            id="demo-simple-select-autowidth-label">Hard to Separate It</InputLabel>
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
            id="demo-simple-select-autowidth-label">AED Use Prior to EMS Arrival?</InputLabel>
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
            id="demo-simple-select-autowidth-label">Type of CPR Provided</InputLabel>
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
            id="demo-simple-select-autowidth-label">Any Return of Spontaneous Circulation</InputLabel>
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

                <p>Cardiac Arrest calendar goes here</p> <br /><br />

                <InputLabel 
            id="demo-simple-select-autowidth-label">Reason for Stopping CPR/Resuscitation</InputLabel>
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
            id="demo-simple-select-autowidth-label">Who First Initiated CPR</InputLabel>
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
            id="demo-simple-select-autowidth-label">Who First Applied AED</InputLabel>
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
            id="demo-simple-select-autowidth-label">Who First Defibrillated the Patient</InputLabel>
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

export default PatientCardiac;