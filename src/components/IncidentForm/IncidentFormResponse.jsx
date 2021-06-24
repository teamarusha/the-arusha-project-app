import React from "react";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

//Material UI imports
import { TextField } from "@material-ui/core";

const IncidentFormResponse = () => {

        let [localIncident, setLocalIncident] = useState(JSON.parse(localStorage.getItem('incident')));
        // let [render, setRender] = useState(false);
        // const { id } = useParams();
        // const history = useHistory();
        const dispatch = useDispatch();
        const dropdowns = useSelector(store => store.dropdowns);

    // To render on page load
    useEffect(() => {
        // console.log( 'Params id:', id );
        console.log( 'Cookie Mirror', localIncident );
        console.log( 'Incident Storage', JSON.parse(localStorage.getItem('incident')));
    }, []);

    useEffect(() => {
        console.log('UPDATING browser storage', localIncident);
        localStorage.setItem('incident', JSON.stringify(localIncident));
    }, [localIncident]);

    // Only handles when a value is changed by keystroke/inputfield clicks. 
    // Does NOT handle initialization of new data.
    function submitValue(newParameter) {
        console.log('Updating parameter in submitValue', newParameter.key, newParameter.thing);

        setLocalIncident({ ...localIncident, [newParameter.key]: newParameter.thing });

        // localStorage.setItem(`${newParameter.key}`, JSON.stringify(newParameter.thing));
    }

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
        <div>
            <TextField id="outlined-basic" label="Name of Crew" variant="outlined" 
                value={ localIncident[`crew`]} onChange={( event ) => 
                submitValue({ key: `crew`, 
                thing: event.target.value })}>
            </TextField>

            { dropdowns.go &&
            <div>
            <TextField id="outlined-basic" select label="Triage Category" variant="outlined" 
                value={ localIncident[`triageCat`]} onChange={( event ) => 
                submitValue({ key: `triageCat`, thing: event.target.value })}>
            {dropdowns['triage_cat'].map(item => 
                <MenuItem key={'triage_cat'+ item.id} value={item.id}>
                    {item.type}
                </MenuItem>)
            }
            </TextField>

            <TextField id="outlined-basic" select label="Type of Service Requested" 
                variant="outlined" value={ localIncident[`serviceType`]}
                onChange={( event ) => submitValue({ key: `serviceType`, 
                thing: event.target.value })}>
            {dropdowns['incident_type'].map(item => 
                <MenuItem key={'incident_type'+ item.id} value={item.id}>
                    {item.type}
                </MenuItem>)
            }
            </TextField>
            </div>
            }

        </div>
    );
};

export default IncidentFormResponse;