import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { useCookies } from "react-cookie";

//Material UI imports
import { TextField } from "@material-ui/core";

const TreatmentProcedureForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [ procedure, setProcedure ] = useState('');
    const [ numAttempts, setNumAttempts ] = useState('');
    const [ successful, setSuccessful ] = useState('');
    const [ procedureResponse, setProcedureResponse ] = useState('');
    const [ procedureAdminBy, setProcedureAdminBy ] = useState('');

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
            <TextField id="outlined-basic" label="Procedure Attempted" 
                variant="outlined" onChange={( event ) =>
                setProcedure( event.target.value )} 
                value={ procedure }>
            </TextField>
            <TextField id="outlined-basic" label="Number of Procedure Attempts" 
                variant="outlined" onChange={( event ) => 
                setNumAttempts( event.target.value )} value={ numAttempts }>
            </TextField>
            <TextField id="outlined-basic" label="Procedure Successful" 
                variant="outlined" onChange={( event ) => 
                setSuccessful( event.target.value )} value={ successful }>
            </TextField>
            <TextField id="outlined-basic" label="Response to Procedure" 
                variant="outlined" onChange={( event ) => 
                setProcedureResponse( event.target.value )} value={ procedureResponse }>
            </TextField>
            <TextField id="outlined-basic" label="Role/Type of Person Performing
                Procedure" variant="outlined" onChange={( event ) => 
                setProcedureAdminBy( event.target.value )} value={ procedureAdminBy }>
            </TextField>
        </div>
    );
};

export default TreatmentProcedureForm;