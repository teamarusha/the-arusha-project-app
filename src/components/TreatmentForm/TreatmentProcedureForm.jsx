import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { useCookies } from "react-cookie";

//Material UI imports
import { TextField } from "@material-ui/core";

const TreatmentProcedureForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    function cookieForm(props) {
        const [ cookie, setCookie ] = useCookies([ 'procedureArray' ]);
        let [ localCookie, setLocalCookie ] = useState( cookie );
        let [ render, setRender ] = useState('');
    }
    // To render on page load
    useEffect(() => {
        console.log( 'Params id:', id );
        console.log( 'Cookie Mirror', localCookie );
        console.log( 'THE cookie', cookie );
        if( cookie[`${id}procedureArray`] >= 0 ) {
            setRender( true );
        }
    }, []);
    
    function submitCookie(newCookie) {
        console.log('setting THE cookie', newCookie.key, newCookie.item );
        setLocalCookie({ ...localCookie, [ newCookie.key ] : newCookie.item });
        setCookie( newCookie.key, newCookie.item, { path: '/' });
    }

    function addProcedure() {
        if ( cookie[`${id}procedureArray`] === undefined) {
            submitCookie({ key: `${id}procedure1`, item: '' });
            submitCookie({ key: `${id}procedureAttempts`, item: '' });
            submitCookie({ key: `${id}successfulProcedure`, item: '' });
            submitCookie({ key: `${id}responseToProcedure`, item: 1 });
            submitCookie({ key: `${id}procedurePerformedBy`, item: '' });

            submitCookie({ key: `${id}procedureArray`, item: [1] });
            setRender(true);
            // history.push(`/treatment/${id}`);
        } else {
            let newProcedureID = cookie.procedure.length + 1;
            submitCookie({ key: `${id}procedure${newProcedureID}`, item: '' });
            submitCookie({ key: `${id}procedureAttempts${newProcedureID}`, item: '' });
            submitCookie({ key: `${id}successfulProcedure${newProcedureID}`, item: '' });
            submitCookie({ key: `${id}responseToProcedure${newProcedureID}`, item: newProcedureID });
            submitCookie({ key: `${id}procedurePerformedBy${newProcedureID}`, item: '' });
            submitCookie({ key: `procedureArray`, item: [...cookie.procedure, newProcedureID] });
        }
    }

    return(
        <div>
            <TextField id="outlined-basic" label="Procedure Attempted" 
                variant="outlined" value={ localCookie[`${id}procedure`]}
                onChange={( event ) => submitCookie({ key: `${id}procedure`,
                item: event.target.value })}>
            </TextField>
            <TextField id="outlined-basic" label="Number of Procedure Attempts" 
                variant="outlined" value={ localCookie[`${id}procedureAttempts`]}
                onChange={( event ) => submitCookie({ key: `${id}procedureAttempts`,
                item: event.target.value })}>
            </TextField>
            <TextField id="outlined-basic" label="Procedure Successful" 
                variant="outlined" value={ localCookie[`${id}successfulProcedure`]}
                onChange={( event ) => submitCookie({ key: `${id}successfulProcedure`,
                item: event.target.value })}>
            </TextField>
            <TextField id="outlined-basic" label="Response to Procedure" 
                variant="outlined" value={ localCookie[`${id}responseToProcedure`]}
                onChange={( event ) => submitCookie({ key: `${id}responseToProcedure`,
                item: event.target.value })}>
            </TextField>
            <TextField id="outlined-basic" label="Role/Type of Person Performing
                Procedure" variant="outlined" value={ localCookie[`${id}procedurePerformedBy`]}
                onChange={( event ) => submitCookie({ key: `$id}procedurePerformedBy`, 
                item: event.target.value })}>
            </TextField>
        </div>
    );
};

export default TreatmentProcedureForm;