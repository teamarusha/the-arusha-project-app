import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useCookies } from "react-cookie";

//Material UI imports
import { TextField } from "@material-ui/core";

const IncidentFormResponse = () => {
    const { id } = useParams();

    function cookieForm(props) {
        const [ cookie, setCookie ] = useCookies([ 'response' ]);
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