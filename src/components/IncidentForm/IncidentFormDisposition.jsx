import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";

import { useCookies } from "react-cookie";

//Material UI imports
import { TextField } from "@material-ui/core";

const IncidentFormDisposition = () => {

    const dispatch = useDispatch();
    const history = useHistory();

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
            <TextField id="outlined-basic" label="Transportation Disposition" 
                variant="outlined" value={ localCookie[`${id}transportDisposition`]}
                onChange={( event ) => submitCookie({ key: `{id}transportDisposition`,
                item: event.target.value })}>
            </TextField>
            <TextField id="outlined-basic" label="EMS Transport Method" variant="outlined"
                value={ localCookie[`${id}transportMethod`]}
                onChange={( event ) => submitCookie({ key: 
                `${id}transportMethod`, item: event.target.value })}>
            </TextField>
            <TextField id="outlined-basic" label="Transport Mode From Scene" 
                variant="outlined" value={ localCookie[`${id}transportMode`]}
                onChange={( event ) => submitCookie({ key: 
                `${id}transportMode`, item: event.target.value })}>
            </TextField>
            <TextField id="outlined-basic" label="Type of Destination" variant="outlined"
                value={ localCookie[`${id}destinationType`]}
                onChange={( event ) => submitCookie({ key:
                `${id}destinationType`, item: event.target.value })}>
            </TextField>
        </div>
    );
};

export default IncidentFormDisposition;