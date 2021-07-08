const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');


// ____________________POST THE INCIDENT FORM____________________
router.post('/', rejectUnauthenticated, async (req, res) => {
    // IMPORTANT VARIABLES FOR A QUERY - user id
    const userID = req.user.id
    // const sampleStamp = '2021-03-23 12:23:33';

    const connection = await pool.connect();




    try {
        // Destructure req.body for ease of insert
        const {
            incident,
            patients,
            treatment,
            vitals
        } = req.body;


        const incidentValues = {
            user_id: userID,
            incident_service_id: incident.incidentService,
            crew_id: incident.crew,
            triage_cat_id: incident.triageCat,
            number_patients: incident.patientNumbers,
            unit_notified: incident.unitNotified,
            unit_enroute: incident.unitEnRoute,
            unit_arrived_scene: incident.unitArrivedScene,
            arrived_patient: incident.unitArrivedPatient,
            unit_left_scene: incident.unitLeftScene,
            arrived_destination: incident.unitArrivedDestination,
            transfer_of_care: incident.unitTransferCare,
            unit_in_service: incident.unitInService,
            incident_summary: incident.incidentSummary

        };

        // Begin the query
        await connection.query('BEGIN');

        // INCIDENT
        // We return the incident ID in order to use it with related queries later
        const incidentInsertResults = await connection.query(`
            INSERT INTO incident ("user_id","incident_service_id","crew_id","triage_cat_id","number_patients",
            "unit_notified","unit_enroute","unit_arrived_scene","arrived_patient",
            "unit_left_scene","arrived_destination","transfer_of_care","unit_in_service",
            "incident_summary")
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
            RETURNING id;`,
            [
                incidentValues.user_id,
                incidentValues.incident_service_id,
                incidentValues.crew_id,
                incidentValues.triage_cat_id,
                incidentValues.number_patients,
                incidentValues.unit_notified,
                incidentValues.unit_enroute,
                incidentValues.unit_arrived_scene,
                incidentValues.arrived_patient,
                incidentValues.unit_left_scene,
                incidentValues.arrived_destination,
                incidentValues.transfer_of_care,
                incidentValues.unit_in_service,
                incidentValues.incident_summary
            ]);


        // ANOTHER VERY IMPORTANT PARAMETER - The Incident ID number from the database
        const incidentID = incidentInsertResults.rows[0].id;


        // SCENE
        await connection.query(`
            INSERT INTO scene ("incident_scene_id","incident_state","incident_zip","incident_county",
            "possible_injury_id","alcohol_drug_use_id")
            VALUES ($1, $2, $3, $4, $5, $6);`,
            [
                incidentID,
                incident.incidentState,
                incident.incidentZipCode,
                incident.incidentCounty,
                incident.possibleInjury,
                incident.alcoholDrugIndicators
            ]
        );


        // PATIENT
        const patientQuery = `INSERT INTO patient ("patient_incident_id","patient_first_name",
                "patient_last_name","address", "home_county","home_state", "home_zip","gender_id",
                race_id, date_of_birth, age, age_units_id)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
                RETURNING id;`;

        // Declare an array that we will loop over to insert all information for all patients
        const returnPatientIDs = [];
        const patientReturn = await Promise.all(

            patients.patientArray.map((patient, i) => {

                let patientValues = [
                    incidentID,
                    patients[String(patient) + 'patientFirstName'],
                    patients[String(patient) + 'patientLastName'],
                    patients[String(patient) + 'patientAddress'],
                    patients[String(patient) + 'patientHomeCounty'],
                    patients[String(patient) + 'patientHomeState'],
                    patients[String(patient) + 'patientHomeZip'],
                    patients[String(patient) + 'patientGender'],
                    patients[String(patient) + 'patientRace'],
                    patients[String(patient) + 'patientDateOfBirth'],
                    patients[String(patient) + 'patientAge'],
                    patients[String(patient) + 'patientAgeUnits']
                ];

                return connection.query(patientQuery, patientValues);
            })

        );



        // Puts returned ids into array declared above for use with later queries
        // For all remaining queries, we will have to insert information for each patient 
        for (let newReturn of patientReturn) {
            returnPatientIDs.push(newReturn.rows[0].id);
        }


        // DISPOSITION
        // IF IT IS >4 IT WILL JUST INSERT THE DISPOSITION VALUE
        await Promise.all(

            returnPatientIDs.map((patientID, i) => {

                if (incident[String(i + 1) + 'transportDisposition'] > 4) {

                    return connection.query(`
                    INSERT INTO disposition ("patient_disposition_id","transport_disposition_id")
                    VALUES ($1, $2);`,
                        [
                            patientID,
                            incident[String(i + 1) + 'transportDisposition']
                        ]);

                } else {

                    return connection.query(`
                    INSERT INTO disposition ("patient_disposition_id","destination_state",
                    "destination_county","destination_zip", "transport_disposition_id",
                    "transport_method_id", "transport_mode_id","destination_facility_id")
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`,
                        [
                            patientID,
                            incident[String(i + 1) + 'destinationState'],
                            incident[String(i + 1) + 'destinationCounty'],
                            incident[String(i + 1) + 'destinationZipCode'],
                            incident[String(i + 1) + 'transportDisposition'],
                            incident[String(i + 1) + 'transportMethod'],
                            incident[String(i + 1) + 'transportMode'],
                            incident[String(i + 1) + 'destinationFacility']
                        ]);
                }

            })
        );

        // MEDICAL CONDITIONS
        const medCondQuery = `INSERT INTO medicalconditions ("patient_condition_id","medical_conditions")
                VALUES ($1, $2)`;

        await Promise.all(
            returnPatientIDs.map((patientID, i) => {

                let medCondValues = [
                    patientID,
                    patients[String(i + 1) + 'patientMedConditions']
                ];

                return connection.query(medCondQuery, medCondValues);
            })

        );

        // CURRENT MEDICATIONS
        const currMedQuery = `INSERT INTO currentmedication ("patient_current_med_id","medication")
                VALUES ($1, $2)`;

        await Promise.all(
            returnPatientIDs.map((patientID, i) => {

                let currMedValues = [
                    patientID,
                    patients[String(i + 1) + 'patientCurrMedications']
                ];

                return connection.query(currMedQuery, currMedValues);
            })

        );

        // ALLERGIES
        const allergyQuery = `INSERT INTO allergies ("patient_allergy_id","allergy")
                VALUES ($1, $2)`;

        await Promise.all(
            returnPatientIDs.map((patientID, i) => {

                let allergyValues = [
                    patientID,
                    patients[String(i + 1) + 'patientAllergies']
                ];

                return connection.query(allergyQuery, allergyValues);
            })

        );

        // SYMPTOMS
        const symptomQuery = `INSERT INTO symptoms ("patient_symptoms_id",
        "anatomic_location_id","organ_system_id","time_symptom_onset",
        "time_last_known_well","primary_symptom","other_symptoms","initial_acuity_id",
        "final_acuity_id","primary_impression_id")
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);`;

        await Promise.all(
            returnPatientIDs.map((patientID, i) => {

                let symptomValues = [
                    patientID,
                    patients[String(i + 1) + 'anatomicLocation'],
                    patients[String(i + 1) + 'organSystem'],
                    `${patients[String(i + 1) + 'symptomOnsetDate']} ${patients[String(i + 1) + 'symptomOnsetTime']}`,
                    `${patients[String(i + 1) + 'lastKnownWellDate']} ${patients[String(i + 1) + 'lastKnownWellTime']}`,
                    patients[String(i + 1) + 'primarySymptom'],
                    patients[String(i + 1) + 'otherSymptoms'],
                    patients[String(i + 1) + 'initialAcuity'],
                    patients[String(i + 1) + 'finalAcuity'],
                    patients[String(i + 1) + 'primaryImpression']
                ];

                return connection.query(symptomQuery, symptomValues);
            })

        );
        // INJURY
        const injuryQuery = `INSERT INTO injury ("patient_injury_id",
        "injury_location_id","injury_cause_id")
        VALUES ($1, $2, $3);`;

        await Promise.all(
            returnPatientIDs.map((patientID, i) => {

                let injuryValues = [
                    patientID,
                    patients[String(i + 1) + 'injuryLocation'],
                    patients[String(i + 1) + 'injuryCause']
                ];

                return connection.query(injuryQuery, injuryValues);
            })

        );
        // CARDIAC AREST
        // IF IT IS 1 IT WILL ONLY INSERT THE cardiacArrest VALUE FOR THE PATIENT
        await Promise.all(
            returnPatientIDs.map((patientID, i) => {

                if (patients[String(i + 1) + 'cardiacArrest'] === 1) {

                    const cardiacQuery = `INSERT INTO cardiacarrest ("patient_cardiac_id",
                            "cardiac_arrest_id") VALUES ($1, $2);`;


                    let cardiacValues = [
                        patientID,
                        patients[String(i + 1) + 'cardiacArrest']
                    ];

                    return connection.query(cardiacQuery, cardiacValues);

                } else {

                    const cardiacQuery = `INSERT INTO cardiacarrest ("patient_cardiac_id",
                            "cardiac_arrest_id","cardiac_arrest_etiology_id","resuscitation_attempt_id",
                            "cardiac_arrest_witness_id","aed_use_prior_id","cpr_provided_id","spontaneous_circulation_id",
                            "time_cardiac_arrest","cpr_stopped_id", "cpr_initiator_id", "aed_applicator_id", "aed_defibrillator_id")
                            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13);`;


                    let cardiacValues = [
                        patientID,
                        patients[String(i + 1) + 'cardiacArrest'],
                        patients[String(i + 1) + 'cardiacArrestEtiology'],
                        patients[String(i + 1) + 'resuscitationAttempt'],
                        patients[String(i + 1) + 'cardiacArrestWitness'],
                        patients[String(i + 1) + 'aedUsePrior'],
                        patients[String(i + 1) + 'cprProvided'],
                        patients[String(i + 1) + 'spontaneousCirculation'],
                        `${patients[String(i + 1) + 'cardiacArrestDate']} ${patients[String(i + 1) + 'cardiacArrestTime']}`,
                        patients[String(i + 1) + 'cprStopped'],
                        patients[String(i + 1) + 'cprInitiator'],
                        patients[String(i + 1) + 'aedApplicator'],
                        patients[String(i + 1) + 'aedDefibrillator']
                    ];

                    return connection.query(cardiacQuery, cardiacValues);
                }
            })

        );
        // medication
        const medTreatmentQuery = `INSERT INTO medication ("patient_medication_id",
        "med_name","med_admin_route_id","med_admin_by_id",
        "med_dosage","med_dosage_units_id","med_response_id","med_timestamp")
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`;

        await Promise.all(
            // First we map (loop) through all of the patients,
            // patientID is the returned patient ID from the database
            // i will be the way we index the patient number from the client side
            // 
            // It is important to note that the naming convention for client side 
            // attributes is as follows: 
            // patient number(not patient ID from database)+attribute name+attribute number
            // 
            // So for the third medication treatment for patient 2 the attributes would be...
            // 2medication3
            returnPatientIDs.map((patientID, i) => {

                treatment[String(i + 1) + "medicationArray"].map(med => {

                    if (med !== treatment[String(i + 1) + "lastMedication"]) {

                        let medTreatmentValues = [
                            patientID,
                            treatment[String(i + 1) + 'medication' + med],
                            treatment[String(i + 1) + 'routeAdministered' + med],
                            treatment[String(i + 1) + 'medsAdminBy' + med],
                            treatment[String(i + 1) + 'dosage' + med],
                            treatment[String(i + 1) + 'units' + med],
                            treatment[String(i + 1) + 'medicationResponse' + med],
                            treatment[String(i + 1) + 'medicationTimestamp' + med]
                        ];

                        return connection.query(medTreatmentQuery, medTreatmentValues);
                    }
                });
            })
        );
        // procedure
        const procedureQuery = `INSERT INTO procedure ("patient_procedure_id",
        "procedure_name_id","procedure_attempts_id","procedure_successful_id",
        "procedure_response_id","procedure_performer_id","procedure_timestamp")
        VALUES ($1, $2, $3, $4, $5, $6, $7);`;

        await Promise.all(
            // this query is much the same as the 
            returnPatientIDs.map((patientID, i) => {

                treatment[String(i + 1) + "procedureArray"].map(proc => {

                    if (proc !== treatment[String(i + 1) + "lastProcedure"]) {

                        let procedureValues = [
                            patientID,
                            treatment[String(i + 1) + 'procedure' + proc],
                            treatment[String(i + 1) + 'procedureAttempts' + proc],
                            treatment[String(i + 1) + 'successfulProcedure' + proc],
                            treatment[String(i + 1) + 'responseToProcedure' + proc],
                            treatment[String(i + 1) + 'procedurePerformedBy' + proc],
                            treatment[String(i + 1) + 'procedureTimestamp' + proc]
                        ];

                        return connection.query(procedureQuery, procedureValues);
                    }
                });
            })
        );
        // vitals
        const vitalQuery = `INSERT INTO vitals ("patient_vitals_id",
        "systolic_bp","heart_rate","pulse_oximetry","respiratory_rate",
        "blood_glucose","glasgow_eye", "glasgow_verbal", "glasgow_motor",
        "glasgow_qualifier", "responsiveness_level_id", "pain_scale_id",
        "stroke_score_id", "stroke_scale_id", "vitals_timestamp")
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15);`;

        await Promise.all(
            // this query is much the same as the 
            returnPatientIDs.map((patientID, i) => {

                vitals[String(i + 1) + "vitalsArray"].map(vital => {

                    if (vital !== vitals[String(i + 1) + "lastVital"]) {

                        let vitalValues = [
                            patientID,
                            vitals[String(i + 1) + 'systolicBloodPressure' + vital],
                            vitals[String(i + 1) + 'heartRate' + vital],
                            vitals[String(i + 1) + 'pulseOximetry' + vital],
                            vitals[String(i + 1) + 'respiratoryRate' + vital],
                            vitals[String(i + 1) + 'bloodGlucoseLevel' + vital],
                            vitals[String(i + 1) + 'glasgowComaScoreEye' + vital],
                            vitals[String(i + 1) + 'glasgowComaScoreVerbal' + vital],
                            vitals[String(i + 1) + 'glasgowComaScoreMotor' + vital],
                            vitals[String(i + 1) + 'glasgowComaScoreQualifier' + vital],
                            vitals[String(i + 1) + 'responsivenessLevel' + vital],
                            vitals[String(i + 1) + 'painScaleScore' + vital],
                            vitals[String(i + 1) + 'strokeScaleScore' + vital],
                            vitals[String(i + 1) + 'strokeScaleType' + vital],
                            vitals[String(i + 1) + 'vitalTimestamp' + vital]
                        ];

                        return connection.query(vitalQuery, vitalValues);
                    }
                });
            })
        );

        await connection.query('COMMIT')
        res.sendStatus(201);
    } catch (error) {
        await connection.query('ROLLBACK')
        console.log('Error POST /api/incident', error);
        res.sendStatus(500);
    } finally {
        connection.release()
    }

});


module.exports = router;