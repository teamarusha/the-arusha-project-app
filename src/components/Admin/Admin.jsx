import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Container } from "@material-ui/core";
import { Button } from "@material-ui/core";



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
    const dispatch = useDispatch();
    const history = useHistory();


    useEffect(() => {
        dispatch({ type: 'FETCH_REPORTS' })
    }, []);

    const reports = useSelector((store) => store.reportsTable);
    console.log('reports:', reports)
    const classes = useStyles();

   const rows = useSelector(store => store.table);



    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    function handleClick(row) {
        console.log('in handle click')
        history.push(`/report/${row.id}`)
    }

    return (
        <Container>
            <Paper className={classes.root}>
            <TableContainer className={classes.container}>
               <Table stickyHeader aria-label="sticky table">
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
                        {reports.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                    
                                       
                                    <TableCell>{moment(row.unit_notified).format('DD/MM/YYYY')}</TableCell>
                                    <TableCell>{moment(row.unit_notified).format('HH:MM:SS')}</TableCell>
                                    <TableCell>{row.patient_first_name} {row.patient_last_name}</TableCell>
                                    <TableCell>{row.user_first_name} {row.user_last_name}</TableCell>
                                    <TableCell><Button size="small" variant="contained" color="secondary"onClick={() => handleClick(row)}>Report</Button></TableCell>
  
                                 
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={reports.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
        </Container>
    )
}

export default Admin;






