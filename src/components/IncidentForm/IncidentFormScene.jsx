import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useCookies } from "react-cookie";

//Material UI imports
import { TextField } from "@material-ui/core";

const IncidentFormScene = () => {
    const { id } = useParams();


    function cookieForm(props) {
        const [ cookie, setCookie ] = useCookies([ 'Incident' ]);
        let [ localCookie, setLocalCookie ] = useState( cookie );
        // let [ render, setRender ] = useState('');
    }

    // To render on page load
    useEffect(() => {
        console.log( 'Params id:', id );
        console.log( 'Cookie Mirror', localCookie );
        console.log( 'THE cookie', cookie );
        // if( id >= 0 ) {
        //     setRender( true );
        // }
    }, []);

    function submitCookie(newCookie) {
        console.log('setting THE cookie', newCookie.key, newCookie.item );
        setLocalCookie({ ...localCookie, [ newCookie.key ] : newCookie.item });
        setCookie( newCookie.key, newCookie.item, { path: '/' });
    }

    return(
        <div>
            <TextField id="outlined-basic" label="Number of Patients" variant="outlined"
                value={ localCookie[`${id}patientNumbers`]}
                onChange={( event ) => submitCookie({ key: `${id}patientNumbers`,
                item: event.target.value })}>
            </TextField>
            <TextField id="outlined-basic" label="Possible Injury" variant="outlined" 
                value={ localCookie[`${id}possibleInjury`]}
                onChange={( event ) => submitCookie({ key: `${id}possibleInjury`,
                item: event.target.value })}>
            </TextField>
            <TextField id="outlined-basic" label="Alcohol and Drug Use Indicators" 
                variant="outlined" value={ localCookie[`${id}alcoholDrugIndicators`]}
                onChange={( event ) => submitCookie({ key: `${id}alcoholDrugIndicators`,
                item: event.target.value })}>
            </TextField>
        </div>
    );
};

export default IncidentFormScene;
