-- Create database name "arusha_project"
-- There are several tables to add:

CREATE TABLE "cardiac_arrest" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (30) NOT NULL
);

INSERT INTO "cardiac_arrest" ("type")
VALUES
('No'),
('Yes, Prior to EMS Arrival'),
('Yes, After EMS Arrival');

CREATE TABLE "cardiac_arrest_etiology" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (40)
);

INSERT INTO "cardiac_arrest_etiology" ("type")
VALUES
('Cardiac (Presumed)'),
('Drowning/Submersion'),
('Drug Overdose'),
('Electrocution'),
('Exsanguination-Medical (Non-Traumatic)'),
('Other'),
('Respiratory/Asphyxia'),
('Traumatic Cause');

CREATE TABLE "cardiac_arrest_witness" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (30)
);


INSERT INTO "cardiac_arrest_witness" ("type")
VALUES
('None'),
('Family Member'),
('Healthcare Provider'),
('Bystander');

CREATE TABLE "aed_use_prior" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (50)
);

INSERT INTO "aed_use_prior" ("type")
VALUES
('No'),
('Yes, Applied without Defibrillation'),
('Yes, with Defibrillation');

CREATE TABLE "cpr_type" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (50)
);

INSERT INTO "cpr_type" ("type")
VALUES
('Compressions- Manual'),
('Compressions- External Band Type Device'),
('Compressions- External Plunger Type Device'),
('Compressions- External Thumper Type Device'),
('Compressions- Intermittent with Ventilation'),
('Compression- Other Device'),
('Compressions- Hands Only CPR'),
('Ventilation- Bag Valve Mask'),
('Ventilation- Impedance Threshold Device'),
('Ventilation- Mouth to Mouth'),
('Ventilation- Pocket Mask'),
('Ventilation- with OPA/NPA'),
('Ventilation- Advanced Airway Device'),
('Ventilation- Passive Ventilation with Oxygen');

CREATE TABLE "spontaneous_circulation"(
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (50)
);

INSERT INTO "spontaneous_circulation" ("type")
VALUES
('No'),
('Yes, At Arrival at the ED'),
('Yes, Prior to Arrival at the ED'),
('Yes, Sustained for 20 Consecutive Minutes');

CREATE TABLE "cpr_stopped" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (60)
);

INSERT INTO "cpr_stopped" ("type")
VALUES
('DNR'),
('Medical Control Order'),
('Obvious Signs of Death'),
('Physically Unable to Perform'),
('Protocol/Policy Requirements Completed'),
('Return of Spontaneous Circulation (pulse or BP noted)');

CREATE TABLE "resuscitation_attempt" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (50)
);

INSERT INTO "resuscitation_attempt" ("type")
VALUES
('Attempted Defibrillation'),
('Attempted Ventilation'),
('Initiated Chest Compressions'),
('Not Attempted-Considered Futile'),
('Not Attempted-DNR Orders'),
('Not Attempted-Signs of Circulation');

CREATE TABLE "aed_applicator" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (40)
);

INSERT INTO "aed_applicator" ("type")
VALUES
('Bystander'),
('Family Member'),
('Healthcare Provider (non-911 Responder)'),
('First Responder (EMS)'),
('First Responder (Law Enforcement)'),
('First Responder (non-EMS Fire)'),
('EMS Responder (transport EMS)');

CREATE TABLE "aed_initiator" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (40)
);

INSERT INTO "aed_initiator" ("type")
VALUES
('Bystander'),
('Family Member'),
('Healthcare Provider (non-911 Responder)'),
('First Responder (EMS)'),
('First Responder (Law Enforcement)'),
('First Responder (non-EMS Fire)'),
('EMS Responder (transport EMS)');

CREATE TABLE "aed_defibrillator" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (40)
);

INSERT INTO "aed_defibrillator" ("type")
VALUES
('Bystander'),
('Family Member'),
('Healthcare Provider (non-911 Responder)'),
('First Responder (EMS)'),
('First Responder (Law Enforcement)'),
('First Responder (non-EMS Fire)'),
('EMS Responder (transport EMS)');

CREATE TABLE "gender" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (45)
);

INSERT INTO "gender" ("type")
VALUES
('Female'),
('Male'),
('Female-to-Male, Transgender Male'),
('Male-to-Female, Transgender Female'),
('Other, neither exclusively male or female'),
('Unknown (Unable to Determine)');

