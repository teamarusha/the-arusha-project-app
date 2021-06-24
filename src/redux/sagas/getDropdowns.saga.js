import { put } from '@redux-saga/core/effects';
import axios from 'axios';

function* getDropdowns() {

    console.log('in dropdown saga');
    let dropdownTables = [
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
        "gender",
        "race",
        "age_units",
        "anatomic_location",
        "organ_system",
        "initial_acuity",
        "alcohol_drug_use",
        "final_acuity",
        "possible_injury",
        "procedure_list",
        "procedure_performer",
        "procedures_attempted",
        "responsiveness_level",
        "pain_scale",
        "stroke_score",
        "stroke_scale",
        "med_admin_route",
        "med_dosage_units",
        "med_response",
        "procedure_response",
        "procedure_successful",
        "med_admin_by",
        "incident_type",
        "transport_disposition",
        "transport_mode",
        "transport_method",
        "triage_cat",
        "destination_type",
        "primary_impression",
        "injury_type",
        "injury_cause"
    ];
    let count = 0;


    for (let table of dropdownTables) {
        try {

            console.log('DOING A GET FOR TABLE:', table);
            const dropdown = yield axios.get(`/api/dropdown/${table}`, { params: { table: table } });
            yield put({ type: 'ADD_DROPDOWN_OBJECT', payload: { key: table, value: dropdown.data } });
            count++;

        } catch (error) {
            console.log('get dropdown error', error);
        }
    }
    if (count === dropdownTables.length) {
        yield put({ type: 'ADD_DROPDOWN_OBJECT', payload: { key: "go", value: true } });
    }
}

export default getDropdowns;