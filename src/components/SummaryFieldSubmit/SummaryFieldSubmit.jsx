import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function SummaryFieldSubmit(params) {

    const dispatch = useDispatch();

    const [incidentMirror, setIncidentMirror] = useState(
        JSON.parse(localStorage.getItem("incident"))
      );
      const [patientsMirror, setPatientsMirror] = useState(
        JSON.parse(localStorage.getItem("patients"))
      );
      const [treatmentMirror, setTreatmentMirror] = useState(
        JSON.parse(localStorage.getItem("treatment"))
      );
      const [vitalsMirror, setVitalsMirror] = useState(
        JSON.parse(localStorage.getItem("vitals"))
      );



    return (
        <div>
            {/* <button onClick={submitIncident}></button> */}
        </div>
    )
}

export default SummaryFieldSubmit;