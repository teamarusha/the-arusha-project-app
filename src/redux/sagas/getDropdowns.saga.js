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
        "procedure_performer",
        "procedure_list",
        "responsiveness_level",
        "pain_scale",
        "stroke_score",
        "stroke_scale",
        "med_admin_route",
        "med_dosage_units",
        "med_admin_by",
        "incident_type",
        "triage_cat",
        "transport_disposition",
        "transport_mode",
        "transport_method",
        "destination_type",
        "primary_impression",
        "injury_type",
        "injury_cause"
    ];

    for (let table of dropdownTables) {
        try {

            console.log('DOING A GET FOR TABLE:', table);
            const dropdown = yield axios.get(`/api/dropdown/`, { params: {table: table}});
            yield put({ type: 'ADD_DROPDOWN_OBJECT', payload: { key: table, value: dropdown.data } });

        } catch (error) {
            console.log('get dropdown error', error);
        }
    }

    yield put({ type: 'ADD_DROPDOWN_OBJECT', payload: { key: "go", value: true } });
}

export default getDropdowns;