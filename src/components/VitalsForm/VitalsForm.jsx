import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { useCookies } from "react-cookie";

//Material UI imports
import { TextField } from "@material-ui/core";

const VitalsForm = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const { id } = useParams();


    function cookieForm(props) {
        const [ cookie, setCookie ] = useCookies([ 'vitals' ]);
        let [ localCookie, setLocalCookie ] = useState( cookie );
        // let [ render, setRender ] = useState('');
    }
    // To render on page load
    useEffect(() => {
        console.log( 'Params id:', id );
        console.log( 'Cookie Mirror', localCookie );
        console.log( 'THE cookie', cookie );
        if( cookie[`${id}vitals`] >= 0 ) {
            setRender( true );
        }
    }, []);
    
    function submitCookie(newCookie) {
        console.log('setting THE cookie', newCookie.key, newCookie.item );
        setLocalCookie({ ...localCookie, [ newCookie.key ] : newCookie.item });
        setCookie( newCookie.key, newCookie.item, { path: '/' });
    }

    function addVitals() {
        if ( cookie[`${id}vitals`] === undefined) {
            submitCookie({ key: `${id}systolicBloodPressure`, item: '' });
            submitCookie({ key: `${id}heartRate`, item: '' });
            submitCookie({ key: `${id}pulseOximetry`, item: '' });
            submitCookie({ key: `${id}respiratoryRate`, item: '' });
            submitCookie({ key: `${id}bloodGlucoseLevel`, item: ''});
            submitCookie({ key: `${id}glasgowComaScoreEye`, item: '' });
            submitCookie({ key: `${id}glasgowComaScoreVerbal`, item: '' });
            submitCookie({ key: `${id}glasgowComaScoreMotor`, item: '' });
            submitCookie({ key: `${id}glasgowComaScoreQualifier`, item: '' });
            submitCookie({ key: `${id}responsivenessLevel`, item: '' });
            submitCookie({ key: `${id}painScaleScore`, item: '' });
            submitCookie({ key: `${id}strokeScaleScore`, item: '' });
            submitCookie({ key: `${id}strokeScaleType`, item: '' });

            submitCookie({ key: `${id}vitals`, item: [1] });
            setRender(true);
            // history.push(`/vitals/${id}`);
        } else {
            let newVitalsID = cookie.vitals.length + 1;
            submitCookie({ key: `${id}systolicBloodPressure${newVitalsID}`, item: '' });
            submitCookie({ key: `${id}heartRate${newVitalsID}`, item: '' });
            submitCookie({ key: `${id}pulseOximetry${newVitalsID}`, item: '' });
            submitCookie({ key: `${id}respiratoryRate${newVitalsID}`, item: '' });
            submitCookie({ key: `${id}bloodGlucoseLevel${newVitalsID}`})
            submitCookie({ key: `${id}glasgowComaScoreEye${newVitalsID}`, item: '' });
            submitCookie({ key: `${id}glasgowComaScoreVerbal${newVitalsID}`, item: ' '});
            submitCookie({ key: `${id}glasgowComaScoreMotor${newVitalsID}`, item: ' '});
            submitCookie({ key: `${id}glasgowComaScoreQualifier${newVitalsID}`, item: ' '});
            submitCookie({ key: `${id}responsivenessLevel${newVitalsID}`, item: ' '});
            submitCookie({ key: `${id}painScaleScore${newVitalsID}`, item: ' '});
            submitCookie({ key: `${id}strokeScaleScore${newVitalsID}`, item: ' '});
            submitCookie({ key: `${id}strokeScaleType${newVitalsID}`, item: ' '});
            submitCookie({ key: `vitals`, item: [...cookie.vitals, newVitalsID] });
        }
    }

    return(
        <div>
             <Button size="small" color="primary" variant="contained" onClick={addVitals}>
                Add Vital Signs
            </Button>
            <TextField id="outlined-basic" label="Systolic Blood Pressure (SBP" 
                variant="outlined" value={ localCookie[`${id}systolicBloodPressure`]}
                onChange={( event ) => submitCookie({ key: `{id}systolicBloodPressure`,
                item: event.target.value })}>
            </TextField>
            <TextField id="outlined-basic" label="Heart Rate" variant="outlined"
                value={ localCookie[`${id}heartRate`]} onChange={( event ) => 
                submitCookie({ key: `${id}heartRate`, item: event.target.value })}>
            </TextField>
            <TextField id="outlined-basic" label="Pulse Oximetry" variant="outlined" 
                value={ localCookie[`${id}pulseOximetry`]} onChange={( event ) => 
                submitCookie({ key: `${id}pulseOximetry`, item: event.target.value })}>
            </TextField>
            <TextField id="outlined-basic" label="Respiratory Rate" variant="outlined"
                value={ localCookie[`${id}respiratoryRate`]} onChange={( event ) => 
                submitCookie({ key: `${id}respiratoryRate`, item: event.target.value })}>
            </TextField>
            <TextField id="outlined-basic" label="Blood Glucose Level" variant="outlined"
                value={ localCookie[`${id}bloodGlucoseLevel`]} onChange={( event ) => 
                submitCookie({ key: `${id}bloodGlucoseLevel`, item: event.target.value })}>
            </TextField>
            <TextField id="outlined-basic" label="Glasgow Coma Score-Eye" 
                variant="outlined" value={ localCookie[`${id}glasgowComaScoreEye`]}
                onChange={( event ) => submitCookie({ key: `${id}glasgowComaScoreEye`, 
                item: event.target.value })}>
            </TextField>
            <TextField id="outlined-basic"  label="Glasgow Coma Score-Verbal" 
                variant="outlined" value={ localCookie[`${id}glasgowComaScoreVerbal`]}
                onChange={( event ) => submitCookie({ key: `${id}glasgowComaScoreVerbal`, 
                item: event.target.value })}>
            </TextField>
            <TextField id="outlined-basic" label="Glasgow Coma Score-Motor" variant="outlined"
                value={ localCookie[`${id}glasgowComaScoreMotor`]} onChange={( event ) => 
                submitCookie({ key: `${id}glasgowComaScoreMotor`, 
                item: event.target.value })}>
            </TextField>
            <TextField id="outlined-basic" label="Glasgow Coma Score-Qualifier" 
                variant="outlined" value={ localCookie[`${id}glasgowComaScoreQualifier`]}
                onChange={( event ) => submitCookie({ key:
                `${id}glasgowComaScoreQualifier`, item: event.target.value })}>
            </TextField>
            <TextField id="outlined-basic" select label="Level of Responsiveness" 
                variant="outlined" value={ localCookie[`${id}responsivenessLevel`]}
                onChange={( event ) => submitCookie({ key: `${id}responsivenessLevel`, 
                item: event.target.value })}>
            </TextField>
            <TextField id="outlined-basic" select label="Pain Scale Score" 
                variant="outlined" value={ localCookie[`${id}painScaleScore`]}
                onChange={( event ) => submitCookie({ key: `${id}painScaleScore`, 
                item: event.target.value })}>
            </TextField>
            <TextField id="outlined-basic" select label="Stroke Scale Score" 
                variant="outlined" value={ localCookie[`${id}strokeScaleScore`]}
                onChange={( event ) => submitCookie({ key: `${id}strokeScaleScore`, 
                item: event.target.value })}>
            </TextField>
            <TextField id="outlined-basic" select label="stroke Scale Type" 
                variant="outlined" value={ localCookie[`${id}strokeScaleType`]}
                onChange={( event ) => submitCookie({ key: `${id}strokeScaleType`, 
                item: event.target.value })}>
            </TextField>
        </div>
    );
};

export default VitalsForm;