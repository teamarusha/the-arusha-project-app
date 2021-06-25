import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// ---- Material UI ----
import { TextField } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';

function PatientDemographics() {

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
            <h2>Patient Demographics Form:</h2>
            <button>Yooooo</button> <br /><br />

            {dropdowns.go &&
            <div>

            <TextField id="outlined-basic" label="First Name" variant="outlined">
            </TextField> &nbsp;<br /><br />
            <TextField id="outlined-basic" label="Last Name" variant="outlined">
            </TextField> <br /><br />
            
            <InputLabel id="demo-simple-select-autowidth-label">Gender</InputLabel>
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
                    {dropdowns['gender'].map(item => <MenuItem key={'gender'+ item.id} 
                    value={item.id}>{item.type}</MenuItem>)}
                    {/* <MenuItem value={10}>Male</MenuItem>
                    <MenuItem value={20}>Female</MenuItem>
                    <MenuItem value={30}>Other</MenuItem> */}
                </Select> <br /><br />
                <InputLabel id="demo-simple-select-autowidth-label">Race</InputLabel>
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
                    {dropdowns['race'].map(item => <MenuItem key={'race'+ item.id} 
                    value={item.id}>{item.type}</MenuItem>)}
                    {/* <MenuItem value={10}>African</MenuItem>
                    <MenuItem value={20}>African-American</MenuItem>
                    <MenuItem value={30}>American Indian</MenuItem> */}
                </Select> <br /><br />
            <p>Date of Birth calendar goes here</p>
            <TextField id="outlined-basic" label="State of Residence" variant="outlined">
            </TextField> &nbsp; <br /><br />
            <TextField id="outlined-basic" label="County of Residence" variant="outlined">
            </TextField>

            </div>
            }
        </div>
    )
}

export default PatientDemographics;