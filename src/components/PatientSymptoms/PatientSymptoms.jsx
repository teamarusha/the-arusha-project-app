import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// ----- Material UI -----
import { TextField } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';

function PatientSymptoms() {

    const dispatch = useDispatch();
    const dropdowns = useSelector((store) => store.dropdowns);

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

    return (
        <div className="container">
            <h2>Patient Symptoms Form:</h2>
            <button>What's Buggin' You</button><br /><br />

            {dropdowns.go &&
            <div>
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
                    {dropdowns['anatomic_location'].map(item => <MenuItem key={'anatomic_location'+ item.id} 
                    value={item.id}>{item.type}</MenuItem>)}
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
                    {dropdowns['organ_system'].map(item => <MenuItem key={'organ_system'+ item.id} 
                    value={item.id}>{item.type}</MenuItem>)}
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
                    {dropdowns['initial_acuity'].map(item => <MenuItem key={'initial_acuity'+ item.id} 
                    value={item.id}>{item.type}</MenuItem>)}
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
                    {dropdowns['primary_impression'].map(item => <MenuItem key={'primary_impression'+ item.id} 
                    value={item.id}>{item.type}</MenuItem>)}
                </Select> <br /><br />

                <p>Last Known Well calendar goes here</p>

            </div>
        }

        </div>
    )
}

export default PatientSymptoms;