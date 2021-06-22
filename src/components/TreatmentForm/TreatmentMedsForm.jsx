import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { useCookies } from "react-cookie";

//Material UI imports
import { TextField } from "@material-ui/core";

const TreatmentMedsForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    function cookieForm(props) {
        const [ cookie, setCookie ] = useCookies([ 'medication' ]);
        let [ localCookie, setLocalCookie ] = useState( cookie );
        // let [ render, setRender ] = useState('');
    }
    // To render on page load
    useEffect(() => {
        console.log( 'Params id:', id );
        console.log( 'Cookie Mirror', localCookie );
        console.log( 'THE cookie', cookie );
        if( cookie[`${id}medication`] >= 0 ) {
            setRender( true );
        }
    }, []);
    
    function submitCookie(newCookie) {
        console.log('setting THE cookie', newCookie.key, newCookie.item );
        setLocalCookie({ ...localCookie, [ newCookie.key ] : newCookie.item });
        setCookie( newCookie.key, newCookie.item, { path: '/' });
    }

    function addMedication() {
        if ( cookie[`${id}medication`] === undefined) {
            submitCookie({ key: `${id}medication1`, item: '' });
            submitCookie({ key: `${id}routeAdministered`, item: '' });
            submitCookie({ key: `${id}dosage`, item: '' });
            submitCookie({ key: `${id}units`, item: '' });
            submitCookie({ key: `${id}medicationResponse`, item: ''});
            submitCookie({ key: `${id}medsAdminBy`, item: '' });

            submitCookie({ key: `${id}medication`, item: [1] });
            setRender(true);
            // history.push(`/medication/${id}`);
        } else {
            let newMedicationID = cookie.medication.length + 1;
            submitCookie({ key: `${id}medication${newMedicationID}`, item: '' });
            submitCookie({ key: `${id}routeAdministered${newMedicationID}`, item: '' });
            submitCookie({ key: `${id}dosage${newMedicationID}`, item: '' });
            submitCookie({ key: `${id}units${newMedicationID}`, item: '' });
            submitCookie({ key: `${id}medicationResponse${newMedicationID}`})
            submitCookie({ key: `${id}medsAdminBy${newMedicationID}`, item: '' });
            submitCookie({ key: `medication`, item: [...cookie.medication, newMedicationID] });
        }
    }

    return(
        <div>
            <TextField id="outlined-basic" label="Medication Administered" 
                variant="outlined" value={ localCookie[`${id}medication`]}
                onChange={( event ) => submitCookie({ key: `${id}medication`,
                item: event.target.value })}>
            </TextField>
            <TextField id="outlined-basic" label="Administered Route" 
                variant="outlined" value={ localCookie[`${id}routeAdministered`]}
                onChange={( event ) => submitCookie({ key: `${id}routeAdministered`,
                item: event.target.value })}>
            </TextField>
            <TextField id="outlined-basic" label="Dosage" variant="outlined" 
                value={ localCookie[`${id}dosage`]}
                onChange={( event ) => submitCookie({ key: `{id}dosage`, 
                item: event.target.value })}>
            </TextField>
            <TextField id="outlined-basic" label="Units" variant="outlined"
                value={ localCookie[`${id}units`]} onChange={( event ) => 
                submitCookie({ key: `${id}units`, item: event.target.value })}>
            </TextField>
            <TextField id="outlined-basic" label="Response to Medication" 
                variant="outlined" value={ localCookie[`${id}medicationResponse`]}
                onChange={( event ) => submitCookie({ key: `${id}medicationResponse`,
                item: event.target.value })}>
            </TextField>
            <TextField id="outlined-basic" label="Role/Type of Person Administering 
                Medication" variant="outlined" value={ localCookie[`${id}medsAdminBy`]}
                onChange={( event ) => submitCookie({ key: `${id}medsAdminBy`, 
                item: event.target.value })}>
            </TextField>
        </div>
    );
};

export default TreatmentMedsForm;