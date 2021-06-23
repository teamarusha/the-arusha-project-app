import { useState, useEffect } from "react";
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from "react-redux";


function ReduxCookie() {
    const dropdowns = useSelector(store => store.dropdowns);
    const dispatch = useDispatch();


    const [cookie, setCookie, removePatientsCookie] = useCookies(['dropdowns']);
    let [localCookie, setLocalCookie] = useState(cookie);

    useEffect(() => {
        dispatch({ type: 'GET_DROPDOWNS' })
    }, [])

    useEffect(() => {
        if (dropdowns.go === true) {
            let incidentDropdowns = [
                "incident_type",
                "alcohol_drug_use",
                "transport_disposition",
                "transport_mode",
                "transport_method",
                "destination_type",
                "final_acuity",
                "triage_cat",
                "primary_impression",
            ]
            let patientDropdowns = [
                "gender",
                "race",
                "age_units",
                "anatomic_location",
                "organ_system",
                "initial_acuity",
                "injury_type",
                "injury_cause",
                "cardiac_arrest",
                "cardiac_arrest_etiology",
                "cardiac_arrest_witness",
                "AED_use_prior",
                "CPR_type",
                "spontaneous_circulation",
                "CPR_stopped",
                "resuscitation_attempt",
                "AED_applicator",
                "AED_initiator",
                "AED_defibrillator",
            ]
            let treatmentDropdowns = [
                "med_admin_route",
                "med_dosage_units",
                "med_admin_by",
                "procedure_performer",
                "procedure_list",
                "responsiveness_level",
                "pain_scale",
                "stroke_score",
                "stroke_scale",
            ];
            console.log('dropdowns cookifying');

            for (let table of patientDropdowns){
                submitCookie({key: table, thing: dropdowns[table]});
            }

        }
    }, [dropdowns.go])


    function submitCookie(newCookie) {
        console.log('setting THE cookie', newCookie.key, newCookie.thing);

        setLocalCookie({ ...localCookie, [newCookie.key]: newCookie.thing });

        setCookie(newCookie.key, newCookie.thing, { path: '/' });
    }

    return (
        <>
            <p>Local Cookie Mirror: {JSON.stringify(localCookie)}</p>
            <p>THE Cookie: {JSON.stringify(cookie)}</p>
            <p>Dropdown Reducer: {JSON.stringify(dropdowns)}</p>


            {
                dropdowns.go &&

                <select
                    name="SAMPLE"
                    // Change bloodType to the variable you are capturing!!!
                    value={localCookie[`SAMPLE`]}
                    onChange={(e) => submitCookie({ key: `SAMPLE`, thing: e.target.value })}
                >
                    {/* Edit options as needed! 
                            Will be using a map function for these
                            The value attribute is what is
                            taken in by the submit function */}
                    {/* From database, the structure will be:
                            <option value="(id from database table)">(Second Column value from database table)</option> */}
                    <option value={0}>--- DEFAULT SELECTION --- </option>

                    {dropdowns.go && dropdowns["gender"].map(selection =>
                        <option value={selection.id}>{selection.type}</option>
                    )}

                </select>
            }
        </>
    )
}

export default ReduxCookie;