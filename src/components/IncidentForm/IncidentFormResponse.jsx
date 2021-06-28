import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

//Material UI imports
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { ExpandMoreIcon } from "@material-ui/icons/ExpandMore";

import useStyles from "./Styles";

const IncidentFormResponse = ({ localIncident, setLocalIncident, render }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const dropdowns = useSelector((store) => store.dropdowns);
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [selectedId, setSelectedId] = useState(false);

  useEffect(() => {
    console.log("UPDATING browser storage", localIncident);
    localStorage.setItem("incident", JSON.stringify(localIncident));
  }, [localIncident]);

  // Only handles when a value is changed by keystroke/inputfield clicks.
  // Does NOT handle initialization of new data.
  function submitValue(newParameter) {
    console.log(
      "Updating parameter in submitValue",
      newParameter.key,
      newParameter.thing
    );

    setLocalIncident({
      ...localIncident,
      [newParameter.key]: newParameter.thing,
    });
  }

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

  return (
    <div>
      {render && (
        <TextField
          id="outlined-basic"
          label="Crew Id"
          variant="outlined"
          value={localIncident[`crew`]}
          onChange={(event) =>
            submitValue({ key: `crew`, thing: event.target.value })
          }
        ></TextField>
      )}

      {dropdowns.go && render && (
        <div>
          <TextField
            id="outlined-basic"
            select
            label="Triage Category"
            variant="outlined"
            value={localIncident[`triageCat`]}
            onChange={(event) =>
              submitValue({ key: `triageCat`, thing: event.target.value })
            }
          >
            {dropdowns["triage_cat"].map((item) => (
              <MenuItem key={"triage_cat" + item.id} value={item.id}>
                {item.type}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id="outlined-basic"
            select
            label="Type of Service Requested"
            variant="outlined"
            value={localIncident[`serviceType`]}
            onChange={(event) =>
              submitValue({ key: `serviceType`, thing: event.target.value })
            }
          >
            {/* {dropdowns["incident_type"].map((item) => (
              <MenuItem key={"incident_type" + item.id} value={item.id}>
                {item.type}
              </MenuItem>
            ))} */}
          </TextField>
        </div>
      )}
    </div>
  );
};

export default IncidentFormResponse;
