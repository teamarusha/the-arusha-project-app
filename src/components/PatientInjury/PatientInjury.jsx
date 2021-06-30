import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// ----- Material UI -----
import { InputLabel } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';


function PatientInjury({ patientsMirror, setPatientsMirror }) {

    const time = new Date().toLocaleString() + "";

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

    function handleTimeStamp() {
        const timestamp = Date.now(); // This would be the timestamp you want to format
        console.log(new Intl.DateTimeFormat('en-US', {
            year: 'numeric', month: '2-digit',
            day: '2-digit', hour: '2-digit',
            minute: '2-digit', second: '2-digit'
        }).format(timestamp));
    }

    return (
        <div className="container">
            <h2>Patient Injury Form:</h2>
            <button onClick={handleTimeStamp}>What's Gucci</button><br /><br />

            <p>Time: {time}</p>

            {dropdowns.go && patientsMirror &&
                <div>
                    <InputLabel
                        id="demo-simple-select-autowidth-label">Cause of Injury</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        autoWidth
                        value={patientsMirror[`${id}injuryCause`]}
                        onChange={(event) =>
                            submitValue({
                                key: `${id}injuryCause`,
                                thing: event.target.value,
                            })
                        }
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {dropdowns['injury_cause'].map(item => <MenuItem key={'injury_cause' + item.id}
                            value={item.id}>{item[`injury_cause_type`]}</MenuItem>)}
                    </Select> 
                    <br /><br />

                    <InputLabel
                        id="demo-simple-select-autowidth-label">Cause of Injury</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        autoWidth
                        value={patientsMirror[`${id}injuryLocation`]}
                        onChange={(event) =>
                            submitValue({
                                key: `${id}injuryLocation`,
                                thing: event.target.value,
                            })
                        }

                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {dropdowns['injury_location'].map(item => <MenuItem key={'injury_location' + item.id}
                            value={item.id}>{item[`injury_location_type`]}</MenuItem>)}
                    </Select>
                </div>
            }
        </div>
    )
}

export default PatientInjury;