CREATE TABLE "race" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (50)
);

INSERT INTO "race" ("type")
VALUES
('American Indian or Alaska Native'),
('Asian'),
('Black or African American'),
('Hispanic or Latino'),
('Native Hawaiian or Other Pacific Islander'),
('White');

CREATE TABLE "age_units" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (10)
);

INSERT INTO "age_units" ("type")
VALUES
('Days'),
('Hours'),
('Minutes'),
('Months'),
('Years');

CREATE TABLE "anatomic_location" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR(20)
);

INSERT INTO "anatomic_location" ("type")
VALUES
('Abdomen'),
('Back'),
('Chest'),
('Extremity-Lower'),
('Extremity-Upper'),
('General/Global'),
('Genitalia'),
('Head'),
('Neck');

CREATE TABLE "organ_system" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (40)
);

INSERT INTO "organ_system" ("type")
VALUES
('Behavioral/Psychiatric'),
('Cardiovascular'),
('CNS/Neuro'),
('Endocrine/Metabolic'),
('GI'),
('Global/General'),
('Lymphatic/Immune'),
('Musculoskeletal/Skin'),
('Reproductive'),
('Pulmonary'),
('Renal');

CREATE TABLE "initial_acuity" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (50)
);

INSERT INTO "initial_acuity" ("type")
VALUES
('Critical (red)'),
('Emergent (Yellow)'),
('Lower Acuity (Green)'),
('Dead without Resuscitation Efforts (Black)'),
('Non-Acute/Routine');

CREATE TABLE "alcohol_drug_use" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (60)
);

INSERT INTO "alcohol_drug_use" ("type")
VALUES
('Alcohol Containers/Paraphernalia at Scene'),
('Drug Paraphernalia at Scene'),
('Patient Admits to Alcohol Use'),
('Patient Admits to Drug Use'),
('Positive Level known from Law Enforcement or Hospital Record'),
('Physical Exam Indicates Suspected Alcohol or Drug Use');

CREATE TABLE "final_acuity" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (50)
);

INSERT INTO "final_acuity" ("type")
VALUES
('Critical (Red)'),
('Emergent (Yellow)'),
('Lower Acuity (Green)'),
('Dead without Resuscitation Efforts (Black)'),
('Dead with Resuscitation Efforts (Black)'),
('Non-Acute/Routine');

CREATE TABLE "possible_injury" (
	"id" SERIAL PRIMARY KEY,
	"type" VARCHAR (50)
);

INSERT INTO "possible_injury" ("type")
VALUES
('No'),
('Unknown'),
('Yes');

CREATE TABLE "procedure_list" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (50)
);
INSERT INTO "procedure_list" ("type")
VALUES
('Administration (Drug, fluid, gas)'),
('Airway, Basic'),
('Airway, Advanced'),
('Assessment'),
('Assessment, Cardiac'),
('Cardiac'),
('Environmental'),
('Gastrointestinal'),
('Glycemic Management'),
('Immobilization'),
('Other'),
('Pain'),
('Patient Positioning'),
('Spinal Procedures'),
('Transfer of Care'),
('Vascular Access'),
('Vital Signs'),
('Wound Care');

CREATE TABLE "procedure_performer" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (50)
);

INSERT INTO "procedure_performer" ("type")
VALUES
('Advance Emergency Medical Technician (AEMT)'),
('Emergency Medical Technician- Intermediate'),
('Emergency Medical Responder (EMR)'),
('Emergency Medical Technician (EMT)'),
('Paramedic'),
('Other Healthcare Professional'),
('Other Non-Healthcare Professional'),
('Physician'),
('Respiratory Therapist'),
('Student'),
('Critical Care Paramedic'),
('Community Paramedicine'),
('Nurse Practitioner'),
('Physician Assistant'),
('Licensed Practical Nurse (LPN)'),
('Registered Nurse'),
('Patient'),
('Lay Person'),
('Law Enforcement'),
('Family Member'),
('Fire Personnel (non EMS)');

CREATE TABLE "procedures_attempted" (
	"id" SERIAL PRIMARY KEY,
	"type" int
);

INSERT INTO "procedures_attempted" ("type")
VALUES
(1),
(2),
(3),
(4),
(5),
(6),
(7),
(8),
(9),
(10);

 
CREATE TABLE "responsiveness_level" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (20)
);

INSERT INTO "responsiveness_level" ("type")
VALUES
('Alert'),
('Verbal'),
('Painful'),
('Unresponsive');

