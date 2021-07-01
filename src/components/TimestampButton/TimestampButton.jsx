import React from "react";
import { useState } from "react";

// ----- Material UI -----
import Button from '@material-ui/core/Button';


function TimestampButton({ incidentMirror, setIncidentMirror }) {

  function submitValue(newParameter) {
    console.log(
      "Updating parameter in submitValue",
      newParameter.key,
      newParameter.thing
    );

    setIncidentMirror({
      ...incidentMirror,
      [newParameter.key1]: newParameter.thing1,
      [newParameter.key2]: newParameter.thing2
    });
  }

  // useEffect(() => {
  //   console.log("UPDATING browser storage", incidentMirror);
  //   localStorage.setItem("incident", JSON.stringify(incidentMirror));
  // }, [incidentMirror]);

  function advanceDispatch() {
    // console.log('Button clicked...');

    const timestamp = Date.now(); // This would be the timestamp you want to format
    console.log(
      new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      }).format(timestamp)
    );

    switch (incidentMirror.dispatchButton) {

      // ^^^Checks the button's state in localStorage
      case "Unit Notified":
        submitValue({
          key1: `dispatchButton`,
          thing1: "Unit En Route",
          key2: `unitNotified`,
          thing2: new Intl.DateTimeFormat("en-GB", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
          }).format(timestamp),
        })
        break;

      case "Unit En Route":
        submitValue({
          key1: `dispatchButton`,
          thing1: "Arrived at Scene",
          key2: `unitEnRoute`,
          thing2: new Intl.DateTimeFormat("en-GB", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
          }).format(timestamp),
        })
        break;

      case "Arrived at Scene":
        submitValue({
          key1: `dispatchButton`,
          thing1: "Arrived at Patient",
          key2: `unitArrivedScene`,
          thing2: new Intl.DateTimeFormat("en-GB", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
          }).format(timestamp),
        })
        break;

      case "Arrived at Patient":
        submitValue({
          key1: `dispatchButton`,
          thing1: "Unit Left Scene",
          key2: `unitArrivedPatient`,
          thing2: new Intl.DateTimeFormat("en-GB", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
          }).format(timestamp),
        })
        break;

      case "Unit Left Scene":
        submitValue({
          key1: `dispatchButton`,
          thing1: "Unit Arrived Destination",
          key2: `unitLeftScene`,
          thing2: new Intl.DateTimeFormat("en-GB", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
          }).format(timestamp),
        })
        break;

      case "Unit Arrived Destination":
        submitValue({
          key1: `dispatchButton`,
          thing1: "Unit Transferred Care",
          key2: `unitArrivedDestination`,
          thing2: new Intl.DateTimeFormat("en-GB", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
          }).format(timestamp),
        })
        break;

      case "Unit Transferred Care":
        submitValue({
          key1: `dispatchButton`,
          thing1: "Unit In Service",
          key2: `unitTransferCare`,
          thing2: new Intl.DateTimeFormat("en-GB", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
          }).format(timestamp),
        })
        break;

      case "Unit In Service":
        submitValue({
          key1: `dispatchButton`,
          thing1: "Service Complete",
          key2: `unitInService`,
          thing2: new Intl.DateTimeFormat("en-GB", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
          }).format(timestamp),
        })
        break;

      default:
        break;
    }



  }

  return (
    <div>
      {incidentMirror &&
        <Button onClick={advanceDispatch} color="secondary"
          variant="contained"
          disabled={incidentMirror.dispatchButton === "Service Complete"}
        >
          {incidentMirror.dispatchButton}
        </Button>
      }
    </div>
  )
}

export default TimestampButton;
