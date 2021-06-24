import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

//Material UI imports
import { TextField } from "@material-ui/core";

const IncidentFormResponse = () => {
    const { id } = useParams();

    function localStorage(props) {
        let [localPatientMirror, setLocalPatientMirror] = useState(JSON.parse(localStorage.getItem('response')));
        let [render, setRender] = useState(false);
        const { id } = useParams();
        const history = useHistory();
    }

    // To render on page load
    useEffect(() => {
        // console.log( 'Params id:', id );
        console.log( 'Cookie Mirror', localPatientMirror );
        console.log( 'Patient Storage', JSON.parse(localStorage.getItem('response')));
    }, []);


    return (
        <div>
            <TextField id="outlined-basic" label="Name of Crew" variant="outlined" 
                value={ localCookie[`${id}crew`]} onChange={( event ) => 
                submitCookie({ key: `${id}alcoholDrugIndicators`, 
                item: event.target.value })}>
            </TextField>
            <TextField id="outlined-basic" select label="Triage Category" variant="outlined" 
                value={ localCookie[`${id}triageCat`]} onChange={( event ) => 
                submitCookie({ key: `${id}triageCat`, item: event.target.value })}>
            </TextField>
            <TextField id="outlined-basic" select label="Type of Service Requested" 
                variant="outlined" value={ localCookie[`${id}serviceType`]}
                onChange={( event ) => submitCookie({ key: `${id}serviceType`, 
                item: event.target.value })}>
            </TextField>
        </div>
    );
};

export default IncidentFormResponse;