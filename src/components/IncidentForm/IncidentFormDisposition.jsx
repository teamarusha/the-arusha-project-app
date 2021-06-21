import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { useCookies } from "react-cookie";

//Material UI imports

const IncidentFormDisposition = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [ transportDisposition, setTransportDisposition ] = useState('');
    const [ transportMethod, setTransportMethod ] = useState('');
    const [ transportMode, setTransportMode ] = useState('');
    const [ destinationType, setDestinationType ] = useState('');

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

    return(
        <div>
            <TextField label="Transportation Disposition" onChange={( event ) =>
                setTransportDisposition( event.target.value )} value={ transportDisposition }>
            </TextField>
            <TextField label="EMS Transport Method" onChange={( event ) => 
                setTransportMethod( event.target.value )} value={ transportMethod }>
            </TextField>
            <TextField label="Transport Mode From Scene" onChange={( event ) => 
                setTransportMode( event.target.value )} value={ transportMode }>
            </TextField>
            <TextField label="Type of Destination" onChange={( event ) => 
                setDestinationType( event.target.value )} value={ destinationType }>
            </TextField>
        </div>
    );
};

export default IncidentFormDisposition;