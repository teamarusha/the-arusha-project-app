import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { useCookies } from "react-cookie";

//Material UI imports

const IncidentFormScene = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [ patientNumbers, setPatientNumbers ] = useState('');
    const [ possibleInjury, setPossibleInjury ] = useState('');
    const [ alcoholDrugIndicators, setAlcoholDrugIndicators ] = useState('');

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
            <TextField id="outlined-basic" label="Number of Patients" variant="outlined"
                onChange={( event ) => setPatientNumbers(event.target.value)} 
                value={ patientNumbers }>
            </TextField>
            <TextField id="outlined-basic" label="Possible Injury" variant="outlined" 
                onChange={( event ) => setPossibleInjury(event.target.value)} 
                value={ possibleInjury }>
            </TextField>
            <TextField id="outlined-basic" label="Alcohol and Drug Use Indicators" 
                variant="outlined" onChange={( event ) => 
                setAlcoholDrugIndicators( event.target.value )} value={ alcoholDrugIndicators }>
            </TextField>
        </div>
    );
};

export default IncidentFormScene;
