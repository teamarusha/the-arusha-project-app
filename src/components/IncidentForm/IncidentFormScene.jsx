import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

//Material UI imports
import { TextField } from "@material-ui/core";

const IncidentFormScene = () => {
    const { id } = useParams();


    function LocalStorageTemplate(props) {
        let [localIncident, setLocalIncident] = useState(JSON.parse(localStorage.getItem('incident')));
        let [render, setRender] = useState(false)
        const { id } = useParams();
        const history = useHistory();

    // To render on page load
    useEffect(() => {
        console.log( 'Params id:', id );
        console.log( 'Cookie Mirror', localIncident );
    }, []);

    useEffect(() => {
        console.log('UPDATING browser storage', localIncident);
        localStorage.setItem('patients', JSON.stringify(localIncident));
    }, [localIncident]);

   function submitValue(newParameter) {
        console.log('Updating parameter in submitValue', newParameter.key, newParameter.thing);

        setLocalIncident({ ...localIncident, [newParameter.key]: newParameter.thing });

        // localStorage.setItem(`${newParameter.key}`, JSON.stringify(newParameter.thing));
    }

    return(
        <div>
            <TextField id="outlined-basic" label="Number of Patients" 
                variant="outlined" value={ localIncident[`patientNumbers`]}
                onChange={( event ) => submitValue({ key: `patientNumbers`,
                thing: event.target.value })}>
            </TextField>

            <TextField id="outlined-basic" label="Incident State" variant="outlined"
                value={ localIncident[`incidentState`]} onChange={( event ) => 
                submitValue({ key: `incidentState`, thing: event.target.value})}>
            </TextField>

            <TextField id="outlined-basic" label="Incident County" variant="outlined"
                value={ localIncident[`incidentCounty`]} onChange={( event ) => 
                submitValue({ key: `incidentCounty`, thing: event.target.value})}>
            </TextField>

            <TextField id="outlined-basic" label="Incident Zip Code" 
                variant="outlined" value={ localIncident[`incidentZipCode`]} 
                onChange={( event ) => submitValue({ key: `incidentZipCode`,
                thing: event.target.value})}>
            </TextField>

            <TextField id="outlined-basic" select label="Possible Injury" 
                variant="outlined" value={ localIncident[`possibleInjury`]}
                onChange={( event ) => submitValue({ key: `possibleInjury`,
                thing: event.target.value })}>
            </TextField>

            <TextField id="outlined-basic" select label="Alcohol and Drug Use Indicators" 
                variant="outlined" value={ localIncident[`alcoholDrugIndicators`]}
                onChange={( event ) => submitValue({ key: `alcoholDrugIndicators`,
                thing: event.target.value })}>
            </TextField>
            
        </div>
    );
};

export default IncidentFormScene;
