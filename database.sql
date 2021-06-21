
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

-- Create database name "arusha_project"
-- There are several tables to add:

CREATE TABLE "cardiac_arrest" (
    "id" SERIAL PRIMARY KEY,
    "arrest" VARCHAR (30) NOT NULL
);

INSERT INTO "cardiac_arrest" ("arrest")
VALUES
('No'),
('Yes, Prior to EMS Arrival'),
('Yes, After EMS Arrival');

CREATE TABLE "cardiac_arrest_etiology" (
    "id" SERIAL PRIMARY KEY,
    "etiology" VARCHAR (40)
);

INSERT INTO "cardiac_arrest_etiology" ("etiology")
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
    "witness" VARCHAR (30)
);

INSERT INTO "cardiac_arrest_witness" ("witness")
VALUES
('None'),
('Family Member'),
('Healthcare Provider'),
('Bystander');

CREATE TABLE "AED_use_prior" (
    "id" SERIAL PRIMARY KEY,
    "used" VARCHAR (30)
);

INSERT INTO "AED_use_prior" ("used")
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
    "circulation" VARCHAR (50)
);

INSERT INTO "spontaneous_circulation" ("circulation")
VALUES
('No'),
('Yes, at arrival of ED'),
('Yes, prior to arrival'),
('Yes, sustained for 20 minutes');

CREATE TABLE "CPR_stopped" (
    "id" SERIAL PRIMARY KEY,
    "reason" VARCHAR (60)
);

INSERT INTO "CPR_stopped" ("reason")
VALUES
('DNR'),
('Medical Control Order'),
('Obvious Signs of Death'),
('Physically Unable to Perform'),
('Protocol/Policy Requirements Completed'),
('Return of Spontaneous Circulation (pulse or BP noted)');

CREATE TABLE "resuscitatioin_attempt" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (50)
);

INSERT INTO "resuscitatioin_attempt" ("type")
VALUES
('Attempted Defibrillation'),
('Attempted Ventilation'),
('Initiated Chest Compressions'),
('Not Attempted-Considered Futile'),
('Not Attempted-DNR Orders'),
('Not Attempted-Signs of Circulation');

CREATE TABLE "AED_applicator" (
    "id" SERIAL PRIMARY KEY,
    "applicator" VARCHAR (40)
);

INSERT INTO "AED_applicator" ("applicator")
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
    "initiator" VARCHAR (40)
);

INSERT INTO "AED_initiator" ("initiator")
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
    "defibrillator" VARCHAR (40)
);

INSERT INTO "AED_defibrillator" ("defibrillator")
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
    "gender" VARCHAR (45)
);

INSERT INTO "gender" ("gender")
VALUES
('Female'),
('Male'),
('Female-to-Male, Transgender Male'),
('Male-to-Female, Transgender Female'),
('Other, neither exclusively male or female'),
('Unknown (Unable to Determine)');

CREATE TABLE "race" (
    "id" SERIAL PRIMARY KEY,
    "race" VARCHAR (50)
);

INSERT INTO "race" ("race")
VALUES
('American Indian or Alaska Native'),
('Asian'),
('Black or African American'),
('Hispanic or Latino'),
('Native Hawaiian or Other Pacific Islander'),
('White');

CREATE TABLE "age_units" (
    "id" SERIAL PRIMARY KEY,
    "unit" VARCHAR (10)
);

INSERT INTO "age_units" ("unit")
VALUES
('Days'),
('Hours'),
('Minutes'),
('Months'),
('Years');

CREATE TABLE "anatomic_location" (
    "id" SERIAL PRIMARY KEY,
    "location" VARCHAR(20)
);

INSERT INTO "anatomic_location" ("location")
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
    "system" VARCHAR (40)
);

INSERT INTO "organ_system" ("system")
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
    "acuity" VARCHAR (40)
);

INSERT INTO "initial_acuity" ("acuity")
VALUES
('Critical-red'),
('Emergent-Yellow'),
('Lower_Acuity-Green'),
('Dead without Resuscitation Efforts-Black'),
('Non-Acute/Routine');

CREATE TABLE "alcohol_drug_use" (
    "id" SERIAL PRIMARY KEY,
    "indicators" VARCHAR (60)
);

INSERT INTO "alcohol_drug_use" ("indicators")
VALUES
('Alcohol Containers/Paraphernalia at Scene'),
('Drug Paraphernalia at Scene'),
('Patient Admits to Alcohol Use'),
('Patient Admits to Drug Use'),
('Positive Level known from Law Enforcement or Hospital Record'),
('Physical Exam Indicates Suspected Alcohol or Drug Use');

CREATE TABLE "final_acuity" (
    "id" SERIAL PRIMARY KEY,
    "acuity" VARCHAR (50)
);

INSERT INTO "final_acuity" ("acuity")
VALUES
('Critical (red)'),
('Emergent (Yellow)'),
('Lower Acuity (Green)'),
('Dead without Resuscitation Efforts (Black)'),
('Dead with Resuscitation Efforts (Black)'),
('Non-Acute/Routine');

CREATE TABLE "procedure_performer" (
    "id" SERIAL PRIMARY KEY,
    "role" VARCHAR (50)
);

INSERT INTO "procedure_performer" ("role")
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
    "level" VARCHAR (20)
);

INSERT INTO "responsiveness_level" ("level")
VALUES
('Alert'),
('Verbal'),
('Painful'),
('Unresponsive');

CREATE TABLE "pain_scale" (
    "id" SERIAL PRIMARY KEY,
    "score" int
);

INSERT INTO "pain_scale" ("score")
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
    "score" VARCHAR (20)
);

INSERT INTO "stroke_score" ("score")
VALUES
('Negative'),
('Non-Conclusive'),
('Positive');

CREATE TABLE "stroke_scale" (
    "id" SERIAL PRIMARY KEY,
    "score" VARCHAR (60)
);

INSERT INTO "stroke_scale" ("score")
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
    "route" VARCHAR (40)
);

INSERT INTO "med_admin_route" ("route")
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
    "units" VARCHAR (50)
);

INSERT INTO "med_dosage_units" ("units")
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
    "person" VARCHAR (50)
);

INSERT INTO "med_admin_by" ("person")
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
    "category" VARCHAR (10)
);

INSERT INTO "triage_cat" ("category")
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
    "mode" VARCHAR (50)
);

INSERT INTO "transport_mode" ("mode")
VALUES
('Emergent (Immediate Response)'),
('Emergent Downgraded to Non-Emergent'),
('Non-Emergent'),
('Non-Emergent Upgraded to Emergent');

CREATE TABLE "transport_method" (
    "id" SERIAL PRIMARY KEY,
    "method" VARCHAR (40)
);

INSERT INTO "transport_method" ("method")
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