CREATE TABLE "pain_scale" (
    "id" SERIAL PRIMARY KEY,
    "type" int
);

INSERT INTO "pain_scale" ("type")
VALUES
(0),
(1),
(2),
(3),
(4),
(5),
(6),
(7),
(8),
(9),
(10);

CREATE TABLE "stroke_score" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (20)
);

INSERT INTO "stroke_score" ("type")
VALUES
('Negative'),
('Non-Conclusive'),
('Positive');

CREATE TABLE "stroke_scale" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (60)
);

INSERT INTO "stroke_scale" ("type")
VALUES
('Cincinnati Prehospital Stroke Scale (CPSS)'),
('Los Angeles Prehospital Stroke Screen (LAPSS)'),
('Massachusetts Stroke Scale (MSS)'),
('Miami Emergency Neurologic Deficit Exam (MEND)'),
('NIH Stroke Scale (NIHSS)'),
('Other Stroke Scale Type'),
('FAST-ED'),
('Boston Stroke Scale (BOSS)'),
('Ontario Prehospital Stroke Scale (OPSS)'),
('Melbourne Ambulance Stroke Screen (MASS)'),
('Rapid Arterial oCclusion Evaluation (RACE)'),
('Los Angeles Motor Score (LAMS)');

CREATE TABLE "med_admin_route" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (40)
);

INSERT INTO "med_admin_route" ("type")
VALUES
('Blow-By'),
('Buccal'),
('Endotracheal Tube (ET)'),
('Gastrostomy Tube'),
('Inhalation'),
('Intraarterial'),
('Intradermal'),
('Intramuscular (IM)'),
('Intranasal'),
('Intraocular'),
('Intraosseous (IO)'),
('Intravenous (IV)'),
('Nasal Cannula'),
('Nasogastric'),
('Nasotracheal Tube'),
('Non-Rebreather Mask'),
('Ophthalmic'),
('Oral'),
('Other/Miscellaneous'),
('Otic'),
('Re-breather Mask'),
('Rectal'),
('Subcutaneous'),
('Sublingual'),
('Topical'),
('Tracheostomy'),
('Transdermal'),
('Urethral'),
('Ventimask'),
('Wound'),
('Portacath'),
('Auto Injector'),
('BVM'),
('CPAP'),
('IV Pump'),
('Nebulizer'),
('Umbilical Artery Catheter'),
('Umbilical Venous Catheter');

CREATE TABLE "med_dosage_units" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (50)
);

INSERT INTO "med_dosage_units" ("type")
VALUES
('Grams(gms)'),
('Inches(in)'),
('International Units(IU)'),
('Keep Vein Open(kvo)'),
('Liters (l)'),
('Metered Dose (MDI)'),
('Micrograms(mcg)'),
('Micrograms per Kilogram per Minute(mcg/kg/min)'),
('Milliequivalents(mEq)'),
('Milligrams(mg)'),
('Milligrams per Kilogram Per Minute(mg/kg/min)'),
('Milliliters(ml)'),
('Milliliters per Hour(ml/hr)'),
('Other'),
('Centimeters(cm)'),
('Drops(gtts)'),
('Liters Per Minute(LPM [gas])'),
('Micrograms per Minute(mcg/kg)'),
('Milligrams per Minute(mg/min)'),
('Puffs'),
('Units per Hour(units/hr)'),
('Micrograms per Kilogram(mcg/kg)'),
('Units'),
('Units per Kilogram per Hour(units/kg/hr)'),
('Units per Kilogram (units/kg)'),
('Milligrams per Hour (mg/hr)');

CREATE TABLE "med_response" (
	"id" SERIAL PRIMARY KEY,
	"type" VARCHAR (50)
);

INSERT INTO "med_response" ("type")
VALUES
('Improved'),
('Unchanged'),
('Worse');

CREATE TABLE "procedure_response" (
	"id" SERIAL PRIMARY KEY,
	"type" VARCHAR (50)
);

INSERT INTO "procedure_response" ("type")
VALUES
('Improved'),
('Unchanged'),
('Worse');

CREATE TABLE "procedure_successful" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (30) NOT NULL
);

INSERT INTO "procedure_successful" ("type")
VALUES
('No'),
('Yes');

CREATE TABLE "med_admin_by" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (50)
);

