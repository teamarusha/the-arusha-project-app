import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { useCookies } from "react-cookie";

//Material UI imports
import { TextField } from "@material-ui/core";

const IncidentFormResponse = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [ crew, setCrew ] = useState('');
    const [ triageCat, setTriageCat ] = useState();
    const [ serviceType, setServiceType ] = useState();

    function cookieForm(props) {
        const [ cookie, setCookie ] = useCookies([ 'Incident' ]);
        let [ localCookie, setLocalCookie ] = useState( cookie );
        // let [ render, setRender ] = useState('');
    }



    // To render on page load
    useEffect(() => {
        // console.log( 'Params id:', id );
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
            {/* <TextField select label="response" value={}
                onChange={submitCookie}>
                    {}
            </TextField> */}
            <TextField id="outlined-basic" label="Name of Crew" variant="outlined" 
                onChange={( event ) => setCrew( event.target.value )} 
                value={ crew }>
            </TextField>
            <TextField id="outlined-basic" label="Triage Category" variant="outlined" 
                onChange={( event ) => setTriageCat( event.target.value )} 
                value={ triageCat }>
            </TextField>
            <TextField id="outlined-basic" label="Type of Service Requested" 
                variant="outlined" onChange={( event ) => 
                setServiceType( event.target.value )} value={ serviceType }>
            </TextField>
        </div>
    );
};

export default IncidentFormResponse;