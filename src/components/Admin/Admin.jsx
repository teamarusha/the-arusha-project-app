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
import { useEffect } from 'react';
import { useHistory } from 'react-router';



// const useStyles = makeStyles({
//     root: {
//         width: '100%',
//     },
//     container: {
//         maxHeight: 440,
//     },
// });




function Admin() {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_REPORTS' })
    }, []);

    const reports = useSelector((store) => store.reports);
    console.log('reports:', reports)
    // const classes = useStyles();

    // rows = useSelector(store => store.table);


    // const classes = useStyles();
    // const [page, setPage] = React.useState(0);
    // const [rowsPerPage, setRowsPerPage] = React.useState(10);

    // const handleChangePage = (event, newPage) => {
    //     setPage(newPage);
    // };

    // const handleChangeRowsPerPage = (event) => {
    //     setRowsPerPage(+event.target.value);
    //     setPage(0);
    // };

    function handleClick(row) {
        // history.push('/reports/${}')
    }

    return (
        // JSON.stringify(reports)
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Patient</th>
                    <th>Responder</th>
                    <th>Report</th>
                </tr>
            </thead>
            <tbody>
                {reports.map((row) =>
                    <tr key={row.id}>

                        <td>{moment(row.unit_notified).format('DD/MM/YYYY')}</td>
                        <td>{moment(row.unit_notified).format('HH:MM:SS')}</td>
                        <td>{row.patient_first_name} {row.patient_last_name}</td>
                        <td>{row.user_first_name} {row.user_last_name}</td>
                        <td><button onClick={handleClick(row)}>Report</button></td>
                    </tr>
                )}
            </tbody>
        </table>
        //     <Paper className={classes.root}>
        //     <TableContainer className={classes.container}>
        //        <Table stickyHeader aria-label="sticky table">
        //             <TableHead>
        //                <TableRow>
        //                   
        //                         <TableCell>Date</TableCell>
        
        //                             
        //                              
        //                   
        //                 </TableRow>
        //             </TableHead>
        //             <TableBody>
        //                 {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
        //                     return (
        //                         <TableRow hover role="checkbox" tabIndex={-1} key={row.}>
        //                             {columns.map((column) => {
        //                                 const value = row[column.id];
        //                                 return (
        //                                     <TableCell key={column.id} align={column.align}>
        //                                         {column.format && typeof value === 'number' ? column.format(value) : value}
        //                                     </TableCell>
        //                                 );
        //                             })}
        //                         </TableRow>
        //                     );
        //                 })}
        //             </TableBody>
        //         </Table>
        //     </TableContainer>
        //     <TablePagination
        //         rowsPerPageOptions={[10, 25, 100]}
        //         component="div"
        //         count={rows.length}
        //         rowsPerPage={rowsPerPage}
        //         page={page}
        //         onChangePage={handleChangePage}
        //         onChangeRowsPerPage={handleChangeRowsPerPage}
        //     />
        // </Paper>

    )
}

export default Admin;






