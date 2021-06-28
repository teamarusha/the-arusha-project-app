import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import TreatmentMedsForm from "./TreatmentMedsForm";
import TreatmentProcedureForm from "./TreatmentProcedureForm";

//____________________Material UI Imports____________________
import useStyles from "./Styles";

function TreatmentHome() {
  const classes = useStyles();
  const { id } = useParams();
  const dispatch = useDispatch();
  const dropdowns = useSelector((store) => store.dropdowns);
  const [localTreatment, setLocalTreatment] = useState(
    JSON.parse(localStorage.getItem("treatment"))
  );
  const [render, setRender] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [selectedId, setSelectedId] = useState(false);

  const handleListItemClick = (event, id) => {
    setSelectedId(id);
  };

  const handleChange = (id) => {
    // setExpanded(isExpanded ? panel : false);
    setExpanded(expanded === id ? -1 : id);
  };

  // ____________________DROPDOWNS____________________
  let [localDropdownMirror, setLocalDropdownMirror] = useState(
    JSON.parse(localStorage.getItem("dropdowns"))
  );

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("dropdowns")) === null) {
      dispatch({ type: "GET_DROPDOWNS" });
    } else {
      dispatch({ type: "SET_DROPDOWNS", payload: localDropdownMirror });
    }
  }, []);

  useEffect(() => {
    if (dropdowns.go === true) {
      localStorage.setItem("dropdowns", JSON.stringify(dropdowns));
    }
  }, [dropdowns.go]);

  // ____________________LOCAL STORAGE____________________
  useEffect(() => {
    console.log("Storage Mirror:", localTreatment);
    console.log(
      "Treatment Storage:",
      JSON.parse(localStorage.getItem("treatment"))
    );

    if (JSON.parse(localStorage.getItem("treatment")) === null) {
      setLocalTreatment({
        initialized: true,
        medication: "",
        routeAdministered: "",
        dosage: "",
        units: "",
        medicationResponse: "",
        medsAdminBy: "",
        procedure: "",
        procedureAttempts: "",
        successfulProcedure: "",
        responseToProcedure: "",
        procedurePerformedBy: "",
      });
      setRender(true);
    }

    // Otherwise, we allow the render as there should be data in storage
    else {
      setRender(true);
    }
  }, []);

  return (
    <div>
      <TreatmentMedsForm
        localTreatment={localTreatment}
        setLocalTreatment={setLocalTreatment}
        render={render}
      />
      <TreatmentProcedureForm
        localTreatment={localTreatment}
        setLocalTreatment={setLocalTreatment}
        render={render}
      />
    </div>
  );
}

export default TreatmentHome;