INSERT INTO "med_admin_by" ("type")
VALUES
('Advanced Emergency Medical Technician (AEMT)'),
('Emergency Medical Technician- Intermediate'),
('Emergency Medical Responder (EMR)'),
('Emergency Medical Technician (EMT)'),
('Paramedic'),
('Other Healthcare Professional'),
('Other Non-Healthcare Professional'),
('Physician'),
('Respiratory Therapist'),
('Student'),
('Critical Care Paramedic'),
('Community Paramedicine'),
('Nurse Practitioner'),
('Physician Assistant'),
('Licensed Practical Nurse (LPN)'),
('Registered Nurse'),
('Patient'),
('Lay Person'),
('Law Enforcement'),
('Family Member'),
('Fire Personnel (non-EMS)');

CREATE TABLE "incident_type" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (60)
);

INSERT INTO "incident_type" ("type")
VALUES
('Emergency Response (Primary Response Area)'),
('Emergency Response (Intercept)'),
('Emergency Response (Mutual Aid)'),
('Hospital-to-Hospital Transfer'),
('Hospital to Non-Hospital Facility Transfer'),
('Non-Hospital Facility to Non-Hospital Facility Transfer'),
('Non-Hospital Facility to Hospital Transfer'),
('Other Routine Medical Transport'),
('Public Assistance'),
('Standby'),
('Support Services'),
('Non-Patient Care Rescue/Extrication'),
('Crew Transport Only'),
('Transport of Organs or Body Parts'),
('Mortuary Services'),
('Mobile Integrated Health Care Encounter'),
('Evaluation for Special Referral/Intake Programs'),
('Administrative Operations');



CREATE TABLE "transport_disposition" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (60)
);

INSERT INTO "transport_disposition" ("type")
VALUES
('Transport by This EMS Unit (This Crew Only)'),
('Transport by This EMS Unit, with a Member of Another Crew'),
('Transport by Another EMS Unit'),
('Transport by Another EMS Unit, with a Member of This Crew'),
('Patient Refused Transport'),
('Non-Patient Transport (Not Otherwise Listed)'),
('No Transport');

CREATE TABLE "transport_mode" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (50)
);

INSERT INTO "transport_mode" ("type")
VALUES
('Emergent (Immediate Response)'),
('Emergent Downgraded to Non-Emergent'),
('Non-Emergent'),
('Non-Emergent Upgraded to Emergent');

CREATE TABLE "transport_method" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (40)
);

INSERT INTO "transport_method" ("type")
VALUES
('Air Medical-Fixed Wing'),
('Air Medical-Rotor Craft'),
('Ground-Ambulance'),
('Ground-ATV or Rescue Vehicle'),
('Ground-Bariatric'),
('Ground-Other Not Listed'),
('Ground-Mass Casualty Bus/Vehicle'),
('Ground-Wheelchair Van'),
('Water-Boat');

CREATE TABLE "triage_cat" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (10)
);


INSERT INTO "triage_cat" ("type")
VALUES
('Emergency'),
('Priority'),
('Queue');


CREATE TABLE "destination_type" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (50)
);

INSERT INTO "destination_type" ("type")
VALUES
('Home'),
('Hospital-Emergency Department'),
('Hospital-Non-Emergency Department Bed'),
('Clinic'),
('Morgue/Mortuary'),
('Other'),
('Other EMS Responder (air)'),
('Other EMS Responder (ground)'),
('Police/Jail'),
('Urgent Care'),
('Freestanding Emergency Department'),
('Dialysis Center'),
('Diagnostic Services'),
('Assisted Living Facility'),
('Mental Health Facility'),
('Nursing Home'),
('Other Recurring Care Center'),
('Physical Rehabilitation Facility'),
('Drug and/or Alcohol Rehabilitation Facility'),
('Skilled Nursing Facility');

CREATE TABLE "primary_impression" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (40)
);

