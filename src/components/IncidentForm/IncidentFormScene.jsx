import React from "react";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

//Material UI imports
import { TextField, MenuItem } from "@material-ui/core";

const IncidentFormScene = ({ localIncident, setLocalIncident, render }) => {

    // let [localIncident, setLocalIncident] = useState(JSON.parse(localStorage.getItem('incident')));
    // let [render, setRender] = useState(false);
    const { id } = useParams();
    const dispatch = useDispatch();
    // const history = useHistory();
    const dropdowns = useSelector(store => store.dropdowns);



    useEffect(() => {
        console.log('UPDATING browser storage', localIncident);
        localStorage.setItem('incident', JSON.stringify(localIncident));
    }, [localIncident]);

    function submitValue(newParameter) {
        console.log('Updating parameter in submitValue', newParameter.key, newParameter.thing);

        setLocalIncident({ ...localIncident, [newParameter.key]: newParameter.thing });

        // localStorage.setItem(`${newParameter.key}`, JSON.stringify(newParameter.thing));
    }

    return (
        <div>
            {render &&
                <div>
                    <TextField id="outlined-basic" label="Number of Patients"
                        variant="outlined" value={localIncident[`patientNumbers`]}
                        onChange={(event) => submitValue({
                            key: `patientNumbers`,
                            thing: event.target.value
                        })}>
                    </TextField>

                    <TextField id="outlined-basic" label="Incident State" variant="outlined"
                        value={localIncident[`incidentState`]} onChange={(event) =>
                            submitValue({ key: `incidentState`, thing: event.target.value })}>
                    </TextField>

                    <TextField id="outlined-basic" label="Incident County" variant="outlined"
                        value={localIncident[`incidentCounty`]} onChange={(event) =>
                            submitValue({ key: `incidentCounty`, thing: event.target.value })}>
                    </TextField>

                    <TextField id="outlined-basic" label="Incident Zip Code"
                        variant="outlined" value={localIncident[`incidentZipCode`]}
                        onChange={(event) => submitValue({
                            key: `incidentZipCode`,
                            thing: event.target.value
                        })}>
                    </TextField>
                </div>
            }
            {dropdowns.go && render &&
                <div>
                    <TextField id="outlined-basic" select label="Possible Injury"
                        variant="outlined" value={localIncident[`possibleInjury`]}
                        onChange={(event) => submitValue({
                            key: `possibleInjury`,
                            thing: event.target.value
                        })}>
                        {dropdowns['possible_injury'].map(item =>
                            <MenuItem key={'possible_injury' + item.id} value={item.id}>
                                {item["possible_injury_type"]}
                            </MenuItem>)
                        }
                    </TextField>

                    <TextField id="outlined-basic" select label="Alcohol and Drug Use Indicators"
                        variant="outlined" value={localIncident[`alcoholDrugIndicators`]}
                        onChange={(event) => submitValue({
                            key: `alcoholDrugIndicators`,
                            thing: event.target.value
                        })}>
                        {dropdowns['alcohol_drug_use'].map(item =>
                            <MenuItem key={'alcohol_drug_use' + item.id} value={item.id}>
                                {item["alcohol_drug_use_type"]}
                            </MenuItem>)
                        }
                    </TextField>
                </div>
            }

        </div>
    );
};

export default IncidentFormScene;
