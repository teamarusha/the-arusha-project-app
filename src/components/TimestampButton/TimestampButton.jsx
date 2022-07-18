import React from "react";
import { useState } from "react";
import UndoIcon from '@mui/icons-material/Undo';
import ConfirmDialog from "../ConfirmDialog";
// ----- Material UI -----
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/styles";

// ADJUST STYLES FOR MUI COMPONENT WITH CLASS: BUTTON
const useStyles = makeStyles((theme) => ({
  button: {
    fontSize: 'large',
    height: '10vh',
    width: '35vh',
  }
}));

function TimestampButton({ incidentMirror, setIncidentMirror }) {
  const classes = useStyles();
  
  const [confirmOpen, setConfirmOpen] = useState(false);

  function submitValue(newParameter) {
    setIncidentMirror({
      ...incidentMirror,
      [newParameter.key1]: newParameter.thing1,
      [newParameter.key2]: newParameter.thing2
    });
  }

  function advanceDispatch() {

    const timestamp = Date.now(); // This would be the timestamp you want to format

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

  function undoTimestamp() {
    console.log("in undoTimestamp function")
    const timestamp = null; // This would be the timestamp you want to format

    switch (incidentMirror.dispatchButton) {

      // ^^^Checks the button's state in localStorage
      case "Unit En Route":
        submitValue({
          key1: `dispatchButton`,
          thing1: "Unit Notified",
          key2: `unitEnRoute`,
          thing2: "",
        })
        break;

      case "Arrived at Scene":
        submitValue({
          key1: `dispatchButton`,
          thing1: "Unit En Route",
          key2: `unitArrivedScene`,
          thing2: "",
        })
        break;

      case "Arrived at Patient":
        submitValue({
          key1: `dispatchButton`,
          thing1: "Arrived at Scene",
          key2: `unitArrivedPatient`,
          thing2: "",
        })
        break;

      case "Unit Left Scene":
        submitValue({
          key1: `dispatchButton`,
          thing1: "Arrived at Patient",
          key2: `unitLeftScene`,
          thing2: "",
        })
        break;

      case "Unit Arrived Destination":
        submitValue({
          key1: `dispatchButton`,
          thing1: "Unit Left Scene",
          key2: `unitArrivedDestination`,
          thing2: "",
        })
        break;

      case "Unit Transferred Care":
        submitValue({
          key1: `dispatchButton`,
          thing1: "Unit Arrived Destination",
          key2: `unitTransferCare`,
          thing2: "",
        })
        break;

      case "Unit In Service":
        submitValue({
          key1: `dispatchButton`,
          thing1: "Unit Transferred Care",
          key2: `unitInService`,
          thing2: "",
        })
        break;

        case "Service Complete":
          submitValue({
            key1: `dispatchButton`,
            thing1: "Unit In Service",
          })
          break;
    }
  }

  return (
    <div>
      <Button onClick={() => setConfirmOpen(true)}> <UndoIcon  fontSize="large">
      </UndoIcon> Undo TimeStamp </Button>

      {/* Undo Timestamp Confirmation Modal */}
      <ConfirmDialog
        title="Undo?"
        open={confirmOpen}
        setOpen={setConfirmOpen}
        onConfirm={undoTimestamp}
      >
        Are you sure you want to undo last timestamp?
      </ConfirmDialog>

      {incidentMirror &&
        <Button onClick={advanceDispatch} color="secondary"
          variant="contained"
          disabled={incidentMirror.dispatchButton === "Service Complete"}
          style={{ marginTop: 10 }}
          className={classes.button}
        >
          {incidentMirror.dispatchButton}
        </Button>
      }
    </div>
  )
}

export default TimestampButton;
