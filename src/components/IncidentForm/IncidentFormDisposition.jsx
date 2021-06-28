import React from "react";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

//Material UI imports
import { TextField, MenuItem } from "@material-ui/core";

const IncidentFormDisposition = ({ localIncident, setLocalIncident, render }) => {

    // let [localIncident, setLocalIncident] = useState(JSON.parse(localStorage.getItem('incident')));
    // let [render, setRender] = useState(false);
    // const { id } = useParams();
    // const history = useHistory();
    const dispatch = useDispatch();
    const dropdowns = useSelector(store => store.dropdowns);


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





    return (
        <div>
            {render &&
                <div>
                    <TextField id="outlined-basic" label="Destination State" variant="outlined"
                        value={localIncident[`destinationState`]} onChange={(event) =>
                            submitValue({ key: `destinationState`, thing: event.target.value })}>
                    </TextField>

                    <TextField id="outlined-basic" label="Destination County" variant="outlined"
                        value={localIncident[`destinationCounty`]} onChange={(event) =>
                            submitValue({ key: `destinationCounty`, thing: event.target.value })}>
                    </TextField>

                    <TextField id="outlined-basic" label="Destination Zip Code"
                        variant="outlined" value={localIncident[`destinationZipCode`]}
                        onChange={(event) => submitValue({
                            key: `destinationZipCode`,
                            thing: event.target.value
                        })}>
                    </TextField>
                </div>
            }

            {dropdowns.go && render &&
                <div>
                    <TextField id="outlined-basic" select label="Transportation Disposition"
                        variant="outlined" value={localIncident[`transportDisposition`]}
                        onChange={(event) => submitValue({
                            key: `transportDisposition`,
                            thing: event.target.value
                        })}>
                        {dropdowns['transport_disposition'].map(item =>
                            <MenuItem key={'transport_disposition' + item.id} value={item.id}>
                                {item["transport_disposition_type"]}
                            </MenuItem>)
                        }
                    </TextField>

                    <TextField id="outlined-basic" select label="EMS Transport Method"
                        variant="outlined" value={localIncident[`transportMethod`]}
                        onChange={(event) => submitValue({
                            key: `transportMethod`,
                            thing: event.target.value
                        })}>
                        {dropdowns['transport_method'].map(item =>
                            <MenuItem key={'transport_method' + item.id} value={item.id}>
                                {item["transport_method_type"]}
                            </MenuItem>)
                        }
                    </TextField>

                    <TextField id="outlined-basic" select label="Transport Mode From Scene"
                        variant="outlined" value={localIncident[`transportMode`]}
                        onChange={(event) => submitValue({
                            key: `transportMode`,
                            thing: event.target.value
                        })}>
                        {dropdowns['transport_mode'].map(item =>
                            <MenuItem key={'transport_mode' + item.id} value={item.id}>
                                {item["transport_mode_type"]}
                            </MenuItem>)
                        }
                    </TextField>

                    <TextField id="outlined-basic" select label="Type of Destination"
                        variant="outlined" value={localIncident[`destinationFacility`]}
                        onChange={(event) => submitValue({
                            key: `destinationFacility`,
                            thing: event.target.value
                        })}>
                        {dropdowns['destination_facility'].map(item =>
                            <MenuItem key={'destination_facility' + item.id} value={item.id}>
                                {item["destination_facility_type"]}
                            </MenuItem>)
                        }
                    </TextField>
                </div>
            }

        </div>
    );
};

export default IncidentFormDisposition;