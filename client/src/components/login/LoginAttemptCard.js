import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


import {
    Card,
    CardContent,
    withStyles
} from "@material-ui/core";

const styles = theme => ({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
    border: {
        border: "3px solid red"
    },
    m2: {
        marginTop: "1em"
    }
});

function LoginAttemptCard(props) {
    const {
        classes,
        rows
    } = props;

    console.log(rows);
    return (
        <Card className={classes.cardWidth}>
            <CardContent>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>IP Address</TableCell>
                            <TableCell align="right">Was Successful</TableCell>
                            <TableCell align="right">Timestamp</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.timestamp}>
                                <TableCell component="th" scope="row">
                                    {row.ip}
                                </TableCell>
                                <TableCell align="right">{row.wassuccess}</TableCell>
                                <TableCell align="right">{row.timestamp}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}

export default withStyles(styles)(LoginAttemptCard);