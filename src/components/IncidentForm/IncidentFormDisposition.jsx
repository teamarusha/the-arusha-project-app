import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

//Material UI imports
import { InputLabel, MenuItem, Select, TextField, Container } from "@material-ui/core";
import { useParams } from "react-router-dom";

const IncidentFormDisposition = ({ localIncident, setLocalIncident }) => {
  const dropdowns = useSelector((store) => store.dropdowns);

  // useEffect(() => {
  //   console.log("UPDATING browser storage", localIncident);
  //   localStorage.setItem("incident", JSON.stringify(localIncident));
  // }, [localIncident]);

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

    // localStorage.setItem(`${newParameter.key}`, JSON.stringify(newParameter.thing));
  }

  const { id } = useParams();

  return (
    <Container>
    <div className="container">
      {dropdowns.go && localIncident && (
        <div>
          <InputLabel id="demo-simple-select-autowidth-label">
            Transportation Disposition
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            fullWidth
            value={localIncident[`${id}transportDisposition`]}
            onChange={(event) =>
              submitValue({
                key: `${id}transportDisposition`,
                thing: event.target.value,
              })
            }
          >
            {/* <MenuItem value={0}>
              <em>None</em>
            </MenuItem> */}
            {dropdowns["transport_disposition"].map((item) => (
              <MenuItem key={"transport_disposition" + item.id} value={item.id}>
                {item["transport_disposition_type"]}
              </MenuItem>
            ))}
          </Select>
        </div>
      )}

      <br />
      <br />

      {localIncident &&
        localIncident[`${id}transportDisposition`] <= 4 &&
        localIncident[`${id}transportDisposition`] !== 0 && (
          <div>
            <TextField
              id="outlined-basic"
              label="Destination State"
              variant="outlined"
              value={localIncident[`${id}destinationState`]}
              onChange={(event) =>
                submitValue({
                  key: `${id}destinationState`,
                  thing: event.target.value,
                })
              }
            ></TextField>
            <br />
            <br />
            <TextField
              id="outlined-basic"
              label="Destination County"
              variant="outlined"
              value={localIncident[`${id}destinationCounty`]}
              onChange={(event) =>
                submitValue({
                  key: `${id}destinationCounty`,
                  thing: event.target.value,
                })
              }
            ></TextField>
            <br />
            <br />
            <TextField
              id="outlined-basic"
              label="Destination Zip Code"
              variant="outlined"
              value={localIncident[`${id}destinationZipCode`]}
              onChange={(event) =>
                submitValue({
                  key: `${id}destinationZipCode`,
                  thing: event.target.value,
                })
              }
            ></TextField>
            <br />
           
          </div>
        )}

      {dropdowns.go &&
        localIncident &&
        localIncident[`${id}transportDisposition`] <= 4 &&
        localIncident[`${id}transportDisposition`] !== 0 && (
          <div>
            <br />
            <br />
            <InputLabel id="demo-simple-select-autowidth-label">
              EMS Transport Method
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              fullWidth
              value={localIncident[`${id}transportMethod`]}
              onChange={(event) =>
                submitValue({
                  key: `${id}transportMethod`,
                  thing: event.target.value,
                })
              }
            >
              {/* <MenuItem value="">
                <em>None</em>
              </MenuItem> */}
              {dropdowns["transport_method"].map((item) => (
                <MenuItem key={"transport_method" + item.id} value={item.id}>
                  {item["transport_method_type"]}
                </MenuItem>
              ))}
            </Select>
            <br />
            <br />
            <br />
            <InputLabel id="demo-simple-select-autowidth-label">
              Transport Mode From Scene
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              fullWidth
              value={localIncident[`${id}transportMode`]}
              onChange={(event) =>
                submitValue({
                  key: `${id}transportMode`,
                  thing: event.target.value,
                })
              }
            >
              {/* <MenuItem value="">
                <em>None</em>
              </MenuItem> */}
              {dropdowns["transport_mode"].map((item) => (
                <MenuItem key={"transport_mode" + item.id} value={item.id}>
                  {item["transport_mode_type"]}
                </MenuItem>
              ))}
            </Select>
            <br />
            <br />
            <br />
            <InputLabel id="demo-simple-select-autowidth-label">
              Type of Destination
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              fullWidth
              value={localIncident[`${id}destinationFacility`]}
              onChange={(event) =>
                submitValue({
                  key: `${id}destinationFacility`,
                  thing: event.target.value,
                })
              }
            >
              {/* <MenuItem value="">
                <em>None</em>
              </MenuItem> */}
              {dropdowns["destination_facility"].map((item) => (
                <MenuItem
                  key={"destination_facility" + item.id}
                  value={item.id}
                >
                  {item["destination_facility_type"]}
                </MenuItem>
              ))}
            </Select>
          </div>
        )}
    </div>
    </Container>
  );
};

export default IncidentFormDisposition;
