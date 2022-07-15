import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import useStyles from "./Styles";
//Material UI imports
import { InputLabel, MenuItem, Select, TextField, Container } from "@material-ui/core";
import { useParams } from "react-router-dom";

const IncidentFormDisposition = ({ localIncident, setLocalIncident }) => {
  // grabs dropdowns that are being stored in reducer
  const dropdowns = useSelector((store) => store.dropdowns);
  // declares classes variable to use useStyles library from MUI
  const classes = useStyles();

  // Only handles when a value is changed by keystroke/inputfield clicks.
  // Does NOT handle initialization of new data.
  function submitValue(newParameter) {
    setLocalIncident({
      ...localIncident,
      [newParameter.key]: newParameter.thing,
    });

  }

  // sets id variable to be page's params
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
              {dropdowns["transport_disposition"].map((item) => (
                <MenuItem key={"transport_disposition" + item.id} value={item.id} classes={{ root: classes.menuItem }}>
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
                label="Destination City"
                variant="outlined"
                value={localIncident[`${id}destinationCity`]}
                onChange={(event) =>
                  submitValue({
                    key: `${id}destinationCity`,
                    thing: event.target.value,
                  })
                }
              ></TextField>
              <br />
              <br />
              <TextField
                id="outlined-basic"
                label="Destination Region"
                variant="outlined"
                value={localIncident[`${id}destinationRegion`]}
                onChange={(event) =>
                  submitValue({
                    key: `${id}destinationRegion`,
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

                {dropdowns["transport_method"].map((item) => (
                  <MenuItem key={"transport_method" + item.id} value={item.id} classes={{ root: classes.menuItem }}>
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

                {dropdowns["transport_mode"].map((item) => (
                  <MenuItem key={"transport_mode" + item.id} value={item.id} classes={{ root: classes.menuItem }}>
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

                {dropdowns["destination_facility"].map((item) => (
                  <MenuItem
                    classes={{ root: classes.menuItem }}
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
