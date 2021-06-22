import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { useCookies } from "react-cookie";

//Material UI imports
import { TextField } from "@material-ui/core";

const TreatmentMedsForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [ medication, setMedication ] = useState('');
    const [ routeAdministered, setRouteAdministered ] = useState('');
    const [ dosage, setDosage ] = useState('');
    const [ units, setUnits ] = useState('');
    const [ medsResponse, setMedsResponse ] = useState('');
    const [ medsAdminBy, setMedsAdminBy ] = useState('');

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
            <TextField id="outlined-basic" label="Medication Administered" 
                variant="outlined" onChange={( event ) =>
                setMedication( event.target.value )} 
                value={ medication }>
            </TextField>
            <TextField id="outlined-basic" label="Administered Route" 
                variant="outlined" onChange={( event ) => 
                setRouteAdministered( event.target.value )} value={ routeAdministered }>
            </TextField>
            <TextField id="outlined-basic" label="Dosage" variant="outlined" 
                onChange={( event ) => setDosage( event.target.value )} 
                value={ dosage }>
            </TextField>
            <TextField id="outlined-basic" label="Units" variant="outlined"
                onChange={( event ) => setUnits( event.target.value )} value={ units }>
            </TextField>
            <TextField id="outlined-basic" label="Response to Medication" 
                variant="outlined" onChange={( event ) => 
                setMedsResponse( event.target.value )} value={ medsResponse }>
            </TextField>
            <TextField id="outlined-basic" label="Role/Type of Person Administering 
                Medication" variant="outlined" onChange={( event ) => 
                setMedsAdminBy( event.target.value )} value={ medsAdminBy }>
            </TextField>
        </div>
    );
};

export default TreatmentMedsForm;