import React from 'react';

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

        </div>
    )
}

export default PatientSymptoms;