INSERT INTO "primary_impression" ("type")
VALUES
('Abdominal Symptoms'),
('Cardiac (Atypical)'),
('Gastrointestinal Symptoms (Nau/Vom'),
('OB-Gyn (Pregnancy/Labor'),
('Respiratory Distress'),
('Abnormal Vital Signs'),
('Cardiac Arrest'),
('HAZMAT Exposure'),
('OB-Gyn (Vaginal Hemorrhage'),
('Seizure'),
('Allergic Reaction'),
('Choking/Airway'),
('Headache'),
('Obvious Death'),
('Stroke/CVA'),
('Altered Level of Consciousness'),
('Darrell'),
('Hemorrhage'),
('OD/ETOH Abuse'),
('Syncopy'),
('Animal Bites/Stings'),
('Diabetic Symptoms'),
('Hyperthermia'),
('Other'),
('Unconscious/Unresponsive'),
('Back Pain'),
('Dizziness'),
('Hypothermia'),
('Pain'),
('Weakness'),
('Behavorial/Psychiatric Disorder'),
('Ear Symptoms'),
('Hypovolemia'),
('Poisoning/Drug Ingestion'),
('Cardiac (Chest Pain'),
('Environmental Exposure'),
('OB-Gyn (other)'),
('Respiratory Arrest'),
('Trauma-Amputation'),
('Trauma-Fracture/Dislocation'),
('Trauma-Pain'),
('Trauma-Assualt'),
('Trauma-GSW'),
('Trauma-Penetrating Injury'),
('Trauma-Blunt Injury'),
('Trauma-Head Injury'),
('Trauma-Respiratory Distress'),
('Trauma-Burns'),
('Trauma-Hemorrhage'),
('Trauma-Stabbing'),
('Trauma-Cardiac Arrest'),
('Trauma-Lightning Injury'),
('Trauma-Drowning/Near Drowning'),
('Trauma-MVC/MCC'),
('Trauma-Electrical Injury'),
('Trauma-Obvious Death'),
('Trauma-Fall'),
('Trauma-Other');

CREATE TABLE "injury_type" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (30)
);

INSERT INTO "injury_type" ("type")
VALUES
('Ankle Injury'),
('Burn, NOS'),
('Concussion, with LOC'),
('Concussion, without LOC'),
('Early complication of trauma'),
('Facial injury'),
('Foot injury'),
('Forearm injury'),
('Head injury'),
('Hemorrhage'),
('Hip Injury'),
('Injury, unspecified'),
('Lower back injury'),
('Lower leg injury'),
('Multiple injuries'),
('Neck injury'),
('Pelvis injury'),
('Shoulder/ upper arm injury'),
('Thigh injury'),
('Thorax injury'),
('Wrist/hand/finger injury');

CREATE TABLE "injury_cause" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (30)
);

INSERT INTO "injury_cause" ("type")
VALUES
('Animal'),
('Asphyxiation'),
('Bodily Force'),
('Drowning'),
('Environmental'),
('Fall, Intent'),
('Law Enforcement'),
('Mechanical Force'),
('MVC, Non-Traffic Related'),
('MVC, Traffic Related'),
('Other'),
('Pedal Cyclist'),
('Poisoning'),
('Sharp Objects'),
('Tools/Devices');


CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "user_first_name" VARCHAR (80) NOT NULL,
    "user_last_name" VARCHAR (80) NOT NULL,
    "region_id" NUMERIC NOT NULL
);

CREATE TABLE incident (
	id SERIAL PRIMARY KEY,
	user_id integer REFERENCES "user",
	incident_type_id integer REFERENCES "incident_type",
	crew_id numeric,
	triage_cat_id integer REFERENCES "triage_cat",
	unit_notified timestamp,
	unit_enroute timestamp,
	unit_arrived_scene timestamp,
	arrived_patient timestamp,
	unit_left_scene timestamp,
	arrived_destination timestamp,
	transfer_of_care timestamp,
	unit_in_service timestamp,
	incident_summary varchar(20000)
);


CREATE TABLE scene (
	id SERIAL PRIMARY KEY,
	incident_scene_id integer REFERENCES "incident",
	incident_state varchar (100),
	incident_zip varchar(100),
	incident_county varchar(100),
	possible_injury_id integer REFERENCES "possible_injury",
	alcohol_drug_use_id integer REFERENCES "alcohol_drug_use"
);

CREATE TABLE disposition (
	id SERIAL PRIMARY KEY,
	incident_disposition_id integer REFERENCES "incident",
	destination_state varchar(100),
	destination_county varchar(100),
	destination_zip varchar(100),
	transport_disposition_id integer REFERENCES "transport_disposition",
	transport_method_id integer REFERENCES "transport_method",
	transport_mode_id integer REFERENCES "transport_mode",
	destination_type_id integer REFERENCES "destination_type"
);


