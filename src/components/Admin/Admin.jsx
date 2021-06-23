import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { useEffect } from 'react';
// const useStyles = makeStyles({
//     root: {
//         width: '100%',
//     },
//     container: {
//         maxHeight: 440,
//     },
// });

// const columns = [
//     { id: 'date', label: 'Date', minWidth: 170 },
//     { id: 'time', label: 'Time', minWidth: 100 },
//     {
//         id: 'patient',
//         label: 'Patient',
//         minWidth: 170,
//         align: 'right',
//         // format: (value) => value.toLocaleString('en-US'),
//     },
//     {
//         id: 'responder',
//         label: 'Responder',
//         minWidth: 170,
//         align: 'right',
//         // format: (value) => value.toLocaleString('en-US'),
//     },
//     {
//         id: 'report',
//         label: 'Report',
//         minWidth: 170,
//         align: 'right',
//         // format: (value) => value.toFixed(2),
//     },
// ];

// function createData(date, time, patient, responder, ) {
//     const density = population / size;
//     return { name, code, population, size, density };
// }

// const rows = [
//     createData('India', 'IN', 1324171354, 3287263),
//     createData('China', 'CN', 1403500365, 9596961),
//     createData('Italy', 'IT', 60483973, 301340),
//     createData('United States', 'US', 327167434, 9833520),
//     createData('Canada', 'CA', 37602103, 9984670),
//     createData('Australia', 'AU', 25475400, 7692024),
//     createData('Germany', 'DE', 83019200, 357578),
//     createData('Ireland', 'IE', 4857000, 70273),
//     createData('Mexico', 'MX', 126577691, 1972550),
//     createData('Japan', 'JP', 126317000, 377973),
//     createData('France', 'FR', 67022000, 640679),
//     createData('United Kingdom', 'GB', 67545757, 242495),
//     createData('Russia', 'RU', 146793744, 17098246),
//     createData('Nigeria', 'NG', 200962417, 923768),
//     createData('Brazil', 'BR', 210147125, 8515767),
// ];
//rows = [patient.first_name + patient.last_name



function Admin() {

    useEffect(() => {
        dispatch({ type: 'FETCH_REPORTS' })
    }, []);

    const reports = useSelector((store) => store.reports);
    // const classes = useStyles();

    // rows = useSelector(store => store.table);
    // PCRN = (table.incident_id + table.patient_id)

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
        history.push('/savedlist/${row.id}')
    }

    return (
        <>
            <h1>hello</h1>
            <table style="width:50%">
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
                    <tr>
                        <td>Bill Gates</td>
                        <td>55577854</td>
                        <td>55577855</td>
                        <td>55577855</td>
                        <td>55577855</td>
                    </tr>
                </tbody>
                {/* {reports.map((row) =>
    <tr key={row.p.id}>
        <td>{moment(row.i.unit_notified).format('DD/MM/YYYY')}</td>
        <td>{moment(row.i.unit_notified).format('HH:MM:SS')}</td>
        <td>{row.p.first_name} {row.p.last_name}</td>
        <td>{row.u.first_name} {row.u.last_name}</td>
        <td><button onClick={handleClick(row)}>Report</button></td>
    <td></td>
    </tr>
    )} */}

            </table>
            {/* <Paper className={classes.root}>
            <TableContainer className={classes.container}>
               <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                       <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper> */}
        </>
    )
}

export default Admin;






