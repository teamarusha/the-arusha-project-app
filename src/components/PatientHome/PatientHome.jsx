import React from 'react';
import { Link } from 'react-router-dom';



function PatientHome() {


    return (
        <div className="container">
            <h2>Patient Form Home</h2>
            <p>List of Links for Patient Form:</p>
            <ul>
                <li><Link to="/patientDemographics">Patient Demographics Form</Link></li>
                <li><Link to="/patientMedical">Patient Medical History Form</Link></li>
                <li><Link to="/patientSymptoms">Patient Symptoms Form</Link></li>
                <li><Link to="/patientInjury">Patient Injury Form</Link></li>
                <li><Link to="/patientCardiacArrest">Patient Cardiac Arrest Form</Link></li>
            </ul>
            
        </div>
    );
}

export default PatientHome;