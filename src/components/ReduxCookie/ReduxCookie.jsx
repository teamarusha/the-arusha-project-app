import React from 'react';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from '../Nav/Nav';

function ReduxCookie() {

    // GRAB DROP DOWNS AND INCIDENT INFORMATION STORED IN DESIGNATED REDUCERS
    const dropdowns = useSelector(store => store.dropdowns);
    const incident = useSelector(store => store.incident);

    //DECLARE VARIABLE FOR USE OF DISPATCH FUNCTION
    const dispatch = useDispatch();

    let [localIncident, setLocalIncident] = useState(JSON.parse(localStorage.getItem('incident')));

    useEffect(() => {
        // SHOULD TRIGGER ON FIRST PAGE VISIT
        if (localIncident === null) {
            // localStorage.setItem("incident", JSON.stringify(incident));
            // setIncidentMirror(incident);
            console.log("localIncident is NULL", localIncident);
        } else {
            console.log("localIncident is NOT NULL", localIncident);
            dispatch({ type: "SET_INCIDENT", payload: JSON.parse(localStorage.getItem("incident")) });
            setLocalIncident(JSON.parse(localStorage.getItem("incident")));
        }
    }, []);


    // ____________________DROPDOWNS____________________
    const localDropdownMirror = JSON.parse(localStorage.getItem("dropdowns"));

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('dropdowns')) === null) {
            dispatch({ type: 'GET_DROPDOWNS' })
        } else {
            dispatch({ type: 'SET_DROPDOWNS', payload: localDropdownMirror })
        }
    }, []);

    useEffect(() => {
        if (dropdowns.go === true) {
            localStorage.setItem('dropdowns', JSON.stringify(dropdowns));
        }
    }, [dropdowns.go]);

    return (
        <React.Fragment>
            <Nav />
            <div>
                {dropdowns.go &&
                    <div>
                        <p>Local Storage Incident: {localStorage.getItem('incident')}</p>
                        <p>Incident Reducer: {JSON.stringify(incident)}</p>
                        <p>Local Incident Mirror: {JSON.stringify(localIncident)}</p>
                    </div>
                }
            </div>
        </React.Fragment>
    )
}

export default ReduxCookie;