CREATE TABLE patient (
    id SERIAL PRIMARY KEY,
    patient_incident_id integer REFERENCES "incident",
    patient_first_name varchar(100),
    patient_last_name varchar(100),
    address varchar(100),
    home_county varchar(100),
    home_state varchar(100),
    home_zip varchar(100),
    gender_id integer REFERENCES "gender",
    race_id integer REFERENCES "race",
    date_of_birth date,
    age integer,
    age_units_id integer REFERENCES "age_units"
);


CREATE TABLE medicalConditions (
	id SERIAL PRIMARY KEY,
	patient_condition_id integer REFERENCES "patient",
	medical_conditions varchar(100)
);

CREATE TABLE currentMedication (
	id SERIAL PRIMARY KEY,
	patient_medication_id integer REFERENCES "patient",
	medication varchar(100)
);

CREATE TABLE allergies (
	id SERIAL PRIMARY KEY,
	patient_allergy_id integer REFERENCES "patient",
	allergy varchar(100)
);

CREATE TABLE symptoms (
	id SERIAL PRIMARY KEY,
	patient_symptoms_id integer REFERENCES "patient",
	anatomic_location_id integer REFERENCES "anatomic_location",
	organ_system_id integer REFERENCES "organ_system",
	time_symptom_onset timestamp,
	time_last_known_well timestamp,
	primary_symptom varchar(100),
	other_symptoms varchar(200),
	initial_acuity_id integer REFERENCES "initial_acuity",
	final_acuity_id integer REFERENCES "final_acuity",
	primary_impression_id integer REFERENCES "primary_impression"
);

CREATE TABLE injury (
	id SERIAL PRIMARY KEY,
	patient_injury_id integer REFERENCES "patient",
	injury_type_id integer REFERENCES "injury_type",
	injury_cause_id integer REFERENCES "injury_cause"
);

CREATE TABLE cardiacArrest (
    id SERIAL PRIMARY KEY,
    cardiac_arrest_id integer REFERENCES "cardiac_arrest",
    cardiac_arrest_etiology_id integer REFERENCES "cardiac_arrest_etiology",
    resuscitation_attempt_id integer REFERENCES "resuscitation_attempt",
    cardiac_arrest_witness_id integer REFERENCES "cardiac_arrest_witness",
    aed_use_prior_id integer REFERENCES "aed_use_prior",
    cpr_type_id integer REFERENCES "cpr_type",
    spontaneous_circulation_id integer REFERENCES "spontaneous_circulation",
    time_cardiac_arrest timestamp,
    cpr_stopped_id integer REFERENCES "cpr_stopped",
    aed_initiator_id integer REFERENCES "aed_initiator",
    aed_applicator_id integer REFERENCES "aed_applicator",
    aed_defibrillator_id integer REFERENCES "aed_defibrillator"
);

CREATE TABLE medication (
	id SERIAL PRIMARY KEY,
	patient_medication_id integer REFERENCES "patient",
	medication varchar(50),
	med_admin_route_id integer REFERENCES "med_admin_route",
	med_admin_by_id integer REFERENCES "med_admin_by",
	med_dosage integer,
	med_dosage_units_id integer REFERENCES "med_dosage_units",
	med_response_id integer REFERENCES "med_response",
	med_timestamp timestamp
);

CREATE TABLE "procedure" (
	id SERIAL PRIMARY KEY,
	patient_procedure_id integer REFERENCES "patient",
	procedure_name_id integer REFERENCES "procedure_list",
	procedure_attempts_id integer REFERENCES "procedures_attempted",
	procedure_successful integer REFERENCES "procedure_successful",
	procedure_response integer REFERENCES "procedure_response",
	procedure_performer_id integer REFERENCES "procedure_performer",
	procedure_timestamp timestamp
);

CREATE TABLE vitals (
	id SERIAL PRIMARY KEY,
	patient_vitals_id integer REFERENCES "patient",
	systolic_BP varchar(50),
	heart_rate varchar(50),
	pulse_oximetry varchar(50),
	respiratory_rate varchar(50),
	blood_glucose varchar(50),
	glasgow_eye varchar(50),
	glasgow_verbal varchar(50),
	glasgow_motor varchar(50),
	glasgow_qualifier varchar(50),
	responsiveness_level_id integer REFERENCES "responsiveness_level",
	pain_scale_id integer REFERENCES "pain_scale",
	stroke_score_id integer REFERENCES "stroke_score",
	stroke_scale_id integer REFERENCES "stroke_scale",
	vitals_timestamp timestamp
);
