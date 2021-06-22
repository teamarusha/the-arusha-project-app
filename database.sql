
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "first_name" VARCHAR (80) NOT NULL,
    "last_name" VARCHAR (80) NOT NULL,
    "region_id" NUMERIC NOT NULL
);

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
('Cardiac (presumed)'),
('Drowning/Submersion'),
('Drug Overdose'),
('Electrocution'),
('Exsanguination-Medical (non-traumatic'),
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

CREATE TABLE "AED_use_prior" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (30)
);

INSERT INTO "AED_use_prior" ("type")
VALUES
('No'),
('Yes, without defibrillation'),
('Yes, with defibrillation');

CREATE TABLE "CPR_type" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (50)
);

INSERT INTO "CPR_type" ("type")
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
('Yes, at arrival of ED'),
('Yes, prior to arrival'),
('Yes, sustained for 20 minutes');

CREATE TABLE "CPR_stopped" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (60)
);

INSERT INTO "CPR_stopped" ("type")
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

CREATE TABLE "AED_applicator" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (40)
);

INSERT INTO "AED_applicator" ("type")
VALUES
('Bystander'),
('Family Member'),
('Healthcare Provider (non-911 Responder)'),
('First Responder (EMS)'),
('First Responder (Law Enforcement)'),
('First Responder (non-EMS Fire)'),
('EMS Responder (transport EMS)');

CREATE TABLE "AED_initiator" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (40)
);

INSERT INTO "AED_initiator" ("type")
VALUES
('Bystander'),
('Family Member'),
('Healthcare Provider (non-911 Responder)'),
('First Responder (EMS)'),
('First Responder (Law Enforcement)'),
('First Responder (non-EMS Fire)'),
('EMS Responder (transport EMS)');

CREATE TABLE "AED_defibrillator" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (40)
);

INSERT INTO "AED_defibrillator" ("type")
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
    "type" VARCHAR (40)
);

INSERT INTO "initial_acuity" ("type")
VALUES
('Critical-red'),
('Emergent-Yellow'),
('Lower_Acuity-Green'),
('Dead without Resuscitation Efforts-Black'),
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
('Critical (red)'),
('Emergent (Yellow)'),
('Lower Acuity (Green)'),
('Dead without Resuscitation Efforts (Black)'),
('Dead with Resuscitation Efforts (Black)'),
('Non-Acute/Routine');

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
('Family Member');

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

CREATE TABLE "triage_cat" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (10)
);

INSERT INTO "triage_cat" ("type")
VALUES
('Emergency'),
('Priority'),
('Queue');

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