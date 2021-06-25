import React from "react";
import { useState } from "react";

import IncidentFormResponse from "./IncidentFormResponse";
import IncidentFormDisposition from "./IncidentFormDisposition";
import IncidentFormScene from "./IncidentFormScene";

import { Accordion, AccordionSummary, Grid, Paper, Typography } from "@material-ui/core";
import { ExpandMoreIcon } from "@material-ui/icons/ExpandMore";

import useStyles from "./Styles";

function IncidentHome() {

    const classes = useStyles();
    const [ expanded, setExpanded ] = useState(false);
    const [ selectedId, setSelectedId ] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
      };

    return(
        <Grid Container justify='center' className={classes.root}>
            <Grid item xs={12} s={6} m={4}>
                <Accordion
                    expanded={expanded === id}
                    key={id}
                    onChange={handleChange(id)}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.header}>"Incident Form"</Typography>
                    </AccordionSummary>
                    <Paper className={classes.paper}>
                    </Paper>
                </Accordion>
            </Grid>
        </Grid>
    );
};

export default IncidentHome;