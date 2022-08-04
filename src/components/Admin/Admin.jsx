import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

//Material UI components for styling
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { Container } from "@material-ui/core";
import { Button } from "@material-ui/core";


//changes styling for Material UI components with these classes
const useStyles = makeStyles({
    root: {
        width: '100%',
        marginTop: 130,
    },
    container: {
        maxHeight: 440,
    },
});


function Admin() {
    //declare variable for use of functions
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();

    //initializes fetching of all row information for admin reports table for all reports in database
    //initializing from reports table saga 
    useEffect(() => {
        dispatch({ type: 'FETCH_REPORTS' })
    }, []);

    //grabs reportsTable information from reducer where information is being stored
    const reports = useSelector((store) => store.reportsTable);

    //sets number of rows per page of admin table
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    //when report button clicked - redirects you to patient care report of that selected patient
    function handleClick(row) {
        history.push(`/report/${row.id}`)
    }

    return (
        <Container>
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        {/* header values */}
                        <TableHead>
                            <TableRow>

                                <TableCell>Date</TableCell>
                                <TableCell>Time</TableCell>
                                <TableCell>Patient</TableCell>
                                <TableCell>Responder</TableCell>
                                <TableCell>Report</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* row values */}
                            {reports.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                        {/* date */}
                                        <TableCell>{moment(row.unit_notified).format('DD/MM/YYYY hh:mm:ss')}</TableCell>
                                        {/* time */}
                                        <TableCell>{moment(row.unit_notified).format('hh:mm:ss')}</TableCell>
                                        {/* patient name */}
                                        <TableCell>{row.patient_first_name} {row.patient_last_name}</TableCell>
                                        {/* responder name */}
                                        <TableCell>{row.user_first_name} {row.user_last_name}</TableCell>
                                        {/* report button */}
                                        <TableCell><Button size="small" variant="contained" color="secondary" onClick={() => handleClick(row)}>Report</Button></TableCell>


                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                {/* sets rows/page */}
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={reports.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Container>
    )
} //End Admin

export default Admin;






